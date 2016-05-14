var categoriesArray = new Array();
var productArray = new Array();
var jsonArray = new Array();
//Setup dialog
$( "#dialog" ).dialog({ autoOpen: false });
//Loads the categories
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
    
  loadProducts();
}
//Load the products
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
  printProdAndCat();
    
}
function printProdAndCat(){
    jsonArray = new Array();
    var list = "<ol type = 'i'>";
    for(i = 0; i<categoriesArray.length; i++){
        list = list+"<li class = 'categorie' onclick=\'displayDetails("+i+",1)\'>"+categoriesArray[i][1];
        list = list+"<ol type = 'a'>";
        
        var products = new Array();
        for(j = 0; j<productArray.length; j++){
            if(productArray[j][2] == categoriesArray[i][0]){
                list = list+"<li class = 'product' onclick=\'displayDetails("+j+",0)\'>"+productArray[j][1];
                //Populate json children
                products.push({text:productArray[j][1], icon : "jstree-file", a_attr:{idNr:j+1,type:1}});
            }
        }
        list = list+"</ol>"
        //Populate the jsonArray
        jsonArray.push({text:categoriesArray[i][1], children:products, a_attr:{idNr:i+1,type:2}});
        
    }
    list = list+"</ol>";
    
    //Make sure the click event does not trigger for things under the categorie
    $("#prodCatList").html(list);
    setupTree();
    $("li.product").each(function(){
       $(this).click(function(e) {
           e.stopPropagation();
       });
   });
}
function displayDetails(id, type){
    
    $("#dialog").html("");
    if(type == 0){
        $("#details").html("Quantity per unit: "+productArray[id][3]+"<br>Price: "+productArray[id][4]);
        $("#dialog").html("Quantity per unit: "+productArray[id][3]+"<br>Price: "+productArray[id][4]);
    }
    else if (type == 1){
        $("#details").html("Description: "+categoriesArray[id][2]);
        $("#dialog").html("Description: "+categoriesArray[id][2]);
    }
    $("#dialog").dialog("open");
}
function setupTree(){
    
	$('#frmt').on("changed.jstree", function (e, data) {
			if(data.selected.length) {
               
               displayDetails(data.instance.get_node(data.selected[0]).a_attr["idNr"]-1, data.instance.get_node(data.selected[0]).a_attr["type"]-1);
			}})
    .jstree({
		'core' : {
			'data' : [
				{
					"text" : "Products",
					"id" : "cat1",
					"children" : jsonArray
				}
			]
		}
	});
}
function loadProdAndCat(){
    loadCategories();
}


