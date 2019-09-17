# blink the LED based on an input file
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

LED = 18  # The GPIO pin connected to the LED Anode through the 330Ω resistor
