
//matriceWave
Vue.component('matriceWave',{
  template : '<div><h2>Wave matrice:</h2><div id="matriceWave"></div></div>',
  mounted:function(){
        this.drawMatriceWave(i.matriceWave.data,i.matriceWave.option)
      },
  methods:{
  // Called when the Visualization API is loaded.
    // Called when the Visualization API is loaded.
    drawMatriceWave:function(d,o) {
      var data = null;
      var graph = null;
      // Create and populate a data table.
      data = new vis.DataSet(d);

      // specify options
      var options = o; 

      // Instantiate our graph object.
      var container = document.getElementById('matriceWave');
      graph = new vis.Graph3d(container, data, options);
    }
  }
}),



//matrice
Vue.component('matrice',{
  template : '<div><h2>Matrice:</h2><div id="matrice">{{input}}</div></div>',
  mounted:function(){
        this.drawMatrice(i.matrice.data,i.matrice.option)
      },
  methods:{
  
  //cool function for display so I don't need to remade the graph each time, just change data
  //redraw()  Redraw the graph. Useful after the camera position is changed externally, when data is changed, or when the layout of the webpage changed.
  //setData(data) Replace the data in the Graph3d.
  
  drawMatrice: function(d,o){
  var data = null;
    var graph = null;


    // Create and populate a data table.
      data = d;



      // specify options
      var options = o; 

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
  mounted:function(){
      this.draw3dScatterPlot(i.scatter.data,i.scatter.option)
    },
  methods:{
    // Called when the Visualization API is loaded.
    draw3dScatterPlot:function(d,o) {
      var data = null;
      var graph = null;
        
    function onclick(point){
      console.log(point);
    }

      // create the data table.
      data = new vis.DataSet(d);

      /*
      // create some shortcuts to math functions
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var random = Math.random;

      // create the animation data
      var imax = d.length;
      for (var i = 0; i < imax; i++) {
        var x = pow(random(), 2);
        var y = pow(random(), 2);
        var z = pow(random(), 2);
        var style = (i%2==0) ? sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2)) : "#00ffff";

        data.add({x:x,y:y,z:z,style:style});
      }
      

      //added by logan
      var imax = d.length;
      for (var i = 0; i < imax; i++) {
        data.add({x:d.x,y:d.y,z:d.z,style:d.style});
      }
      */

      // specify options
      var options = o;

      if (options.onclick == true){
        options.onclick = onclick
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
  mounted:function(){
      this.drawMultiHistogram(i.multiHist.data,i.multiHist.option)
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawMultiHistogram: function(d,o){
    var data = null;
      var graph = null;

      // Create and populate a data table.
      // Create and populate a data table.
      data = d

        // specify options
        var options = o;

        var camera = graph ? graph.getCameraPosition() : null;

        // create our graph
        var container = document.getElementById('multiHistogram');
        graph = new vis.Graph3d(container, data, options);

        if (camera) graph.setCameraPosition(camera); // restore camera position
    }
  }
}),

//Line plot
Vue.component('linePlot',{
  template : '<div><h2>Line plot:</h2><div id="linePlot"></div></div>',
  mounted:function(){

      this.drawHistogram(i.linePlot.data,i.linePlot.option) // should be input but don't work
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawHistogram: function(d,o){
      var data = null;
      var graph = null;

      // Create and populate a data table.
      data = d
        // specify options
        var options = o;

        var camera = graph ? graph.getCameraPosition() : null;

        // create our graph
        var container = document.getElementById('linePlot');
        graph = new vis.Graph3d(container, data, options);

        if (camera) graph.setCameraPosition(camera); // restore camera position
      }
    }
}),

//Histogram
Vue.component('histogram',{
  template : '<div><h2>Histogram:</h2><div id="histogram"></div></div>',
  mounted:function(){
      this.drawHistogram(i.hist.data,i.hist.option) // should be input but don't work
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawHistogram: function(d,o){
      var data = null;
      var graph = null;

      // Create and populate a data table.
      data = d
        // specify options
        var options = o;

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
  mounted:function(){
      this.input = this.getData() // should be input but don't work
    },
  methods:{

    getData: function(){
      var viewUrl = '/getData/all'
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //console.log(resp)
                  //self.input =  resp.data;
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    }
  }
});

