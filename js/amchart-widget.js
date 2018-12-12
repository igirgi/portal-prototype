am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);


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
		// var q = this;
		// var e = ev;
		// console.log(chart.zoomLevel+"    "+chart.data.length)
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
		"tooltipText": "{name}",
		"nonScaling": true,
		"children":[
			{
				type: "Image",
				"propertyFields":{
					"href": "img",
					"width": "w",
					"height": "h"
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
