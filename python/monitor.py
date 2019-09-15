import time
from subprocess import call

call(["/usr/bin/vcgencmd", "display_power", "0"])
time.sleep(5)
call(["/usr/bin/vcgencmd", "display_power", "1"])
time.sleep(3)
print("successfully controlled monitor based on python script")