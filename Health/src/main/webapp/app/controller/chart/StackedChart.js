class StackedChart extends ChartObserver {

    constructor (type,labelsArray, datasetJsonArray) {
        super();
        this._type = type;
        this._labelsArray=labelsArray;
        this._datasetJsonArray=datasetJsonArray;
    }

    // generateChart creates stackedChart chart.
     generateChart(){
        var ctx = document.getElementById("stackedChart");
        var stackedChart = new Chart(ctx, {
            type: this._type,
            data: {
              labels: this._labelsArray,
              datasets: this._datasetJsonArray
            },
               options: {
                         scales: {
                            yAxes: [{
                             stacked: true
                                    }]
                                }
                         }
        });
        return stackedChart;
    }
}