<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jstree basic demos</title>
	<link rel="stylesheet" href="jstree/style.min.css" />
</head>
<body>
	<h1>HTML demo</h1>
	<div id="frmt" class="demo">
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jstree/jstree.js"></script>
	
	<script>
	// html demo
        
   
	$('#frmt').jstree({
		'core' : {
			'data' : [
				{
					"text" : "Root node",
					"state" : { "opened" : true },
					"children" : [
						{
							"text" : "Child node 1",
							"state" : { "selected" : true },
							"icon" : "jstree-file",
                            "id" : "1"
						},
						{ "text" : "Child node 2", "state" : { "disabled" : true } }
					]
				}
			]
		}
	}).on("changed.jstree", function (e, data) {
			if(data.selected.length) {
				alert('The selected node is: ' + data.instance.get_node(data.selected[0]).text);
			}
    });
	</script>
</body>
</html>