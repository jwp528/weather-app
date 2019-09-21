import serial
from subprocess import call

ser = serial.Serial('/dev/ttyACM0', 9600)

while True:
    try:
        state = ser.readline().strip()
        if state == 'OFF':
            call('vcgencmd display_power 0', shell=True)

        if state == 'ON':
            call('vcgencmd display_power 1', shell=True)

    except KeyboardInterrupt:
        exit()

