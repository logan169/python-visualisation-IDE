var app = new Vue({
  el: '#app',
  data: {},
  mounted:function(){
        this.drawMatriceWave()
      },
  methods:{
  // Called when the Visualization API is loaded.
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

	}
})