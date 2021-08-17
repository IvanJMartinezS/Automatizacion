var provider = new firebase.auth.GoogleAuthProvider();

google.charts.load('current', {'packages':['gauge']});
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChartTemp1);
google.charts.setOnLoadCallback(drawChartTemp2);
google.charts.setOnLoadCallback(drawChartTemp3);
google.charts.setOnLoadCallback(drawChartTemp4);
google.charts.setOnLoadCallback(drawChartTime);


//Codigo de Temperaturas
function drawChartTemp1() {

	var dataTemp = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['Sensor1',0]
		]);

	var optionsTemp = {
		width: 150, height: 150,
		redFrom: 10, redTo: 40,
		yellowFrom: 0, yellowTo: 10,
		greenFrom: -20, greenTo: 0,
		majorTicks: ['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
		minorTicks: 1,
		max: 40,
		min: -20
	};

		var formatterTemp = new google.visualization.NumberFormat({
			suffix: 'C',
	  		fractionDigits: 1
		});
		formatterTemp.format(dataTemp, 1);

	var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp1"));

	chartTemp.draw(dataTemp, optionsTemp, formatterTemp);

	var temp = firebase.database().ref('Refrigerador/TThe1').limitToLast(1);

	temp.on('value', function(snapshot){
		temp = snapshot.val();

		if(temp){
			var currentValue;
			var data = [];

			for(var key in temp){
				currentValue = temp[key];
				data.push(currentValue);
			}
		}
		temp = data[0];
	});

	setInterval(function(){
		dataTemp.setValue(0, 1, temp);
		formatterTemp.format(dataTemp, 1);
		chartTemp.draw(dataTemp, optionsTemp);
	}, 3000);
}
function drawChartTemp2() {

	var dataTemp = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['Sensor2',0]
		]);

	var optionsTemp = {
		width: 150, height: 150,
		redFrom: 10, redTo: 40,
		yellowFrom: 0, yellowTo: 10,
		greenFrom: -20, greenTo: 0,
		majorTicks: ['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
		minorTicks: 1,
		max: 40,
		min: -20
	};

		var formatterTemp = new google.visualization.NumberFormat({
			suffix: 'C',
			fractionDigits: 1
		});
		formatterTemp.format(dataTemp, 1);

	var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp2"));

	chartTemp.draw(dataTemp, optionsTemp, formatterTemp);

	var temp = firebase.database().ref('Refrigerador/TThe2').limitToLast(1);

	temp.on('value', function(snapshot){
		temp = snapshot.val();

		if(temp){
			var currentValue;
			var data = [];

			for(var key in temp){
				currentValue = temp[key];
				data.push(currentValue);
			}
		}
		temp = data[0];
	});

	setInterval(function(){
		dataTemp.setValue(0, 1, temp);
		formatterTemp.format(dataTemp, 1);
		chartTemp.draw(dataTemp, optionsTemp);
	}, 3000);
}
function drawChartTemp3() {

	var dataTemp = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['Sensor3',0]
		]);

	var optionsTemp = {
		width: 150, height: 150,
		redFrom: 10, redTo: 40,
		yellowFrom: 0, yellowTo: 10,
		greenFrom: -20, greenTo: 0,
		majorTicks: ['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
		minorTicks: 1,
		max: 40,
		min: -20
	};

		var formatterTemp = new google.visualization.NumberFormat({
			suffix: 'C',
			fractionDigits: 1
		});
		formatterTemp.format(dataTemp, 1);

	var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp3"));

	chartTemp.draw(dataTemp, optionsTemp, formatterTemp);

	var temp = firebase.database().ref('Refrigerador/TThe3').limitToLast(1);

	temp.on('value', function(snapshot){
		temp = snapshot.val();

		if(temp){
			var currentValue;
			var data = [];

			for(var key in temp){
				currentValue = temp[key];
				data.push(currentValue);
			}
		}
		temp = data[0];
	});

	setInterval(function(){
		dataTemp.setValue(0, 1, temp);
		formatterTemp.format(dataTemp, 1);
		chartTemp.draw(dataTemp, optionsTemp);
	}, 3000);
}
function drawChartTemp4() {

	var dataTemp = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['Sensor4',0]
		]);

	var optionsTemp = {
		width: 150, height: 150,
		redFrom: 10, redTo: 40,
		yellowFrom: 0, yellowTo: 10,
		greenFrom: -20, greenTo: 0,
		majorTicks: ['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
		minorTicks: 1,
		max: 40,
		min: -20
	};

		var formatterTemp = new google.visualization.NumberFormat({
			suffix: 'C',
			fractionDigits: 1
		});
		formatterTemp.format(dataTemp, 1);

	var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp4"));

	chartTemp.draw(dataTemp, optionsTemp, formatterTemp);

	var temp = firebase.database().ref('Refrigerador/TThe4').limitToLast(1);

	temp.on('value', function(snapshot){
		temp = snapshot.val();

		if(temp){
			var currentValue;
			var data = [];

			for(var key in temp){
				currentValue = temp[key];
				data.push(currentValue);
			}
		}
		temp = data[0];
	});

	setInterval(function(){
		dataTemp.setValue(0, 1, temp);
		formatterTemp.format(dataTemp, 1);
		chartTemp.draw(dataTemp, optionsTemp);
	}, 3000);
}

//Codigo de Grafico

function drawChartTime(){
	var dataTableTime = new google.visualization.DataTable();

		  dataTableTime.addColumn('datetime', 'Time');
    	//dataTableTime.addColumn('number', 'Time');
      dataTableTime.addColumn('number', 'Temp');
      		

		var optionsChartTime = {
        hAxis: {
          title: 'Hora', //format:'HH:mm',
          textStyle: {
            color: '#00008B',
            fontSize: 20,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          titleTextStyle: {
            color: '#00008B',
            fontSize: 16,
            fontName: 'Arial',
            bold: false,
            italic: true
          }
        },
        vAxis: {
          title: 'Temp (°C)',
          textStyle: {
            color: '#00008B',
            fontSize: 24,
            bold: true
          },
          titleTextStyle: {
            color: '#00008B',
            fontSize: 24,
            bold: true
          }
        },
        colors: ['black', 'yellow']        
      };
      
	var qtyDatos = 100;

	
	var formatDate = new google.visualization.DateFormat(
		{scofix: 'Time: ', pattern: "dd MM HH:mm"});

	formatDate.format(dataTableTime, 0);

	var chartTime = new google.visualization.LineChart(document.getElementById('chartTime'));
	
	  var temp = firebase.database().ref('Refrigerador/TThe1').limitToLast(qtyDatos);
    var hora = firebase.database().ref('Refrigerador/Hora').limitToLast(qtyDatos);
    var minutos = firebase.database().ref('Refrigerador/Minutos').limitToLast(qtyDatos);
    var dia = firebase.database().ref('Refrigerador/Dia').limitToLast(qtyDatos);
    var mes = firebase.database().ref('Refrigerador/Mes').limitToLast(qtyDatos);
    var ano = firebase.database().ref('Refrigerador/Ano').limitToLast(qtyDatos);

    temp.on('value', function(snapshot){
		temp = snapshot.val();

		if(temp){
			var currentValue;
			var data = [];

			for(var key in temp){
				currentValue = temp[key];
				data.push(currentValue);
			}
		}
		temp = data;
	});
    
	hora.on('value', function(snapshot){
		hora = snapshot.val();

		if(hora){
			var currentValue;
			var data = [];

			for(var key in hora){
				currentValue = hora[key];
				data.push(parseFloat(currentValue));
			}
		}
		hora = data;
	});

	minutos.on('value', function(snapshot){
		minutos = snapshot.val();

		if(minutos){
			var currentValue;
			var data = [];

			for(var key in minutos){
				currentValue = minutos[key];
				data.push(parseFloat(currentValue));
			}
		}
		minutos = data;
	});

	dia.on('value', function(snapshot){
		dia = snapshot.val();

		if(dia){
			var currentValue;
			var data = [];

			for(var key in dia){
				currentValue = dia[key];
				data.push(parseFloat(currentValue));
			}
		}
		dia = data;
	});

	mes.on('value', function(snapshot){
		mes = snapshot.val();

		if(mes){
			var currentValue;
			var data = [];

			for(var key in mes){
				currentValue = mes[key];
				data.push(parseFloat(currentValue));
			}
		}
		mes = data;
	});

	ano.on('value', function(snapshot){
		ano = snapshot.val();

		if(ano){
			var currentValue;
			var data = [];

			for(var key in ano){
				currentValue = ano[key];
				data.push(parseFloat(currentValue));
			}
		}
		ano = data;
	});

      setInterval(function(){
    dataTableTime = new google.visualization.DataTable();
    dataTableTime.addColumn('datetime', 'Time');
    //dataTableTime.addColumn('number', 'Time');
    dataTableTime.addColumn('number', 'Temp');
    for(index = 0; index < qtyDatos; index++){
      dataTableTime.addRows([
        [new Date(ano[index], mes[index]-1, dia[index], hora[index], minutos[index],0,0), temp[index]]
        //[index, temp[index]]
      ]);
    }
    chartTime.draw(dataTableTime, optionsChartTime);
  }, 3000);
	
}


