import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Badge from '../Badge/Badge';

const Summary = ({currentActiveCase, previousActiveCase}) => {
    const activeDiff = parseInt(currentActiveCase.active_cases_change);
    const casesDiff = parseInt(currentActiveCase.cumulative_cases) - parseInt(previousActiveCase.cumulative_cases);
    const recoverdDiff = parseInt(currentActiveCase.cumulative_recovered) - parseInt(previousActiveCase.cumulative_recovered);
    const mortalityDiff = parseInt(currentActiveCase.cumulative_deaths) - parseInt(previousActiveCase.cumulative_deaths);

    const activeColor = parseInt(currentActiveCase.active_cases) > parseInt(previousActiveCase.active_cases) ? 'danger' : 'success';
    const casesColor = parseInt(currentActiveCase.cumulative_cases) > parseInt(previousActiveCase.cumulative_cases) ? 'danger' : 'success';
    const recoveredColor = parseInt(currentActiveCase.cumulative_cases) > parseInt(previousActiveCase.cumulative_recovered) ? 'success' : 'danger';
    const mortalityColor = parseInt(currentActiveCase.cumulative_deaths) > parseInt(previousActiveCase.cumulative_deaths) ? 'danger' : 'success';

    if (!currentActiveCase || (currentActiveCase && currentActiveCase.length > 0)) {
        return null;
    }
    return (
        <div className='covid-summary-block'>
          <Card
            fullWidth={true}
            title='Active Cases' 
            badgeComponent={
                <Badge value={(activeColor === 'success' ? '' : '+') + activeDiff.toLocaleString()} color={activeColor} />
            }>
              <h1>{parseInt(currentActiveCase.active_cases).toLocaleString()}</h1>
          </Card>
          <Card 
            fullWidth={true}
            title='Total Cases'  
            badgeComponent={<Badge value={(casesColor === 'success' ? '' : '+') + casesDiff.toLocaleString()} color={casesColor}/>}>
              <h1>{parseInt(currentActiveCase.cumulative_cases).toLocaleString()}</h1>
          </Card>
          <Card 
            fullWidth={true}
            title='Total Recovered'  
            badgeComponent={<Badge value={(recoverdDiff === 'success' ? '' : '+') + recoverdDiff.toLocaleString()} color={recoveredColor}/>}>
              <h1>{parseInt(currentActiveCase.cumulative_recovered).toLocaleString()}</h1>
          </Card>
          <Card 
            fullWidth={true}
            title='Total Deaths'  
            badgeComponent={<Badge  value={(mortalityColor === 'success' ? '' : '+') + mortalityDiff.toLocaleString()} color={mortalityColor} />}>
              <h1>{parseInt(currentActiveCase.cumulative_deaths).toLocaleString()}</h1>
          </Card>
        </div>
    )
}

Summary.defaultProps = {
    currentActiveCase: [],
    previousActiveCase: []
}

Summary.propTypes = {
    currentActiveCase: PropTypes.object,
    previousActiveCase: PropTypes.object
}

export default Summary;