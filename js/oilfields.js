
var oilfields = [
{lat:61.170210, lon:76.735759, name:"Самотлорское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:63.228871, lon:70.630984, name:"Приобское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:59.773989, lon:71.750712, name:"Салымское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:60.770970, lon:72.823433, name:"Мамонтовское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:50.880739, lon:142.467392, name:"Сахалин-5 месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:44.456643, lon:50.655297, name:"Курмангазы месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:60.310998, lon:69.0, name:"Приразломное месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:67.806708, lon:83.552957, name:"Ванкорское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:60.432888, lon:96.249800, name:"Юрубчено тохомское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:60.635639, lon:107.851504, name:"Савостьяновское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
,{lat:61.215436, lon:72.826109, name:"Усть-Балыкское месторождение","img": "images/derrick.jpg","w": 30,"h": 30, "z": 12}
]

chart.series.values[1].data = oilfields
chart.series.values[2].data = oilfields
/*
var fieldPieSeries = chart.series.push(new am4maps.MapImageSeries());
var pieTemplate = fieldPieSeries.mapImages.template;
pieTemplate.propertyFields.latitude = "lat";
pieTemplate.propertyFields.longitude = "lon";

var pieChartTemplate = pieTemplate.createChild(am4charts.PieChart);
pieChartTemplate.innerRadius = am4core.percent(60);
pieChartTemplate.nonScaling = true;
pieChartTemplate.adapter.add("data", function(data, target) {
    return [{
		"category": "Category #1",
		"value": Math.floor(Math.random() * 300) + 20
		}, {
		"category": "Category #2",
		"value": Math.floor(Math.random() * 300) + 20
		}, {
		"category": "Category #3",
		"value": Math.floor(Math.random() * 300) + 20
		}, {
		"category": "Category #4",
		"value": Math.floor(Math.random() * 300) + 20
	}];  
});
pieChartTemplate.width = 50;
pieChartTemplate.height = 50;
pieChartTemplate.padding(0, 0, 0, 0);
pieChartTemplate.horizontalCenter = "middle";
pieChartTemplate.verticalCenter = "middle";


var pieSeriesTemplate = pieChartTemplate.series.push(new am4charts.PieSeries);
pieSeriesTemplate.slices.template.tooltipText = "";
pieSeriesTemplate.dataFields.category = "category";
pieSeriesTemplate.dataFields.value = "value";
pieSeriesTemplate.labels.template.disabled = true;
pieSeriesTemplate.ticks.template.disabled = true;

fieldPieSeries.data = oilfields;
*/