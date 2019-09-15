import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

LDR = 1 # THE GPIO pin used to connect to the LDR
GPIO.setup(LDR, GPIO.IN)