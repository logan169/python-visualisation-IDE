

var app = new Vue({
  el: '#app',
  data: {
    message: 'Empty data',
    matrice: false

  },
  methods:{
/*
cool function for display so I don't need to remade the graph each time, just change data
redraw() 	Redraw the graph. Useful after the camera position is changed externally, when data is changed, or when the layout of the webpage changed.
setData(data) Replace the data in the Graph3d.
*/
	// Called when the Visualization API is loaded.
    drawMatriceVisualization:function() {
      var data = null;
      var graph = null;
      // Create and populate a data table.
      data = new vis.DataSet();
      // create some nice looking data with sin/cos
      var counter = 0;
      var steps = 10;  // number of datapoints will be steps*steps
      var axisMax = 100; // should be max in input array
      var axisStep = axisMax / steps;
      for (var x = 0; x < axisMax; x+=axisStep) {
        for (var y = 0; y < axisMax; y+=axisStep) {
          var value = Math.sin(x/50) * Math.cos(y/50) * 50 + 50; // create random value here


          data.add({id:counter++,x:x,y:y,z:value,style:value});
        }
      }

      // specify options
      var options = {
        width:  '300px',
        height: '300px',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        "backgroundColor":'black',
        cameraPosition: {
          horizontal: 0,
          vertical: 0.5*3.14,
          distance: 1.8
        },
        
        "showXAxis":false,
        "showYAxis":false,
        "showZAxis":false,
        
        legendLabel: 'gradients',
        "showLegend":true,
        "xCenter":'40%'

      };

      // Instantiate our graph object.
      var container = document.getElementById('matrice');
      graph = new vis.Graph3d(container, data, options);
    },



  	// Called when the Visualization API is loaded.
    drawEmbeddingVisualization:function() {
      var data = null;
      var graph = null;
      // create the data table.
      data = new vis.DataSet();

      // create some shortcuts to math functions
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var random = Math.random;

      // create the animation data
      var imax = 100;
      for (var i = 0; i < imax; i++) {
        var x = pow(random(), 2);
        var y = pow(random(), 2);
        var z = pow(random(), 2);
        var style = (i%2==0) ? sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2)) : "#00ffff";

        data.add({x:x,y:y,z:z,style:style});
      }

      // specify options
      var options = {
        width:  '300px',
        height: '300px',
        style: 'dot-color',
        showPerspective: true,
        showGrid: true,
        keepAspectRatio: true,
        verticalRatio: 1.0,
        legendLabel: 'Labels',
        onclick: onclick,
        cameraPosition: {
          horizontal: -0.35,
          vertical: 0.22,
          distance: 1.8
        },
        "backgroundColor":'black',
        "showLegend":false

      };

      // create our graph
      var container = document.getElementById('embedding');
      console.log(container);
      graph = new vis.Graph3d(container, data, options);
    },


  	//change view
  	changeView: function(v){
	    var viewUrl = '/view/'
	    var self = this;

	    $.ajax({
	       	url: viewUrl+v,
	       	method: 'GET',
	       	success: function (resp) {
	            if (resp.error == false){
	                console.log(resp)
	                self.message = resp.data
	                self.matrice = true
	            	}
	       		},
	       	error: function (error) {
	           	console.log(error)
	       		}
	   		})
		}
	}
})
