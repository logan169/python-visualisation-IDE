# Python2-visualisation-IDE

This project's aim to encapsulate different javacript visualization librairie (Vis.js) and allow users create different visualization displays from  python2 web application as easily as possible.

## Why it is cool

Using library like Vis.js you could display and explore your dataset in a 3D space. After an arbitrary decided amount of sample points, you could choose t switch to a timelaps animation visualization keeping the possibility to keep exploring your dataset while having several hundred thousand samples points. You could check video0.mp4 for an example with a random number matrice of size 5000,5000 (250 000 samples points) displaying data one row at a time.

## Available display

- 3D scatter plot
- Matrice 
- Wave matrice
- Histogram
- Multi-histogram
- plot (at this time you can't plot more than 1 line)

## installation

    $ git clone git@github.com:logan169/python-visualisation-IDE.git

## How it works

From app folder, launch python server by typing:

    $ python run_server.py
    $ python Vis.py
    
Connect to url written in your terminal (default is 127.0.0.1:5000) to see different display

## How to change data displayed

From a ipython terminal opened from your app folder type:

    $ import requests
    $ import numpy as np
    $ from Vis import Vis
    
Now we generate random data for example purpose 

    $ def makeRndData(size):
	      return np.random.rand(size[0],size[1])

    $ data1 = makeRndData((1,25))
    $ data2 = makeRndData((101,101))
    $ data3 = makeRndData((1001,3))
    $ label = label = np.arange(1001)
    $ data4 = makeRndData((10,10))
    
We use those variables to fill up input dict and instanciate a Vis instance of those data
    
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
    

    
    
     
    
    

