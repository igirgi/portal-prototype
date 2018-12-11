am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig(
{
  "geodata": "worldHigh",
  "projection": "Miller",
  "homeZoomLevel": 3,
  "homeGeoPoint": {
    "latitude": 57,
    "longitude": 100
  },
  // Create polygon series
  "series": [
  { //MapPolygonSeries
    "id": "s1",
    "type": "MapPolygonSeries",
    "useGeodata": true,
    "exclude": ["AQ"], // exclude Antarctida

    // Configure tooltip
    "tooltip": {
      "fill": "#000000"
    },

    // Configure appearance of polygons
    "mapPolygons": {
      "tooltipText": "{name}",
      "togglable": true,

      // Configure states
      "states": {
        "hover": {
          "properties": {
            "fill": "#67b7dc"
          }
        },
        "active": {
          "properties": {
            "fill": "#a367dc"
          }
        }
      },

      // Set click events
      "events": {
        "hit": function (event) {
          // if we have some country selected, set default state to it
          if (this.currentActive) {
            this.currentActive.setState("default");
          }

          chart.zoomToMapObject(event.target);
          this.currentActive = event.target;
        }
      }
    }
  },
  { //MapImageSeries
    "id": "s2",
    "type": "MapImageSeries", 
	"mapImages":{
		"propertyFields": {
			"latitude": "latitude",
			"longitude": "longitude"
		},
		"nonScaling": true,
		"children":[
			{
				type: "Image",
//				"propertyFields":{
//					"href": "imageURL"
//				},
				"href": "santa.png",
				"width": 50,
				"height": 50,
				"horizontalCenter": "middle",
				"verticalCenter": "middle"
			}
		]
	},
	"data":[
		{
		  "latitude": 40.416775,
		  "longitude": -3.703790,
		  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/rainy-1.svg",
		  "width": 32,
		  "height": 32,
		  "label": "Madrid: +22C"
		}, {
		  "latitude": 48.856614,
		  "longitude": 2.352222,
		  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/thunder.svg",
		  "width": 32,
		  "height": 32,
		  "label": "Paris: +18C"
		}	
	]
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

/*
// Create an image series that will hold pie charts
var pieSeries = chart.series.push(new am4maps.MapImageSeries());
var pieTemplate = pieSeries.mapImages.template;
pieTemplate.propertyFields.latitude = "latitude";
pieTemplate.propertyFields.longitude = "longitude";

var pieChartTemplate = pieTemplate.createChild(am4charts.PieChart);
pieChartTemplate.adapter.add("data", function(data, target) {
  if (target.dataItem) {
    return target.dataItem.dataContext.pieData;
  }
  else {
    return [];
  }
});
pieChartTemplate.propertyFields.width = "width";
pieChartTemplate.propertyFields.height = "height";
pieChartTemplate.horizontalCenter = "middle";
pieChartTemplate.verticalCenter = "middle";

var pieTitle = pieChartTemplate.titles.create();
pieTitle.text = "{title}";

var pieSeriesTemplate = pieChartTemplate.series.push(new am4charts.PieSeries);
pieSeriesTemplate.dataFields.category = "category";
pieSeriesTemplate.dataFields.value = "value";
pieSeriesTemplate.labels.template.disabled = true;
pieSeriesTemplate.ticks.template.disabled = true;

pieSeries.data = [
 {
  "title": "Тюмень",
  "latitude": 57.9182,
  "longitude": 65.320597,
  "width": 30,
  "height": 30,
  "pieData": [{
    "category": "Простои",
    "value": 200
  }, {
    "category": "Добыча",
    "value": 600
  }, {
    "category": "Складские запасы",
    "value": 350
  }]
}, {
  "title": "Asia",
  "latitude": 47.212106,
  "longitude": 103.183594,
  "width": 80,
  "height": 80,
  "pieData": [{
    "category": "Category #1",
    "value": 352
  }, {
    "category": "Category #2",
    "value": 266
  }, {
    "category": "Category #3",
    "value": 512
  }, {
    "category": "Category #4",
    "value": 199
  }]
}, {
  "title": "Сургут",
  "latitude": 61.1524,
  "longitude": 73.237722,
  "width": 30,
  "height": 30,
  "pieData": [{
    "category": "Простои",
    "value": 200
  }, {
    "category": "Транспортировка",
    "value": 300
  }, {
    "category": "Добыча",
    "value": 599
  }, {
    "category": "Складские запасы",
    "value": 512
  }]
}];

*/

