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
	$('#frmt').on("changed.jstree", function (e, data) {
			if(data.selected.length) {
				alert('The selected node is: ' + data.instance.get_node(data.selected[0]).id);
			}})
    .jstree({
		'core' : {
			'data' : [
				{
					"text" : "Root node",
					"id" : "cat1",
					"children" : [
						{
							"text" : "Child node 1",
                            "id" : "prod1"
						},
						{ "text" : "Child node 2",
                            "id" : "prod2"
                        }
					]
				}
			]
		}
	});
	</script>
</body>
</html>