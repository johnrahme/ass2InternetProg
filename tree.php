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
     var testArray = new Array();
    var children = new Array();
    children.push({text:"node1", id: "3"},{text:"node2", id: "4"});
    testArray.push({text: "fatherNode1", id: "5", children: children});
    var nodes = JSON.stringify(testArray);
    
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
					"children" : testArray
				}
			]
		}
	});
	</script>
</body>
</html>