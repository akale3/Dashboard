class DoughnutChart extends ChartObserver {

    constructor (type,labelsArray, datasetJsonArray) {
        super();
        this._type = type;
        this._labelsArray=labelsArray;
        this._datasetJsonArray=datasetJsonArray;
    }

    // generateChart creates doughnutChart chart.
     generateChart(){
        var ctx = document.getElementById("doughnutChart");
        var doughnutChart = new Chart(ctx, {
            type: this._type,
            data: {
              labels: this._labelsArray,
              datasets: this._datasetJsonArray
            },
            
        });
        return doughnutChart;
    }
}