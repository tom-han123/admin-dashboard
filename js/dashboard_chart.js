
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
       data: [12, 88],
       backgroundColor: [
       '#fff',
       '#50C878'
       ]
   }]
   };          
   
   
var chart1 = new Chart(document.getElementById("transaction").getContext("2d"),
{
type: 'pie',
data: data,
options: {
    responsive: true
}
}); 

var chart2 = new Chart(document.getElementById("report").getContext("2d"),
{
type: 'pie',
data: data1,
options: {
    responsive: true
}
}); 

var chart3 = new Chart(document.getElementById("momement").getContext("2d"),
{
type: 'pie',
data: data2,
options: {
    responsive: true
}
}); 

var chart4 = new Chart(document.getElementById("active").getContext("2d"),
{
type: 'pie',
data: data3,
options: {
    responsive: true
}
});


// const labels =['jan','feb','march','apr','may','jun','july']
// const profile_data = {
//   labels: labels,
//   datasets: [{
//     label: 'Post',
//     data: [15, 59, 80, 81, 56, 55, 60],
//     fill: false,    
//     borderColor: '#50C878',
//     tension: 0.1
//   },
//   {
//     label: 'Transaction',
//     data: [10, 20, 25, 20, 15, 30, 40],
//     fill: false,    
//     borderColor: '#6870fa',
//     tension: 0.1
//   }
//     ]}

// var profile_line_chart = new Chart(document.getElementById("profile-line").getContext("2d"),
// {
// type: 'line',
// data: profile_data,
// options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     interaction: {
//         mode: 'index',
//         intersect: false,
//       },
//       stacked: false,
//       plugins: {
//         title: {
//           display: true,
//           text: 'Activities'
//         },
//         legend: {
//             labels: {
//                 // This more specific font property overrides the global property
//                 font: {
//                     size: 14,
//                     color:'#fff'
//                 }
//             }
//         }
//       },
//       scales: {
//         x:{
//             ticks: {
//                 color: "#fff", // not 'fontColor:' anymore
//                 // fontSize: 18,
//                 font: {
//                   size: 14, // 'size' now within object 'font {}'
//                 }
//               }
//         },
//         y: {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           ticks: {
//             color: "#fff", // not 'fontColor:' anymore
//             // fontSize: 18,
//             font: {
//               size: 14, // 'size' now within object 'font {}'
//             },
//             beginAtZero: true
//           }
//         },
//         y1: {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           ticks: {
//             color: "#fff", // not 'fontColor:' anymore
//             // fontSize: 18,
//             font: {
//               size: 14, // 'size' now within object 'font {}'
//             }
//           },
  
//           // grid line settings
//           grid: {
//             drawOnChartArea: false, // only want the grid lines for one axis to show up
//           },
//         },
//       }
// }
// });




const tranlabel =['Jan','Feb','March','Apr','May','Jun','July','Sep', 'Oct']
const tran_data = {
  labels: tranlabel,
  datasets: [{
    label: 'Transaction',
    data: [65, 59, 80, 81, 56, 55, 40,75,88],
    backgroundColor: [
      '#6870fa'
    ],
    borderColor: [
      '#6870fa'
    ],
    borderWidth: 1
  }]
}

var  transaction_bar_chart = new Chart(document.getElementById("tran_chart").getContext("2d"), {
  type: 'bar',
  data: tran_data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
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
         }
        }
      }

});


const reportlabel =['Jan','Feb','March','Apr','May','Jun','July','Sep', 'Oct']
const report_data = {
  labels: reportlabel,
  datasets: [{
    label: 'Report',
    data: [50, 45, 50, 40, 30, 20, 10, 15, 20],
    backgroundColor: [
      'rgba(255,0,0,0.8)'
    ],
    borderColor: [
      'rgba(255,0,0,0.5)'
    ],
    borderWidth: 1
  }]
}

var  report_bar_chart = new Chart(document.getElementById("report_chart").getContext("2d"), {
  type: 'bar',
  data: report_data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
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
         }
        }
      }
});


const momementlabel =['Sun', 'Mon','Tue','Web','Thu','Fri','Sat']
const momement_data = {
  labels: momementlabel,
  datasets: [{
    label: 'Post',
    data: [50000, 40000, 12000, 30000, 45000, 70000, 98000],
    backgroundColor: [
      '#50C878'
    ],
    borderColor: [
      '#50C878'
    ],
    borderWidth: 1
  }]
}

var  momement_bar_chart = new Chart(document.getElementById("momement_chart").getContext("2d"), {
  type: 'bar',
  data: momement_data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
    plugins: {
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
         }
        }
      }
});



const d= []
  for(let i=0;i<10;i++){
      d.push(Math.floor(Math.random()*100))
  }
const user_live_label =['Jan','Feb','Mar','Apr','May','Jun','July','Aug', 'Sep', 'Oct']
const live_data = {
  labels: user_live_label,
  datasets: [{
      label: 'Sensitive Words',
      data: d,
      fill: false,    
      borderColor: '#50C878',
      tension: 0.1
  }
  ]}

var live_line_chart = new Chart(document.getElementById("live-line").getContext("2d"),
  {
  type: 'line',
  data: live_data,
  options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
          mode: 'index',
          intersect: false,
      },
      stacked: false,
      plugins: {
          
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
      }
  }
});




function show(aa){
  if(aa === 'transaction'){
    document.querySelector('#tran-chart-part').style = 'display:block';
    document.querySelector('#report-chart-part').style = 'display:none';
    document.querySelector('#momement-chart-part').style= 'display:none';
    document.querySelector('.map-img').style.display = 'none';
    document.querySelector('.user-live').style.display = "none";
  }else if(aa === 'report'){
    document.querySelector('#report-chart-part').style = 'display:block';
    document.querySelector('#tran-chart-part').style = 'display:none';
    document.querySelector('#momement-chart-part').style = 'display:none';
    document.querySelector('.map-img').style.display = 'none';
    document.querySelector('.user-live').style.display = "none";
  }else if(aa === 'post'){
    document.querySelector('#momement-chart-part').style = 'display:block';
    document.querySelector('#tran-chart-part').style = 'display:none';
    document.querySelector('#report-chart-part').style = 'display:none';
    document.querySelector('.map-img').style.display = 'none';
    document.querySelector('.user-live').style.display = "none";
  }
}

var click_live = false;

function live(){

  var live_count = Math.floor(Math.random()*500)
  var sen_count = Math.floor(Math.random()*10)
  var view_count = Math.floor(Math.random()*300000)
  
  if(click_live){
    window.live_line_chart.destroy();
  }

  click_live = true;
  range = sen_count *10
 
  document.querySelector('.map-img').style.display = "none";
  document.querySelector('.user-live').style.display = "grid";
  document.querySelector('#tran-chart-part').style.display = 'none';
  document.querySelector('#report-chart-part').style.display = 'none';
  document.querySelector('#momement-chart-part').style.display = 'none';
  
  document.querySelector('#live-count').innerHTML = live_count;
  document.querySelector('#sensitive-count').innerHTML = sen_count+"%";
  document.querySelector('#view-count').innerHTML = view_count;

  let e= []
  for(let i=0;i<10;i++){
      e.push(Math.floor(Math.random()*range))
  }
 
  var live_data = {
    labels:user_live_label,
    datasets: [{
        label: 'Sensitive Words',
        data: e,
        fill: false,    
        borderColor: '#50C878',
        tension: 0.1
    }
    ]}

  live_line_chart = new Chart(document.getElementById("live-line").getContext("2d"),
    {
    type: 'line',
    data: live_data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            
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
        }
    }
  });


  

  fetch('https://randomuser.me/api/').then((data)=>{
      return data.json();
  }).then((completedata)=>{
      var pic, n, age, phone, addr;
      completedata.results.forEach(element => {
          n = element['name']['title']+' '+element['name']['first']+' '+element['name']['last'];
      });
      let datalist=`<p class="small-text light">Sensititve words in ${n}'s Live.</p>`;
      document.querySelector('.label-txt').innerHTML =datalist;
      
  }).catch((err)=>{
      console.log(err);
  });

}