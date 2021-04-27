import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ActiveCaseService } from '../services/active-cases';
import { CaseService } from '../services/cases';
import { RecoveredCaseService } from '../services/recovered-cases';
import { MortalityCaseService } from '../services/mortality-cases';
import SeoHead from '../components/Head/Head';
import moment from 'moment';
import Card from '../components/Card/Card';
import Graph from '../components/Graph/Graph';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';
import Table from '../components/Table/Table';
import TableHead from '../components/Table/TableHead';
import TableRow from '../components/Table/TableRow';
import TableCell from '../components/Table/TableCell'
import TableBody from '../components/Table/TableBody';
import Navbar  from '../components/Navbar/Navbar';
import Loader from '../components/Loader/Loader';
import { Constants } from '../constants';

const App = () => {
  const router = useRouter();
  
  const [ province, setProvince ] = useState('');
  const [ from ] = useState(moment(new Date()).subtract('6', 'days').format('YYYY-MM-DD'));
  const [ to ] = useState(moment(new Date()).subtract('1', 'days').format('YYYY-MM-DD'));
  const [ activeCasesData, setActiveCasesData ] = useState([]);
  const [ casesData, setCasesData ] = useState([]);
  const [ recoveredCasesData, setRecoveredData ] = useState([]);
  const [ mortalityCasesData, setMortalityData ] = useState([]);
  const [ sidebarIsOpen, setSidebarIsOpen ] = useState(false);
  const [ provCases, setProvCases ] = useState([])
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    let slug = '';
    if (router.asPath === '/') {
      setProvince('Canada');
      slug = 'Canada'
    } else {
      const fragments = router.asPath.split('/');
      const province = Constants.provinces.find(g => g.short === fragments[1]);
      setProvince(province.long)
      slug = province.slug;
    }

    setLoading(true);

    Promise.all([
      ActiveCaseService.get(slug, from, to), 
      ActiveCaseService.fetchAllProvinces(to), 
      CaseService.get(slug, from, to), 
      RecoveredCaseService.get(slug, from, to), 
      MortalityCaseService.get(slug, from, to)])
    .then(response => {
      setActiveCasesData(response[0].results)
      setProvCases(response[1].results)
      setCasesData(response[2].results)
      setRecoveredData(response[3].results)
      setMortalityData(response[4].results)
      setLoading(false)
    })
    .catch(err =>{ 
      setLoading(false)
    })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  
  const toggleNavbar = (isOpen) => {
    setSidebarIsOpen(isOpen)
  }
  return (
    <div className='covid-tracker-container'>
      <SeoHead province={province}/>
      <Header toggle={toggleNavbar} isLoading={loading}/>
      {
        loading ? <div className='text-center'><Loader /></div> : 
        <div>
            <Navbar isOpen={sidebarIsOpen} cases={provCases} close={toggleNavbar}/>
      {
        activeCasesData && activeCasesData.length > 0 ?
        <Summary
          currentActiveCase={activeCasesData && activeCasesData.length > 0 ? activeCasesData[activeCasesData.length - 1] : []}
          previousActiveCase={activeCasesData && activeCasesData.length > 0 ? activeCasesData[activeCasesData.length - 2] : []}
        />
        : null
      }
      <div className="info-block">
      
      {
          casesData && casesData.length > 0 ? 
          <Card fullWidth={true}>
            <Graph 
              title='Daily Case Changes'
              type='line'
              data={casesData}
              field='cases'/>
          </Card>
          : null
        }
        
      </div>

      <div className="info-block">
        {
          activeCasesData && activeCasesData.length > 0 ?  
            <Card fullWidth={true}>
              <Graph 
                title='Active Cases Change'
                type='line'
                data={activeCasesData}
                field='active_cases_change'
                />
            </Card>
            : null
          }

          {
            recoveredCasesData && recoveredCasesData.length > 0 ? 
            <Card fullWidth={true}>
              <Graph 
                title='Daily Recovered Changes'
                type='line'
                data={recoveredCasesData}
                field='recovered'/>
            </Card>
            : null
          }

          {
            mortalityCasesData && mortalityCasesData.length > 0 ? 
            <Card fullWidth={true}>
              <Graph 
                title='Daily Mortality Changes'
                type='line'
                data={mortalityCasesData}
                field='deaths'/>
            </Card>
            : null
          }
        </div>
        {
          activeCasesData && activeCasesData.length > 0 ?
        
        <div className="data-block">
          <Card title={province + ' Overview Table'}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Province</TableCell>
                  <TableCell>Date Reported</TableCell>
                  <TableCell>Total Cases</TableCell>
                  <TableCell>Total Recovered</TableCell>
                  <TableCell>Total Mortality</TableCell>
                  <TableCell>Active Cases</TableCell>
                  <TableCell>Active Change Cases</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
                
                activeCasesData.map((data, index) => {
                  return (
                    <TableRow key={'active-case-'+index}>
                      <TableCell>{data.province}</TableCell>
                      <TableCell>{data.entryDate}</TableCell>
                      <TableCell>{data.cumulative_cases.toLocaleString()}</TableCell>
                      <TableCell>{data.cumulative_recovered.toLocaleString()}</TableCell>
                      <TableCell>{data.cumulative_deaths.toLocaleString()}</TableCell>
                      <TableCell>{data.active_cases.toLocaleString()}</TableCell>
                      <TableCell>{data.active_cases_change.toLocaleString()}</TableCell>
                    </TableRow>
                  )
                })
              }
              </TableBody>
            </Table>
          </Card>   
        </div> : null
        } 
        </div>
      }
     
    </div>
  );
}

export default App;
