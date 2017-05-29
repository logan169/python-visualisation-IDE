import requests
import numpy as np

def updateData(dic,url='http://127.0.0.1',view='/updateData/',port=5000):

	url = url+':'+str(port)+view
	r = requests.post(url,json=dic)

	return r.text


def formatData(array,group_size=1000):
	# a refaire
	out = []

	for y in range (len(array)):
		for x in range(len(array[y])):
			out.append({'x': x, 'y':y, 'z':array[y][x]})

	size =  len(out)
	if size > 1000:

		#add filter key for animation
		f = -1
		for i in range(len(out)):
			if i%group_size == 0:
				f+=1
			out[i]['filter'] = f*group_size

	return out

#makeRdnData('multiHist',(10,10))
def makeRndData(style,size,option={}):

	data = np.random.rand(size[0],size[1])

	o = option

	d = {
		'style': style,
		'data': formatData(data),
		'option': o
	}

	updateData(d)



makeRndData('multiHist',(20,20),option)

# animation
option = {
	'showAnimationControls': True,
	'animationInterval': 1, 
    'animationPreload': True,
}
makeRndData('multiHist',(100,500),option)


