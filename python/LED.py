import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT)

try:
    while True:
        GPIO.output(18, GPIO.HIGH)
        print("LED ON")
        time.sleep(.1)
        GPIO.output(18, GPIO.LOW)
        print("LED OFF")
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()
