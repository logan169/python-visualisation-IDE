

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


	},

	drawMultiHistogram: function(){
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
	        xBarWidth: 0.5,
	        yBarWidth: 0.5,
	        showPerspective: true,
	        showGrid: true,
	        showShadow: false,
	        cameraPosition: {
            horizontal: 0.1*3.14,
            vertical: 0.1*3.14,
            distance: 1.8
            },
            legendLabel: '',
	        keepAspectRatio: true,
	        verticalRatio: 0.5,
	        "backgroundColor":'black',
	        "showLegend": true,
	        "xCenter":'50%',
	      };

	      var camera = graph ? graph.getCameraPosition() : null;

	      // create our graph
	      var container = document.getElementById('multiHistogram');
	      graph = new vis.Graph3d(container, data, options);

	      if (camera) graph.setCameraPosition(camera); // restore camera position


	},

	drawHistogram: function(){
		var data = null;
	    var graph = null;

	    function custom(x, y) {
	      return (-Math.sin(x/Math.PI) * Math.cos(y/Math.PI) * 10 + 10);
	    	}
	    // Create and populate a data table.
	      data = [{x:0, y:0, z: 1},{x:1, y:0, z: 2},{x:2, y:0, z: 3},{x:3, y:0, z: 2},{x:4, y:0, z: 1},{x:5, y:0, z: 1},{x:6, y:0, z: 2},{x:7, y:0, z: 3},{x:8, y:0, z: 2},{x:9, y:0, z: 1}];
	
	      // create some nice looking data with sin/cos
	      
	      /*
	      var steps = 4;  // number of datapoints will be steps*steps
	      var axisMax = 15;
	      var axisStep = axisMax / steps;
	      for (var x = 0; x <= axisMax; x+=axisStep) {
	        for (var y = 0; y <= axisMax; y+=axisStep) {
	          var z = custom(x,y);
	            data.push({x:x, y:0, z: z});
	        }
	        console.log(data);
	      }
	      */
		  
	      // specify options
	      var options = {
	        width:  '300px',
	        height: '300px',
	        style: 'bar',
	        xBarWidth: 0.5,
	        yBarWidth: 0.5,
	        showPerspective: true,
	        showGrid: true,
	        showShadow: false,
	        "showYAxis":false,
	        cameraPosition: {
            horizontal: 0*3.14,
            vertical: 0*3.14,
            distance: 1.8
            },
            legendLabel: '',
	        keepAspectRatio: true,
	        verticalRatio: 0.5,
	        "backgroundColor":'black',
	        "showLegend": true,
	        "xCenter":'50%',
	      };

	      var camera = graph ? graph.getCameraPosition() : null;

	      // create our graph
	      var container = document.getElementById('histogram');
	      graph = new vis.Graph3d(container, data, options);

	      if (camera) graph.setCameraPosition(camera); // restore camera position


	},


	// Called when the Visualization API is loaded.
    drawMatriceWave:function() {
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
        
        'legendLabel': '',
        "showLegend":true,
        "xCenter":'40%'

      };

      // Instantiate our graph object.
      var container = document.getElementById('matriceWave');
      graph = new vis.Graph3d(container, data, options);
    },



  	// Called when the Visualization API is loaded.
    draw3dScatterPlot:function() {
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
        onclick: onclick,
        cameraPosition: {
          horizontal: -0.35,
          vertical: 0.22,
          distance: 2.2
        },
        "backgroundColor":'black',
        'legendLabel': 'Labels',
        "showLegend":true,
        "xCenter":'48%'

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
