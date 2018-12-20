
function _flter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

function _each(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

function toggleIcon(img){
    var i = img.style.backgroundImage;
   if( i=='url("images/docbtns.jpg")' ){
	 document.getElementById('detaildiv').style.visibility='visible';
	 document.getElementById('chartdiv').style.visibility='hidden';
	 img.style.backgroundImage = 'url("images/mapbtns.jpg")'
   }else if( i=='url("images/mapbtns.jpg")' ){
	 document.getElementById('detaildiv').style.visibility='hidden';
	 document.getElementById('chartdiv').style.visibility='visible';
	 img.style.backgroundImage = 'url("images/docbtns.jpg")'
   }

}