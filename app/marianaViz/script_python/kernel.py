__author__ = 'schwartzl'

def JSONResponse(data, error, message):
    return {
        'data': data,
        'error': error,
        'message': message
    }