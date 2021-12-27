      
var options = {
          series: [{
            name: "EndPoints",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 158, 178, 200]
        }],
          chart: {
          height: 300,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },

        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Dec"],
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();


//Matrix Chart


        var options_matrix_cahrt = {
          series: [
          {
            name: 'Workstations',
            data: [
              {
                x: 'Windows 11',
                y: 10
              },
              {
                x: 'windows 10',
                y: 600
              },
              {
                x: 'windows 7',
                y: 41
              }
            ]
          },
          {
            name: 'Moviles',
            data: [
              {
                x: 'Android 10',
                y: 10
              },
              {
                x: 'Android 8',
                y: 60
              },
              {
                x: 'Android 7',
                y: 41
              }
            ]
          },  
          {
            name: 'Servers',
            data: [
              {
                x: 'Win 2012',
                y: 10
              },
              {
                x: 'win 2016',
                y: 20
              },
              {
                x: 'win 2019',
                y: 51
              }
            ]
          }
        ],
          legend: {
          show: false
        },
        chart: {
          height: 300,
          type: 'treemap'
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options_matrix_cahrt);
        chart.render();


//donut chart
      
        var options = {
          series: [44, 55, 13, 43, 22],
          chart: {
          width: 380,
          type: 'donut',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart3"), options);
        chart.render();
      