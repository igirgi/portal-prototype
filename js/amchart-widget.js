am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

var zLevel = 3, cdata = _flter(od, function(v){ return v.z == 10; });
var detail, dLabel;
var chart = am4core.createFromConfig(
{
  "geodata": "worldHigh",
  "projection": "Miller",
  "homeZoomLevel": 4,
  "homeGeoPoint": {
    "latitude": 60,
    "longitude": 100
  },
  events:{
	"zoomlevelchanged": function(ev){
		var z = chart.zoomLevel;
		if(zLevel >= 8 && z <8){ //zoom out
		  cdata = _flter(od, function(v){ return v.z == 10; });
		  s1.data = cdata
		  s2.show();
		}else if(zLevel <= 8 && z > 8){ 
		  s2.hide();
		  cdata = _flter(od, function(v){ return v.z == 20; });			  
  		  s1.data = cdata
		}
		zLevel = z;
	}
  },
  // Create polygon series
  "series": [
  { //MapPolygonSeries
    "id": "polygons",
    "type": "MapPolygonSeries",
    "useGeodata": true,
    "exclude": ["AQ"], // exclude Antarctida

  }
  ,
    { //картинки
    "id": "imgs",
    "type": "MapImageSeries", 	
	"mapImages":{
		"propertyFields": {
			"latitude": "lat",
			"longitude": "lon",
		},
		"tooltipHTML": "<center><strong>{name}</center></strong>"
			+"<img src='images/{t}Stat.jpg'>"
		,
		"nonScaling": true,
		"children":[
			{
				type: "Image",			
				"propertyFields":{
					"href": "img",
					"width": "size",
					"height": "size"
				},
				"horizontalCenter": "middle",
				"verticalCenter": "middle",
				"events":{
					"over":function(ev, a, b, c){
						var sw = document.getElementById("chartdiv").offsetWidth/2;
						var cw = ev.event.clientX;
						if(detail == null) {
							detail = chart.tooltipContainer.createChild(am4core.Container);
							detail.width = am4core.percent(45);
							detail.height = am4core.percent(100)
							var gradient = new am4core.LinearGradient();
							gradient.addColor(am4core.color("#429184"));
							gradient.addColor(am4core.color("#235642"));
							gradient.rotation = -90;
							detail.background.fill = gradient;
							detail.background.fillOpacity = 0.2;
							dLabel = detail.createChild(am4core.Image);	
							dLabel.align = "center";
							dLabel.valign = "top";
							dLabel.width = am4core.percent(100);
							dLabel.height = am4core.percent(100);
							dLabel.href = 'images/details.gif';
						}		
						detail.align = (cw < sw)?"right":"left";
						detail.show();
					},
					"out":function(ev){
						detail.hide();
					},
					"hit": function(ev) {
						var q = s1.data[ev.target.dataItem.index];
						var geop = {latitude: q.lat, longitude: q.lon};
//						geop = {"latitude": 60., "longitude": 100. }
						chart.zoomToGeoPoint(geop, 12, true)
					}
				}
			}
		]
	}
  }
	,
  { //пирожки-ореолы вокруг картинок
    "id": "oreolas",
    "type": "MapImageSeries", 	
	"mapImages":{
		"propertyFields": {
			"latitude": "lat",
			"longitude": "lon",
		},
		"nonScaling": true,
		"children":[
			{
				"type": "PieChart",
				"width": 70,
				"height": 70,
				"horizontalCenter": "middle",
				"verticalCenter": "middle",
				"innerRadius": "30%",
				"series": [{
					"type": "PieSeries",
					"dataFields": {
						"value": "value",
						"category": "category"
					},
					"labels":{disabled: true},
					"ticks": {disabled: true},
					"slices": {
						"events":{
							"over":function(ev){
								}
						}
					}
				}],
				"adapter":{
					"data": function(data, target) {
						return [{
							"category": "Показатель KPI №1",
							"value": Math.floor(Math.random() * 300)
							}, {
							"category": "Показатель KPI №2",
							"value": Math.floor(Math.random() * 300) + 100
							}, {
							"category": "Показатель KPI №3",
							"value": Math.floor(Math.random() * 300) + 200
							}, {
							"category": "Показатель KPI №4",
							"value": Math.floor(Math.random() * 500) + 100
							}, {
							"category": "Показатель KPI №5",
							"value": Math.floor(Math.random() * 500) 
							}];  
					}
				}
				
			}
		]
	}
	}	
  ],

  // Add zoom control
  "zoomControl": {
    "slider": {
      "height": 100
    }
  }
}

,"chartdiv", am4maps.MapChart);

var s1 = chart.series.values[1];
var s2 = chart.series.values[2];
s1.data = cdata
s2.data = cdata


