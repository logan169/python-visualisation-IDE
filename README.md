# Python2-visualisation-IDE

This project's aim to encapsulate different javacript visualization librairie (Vis.js and Vega-Lite using [vincent](https://vincent.readthedocs.io/en/latest) ) and allow users to create different visualizations from server side and display them in your web application as easily as possible.

## Why it is cool

Using library like Vis.js you could display and explore your dataset in a 3D space. After an arbitrary decided amount of sample points, you could choose t switch to a timelaps animation visualization keeping the possibility to keep exploring your dataset while having several hundred thousand samples points. You could check video0.mp4 for an example with a random number matrice of size 5000,5000 (250 000 samples points) displaying data one row at a time. On the other hand, if you don't need the 3D feature you could also use Vega to create standard 2D visualizations in svg/png format. 

## Available display

- Vis:
    - 3D scatter plot
    - Matrice 
    - Wave matrice
    - Histogram
    - Multi-histogram
    - plot (at this time you can't plot more than 1 line)

- Vega-lite/vincent:
    - Line chart
    - Bar chart
    - Stacked bar chart
    - Area chart
    - Grouped bar chart
    - Scatter chart
    - Pie chart    
    
## installation

    $ git clone git@github.com:logan169/python-visualisation-IDE.git
    $ pip install vincent

## Demonstration

From app folder, launch python server by typing:

    $ python run_server.py

For demonsatration purpose type following comands to create visualizations examples: 

    $ python Vis.py # example file showing how to create Vis visualization by making some visualizations
    $ python vin.py # example file showing how to create vega-lite/vincent visualization by making some visualizations
    
Connect to url written in your terminal (default is 127.0.0.1:5000) to see different display

## How to display your data

From app folder, launch python server by typing:

    $ python run_server.py
    
Connect to url written in your terminal (default is 127.0.0.1:5000) to see different display

From a ipython terminal opened from your app folder import dependencies by typing:

    $ import requests
    $ import numpy as np    
    $ import random
    $ import vincent as vin
    $ from vincent import AxisProperties, PropertySet, ValueRef
    
Import class:

    $ from Vis import Vis
    $ from vin import Vega
    
### Making vis.js visualizations :
    
Now we generate random data to display

    $ def makeRndData(size):
	      return np.random.rand(size[0],size[1])

    $ data1 = makeRndData((1,25))
    $ data2 = makeRndData((101,101))
    $ data3 = makeRndData((1001,3))
    $ label = label = np.arange(1001)
    $ data4 = makeRndData((10,10))
    
We use generated variables to fill up input dictionary and instanciate a Vis instance of those data.
    
    $ d1 = {'data' : data1}
    $ d2 = {'data' : data2}
    $ d4 = {'data' : data4}
    $ d3 = {'data' : data3,'label':label} # 'label' key is added for 3D scatter plot
    
    $ vis1 = Vis(d1) # one dimensional dataset
    $ vis2 = Vis(d2) # multi dimensional dataset
    $ vis3 = Vis(d3) # dataset is a matrice of size (n_sample, 3)
    $ vis4 = Vis(d4) # multi dimensional dataset

Note that you could also pass a key 'option' containing a personalized option dict. All available option could be find on this [page](http://visjs.org/docs/graph3d/#Configuration_Options). Once we instanciate a Vis object with a dataset we could use this object to display data using one or different visualizations. Once done refresh your browser to update visualization.
    
    $ d1_line = vis1.linePlot() # plot a line
    $ d1_hist = vis1.histogram() # make an histogram
    
![line](/picts/line.png)
![hist](/picts/hist.png)
    
    $ d2_multiHist = vis2.multiHistogram() #make a multi histogram
![multi histogram](/picts/multiHist.png)

Note that this dataset is higher than the Vis object attribut limit_size (def: 1000) so data are displayed as an animation.
You could change this with:
    
    $ vis2.limit_size = 5000 # change limit to 5000 

    $ d4_matrice = vis4.matrice() # make a heat map matrix
    $ d4_matriceWave = vis4.matriceWave() # make a 3D heat map matrix
    
![matrice](/picts/matrice.png)
![wave](/picts/wave.png)
    
    $ d3_scatterPlot3D = vis3.scatterPlot3D() # Create a 3d scatterplot of dataset
 
 ![wave](/picts/scatter.png)
    

### Making vega-lite/vincent visualizations :
    
First we generate some data

    $ Std list
    list_data = [1,2,3,4,5,6]
    
    #Dicts of iterables
    cat_1 = ['y1', 'y2', 'y3', 'y4']
    
    index_1 = range(0, 21, 1)
    multi_iter1 = {'index': index_1}
	
    for cat in cat_1:
	multi_iter1[cat] = [random.randint(10, 100) for x in index_1]

In order to make a vega-lite visualization, we will need to add an 'option' key to our input dictionary as follow.

    $ options={
	'size':{
		'height':400,
		'width':400
		},
	'axis_titles':{
		'x':'Index',
		'y':'Value'
		},
	'rotate axis label':{
		'x':0,
		'y':0
		},
	'legend title':'',
	'colors':'', #could be find at https://github.com/wrobstory/vincent/blob/master/vincent/colors.py
	'padding':{
		'x':0,
		'y':0
		}
    }
 
    d1 = {
	'data':data1,
	'options':options
    }
    
    d2 = {
	'data':multi_iter1,
	'options':options
    }
    
    
Now we make some vega objects from d1 and d2 and use them to generate visualizations

    $ vg1 = Vega(d1)
    vg2 = Vega(d2)


	barChart1 = vg1.barChart() # make a bar chart
![barChart1](/picts/barChart.png)

	lineChart = vg1.lineChart() # make a line 
![lineChart](/picts/lineChart.png)

	areaChart = vg1.areaChart() # make an area chart
![areaChart](/picts/areaChart.png)
	
	pieChart = vg1.pieChart() # make a pie chart
![pieChart](/picts/pieChart.png)

	stackedBarChart = vg2.barChart(key='y1') # make a stacked bar chart chart
![stackedBarChart](/picts/stackedBarChart.png)

	multiLines = vg2.lineChart(iter_idx='index') # plot several lines
![multiLinPlot](/picts/multiLinPlot.png)

	stackedAreas = vg2.stackedAreaChart(iter_idx='index') # make a stacked area chart
![stackedAreaChart](/picts/stackedAreaChart.png)

	stackedBar = vg2.stackedBarChart(iter_idx='index') # make a stacked bar chart
![stackedAreaChart](/picts/stackedAreaChart.png)

	groupedBar = vg2.groupedBarChart(iter_idx='index') # make an area chart
![groupedHist](/picts/groupedHist.png)

	scatter = vg2.scatterChart(iter_idx='index') # make a 2D scatter plot
![scatterPlot](/picts/scatterPlot2.png)

