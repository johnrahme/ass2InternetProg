<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="jstree/style.min.css" />
        <link rel="stylesheet" href="jqueryUI/jquery-ui.css" />
    </head>
    <body>
    <div class = "container">
        <table id = "productsTable">
        <table id = "categoriesTable">
        <div class = "row">
            <div class = "col-sm-4">
                <h2>Product list 1</h2>
                <div id = "prodCatList">Loading list</div>
            </div>
            <div class = "col-sm-4">
                <h2>Product list 2</h2>
                <div id="frmt" class="demo"></div>
            </div>
            <div class = "col-sm-4" >  
                <h2>Details</h2>
                <div id = "details">Loading details</div>
                <div id="dialog" title="Details"></div>
            </div>
        </div>
    </div>
        
    </table>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="jqueryUI/jquery-ui.js"></script>
        <script src="js/xmlHandler.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="jstree/jstree.js"></script>
        <script>
        loadProdAndCat();
        </script>
        
    </body>
</html>