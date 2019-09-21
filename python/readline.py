import serial
import time

ser = serial.Serial('/dev/ttyACM0', 9600)
val = "OFF";

while True:
	try:
		state = ser.readline()
		if state == "OFF" :
			call(["/usr/bin/vcgencmd", "display_power", "0"])
			time.sleep(1)

		if state == "ON":
			call(["/usr/bin/vcgencmd", "display_power", "1"])
			time.sleep(30)
	except KeyboardInterrupt:
		exit()
