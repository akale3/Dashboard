class BarChart extends ChartObserver {

    constructor (type,labelsArray, datasetJsonArray) {
        super();
        this._type = type;
        this._labelsArray=labelsArray;
        this._datasetJsonArray=datasetJsonArray;
    }

    // generateChart creates bra chart.
    generateChart(){
        var ctx = document.getElementById("barChart");
        var barChart = new Chart(ctx, {
            type: this._type,
            data: {
                labels: this._labelsArray,
                datasets:this._datasetJsonArray
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

        return barChart;
    }
}