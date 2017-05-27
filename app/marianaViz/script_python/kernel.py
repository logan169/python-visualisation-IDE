__author__ = 'schwartzl'

def JSONResponse(data='', error=False, message=''):
    return {
        'data': data,
        'error': error,
        'message': message
    }
