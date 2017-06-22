
init = {
'lineChart':{
  'visible':False,
  'json':{}
},
'barChart':{
  'visible':False,
  'json':{}
},
'barChart':{
  'visible':False,
  'json':{}
},
'stackedBarChart':{
  'visible':False,
  'json':{}
},
'groupedBarChart':{
  'visible':False,
  'json':{}
},
'areaChart':{
  'visible':False,
  'json':{}
},
'stackedAreaChart':{
  'visible':False,
  'json':{}
},
'scatterChart':{
  'visible':False,
  'json':{}
},
'pieChart':{
  'visible':False,
  'json':{}
},
'linePlot':{
	'visible':False,
	'data':[{'x':1, 'y':0, 'z': -1},{'x':2, 'y':0, 'z': 2},{'x':3, 'y':0, 'z': 3},{'x':4, 'y':0, 'z': 2}],
	'option':{
      'width':  '300px',
      'height': '300px',
      'style': 'line',
      'xBarWidth': 0.5,
      'yBarWidth': 0.5,
      'showPerspective': False,
      'showGrid': False,
      'showShadow': False,
      "dataColor" : '#FF0000',
      "showYAxis":False,
      "xLabel":'',
      "zLabel":'',
      'cameraPosition': {
          'horizontal': 0*3.14,
          'vertical': 0*3.14,
          'distance': 1.4
        },
      'legendLabel': '',
      'keepAspectRatio': True,
      'verticalRatio': 0.5,
      "backgroundColor":'black',
      "showLegend": True,
      "xCenter":'50%',
       }
	},
'hist':{
	'visible':False,
	'data':[{'x':1, 'y':0, 'z': 1},{'x':1.75, 'y':0, 'z': 2},{'x':2, 'y':0, 'z': 3},{'x':3, 'y':0, 'z': 1.75},{'x':4, 'y':0, 'z': 2}],
	'option':{
        'width':  '300px',
        'height': '300px',
        'style': 'bar',
        'xBarWidth': 0.5,
        'yBarWidth': 0.5,
        'showPerspective': False,
        'showGrid': True,
        'showShadow': False,
        "showYAxis":False,
        "xLabel":'',
        "zLabel":'',
        'cameraPosition': {
            'horizontal': 0*3.14,
            'vertical': 0*3.14,
            'distance': 1.8
          },
          'legendLabel': '',
        'keepAspectRatio': True,
        'verticalRatio': 0.5,
        "backgroundColor":'black',
        "showLegend": True,
        "xCenter":'50%',
      }
	},
'multiHist':{
	'visible':False,
	'data':[{'x':1, 'y':0, 'z': 12},{'x':2, 'y':0, 'z': 1.5},{'x':3, 'y':0, 'z': 3},{'x':4, 'y':0, 'z':4},
            {'x':1, 'y':1, 'z': 2},{'x':2, 'y':1, 'z': 6},{'x':3, 'y':1, 'z': 1.5},{'x':4, 'y':1, 'z': 1.5},
            {'x':1, 'y':2, 'z': 3.9},{'x':2, 'y':2, 'z': 3},{'x':3, 'y':2, 'z': 5},{'x':4, 'y':2, 'z': 10},
            {'x':1, 'y':3, 'z': 7},{'x':2, 'y':3, 'z': 1},{'x':3, 'y':3, 'z': 8.5},{'x':4, 'y':3, 'z': 9}],
	'option':{
         'width':  '300px',
         'height': '300px',
         'style': 'bar',
         'xBarWidth': 0.5,
         'yBarWidth': 0.5,
         'showPerspective': True,
         'showGrid': True,
         'showShadow': False,
         "xLabel":'',
         "zLabel":'',
         'yLabel':'Histograms',
         'cameraPosition': {
          'horizontal': 0.1*3.14,
          'vertical': 0.1*3.14,
          'distance': 2.2
          },
          'legendLabel': '',
          'keepAspectRatio': True,
          'verticalRatio': 0.5,
          "backgroundColor":'black',
          "showLegend": True,
          "xCenter":'50%',
      }
	},
'matrice':{
	'visible':False,
	'data':[{'x':1, 'y':0, 'z': 1},{'x':2, 'y':0, 'z': 1.5},{'x':3, 'y':0, 'z': 3},{'x':4, 'y':0, 'z': 5},
            {'x':1, 'y':1, 'z': 2},{'x':2, 'y':1, 'z': 1},{'x':3, 'y':1, 'z': 1.5},{'x':4, 'y':1, 'z': 1.5},
            {'x':1, 'y':2, 'z': 1},{'x':2, 'y':2, 'z': 3},{'x':3, 'y':2, 'z': 5},{'x':4, 'y':2, 'z': 2},
            {'x':1, 'y':3, 'z': 2},{'x':2, 'y':3, 'z': 1},{'x':3, 'y':3, 'z': 1.5},{'x':4, 'y':3, 'z': 2}],
	'option':{
          'width':  '300px',
          'height': '300px',
          'style': 'bar',
          'showPerspective': False,
          'showGrid': True,
          'showShadow': False,
          'keepAspectRatio': True,
          'verticalRatio': 0.5,
          "showXAxis":False,
          "showYAxis":False,
          "showZAxis":False,
          'cameraPosition': {
            'horizontal': 0,
            'vertical': 0.5*3.14,
            'distance': 1.8
          },
          "backgroundColor":'black',
          "legendLabel": '',
          "showLegend": True,
          "xCenter":'45%'
      }
	},
'matriceWave':{
	'visible':False,
	'data':[],
	'option':{
          'width':  '300px',
          'height': '300px',
          'style': 'surface',
          'showPerspective': True,
          'showGrid': True,
          'showShadow': False,
          'keepAspectRatio': True,
          'verticalRatio': 0.5,
          "backgroundColor":'black',
          'cameraPosition': {
            'horizontal': 0,
            'vertical': 0.5*3.14,
            'distance': 1.8
          },
          "showXAxis":False,
          "showYAxis":False,
          "showZAxis":False,
          
          'legendLabel': '',
          "showLegend":True,
          "xCenter":'40%'
        }
	},
'scatter':{
	'visible':False,
	'data':[],
	'option':{
          'width':  '300px',
          'height': '300px',
          'style': 'dot-color',
          'showPerspective': True,
          'showGrid': True,
          'keepAspectRatio': True,
          'verticalRatio': 1.0,
          'onclick': True,
          'cameraPosition': {
            'horizontal': -0.35,
            'vertical': 0.22,
            'distance': 2.2
          },
          "backgroundColor":'black',
          'legendLabel': 'Labels',
          "showLegend":True,
          "xCenter":'48%'
      }
	}
}




