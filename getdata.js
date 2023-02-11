var url =  new URL("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=28KXU97LSIXHS74Y");


var myChart = new Chart(document.getElementById("myChart"),{
  type: "line",
  data: 0,
  options:{}})

var dateVal = [];
var openVal = [];
var SPYopenval = [];


function getSPYData(){
  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=28KXU97LSIXHS74Y")
  .then(
    function (response){
      return response.json();

    }
  )
  .then (function (data) {
    console.log(data)
    for (var key in data['Time Series (Daily)']){
      SPYopenval.push(parseFloat(data['Time Series (Daily)'][key]['1. open']));
      
    }
  })


}

function getData(symbolVal) {
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbolVal + '&apikey=28KXU97LSIXHS74Y')
    .then(
      function (response){
        return response.json();
      }
    )
    .then( function (data) {
      console.log(data)
         for (var key in data['Time Series (Daily)']){
          dateVal.push(key);
          openVal.push(parseFloat(data['Time Series (Daily)'][key]['1. open']));
   }

   //create graph
   const labels = dateVal;
   const dataval2 = {
     label: "Your stock",
     labels: labels,
     datasets: [{
       label: 'My First dataset',
       backgroundColor: 'rgb(255, 99, 132)',
       borderColor: 'rgb(255, 99, 132)',
       data: openVal,
     },
    {
      labels: labels,
      label: "$SPY",
      data: SPYopenval,
      borderColor: 'rgb(0,0,255)',
      backgroundColor: 'rgb(0,0,255)',
    }
    
    ]
   };

   //load config
   const config = {
    type: 'line',
    data: dataval2,
    options: {}
  };
  console.log(document.getElementById("myChart"));
  console.log("Line Break")



     myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    })

}



var button = document.getElementById('button1');

function buttonclicksearch(){



var new_ctx = replaceCanvas(document.getElementById('myChart'));
getData(newWord, new_ctx)
}

document.getElementById("button1").addEventListener("click", function(){


  myChart.destroy();
  newWord = (document.getElementById("searchbar").value);
  getData(newWord);
  getSPYData();


//   const context = document.getElementById("myChart").getContext('2d');

// context.clearRect(0, 0, canvas.width, canvas.height);




// function replaceCanvas(elem) {
    
//   var canvas = document.createElement('canvas'),
//       newContext = canvas.getContext('2d');
//   // Insert the new canvas after the old one
//   elem.parentNode.insertBefore(canvas, elem.nextSibling);
//   // Remove old canvas. Now the new canvas has its position.
//   elem.parentNode.removeChild(elem);
//   return newContext;
// }
// var new_ctx = replaceCanvas(document.getElementById('myChart'));
// console.log("hahaha")
// console.log(new_ctx)
//     //If it isn't "undefined" and it isn't "null", then it exists.
//     if(new_ctx != 'undefined' && new_ctx != null){
//       console.log("bnanaananna")}




})





 
