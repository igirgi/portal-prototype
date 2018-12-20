am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

var palette = document.getElementById("palette").innerHTML;
var overframe = ovarfield = document.getElementById("overfield"),
 overd = document.getElementById("overd"),
 overname = document.getElementById("overname");

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
	,"hit": function(ev) {
		if(typeof ev.target.dataItem == "undefined"){
			overframe.style.visibility = "hidden";
			overname.style.visibility = "hidden";
			assist.style.visibility = "hidden";
		}
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
		 "tooltipHTML": "<center><strong>{name}</strong></center>", 
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
					"doublehit": function(ev) {
						var q = s1.data[ev.target.dataItem.index];
						var geop = {latitude: q.lat, longitude: q.lon};
						chart.zoomToGeoPoint(geop, 12, true)
					},
					"hit": function(ev) {
						var sw = document.getElementById("chartdiv").offsetWidth/2;
						var cw = ev.event.clientX;
						var q = s1.data[ev.target.dataItem.index];
						if(q.t=="field") overframe = overfield;
						else  overframe = overd;
						overframe.style.left = (cw < sw)?"52%":"0px";
						assist.src="assist.html"
						assist.style.left = (cw < sw)?"0px":"62%";
						assist.style.visibility = "visible";
						overname.style.left = (cw < sw)?"52%":"0px";
						overname.src="overname.html?name="+ encodeURIComponent(q.name);
						overname.style.visibility = "visible";
						overframe.style.visibility = "visible";
						ev.event.stopImmediatePropagation();
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
s1.tooltip.pointerOrientation = "vertical";
s1.tooltip.label.interactionsEnabled = true;
s1.tooltip.interactionsEnabled = true;

s1.data = cdata
s2.data = cdata


