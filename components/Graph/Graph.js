import  dynamic  from 'next/dynamic';
const Chart = dynamic (() => import ("react-apexcharts"), {ssr: false});

const Graph = ({ data, type, id, field, title }) => {
    const options = {
        chart: {
            id,
            toolbar: {
                show: false
            },
        
        },
        xaxis: {
            categories: data && data.length > 0 ? data.map(value=> value.entryDate) : []
        },
        stroke: {
            curve: 'smooth'
          },
        title: {
            text: title,
            align: 'left'
        },
        
        markers: {
            size: 1
          },
    }

    const series = [
        {
            name: 'Date Reported',
            data: data && data.length > 0 ? data.map(value => value[field] ) : []
        }
    ]
    
    return (
        <div className='chart-block'>
            <Chart
                width={'100%'}
                height={'300px'} 
                options={options} 
                series={series} 
                type={type} />
        </div>
    )
}

Graph.defaultProps = {
    data: [],
    type: 'line',
    id: 'chart' + new Date().getUTCMilliseconds(),
    field: '',
}

export default Graph;