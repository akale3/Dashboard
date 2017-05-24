class DataSetFactory {
    constructor () {

    }

    getDataSet(DataSetName){
    	if (DataSetName == 'smoker'){
        	return new SmokerDataSet();
        }
        if (DataSetName == 'birth rate'){
        	return new BirthDataSet();
        }
        if (DataSetName == 'cancer death'){
        	return new CancerDataSet();
        }
        if (DataSetName == 'medical insurance'){
        	return new InsuranceDataSet();
        }
        if (DataSetName == 'mortality'){
        	return new MortalityDataSet();
        }
    }
}