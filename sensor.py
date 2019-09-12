import RPi.GPIO as GPIO
import time
from subprocess import call

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

light_sensor = 11  # this is the GPIO number on the board we've plugged this into

GPIO.setup(light_sensor, GPIO.IN)
while True:
    i = GPIO.input(light_sensor)
    if i == 0:
        print("No light detected, shutting down")
        #run('vcgencmd display_power 0', shell=True)
        time.sleep(1)
    elif i == 1:
        print('Light is on, powering up!')
        #run('vcgencmd display_power 1', shell=True)
        time.sleep(30)
    else:
        print('Light sensor detecting greater than 1: ', i)
