import vincent as vin
from vincent import AxisProperties, PropertySet, ValueRef
import requests



class Vega:

	def __init__(self,raw_input,url='http://127.0.0.1',port= 5000):

		#should be an array of value
		self.raw_input = raw_input['data']
		self.options = raw_input['options']

		self.input = {
			'style':'',
			'visible': False,
			'json':{}
		}

		self.url = url
		self.port = port
		self.view = '/updateData/'

	def updateOptions(self, i, piechart=False):
		"""Fonction updating json with options dict"""
		
		if piechart is False:
			#set axis titles
			i.axis_titles(x=self.options['axis_titles']['x'], y=self.options['axis_titles']['y'])

			#rotate axis labels
			rx = AxisProperties(labels = PropertySet(angle=ValueRef(value=self.options['rotate axis label']['x'])))
			i.axes[0].properties = rx
			ry = AxisProperties(labels = PropertySet(angle=ValueRef(value=self.options['rotate axis label']['y'])))
			i.axes[1].properties = ry

			#set padding between bar
			i.scales['x'].padding = self.options['padding']['x']
			i.scales['y'].padding = self.options['padding']['y']

		#set visualization size
		# pie chart don't resize under a certain value
		i.width = self.options['size']['height']
		i.height = self.options['size']['width']

		#set legend title
		i.legend(title=self.options['legend title'])

		#change colorset
		if self.options['colors'] != '':
			i.colors(brew=self.options['colors'])

		return i


	def updateData(self,dic):
		#send request to server
		url = self.url+':'+str(self.port)+self.view
		r = requests.post(url,json=dic)

		return r.text


	def lineChart(self, iter_idx=None):
		"""Fonction creating a line Chart vizualisation"""
		#update class attr
		self.input['style'] = 'lineChart'
		self.input['visible'] = True
		#create json
		if iter_idx is None:
			out = vin.Line(self.raw_input)
		else:
			out = vin.Line(self.raw_input,iter_idx = iter_idx)
		#modify json with options
		out = self.updateOptions(out)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)


	def barChart(self, key=None):
		"""Fonction creating a bar Chart vizualisation"""
		#update class attr
		self.input['style'] = 'barChart'
		self.input['visible'] = True
		#create json
		if key is None:
			out = vin.Bar(self.raw_input)
		else:
			out = vin.Bar(self.raw_input[key])
		#modify json with options
		out = self.updateOptions(out)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)

	def stackedBarChart(self, iter_idx=None):
		"""Fonction creating a bar Chart vizualisation"""
		#update class attr
		self.input['style'] = 'stackedBarChart'
		self.input['visible'] = True
		#create json
		if iter_idx is None:
			out = vin.StackedBar(self.raw_input)
		else:
			out = vin.StackedBar(self.raw_input,iter_idx = iter_idx)
		#modify json with options
		out = self.updateOptions(out)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)


	def groupedBarChart(self, iter_idx=None):
		"""Fonction creating a bar Chart vizualisation"""
		#update class attr
		self.input['style'] = 'groupedBarChart'
		self.input['visible'] = True
		#create json
		if iter_idx is None:
			out = vin.GroupedBar(self.raw_input)
		else:
			out = vin.GroupedBar(self.raw_input,iter_idx = iter_idx)
		#modify json with options
		out = self.updateOptions(out)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)

	def areaChart(self, key=None):
		"""Fonction creating an area Chart vizualisation"""
		#update class attr
		self.input['style'] = 'areaChart'
		self.input['visible'] = True
		#create json
		if key is None:
			out = vin.Area(self.raw_input)
		else:
			out = vin.Area(self.raw_input[key])
		#modify json with options
		out = self.updateOptions(out)
		
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)

	def stackedAreaChart(self, iter_idx=None):
		"""Fonction creating an several stacked Chart vizualisation"""
		#update class attr
		self.input['style'] = 'stackedAreaChart'
		self.input['visible'] = True
		#create json
		if iter_idx is None:
			out = vin.StackedArea(self.raw_input)
		else:
			out = vin.StackedArea(self.raw_input,iter_idx = iter_idx)
		#modify json with options
		out = self.updateOptions(out)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)

	def scatterChart(self, iter_idx=None):
		"""Fonction creating a scatter Chart vizualisation"""
		#update class attr
		self.input['style'] = 'scatterChart'
		self.input['visible'] = True
		#create json
		if iter_idx is None:
			out = vin.Scatter(self.raw_input)
		else:
			out = vin.Scatter(self.raw_input,iter_idx = iter_idx)
		#modify json with options
		out = self.updateOptions(out)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)

	def pieChart(self, key=None):
		"""Fonction creating a pie Chart vizualisation"""
		#update class attr
		self.input['style'] = 'pieChart'
		self.input['visible'] = True
		#create json
		if key is None:
			out = vin.Pie(self.raw_input)
		else:
			out = vin.Pie(self.raw_input[key])
		#modify json with options
		out = self.updateOptions(out,piechart=True)
		#get data to json string format
		self.input['json'] = out.to_json()
		#send modification to server
		self.updateData(self.input)





##########################################################

options={
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

#Iterable
list_data = [1,2,3,4,5,6]

d1 = {
	'data':list_data,
	'options':options
}

vg1 = Vega(d1)
barChart1 = vg1.barChart()
lineChart = vg1.lineChart()
areaChart = vg1.areaChart()
pieChart = vg1.pieChart()


import random
#Dicts of iterables
cat_1 = ['y1', 'y2', 'y3', 'y4']
index_1 = range(0, 21, 1)
multi_iter1 = {'index': index_1}
for cat in cat_1:
    multi_iter1[cat] = [random.randint(10, 100) for x in index_1]


d2 = {
	'data':multi_iter1,
	'options':options
}

#passing data and key i want to use for index
vg2 = Vega(d2)

barChart2 = vg2.barChart(key='y1')
multiLines = vg2.lineChart(iter_idx='index')
stackedAreas = vg2.stackedAreaChart(iter_idx='index')
stackedBar = vg2.stackedBarChart(iter_idx='index')
groupedBar = vg2.groupedBarChart(iter_idx='index')
scatter = vg2.scatterChart(iter_idx='index')


