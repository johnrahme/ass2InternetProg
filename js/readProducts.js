function loadProducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    prductsLoaded(xhttp);
    }
  };
  xhttp.open("GET", "xml/products.xml", true);
  xhttp.send();
}
function prductsLoaded(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>ID</th><th>Name</th></tr>";
  var x = xmlDoc.getElementsByTagName("Products");
  var productArray = new Array();
  for (i = 0; i <x.length; i++) { 
    var product = new Array();
     var prodId =  x[i].getElementsByTagName("ProductID")[0].childNodes[0].nodeValue;
     var prodName = x[i].getElementsByTagName("ProductName")[0].childNodes[0].nodeValue;
      var prodCategoryID = x[i].getElementsByTagName("CategoryID")[0].childNodes[0].nodeValue;
    var prodQuantityPerUnit = x[i].getElementsByTagName("QuantityPerUnit")[0].childNodes[0].nodeValue;
    var prodPrice = x[i].getElementsByTagName("UnitPrice")[0].childNodes[0].nodeValue;
    
     product.push(prodId);
     product.push(prodName);
     product.push(prodCategoryID);
     product.push(prodQuantityPerUnit);
     product.push(prodPrice);
     productArray.push(product);
  }
  document.getElementById("productsTable").innerHTML = productArray[3][3];
}