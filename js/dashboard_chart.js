
const data = {
    datasets: [{
        data: [50, 50],
        backgroundColor: [
        '#fff',
        '#6870fa'
        ]
    }]
    };

const data1 = {
   
datasets: [{
    data: [95, 5],
    backgroundColor: [
    '#fff',
    '#FF0000'
    ]
}]
};

const data2 = {
   
   datasets: [{
       data: [20, 80],
       backgroundColor: [
       '#fff',
       '#50C878'
       ]
   }]
   };
   
   const data3 = {
   
   datasets: [{
       data: [88, 12],
       backgroundColor: [
       '#fff',
       '#333'
       ]
   }]
   };          
   
   
var report1 = new Chart(document.getElementById("transaction").getContext("2d"),
{
type: 'pie',
data: data,
options: {
    responsive: true
}
}); 

var report2 = new Chart(document.getElementById("report").getContext("2d"),
{
type: 'pie',
data: data1,
options: {
    responsive: true
}
}); 

var report3 = new Chart(document.getElementById("momement").getContext("2d"),
{
type: 'pie',
data: data2,
options: {
    responsive: true
}
}); 

var report4 = new Chart(document.getElementById("live").getContext("2d"),
{
type: 'pie',
data: data3,
options: {
    responsive: true
}
});


const labels =['jan','feb','march','apr','may','jun','july']
const profile_data = {
  labels: labels,
  datasets: [{
    label: 'Post',
    data: [15, 59, 80, 81, 56, 55, 60],
    fill: false,    
    borderColor: '#50C878',
    tension: 0.1
  },
  {
    label: 'Transaction',
    data: [10, 20, 25, 20, 15, 30, 40],
    fill: false,    
    borderColor: '#6870fa',
    tension: 0.1
  }
    ]}

var profile_line_chart = new Chart(document.getElementById("profile-line").getContext("2d"),
{
type: 'line',
data: profile_data,
options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Activities'
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14,
                    color:'#fff'
                }
            }
        }
      },
      scales: {
        x:{
            ticks: {
                color: "#fff", // not 'fontColor:' anymore
                // fontSize: 18,
                font: {
                  size: 14, // 'size' now within object 'font {}'
                }
              }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: "#fff", // not 'fontColor:' anymore
            // fontSize: 18,
            font: {
              size: 14, // 'size' now within object 'font {}'
            },
            beginAtZero: true
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: "#fff", // not 'fontColor:' anymore
            // fontSize: 18,
            font: {
              size: 14, // 'size' now within object 'font {}'
            }
          },
  
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
}
});

