src="http://www.gstatic.com/charts/loader.js"

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Eat', 2],
  ['TV', 4],
  ['Gym', 2],
  ['Sleep', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}




function createChart(chartName,xValues,yValues){

new Chart(chartName, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      // yAxes: [{ticks: {min: 0, max:400},}],
    }
  }
});
}


function createTable(country) {
  // document.getElementById(country).innerHTML = country;
  // document.getElementById(country).innerHTML += country;
  // {% assign currency_iso = site.data.currency_iso | group_by:"COUNTRY" %}

  //{% for country_iso in currency_iso %}
  //  document.getElementById(country).innerHTML += {{ country_iso.name }};
  //{% endfor %}
}


function createTable2(country,input_text) {
  // document.getElementById(country.name).innerHTML += "table 2";
  // document.getElementById(country.name).innerHTML += country.name;
  document.getElementById(country.name).innerHTML = input_text;
  // {% assign currency_iso = site.data.currency_iso | group_by:"COUNTRY" %}

  //{% for country_iso in currency_iso %}
  //  document.getElementById(country).innerHTML += {{ country_iso.name }};
  //{% endfor %}
}
