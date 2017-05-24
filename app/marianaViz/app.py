import os
import flask
import json
from flask import Flask, render_template, request, redirect, url_for,Markup
import script_python.kernel as K



def App():
    # Initialize the Flask application
    app = Flask(__name__, static_folder='front')
    app.config.from_object('marianaViz.config.ConfigClass')
    
    #return index.html on load
    @app.route('/')
    def index():
      return flask.send_from_directory(app.static_folder,"matrice.html")
      #return flask.send_from_directory(app.static_folder,"lala.html")
      
    
    #return mariana information
    @app.route('/view/<v>/', methods=['GET'])
    def changeView(v):
        
        print (v) # for testing

        if v == 'matrice':
            resp = Markup("<h1>Voila! Platform is ready to used</h1>")
            
        return flask.jsonify(**K.JSONResponse(data = resp, error = False,message = ''))
        
        

    return app


