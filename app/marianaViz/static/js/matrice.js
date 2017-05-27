

var app = new Vue({
  el: '#app',
  data: {},
  mounted:function(){
        this.drawMatrice()
      },
  methods:{
	/*
	cool function for display so I don't need to remade the graph each time, just change data
	redraw() 	Redraw the graph. Useful after the camera position is changed externally, when data is changed, or when the layout of the webpage changed.
	setData(data) Replace the data in the Graph3d.
	*/
	drawMatrice: function(){
	var data = null;
    var graph = null;

    function custom(x, y) {
      return (-Math.sin(x/Math.PI) * Math.cos(y/Math.PI) * 10 + 10);
    	}
    // Create and populate a data table.
      data = [];

      // create some nice looking data with sin/cos
      var steps = 5;  // number of datapoints will be steps*steps
      var axisMax = 10;
      var axisStep = axisMax / steps;
      for (var x = 0; x <= axisMax; x+=axisStep) {
        for (var y = 0; y <= axisMax; y+=axisStep) {
          var z = custom(x,y);
            data.push({x:x, y:y, z: z});
        }
      }

      // specify options
      var options = {
        width:  '300px',
        height: '300px',
        style: 'bar',
        //xBarWidth: 0.5,
        //yBarWidth: 0.5,
        showPerspective: false,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        "showXAxis":false,
        "showYAxis":false,
        "showZAxis":false,
        cameraPosition: {
          horizontal: 0,
          vertical: 0.5*3.14,
          distance: 1.8
        },
        "backgroundColor":'black',
        "legendLabel": '',
        "showLegend": true,
        "xCenter":'45%'
      };

      var camera = graph ? graph.getCameraPosition() : null;

      // create our graph
      var container = document.getElementById('matrice');
      graph = new vis.Graph3d(container, data, options);

      if (camera) graph.setCameraPosition(camera); // restore camera position


		}
	}
})
