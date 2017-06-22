
//////////////////////////////////////////////////////
/// Vis.js component
//////////////////////////////////////////////////////

//Histogram
Vue.component('histogram',{
  template : '<div v-if="visible == true"><h2>{{title}}:</h2><div ref="histogram"></div></div>',
  data:function(){
        return {
          url:'/getData/hist',
          visible:true,
          title:'Histogram',
          data:{},
          options:{}
      }
  },

  mounted:function(){
    this.getData(this.url)
    },

  methods:{
    // Called when the Visualization API is loaded.
    drawHistogram: function(){

      var data = null;
      var graph = null;

      // Create and populate a data table.
      data = this.data;

      // component options
      var options = {
          width:  '300px',
          height: '300px',
          style: 'bar',
          xBarWidth: 0.5,
          yBarWidth: 0.5,
          showPerspective: false,
          showGrid: false,
          showShadow: false,
          dataColor : '#FF0000',
          showYAxis:false,
          xLabel:'',
          zLabel:'',
          cameraPosition: {
              horizontal: 0*3.14,
              vertical: 0*3.14,
              distance: 1.4
            },
          legendLabel: '',
          keepAspectRatio: true,
          verticalRatio: 0.5,
          backgroundColor:'black',
          showLegend: true,
          xCenter:'50%'
          };

        var camera = graph ? graph.getCameraPosition() : null;

        // create our graph
        var container = this.$refs['histogram'];
        graph = new vis.Graph3d(container, data, options);

        if (camera) graph.setCameraPosition(camera); // restore camera position
    },
    getData: function(){
      var viewUrl = this.url;
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //update input
                  self.updateInput(resp);
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    },
    updateInput: function(i){
      this.options = i.data.option;
      this.data = i.data.data;
      this.drawHistogram();
      console.log('histogram data updated');
    }
  }
}),

//matriceWave
Vue.component('matriceWave',{
  template : '<div v-if="visible == true"><h2>{{title}}:</h2><div ref="matriceWave"></div></div>',
  data:function(){
      return {
        url:'/getData/matriceWave',
        visible:true,
        title:'Wave matrice',
        data:{},
        options:{}
    }
  },
  mounted:function(){
      this.getData()
  },
  methods:{
  // Called when the Visualization API is loaded.
    // Called when the Visualization API is loaded
    drawMatriceWave:function() {
      var data = null;
      var graph = null;
      // Create and populate a data table.
      data = new vis.DataSet(this.data);


      // specify options
      var options = {
      'width':  '300px',
      'height': '300px',
      'style': 'surface',
      'showPerspective': true,
      'showGrid': true,
      'showShadow': false,
      'keepAspectRatio': true,
      'verticalRatio': 0.5,
      "backgroundColor":'black',
      'cameraPosition': {
      'horizontal': 0.1*3.14,
      'vertical': 0.1*3.14,
      'distance': 2.2
       },
      "showXAxis":false,
      "showYAxis":false,
      "showZAxis":false,
      
      'legendLabel': '',
      "showLegend":true,
      "xCenter":'50%'
    }; 

      // Instantiate our graph object.
      var container = this.$refs['matriceWave'];
      graph = new vis.Graph3d(container, data, options);
    },

    getData: function(){
      var viewUrl = this.url;
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //update input
                  self.updateInput(resp);
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    },
    updateInput: function(i){
      this.options = i.data.option;
      this.data = i.data.data;
      this.drawMatriceWave();
      console.log('Wave matrice data updated');
    }
  }
}),



//matrice
Vue.component('matrice',{
  template : '<div><h2>{{title}}:</h2><div ref="matrice"></div></div>',
  data:function(){
      return {
        url:'/getData/matrice',
        visible:true,
        title:'Matrice',
        data:{},
        options:{}
      }
  },
  mounted:function(){
      this.getData()
      },
  methods:{
  
  //cool function for display so I don't need to remade the graph each time, just change data
  //redraw()  Redraw the graph. Useful after the camera position is changed externally, when data is changed, or when the layout of the webpage changed.
  //setData(data) Replace the data in the Graph3d.
  
  drawMatrice: function(){
  var data = null;
    var graph = null;


    // Create and populate a data table.
      data = this.data;



      // specify options
      var options = {
      'width':  '300px',
      'height': '300px',
      'style': 'bar',
      'showPerspective': false,
      'showGrid': true,
      'showShadow': false,
      'keepAspectRatio': true,
      'verticalRatio': 0.5,
      "showXAxis":false,
      "showYAxis":false,
      "showZAxis":false,
      'cameraPosition': {
        'horizontal': 0,
        'vertical': 0.5*3.14,
        'distance': 1.88
      },
      "backgroundColor":'black',
      "legendLabel": '',
      "showLegend": true,
      "xCenter":'45%'
    }; 

      var camera = graph ? graph.getCameraPosition() : null;

      // create our graph
      var container = this.$refs['matrice'];
      graph = new vis.Graph3d(container, data, options);

      if (camera) graph.setCameraPosition(camera); // restore camera position
    },

    getData: function(){
      var viewUrl = this.url;
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //update input
                  self.updateInput(resp);
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    },
    updateInput: function(i){
      this.options = i.data.option;
      this.data = i.data.data;
      this.drawMatrice();
      console.log('Matrice data updated');
    }
  }
}),


//scatterplot
Vue.component('scatterPlot',{
  template : '<div><h2>3D scatter plot:</h2><div ref="3dScatterPlot"></div></div></div>',
  data:function(){
      return {url:'/getData/scatter',
        visible:true,
        title:'Matrice',
        data:{},
        options:{}
      }
  },
  mounted:function(){
      this.getData()
    },
  methods:{
    onclick:function (point){
      console.log(point);
    },

    // Called when the Visualization API is loaded.
    draw3dScatterPlot:function() {
      var data = null;
      var graph = null;
        
    

      // create the data table.
      data = new vis.DataSet(this.data);

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
      var options = {
        'width':  '300px',
        'height': '300px',
        'style': 'dot-color',
        'showPerspective': true,
        'showGrid': true,
        'keepAspectRatio': true,
        'verticalRatio': 1.0,
        'onclick': true,
        'cameraPosition': {
          'horizontal': -0.35,
          'vertical': 0.22,
        'distance': 2.2
            },
        "backgroundColor":'black',
        'legendLabel': 'Labels',
        "showLegend":true,
        "xCenter":'48%'
      };

      if (options.onclick == true){
        options.onclick = this.onclick
      }

      // create our graph
      //var container = document.getElementById('3dScatterPlot');
      var container = this.$refs['3dScatterPlot'];
      graph = new vis.Graph3d(container, data, options);
      },

    getData: function(){
      var viewUrl = this.url;
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //update input
                  self.updateInput(resp);
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    },
    updateInput: function(i){
      this.options = i.data.option;
      this.data = i.data.data;
      this.draw3dScatterPlot();
      console.log('3D scatter plot data updated');
    }
  }
}),

//Multi histogram
Vue.component('multiHistogram',{
  template : '<div><h2>{{title}}:</h2><div ref="multiHistogram"></div></div>',
  data:function(){
      return {url:'/getData/multiHist',
        visible:true,
        title:'Multi Histograms',
        data:{},
        options:{}
      }
  },
  mounted:function(){
      this.getData()
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawMultiHistogram: function(){
      var data = null;
      var graph = null;

      // Create and populate a data table.
      // Create and populate a data table.
      data = this.data;

        // specify options
        var options = {
           'width':  '300px',
           'height': '300px',
           'style': 'bar',
           'xBarWidth': 0.5,
           'yBarWidth': 0.5,
           'showPerspective': true,
           'showGrid': true,
           'showShadow': false,
           "xLabel":'',
           "zLabel":'',
           'yLabel':'Histograms',
           'cameraPosition': {
          'horizontal': 0.1*3.14,
          'vertical': 0.1*3.14,
          'distance': 2.2
            },
          'legendLabel': '',
          'keepAspectRatio': true,
          'verticalRatio': 0.5,
          "backgroundColor":'black',
          "showLegend": true,
          'showAnimationControls': true,
          'animationInterval': 1, 
          'animationPreload': true,
          "xCenter":'50%',
        };

        var camera = graph ? graph.getCameraPosition() : null;

        // create our graph
        var container = this.$refs['multiHistogram'];
        graph = new vis.Graph3d(container, data, options);

        if (camera) graph.setCameraPosition(camera); // restore camera position
    },

    getData: function(){
      var viewUrl = this.url;
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //update input
                  self.updateInput(resp);
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    },
    updateInput: function(i){
      this.options = i.data.option;
      this.data = i.data.data;
      this.drawMultiHistogram();
      console.log('MultiHistogram data updated');
    }
  }
}),

//Line plot
Vue.component('linePlot',{
  template : '<div><h2>{{title}}:</h2><div ref="linePlot"></div></div>',
  data:function(){
      return {url:'/getData/linePlot',
        visible:true,
        title:'Line plot',
        data:{},
        options:{}
      }
  },
  mounted:function(){
      
      this.getData()
    },
  methods:{
    // Called when the Visualization API is loaded.
    drawHistogram: function(){
      var data = null;
      var graph = null;

      // Create and populate a data table.
      data = this.data;
        // specify options
      var options = {
          'width':  '300px',
          'height': '300px',
          'style': 'line',
          'xBarWidth': 0.5,
          'yBarWidth': 0.5,
          'showPerspective': false,
          'showGrid': false,
          'showShadow': false,
          "dataColor" : '#FF0000',
          "showYAxis":false,
          "xLabel":'',
          "zLabel":'',
          'cameraPosition': {
            'horizontal': 0*3.14,
            'vertical': 0*3.14,
            'distance': 1.4
          },
          'legendLabel': '',
          'keepAspectRatio': true,
          'verticalRatio': 0.5,
          "backgroundColor":'black',
          "showLegend": true,
          "xCenter":'50%',
        };

        var camera = graph ? graph.getCameraPosition() : null;

        // create our graph
        var container = this.$refs['linePlot'];
        graph = new vis.Graph3d(container, data, options);

        if (camera) graph.setCameraPosition(camera); // restore camera position
      },

    getData: function(){
      var viewUrl = this.url;
      var self = this;

      $.ajax({
         url: viewUrl,
         method: 'GET',
         success: function (resp) {
              if (resp.error == false){
                  //update input
                  self.updateInput(resp);
              }
         },
         error: function (error) {
             console.log(error)
         }
      });
    },
    updateInput: function(i){
      this.options = i.data.option;
      this.data = i.data.data;
      this.drawHistogram();
      console.log('Histogram plot data updated');
    }
    }
}),

//////////////////////////////////////////////////////
/// Vega.js component
//////////////////////////////////////////////////////


//line chart
Vue.component('lineChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="lineChart">
  </div>`,
  data:function(){
      return {
        url:'/getData/lineChart',
        id:'vis',
        visible:true,
        title:'Line chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{
    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['lineChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),

//stackedBarChart
Vue.component('stackedBarChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="stackedBarChart"></div>
  </div>`,
  data:function(){
      return {
        url:'/getData/stackedBarChart',
        id:'vis',
        visible:true,
        title:'Stacked bar chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['stackedBarChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),

//groupedBarChart
Vue.component('groupedBarChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="groupedBarChart">

    </div>
  </div>`,
  data:function(){
      return {
        url:'/getData/groupedBarChart',
        id:'vis',
        visible:true,
        title:'Grouped bar chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['groupedBarChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),


//areaChart
Vue.component('areaChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="areaChart"></div>
  </div>`,
  data:function(){
      return {
        url:'/getData/areaChart',
        id:'vis',
        visible:true,
        title:'Area chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { 
        view = chart({el:self.$refs['areaChart'],renderer:"svg"}).update(); 

      });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),


//stackedAreaChart
Vue.component('stackedAreaChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="stackedAreaChart"></div>
  </div>`,
  data:function(){
      return {
        url:'/getData/stackedAreaChart',
        id:'vis',
        visible:true,
        title:'Stacked area chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['stackedAreaChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),

//scatterChart
Vue.component('scatterChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="scatterChart"></div>
  </div>`,
  data:function(){
      return {
        url:'/getData/scatterChart',
        id:'vis',
        visible:true,
        title:'Scatter chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['scatterChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),

//pieChart
Vue.component('pieChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="pieChart"></div>
  </div>`,
  data:function(){
      return {
        url:'/getData/pieChart',
        id:'vis',
        visible:true,
        title:'Pie chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['pieChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
}),

//bar chart
Vue.component('barChart',{
  template : `
  <div>
    <h2>{{title}}:</h2>
    <div ref="barChart"></div>
  </div>`,
  data:function(){
      return {
        url:'/getData/barChart',
        id:'vis',
        visible:true,
        title:'Bar chart',
        data:{},
        options:{}
      }
  },
  mounted:function(){
  this.getData()
  },
  methods:{

    parseJson:function(){
      var self = this;
      vg.parse.spec(self.data, function(chart) { chart({el:self.$refs['barChart'],renderer:"svg"}).update(); });
    },

    getData: function(){
        var viewUrl = this.url;
        var self = this;

        $.ajax({
           url: viewUrl,
           method: 'GET',
           success: function (resp) {
                if (resp.error == false){
                    //update input
                    self.updateInput(resp);
                }
           },
           error: function (error) {
               console.log(error)
           }
        });
    },

    updateInput: function(i){
      var t = i.data
      this.visible = t.visible;
      this.data = JSON.parse(t['json']);
      this.parseJson();

    }
  }
});


var app = new Vue({
  el:'#app'
});

