import RPi.GPIO as GPIO
import time
from subprocess import call

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

light_sensor = 11  # this is the GPIO number on the board we've plugged this into

GPIO.setup(light_sensor, GPIO.IN)
while true:
    i = GPIO.input(light_sensor)
    if i == 0
    print("No light detected, shutting down")
    time.sleep(1)
    elif i == 1
    print('Light is on, powering up!')
    time.sleep(30)
