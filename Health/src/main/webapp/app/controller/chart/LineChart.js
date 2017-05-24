class LineChart extends ChartObserver {

    constructor (type,labelsArray, datasetJsonArray) {
        super();
        this._type = type;
        this._labelsArray=labelsArray;
        this._datasetJsonArray=datasetJsonArray;
    }

    // generateChart creates lineChart chart.
    generateChart(){
        var ctx = document.getElementById("lineChart");
        var lineChart = new Chart(ctx, {
            type: this._type,
            data: {
                labels: this._labelsArray,
                datasets: this._datasetJsonArray
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
        return lineChart;
    }
}