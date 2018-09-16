
import sys
import json
import time
import config
import picamera
import signal
import datetime
import os
import glob



def to_node(type, message):
    # convert to json and print (node helper will read from stdout)
    try:
        print(json.dumps({type: message}))
    except Exception:
        pass
    # stdout has to be flushed manually to prevent delays in the node helper communication
    sys.stdout.flush()

# get Picamera or webcam
camera.picamera.PiCamera()

def shutdown():
    to_node("status", 'Shutdown: Cleaning up camera...')
    camera.close()
    quit()

signal.signal(signal.SIGINT, shutdown)


def takeSelfie():
    filename = config.path_to_file + '/selfie_a.jpg'
    camera.start_preview()
    time.sleep(3)
    image = camera.capture(filename)
    camera.stop_preview()
    to_node("status", 'Selfie taken')
    return filename

# Main Loop
takeSelfie()
shutdown()
