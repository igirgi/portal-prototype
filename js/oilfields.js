
var od = [
{t:"field", lat:61.170210, lon:76.735759, name:"Самотлорское месторождение","z": 12}
,{t:"field", lat:63.228871, lon:70.630984, name:"Приобское месторождение","z": 12}
,{t:"field", lat:59.773989, lon:71.750712, name:"Салымское месторождение", "z": 12}
,{t:"field", lat:60.770970, lon:72.823433, name:"Мамонтовское месторождение", "z": 12}
,{t:"field", lat:50.880739, lon:142.467392, name:"Сахалин-5 месторождение", "z": 12}
,{t:"field", lat:44.456643, lon:50.655297, name:"Курмангазы месторождение", "z": 12}
,{t:"field", lat:60.310998, lon:69.0, name:"Приразломное месторождение", "z": 12}
,{t:"field", lat:67.806708, lon:83.552957, name:"Ванкорское месторождение", "z": 12}
,{t:"field", lat:60.432888, lon:96.249800, name:"Юрубчено тохомское месторождение", "z": 12}
,{t:"field", lat:60.635639, lon:107.851504, name:"Савостьяновское месторождение", "z": 12}
,{t:"field", lat:61.215436, lon:72.826109, name:"Усть-Балыкское месторождение", "z": 12}
]

var derricks = [], item ={};
for(var i=0; i<od.length; i++){
	var q = Math.floor(Math.random()*7 + 2);
	Object.assign(item,od[i]);
	while(q-- > 0){		
		item.t = "derrick";
		item.name = "Скважина №"+q+""+i;
		item.lon = item.lon + Math.random()*3.5 - 1.5;
		item.lat = item.lat + Math.random()*3.5 - 1.5;
		item.z = 3;
		var it = {};
		Object.assign(it,item);
		derricks.push(it);
	}		
}

od = od.concat(derricks);
 
od = _each(od, function(v){
	v.img="images/"+v.t+".jpg";
});



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

fieldPieSeries.data = od;
*/