<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
    <div class = "container">
        <table id = "productsTable">
        <table id = "categoriesTable">
        <div class = "row">
            <div class = "col-sm-6">
                <h2>Product list</h2>
                <div id = "prodCatList">Loading list</div>
            </div> 
            <div class = "col-sm-6">  
                <h2>Details</h2>
                <div id = "details">Loading details</div>
            </div>
        </div>
    </div>
        
    </table>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="js/xmlHandler.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="jstree/jstree.js"></script>
        <script>
        loadProdAndCat();
        </script>
    </body>
</html>