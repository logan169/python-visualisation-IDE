import os
import flask
import json
from flask import Flask, render_template, request, redirect, url_for
from script_python import kernel as K
from script_python.vis import init

def App():
    # Initialize the Flask application
    app = Flask(__name__)
    #app.config.from_object('Viz.config.ConfigClass')

    app.input = init
    
    #return index.html on load
    @app.route('/')
    def index():

        return flask.render_template("index.html")

    @app.route('/updateData/', methods=['POST'])
    def updateData():
            if request.method == 'POST':
                d = request.json

                style = d['style']
                #check if style is a vis.js display
                if style in ['linePlot','hist','multiHist','matrice','matriceWave','scatter']:

                    if 'visible' in d.keys():
                        app.input[style]['visible'] = d['visible']
                    if 'data' in d.keys():
                        app.input[style]['data'] = d['data']
                    if 'option' in d.keys():
                        app.input[style]['option'].update(d['option'])

                    return flask.jsonify(**K.JSONResponse(data='', error=False, message='Data updated'))

                #check if style is a vega display
                elif style in ['barChart','lineChart','stackedBarChart','groupedBarChart','areaChart','stackedAreaChart','scatterChart','pieChart']:
                    if 'visible' in d.keys():
                        app.input[style]['visible'] = d['visible']
                    if 'json' in d.keys():
                        app.input[style]['json'] = d['json']

                    return flask.jsonify(**K.JSONResponse(data='', error=False, message='Data updated'))

            else:
                return flask.jsonify(**K.JSONResponse(data='', error=True, message='Wrong request type, try to make a POST request'))

    @app.route('/getData/<style>',methods=['GET'])
    def getData(style):

        if style in ['linePlot','hist','multiHist','matrice','matriceWave','scatter']:
            #data
            data = {
                'visible':app.input[style]['visible'],
                'data': app.input[style]['data'],
                'option':app.input[style]['option'] 
                }

            return flask.jsonify(**K.JSONResponse(data = data))


        elif style == 'all':
            return json.dumps(app.input)


         #check if style is a vega display
        elif style in ['barChart','lineChart','stackedBarChart','groupedBarChart','areaChart','stackedAreaChart','scatterChart','pieChart']:
            print 'vega'
            data={
                "visible":app.input[style]['visible'],
                "json":app.input[style]['json'],
            }

        #return flask.jsonify(**K.JSONResponse(data = json.dumps(data)))
        return flask.jsonify(**K.JSONResponse(data = data))

    return app
    
    

    


