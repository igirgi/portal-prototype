am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

var zLevel = 3, cdata = _flter(od, function(v){ return v.z == 12; });
var chart = am4core.createFromConfig(
{
  "geodata": "worldHigh",
  "projection": "Miller",
  "homeZoomLevel": 3,
  "homeGeoPoint": {
    "latitude": 60,
    "longitude": 100
  },
  events:{
	"zoomlevelchanged": function(ev){
		var z = chart.zoomLevel;
		if(zLevel >= 12 && z <12){ //zoom out
		  cdata = _flter(od, function(v){ return v.z == 12; });
		  s1.data = cdata
		  s2.data = cdata
		}else if(zLevel <= 12 && z > 12){ 
		  cdata = _flter(od, function(v){ return v.z < 12; });			  
  		  s1.data = cdata
		  s2.data = cdata
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
				"width": 30,
				"height": 30,				
				"propertyFields":{
					"href": "img"
				},
				"horizontalCenter": "middle",
				"verticalCenter": "middle"
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
		"tooltipText": "{name}",
		"nonScaling": true,
		"children":[
			{
				"type": "PieChart",
				"width": 50,
				"height": 50,
				"horizontalCenter": "middle",
				"verticalCenter": "middle",
				"innerRadius": "60%",
				"series": [{
					"type": "PieSeries",
					"dataFields": {
						"value": "value",
						"category": "category"
					},
					"labels":{disabled: true},
					"ticks": {disabled: true},
					"slices": {tooltipText: ""}
				}],
				"adapter":{
					"data": function(data, target) {
						return [{
							"category": "Category #1",
							"value": Math.floor(Math.random() * 300)
							}, {
							"category": "Category #2",
							"value": Math.floor(Math.random() * 300) + 100
							}, {
							"category": "Category #3",
							"value": Math.floor(Math.random() * 300) + 200
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


