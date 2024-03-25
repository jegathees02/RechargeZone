import  { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import GridLoader from "react-spinners/GridLoader";
import UserService from '../../Services/UserService';

// eslint-disable-next-line react/prop-types
const HomePageBarChart = () => {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay of 2 seconds
    const getTotalAmountData = async() => {
      const response = await UserService.getTotalAmountSpend(localStorage.getItem('token'), JSON.parse(localStorage.getItem('userData')).id);
      console.log(response);
      setChartData({ ...chartData, series: [{ data: response }] });
      console.log(chartData.series.data);
    }
    getTotalAmountData();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);
  // console.log(datas);
  const [chartData,setChartData] = useState({
    series: [{
      name: 'Inflation',
      data: [1,0,0,0,0,0,0,0,0,0,0,0],
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        // color: '#01c293',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: [ '#01c293']
        }
      },
      colors : '#01c293',
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#01c293',
              colorTo: '#01e293',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: 'Yearly spent on mobile recharges',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#01c293'
        }
      }
    }
  });
  if(loading) {
    return(
      <div className='m-auto items-center justify-center flex '>
        <GridLoader color="#01c293" />
      </div>
    )
  }

  return (
    
    <div>
      <div id="chart">
        <ReactApexChart  options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );

};


HomePageBarChart.protoTypes = {
  datas : PropTypes.array.isRequired,
}

export default HomePageBarChart;
