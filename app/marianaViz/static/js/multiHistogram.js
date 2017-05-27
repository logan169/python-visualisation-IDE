var app = new Vue({
  el: '#app',
  data: {},
  mounted:function(){
        this.drawMultiHistogram()
      },
  methods:{
  // Called when the Visualization API is loaded.
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
      "xLabel":'',
          "zLabel":'',
          'yLabel':'Histograms',
          cameraPosition: {
            horizontal: 0.1*3.14,
            vertical: 0.1*3.14,
            distance: 2.2
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


  }

	}
})