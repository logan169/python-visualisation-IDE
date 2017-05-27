import os
import flask
import json
from flask import Flask, render_template, request, redirect, url_for
from script_python import kernel as K


def App():
    # Initialize the Flask application
    app = Flask(__name__)
    app.config.from_object('marianaViz.config.ConfigClass')
    
    #return index.html on load
    @app.route('/')
    def index():

        d = json.dumps([{'x':1, 'y':0, 'z': 1},{'x':2, 'y':0, 'z': 2}])
        print flask.jsonify(d)
        return flask.render_template("histogram.html", input= d)
    
        #return flask.send_from_directory(app.static_folder,"matriceWave.html")
        #return flask.send_from_directory(app.static_folder,"multiHistogram.html")
        #return flask.send_from_directory(app.static_folder,"3D_ScatterPlot.html")
        #return flask.send_from_directory(app.static_folder,"matrice.html")
        #return flask.send_from_directory(app.static_folder,"lala.html")
    
    
    #return mariana information
    @app.route('/view/<v>/', methods=['GET'])
    def changeView(v):
        
        print (v) # for testing

        if v == 'matrice':
            resp = ("<h1>Voila! Platform is ready to used</h1>")
            
        return flask.jsonify(**K.JSONResponse(data = resp,error=False,message=''))
        
        

    return app


