/**
 * 
 */

function getCancerData(){
	//getCancerTable();
	var years = ['1994','1995','1996','1997','1998','1999'];
	var gender = ['female', 'male'];
	getCancerQuery('All', gender, years);
}

function getCancerTable() {
	var DataFrame = dfjs.DataFrame;
	var data;
	DataFrame.fromCSV('./DownloadableContent/CancerRate.csv').then(
			 df => {
			     data = df.toArray();
			     console.log(data);
			 }
			).catch(err => {
			 console.log(err);
			}); 
}

function getCancerQuery(cancerType, gender, years) {
	//alert('getCancerQuery called');
	var DataFrame = dfjs.DataFrame;
	DataFrame.fromCSV('./DownloadableContent/CancerRate.csv').then(
	 df => {
 
	     DataFrame.sql.registerTable(df, 'cancerTable');
	     var query = 'SELECT * FROM cancerTable WHERE CancerType=' + cancerType;
	     
	     
	     if (gender != null && gender.length == 1){
	    	 query = query + " AND Gender=" + gender[0];
	     }
	     
	     if (years != null && years.length != 0){
	    	 var yearStr = null;
	    	 for (var i=0; i<years.length ; i++){
	    		 if (yearStr != null){
	    			 yearStr = yearStr + ",";
	    		 }else{
	    			 yearStr = '(';
	    		 }
	    		 yearStr = yearStr + years[i];
	    	 }
	    	 yearStr = yearStr + ')';
	    	 query = query + " AND Year IN " + yearStr;  
	     }else{
	    	 years = df.distinct('Year').toArray();
	    	 alert (years.length);
	     }

	     console.log(query);
	     var dataRows = DataFrame.sql.request(query).toArray();
	     console.log(dataRows.length);
	    
	     var maleData = new Data();
	     maleData.label = 'Male';
	     maleData.data = [];
	     var femaleData = new Data();
	     femaleData.label = 'Female';
	     femaleData.data = [];
	     
	     for (var i=0; i<dataRows.length; i++){
	    	 console.log(dataRows[i]);
	    	 if (dataRows[i][1] == 'male'){
	    		 maleData.data.push(dataRows[i][3]);
	    	 }else{
	    		 femaleData.data.push(dataRows[i][3]);
	    	 }
	     }
	     
	     console.log(maleData.data);
	     console.log(femaleData.data);
	     
/*	     var ctx = document.getElementById("barChart");
	     
	     
	     var lineChart1 = new Chart(ctx, {
	         type: 'barChart',
	         data: {
	           labels: years,
	           datasets: [{
	             label: maleData.label,
	             data: maleData.data
	           },{
		             label: femaleData.label,
		             data: femaleData.data
		           }
	           ]
	         }
	     });*/
	     
	     
	     var malecolor = []
	     var malebordercolor = []
	     var femalecolor = []
	     var femalebordercolor = []
	     
	     
	     for (var i=0; i<years.length; i++){
	    	 malecolor.push('rgba(255, 99, 132, 0.2)');
	    	 malebordercolor.push('rgba(255,99,132,1)');
	    	 femalecolor.push('rgba(54, 162, 235, 0.2)');
	    	 femalebordercolor.push('rgba(54, 162, 235, 1)');
	     }
	     
	     var ctx1 = document.getElementById("barChart");
	     var myChart = new Chart(ctx1, {
	         type: 'bar',
	         data: {
	             labels: years,
	             datasets: [{
	                 label: maleData.label,
	                 data: maleData.data,
	                 backgroundColor: malecolor,
	                 borderColor: malebordercolor,
	                 borderWidth: 1
	             }, {
	                 label: femaleData.label,
	                 data: femaleData.data,
	                 backgroundColor: femalecolor,
	                 borderColor: femalebordercolor,
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
	     
	     
	     
	     

	     var ctx = document.getElementById("lineChart");
	     var lineChart1 = new Chart(ctx, {
	         type: 'line',
	         data: {
	             labels: years,
	             datasets: [{
	                 label: maleData.label,
	                 data: maleData.data,
	                 backgroundColor: malecolor,
	                 borderColor: malebordercolor,
	                 borderWidth: 1
	             }, {
	                 label: femaleData.label,
	                 data: femaleData.data,
	                 backgroundColor: femalecolor,
	                 borderColor: femalebordercolor,
	                 borderWidth: 1
	             }]
	         },
	     });
	     
	     
	     
	     
	     var ctx = document.getElementById("pieChart");
	     var myPieChart = new Chart(ctx,{
	         type: 'pie',
	         data: {
	             labels: years,
	             datasets: [{
	                 label: maleData.label,
	                 data: maleData.data,
	                 backgroundColor: malecolor,
	                 borderColor: malebordercolor,
	                 borderWidth: 1
	             }, {
	                 label: femaleData.label,
	                 data: femaleData.data,
	                 backgroundColor: femalecolor,
	                 borderColor: femalebordercolor,
	                 borderWidth: 1
	             }]
	         },
	     });
	     
	     
	     var ctx = document.getElementById("doughnutChart");

	     var myDoughnutChart = new Chart(ctx, {
	         type: 'doughnut',
	         data: {
	             labels: years,
	             datasets: [{
	                 label: maleData.label,
	                 data: maleData.data,
	                 backgroundColor: malecolor,
	                 borderColor: malebordercolor,
	                 borderWidth: 1
	             }, {
	                 label: femaleData.label,
	                 data: femaleData.data,
	                 backgroundColor: femalecolor,
	                 borderColor: femalebordercolor,
	                 borderWidth: 1
	             }]
	         },
	     });
	     
	     
	     
	     var ctx = document.getElementById("stackedChart");
	     var stackedLine = new Chart(ctx, {
	         type: 'line',
	         data: {
	             labels: years,
	             datasets: [{
	                 label: maleData.label,
	                 data: maleData.data,
	                 backgroundColor: malecolor,
	                 borderColor: malebordercolor,
	                 borderWidth: 1
	             }, {
	                 label: femaleData.label,
	                 data: femaleData.data,
	                 backgroundColor: femalecolor,
	                 borderColor: femalebordercolor,
	                 borderWidth: 1
	             }]
	         },
	         options: {
	             scales: {
	                 yAxes: [{
	                     stacked: true
	                 }]
	             }
	         }
	     });
	     
	     
	     
	 }
	).catch(err => {
	 console.log(err);
	});
}

