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

        #data
        d = json.dumps([{'x':1, 'y':0, 'z': 1},{'x':2, 'y':0, 'z': 2},{'x':3, 'y':0, 'z': 1},{'x':4, 'y':0, 'z': 2}])
        print flask.jsonify(d)

        return flask.render_template("index.html", input= d)
        
    return app
    
    

    


