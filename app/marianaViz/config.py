import os

class ConfigClass(object):
    # Flask settings
    DEBUG = os.getenv('DEBUG',True)
    SECRET_KEY = os.getenv('SECRET_KEY','1+1=3')
