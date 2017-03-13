'use strict'

function createLineChart(){

    var data = new Data();
    data.label = '2015';
    data.data = [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10];
    data.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var lineChart = new LineChart('line',data);

    var ctx = document.getElementById("lineChart");
    var lineChart1 = new Chart(ctx, {
        type: lineChart.type,
        data: {
          labels: lineChart.data.labels,
          datasets: [{
            label: lineChart.data.label,
            data: lineChart.data.data
          }]
        }
    });
}

function createBarChart(){
var ctx1 = document.getElementById("barChart");
    var myChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function createPieChart(){
var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var ctx = document.getElementById("pieChart");
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
});
}

function createDoughnutChart(){
var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var ctx = document.getElementById("doughnutChart");

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
});
}

function createStackedChart(){
var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
var ctx = document.getElementById("stackedChart");
var stackedLine = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});
}

function selectChart(){
    createChart("lineChkBox", "lineChartDiv", createLineChart);
    createChart("barChkBox", "barChartDiv", createBarChart);
    createChart("pieChkBox", "pieChartDiv", createPieChart);
    createChart("doughnutChkBox", "doughnutChartDiv", createDoughnutChart);
    createChart("stackedChkBox", "stackedChartDiv", createStackedChart);
}

function createChart(checkBoxName, chartDivName, viewChart){
    if(document.getElementById(checkBoxName).checked){
        viewChart();
        document.getElementById(chartDivName).style.display = 'block';
    }else{
        document.getElementById(chartDivName).style.display = 'none';
    }
}