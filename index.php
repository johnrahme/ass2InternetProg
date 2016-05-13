<html>
    <head>
    <link href="/public_html/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="jstree/style.css" />
    </head>
    <body>
    <div class = "container">
                <h1>HTML demo</h1>
	<div id="html" class="demo">
		<ul>
			<li data-jstree='{ "opened" : true }'>Root node
				<ul>
					<li data-jstree='{ "selected" : true }'>Child node 1</li>
					<li>Child node 2</li>
				</ul>
			</li>
		</ul>
	</div>
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
        <script src="/public_html/bootstrap/js/bootstrap.min.js"></script>
        <script src="jstree/jstree.js"></script>
        <script>
        loadProdAndCat();
        $(function () { $('#html').jstree(); });
        </script>
    </body>
</html>