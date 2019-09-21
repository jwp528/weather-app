import serial
import time

ser = serial.Serial('/dev/ttyACM0', 9600)
val = "OFF";

while True:
	try:
		state = ser.readline()
		if state == "OFF" :
			time.sleep(1)

		if state == "ON":
			time.sleep(30)
	except KeyboardInterrupt:
		exit()
