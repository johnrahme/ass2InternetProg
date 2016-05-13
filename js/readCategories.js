function loadCategories() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    categoriesLoaded(xhttp);
    }
  };
  xhttp.open("GET", "xml/categories.xml", true);
  xhttp.send();
}
function categoriesLoaded(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>ID</th><th>Name</th></tr>";
  var x = xmlDoc.getElementsByTagName("Categories");
  var categoriesArray = new Array();
  for (i = 0; i <x.length; i++) { 
    var category = new Array();
     var catID =  x[i].getElementsByTagName("CategoryID")[0].childNodes[0].nodeValue;
     var catName = x[i].getElementsByTagName("CategoryName")[0].childNodes[0].nodeValue;
    var catDesc = x[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue;
     category.push(catID);
     category.push(catName);
     category.push(catDesc);
     categoriesArray.push(category);
  }
  document.getElementById("categoriesTable").innerHTML = categoriesArray[4][2];
}