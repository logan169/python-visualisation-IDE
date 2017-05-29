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

        #data
        d = json.dumps(app.input)


        return flask.render_template("index.html", input= d)

    @app.route('/updateData/', methods=['POST'])
    def updateData():
            if request.method == 'POST':
                d = request.json

                style = d['style']
                #check style
                if style in ['linePlot','hist','multiHist','matrice','matriceWave','scatter']:

                    if 'visible' in d.keys():
                        app.input[style]['visible'] = d['visible']
                    if 'data' in d.keys():
                        app.input[style]['data'] = d['data']
                    if 'option' in d.keys():
                        app.input[style]['option'].update(d['option'])

                    return flask.jsonify(**K.JSONResponse(data='', error=False, message='Data updated'))

            else:
                return flask.jsonify(**K.JSONResponse(data='', error=True, message='Wrong request type, try to make a POST request'))

    @app.route('/getData/<style>',methods=['GET'])
    def getData(style):

        if style in ['linePlot','hist','multiHist','matrice','matriceWave','scatter']:
            #data
            data = {
                'visible':app.input['visible'][style] ,
                'data': app.input['data'][style],
                'option':app.input['option'][style] 
            }

            return json.dumps(data)
        elif style == 'all':
            return json.dumps(app.input)


    return app
    
    

    


