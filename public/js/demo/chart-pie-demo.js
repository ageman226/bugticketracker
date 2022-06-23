// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Data Fetch
dataCount = []
chartLabel = []
async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET'
  })
  return response.json()
}
getData("http://localhost:3000/api/pie")
  .then(data => {
    console.log(data)
    data.forEach(element => {
      dataCount.push(element.count);
      chartLabel.push(element.priority_name)
    });
  })
  .then(cases => {
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: chartLabel,
        datasets: [{
          data: dataCount,
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
          hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
          // '#36b9cc''#2c9faf'
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });

  });
console.log(dataCount)
console.log(chartLabel)

// Pie Chart Example