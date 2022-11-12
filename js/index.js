

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
    if(typeof(document.querySelector) == 'function') {
        document.querySelector('.goog-logo-link').setAttribute('style', 'display: none');
        document.querySelector('.goog-te-gadget').setAttribute('style', 'font-size: 0');
    }
}


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
       '#FFA500'
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