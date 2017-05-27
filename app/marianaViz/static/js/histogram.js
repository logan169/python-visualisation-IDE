//matriceWave
Vue.component('matriceWave',{
  template : '<div><h2>Wave matrice:</h2><div id="matriceWave"></div></div>',
  props:['input'],
  mounted:function(){
        this.drawMatriceWave(i)
      },
  methods:{
  // Called when the Visualization API is loaded.
    // Called when the Visualization API is loaded.
    drawMatriceWave:function(d) {
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
    }
  }
}),



//matrice
Vue.component('matrice',{
  template : '<div><h2>Matrice:</h2><div id="matrice"></div></div>',
  props:['input'],
  mounted:function(){
    console.log(this.input),
        this.drawMatrice(i)
      },
  methods:{
  /*
  cool function for display so I don't need to remade the graph each time, just change data
  redraw()  Redraw the graph. Useful after the camera position is changed externally, when data is changed, or when the layout of the webpage changed.
  setData(data) Replace the data in the Graph3d.
  */
  drawMatrice: function(d){
  var data = null;
    var graph = null;


    // Create and populate a data table.
      data = d;



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
}),


//scatterplot
Vue.component('scatterPlot',{
  template : '<div><h2>3D scatter plot:</h2><div id="3dScatterPlot"></div></div></div>',
  props:['input'],
  mounted:function(){
      this.draw3dScatterPlot()
    },
  methods:{
    // Called when the Visualization API is loaded.
    draw3dScatterPlot:function() {
      var data = null;
      var graph = null;
        
    function onclick(point){
      console.log(point);
    }

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
      }

      // create our graph
      var container = document.getElementById('3dScatterPlot');
      graph = new vis.Graph3d(container, data, options);
      }
  }
}),

//Multi histogram
Vue.component('multiHistogram',{
  template : '<div><h2>Multi Histograms:</h2><div id="multiHistogram"></div></div>',
  props:['input'],
  mounted:function(){
      this.drawMultiHistogram(i)
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawMultiHistogram: function(i){
    var data = null;
      var graph = null;

      // Create and populate a data table.
      // Create and populate a data table.
      data = i

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
}),

//Histogram
Vue.component('histogram',{
  template : '<div><h2>Histogram:</h2><div id="histogram"></div></div>',
  props:['input'],
  mounted:function(){
      this.drawHistogram(i)
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawHistogram: function(d){
      var data = null;
      var graph = null;

      // Create and populate a data table.
      data = d
        // specify options
        var options = {
          width:  '300px',
          height: '300px',
          style: 'bar',
          xBarWidth: 0.5,
          yBarWidth: 0.5,
          showPerspective: false,
          showGrid: true,
          showShadow: false,
          "showYAxis":false,
          "xLabel":'',
          "zLabel":'',
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
      }
    }
});

var app = new Vue({
  el:'#app',
});

