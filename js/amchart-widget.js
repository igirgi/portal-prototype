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
		var q = this;
		var e = ev;
		console.log(chart.zoomLevel+"    "+chart.data.length)
	}
  },
  // Create polygon series
  "series": [
  { //MapPolygonSeries
    "id": "polygons",
    "type": "MapPolygonSeries",
    "useGeodata": true,
    "exclude": ["AQ"], // exclude Antarctida

  },
  { //MapImageSeries
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
  ],

  // Add zoom control
  "zoomControl": {
    "slider": {
      "height": 100
    }
  }
}

,"chartdiv", am4maps.MapChart);

var cD= chart.series.values[1];