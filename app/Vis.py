import requests
import numpy as np


class Vis:

	def __init__(self,raw_input,url='http://127.0.0.1',port= 5000):

		#should be an array of value
		self.raw_input = raw_input

		# used value to switch from a regular vis to an animate vis
		self.limit_size = 1000

		self.input = {
			'style':'',
			'visible': False,
			'data':[],
			'option':{}
		}

		self.url = url
		self.port = port
		self.view = '/updateData/'



	def updateData(self,dic):

		url = self.url+':'+str(self.port)+self.view
		r = requests.post(url,json=dic)

		return r.text

	def formatData(self):
		"""Fonction thats format an array into a vis dataset
Works for histogram, multihistogram
		"""

		array = self.raw_input['data']

		out = []

		for y in range (len(array)):
			for x in range(len(array[y])):
				out.append({'x': x, 'y':y, 'z':array[y][x]})

		# compute array size and group size to use
		array_size =  len(out)
		group_size = len(array[y])

		if array_size > self.limit_size:

			#update self.input['option'] for visualisation

			#add filter key for animation
			f = -1
			for i in range(array_size):
				if i%group_size == 0:
					f+=1
				out[i]['filter'] = f*group_size

		return out

	
	def histogram(self):
		"""Fonction creating a histogram vizualisation"""
		
		hist_option = {
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

		# update hist_option if user submit options
		if 'option' in self.raw_input:
			hist_option.update(self.raw_input['options'])

		#update class attr
		self.input['style'] = 'hist'
		self.input['visible'] = True
		self.input['data'] = self.formatData()
		self.input['option'] = hist_option

		#send modification to server
		self.updateData(self.input)

	
	def multiHistogram(self):
		"""Fonction creating a vizualisation of a series of histogram"""

		multiHist_option = {
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

		# update multiHist_option if user submit options
		if 'option' in self.raw_input:
			multiHist_option.update(self.raw_input['options'])

		#update class attr
		self.input['style'] = 'multiHist'
		self.input['visible'] = True
		self.input['data'] = self.formatData()
		self.input['option'] = multiHist_option

		#send modification to server
		self.updateData(self.input)
	
	
	def linePlot(self):
		"""Fonction creating a line plot vizualisation"""

		linePlot_option={
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

		# update linePlot_option if user submit options
		if 'option' in self.raw_input:
			linePlot_option.update(self.raw_input['options'])

		#update class attr
		self.input['style'] = 'linePlot'
		self.input['visible'] = True
		self.input['data'] = self.formatData()
		self.input['option'] = linePlot_option

		#send modification to server
		self.updateData(self.input)

	
	def matrice(self):
		"""Fonction creating a matrice vizualisation"""

		matrice_option = {
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
			  'distance': 1.88
			},
			"backgroundColor":'black',
			"legendLabel": '',
			"showLegend": True,
			"xCenter":'45%'
		}

		# update matrice_option if user submit options
		if 'option' in self.raw_input:
			matrice_option.update(self.raw_input['options'])

		#update class attr
		self.input['style'] = 'matrice'
		self.input['visible'] = True
		self.input['data'] = self.formatData()
		self.input['option'] = matrice_option

		#send modification to server
		self.updateData(self.input)

	
	def matriceWave(self):
		"""Fonction creating a matrice vizualisation"""

		matriceWave_option = {
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



		# update matriceWave_option if user submit options
		if 'option' in self.raw_input:
			matriceWave_option.update(self.raw_input['options'])

		#update class attr
		self.input['style'] = 'matriceWave'
		self.input['visible'] = True
		self.input['data'] = self.formatData()
		self.input['option'] = matriceWave_option

		#send modification to server
		self.updateData(self.input)

	
	def scatterPlot3D(self):
		"""Fonction creating a 3D scatter plot vizualisation"""

		scatterPlot3D_option = {
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
			'distance': 22.2
				  },
			"backgroundColor":'black',
			'legendLabel': 'Labels',
			"showLegend":True,
			"xCenter":'48%'
		}


		# update scatterPlot3D_option if user submit options
		if 'option' in self.raw_input:
			scatterPlot3D_option.update(self.raw_input['options'])

		#update class attr
		self.input['style'] = 'scatter'
		self.input['visible'] = True
		self.input['data'] = self.formatData()
		self.input['option'] = scatterPlot3D_option

		#send modification to server
		self.updateData(self.input)


def makeRndData(size):
	return np.random.rand(size[0],size[1])

#create some data
data1 = makeRndData((1,25))
d1 = {'data' : data1}
data2 = makeRndData((25,25))
d2 = {'data' : data2}

#Create an instance and input data array
vis1 = Vis(d1)

#make vis from instance created
linePlot = vis1.linePlot()
histogram = vis1.histogram()

#Create an instance and input data array
vis2 = Vis(d2)

#make vis from instance created
multihistogram = vis2.multiHistogram()
matrice = vis2.matrice()
matriceWave = vis2.matriceWave()
scatterPlot3D = vis2.scatterPlot3D()
