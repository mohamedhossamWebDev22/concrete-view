import os
import time

print("============")
print("|| GitHub ||")
print("============")

commitMsg = str(input("Enter Commit Message: "))

commit = ('git commit -m  "' + commitMsg + '"')

commands = [
  'git add *',
  commit,
  "git push origin main"
]

for i in commands:
  print(i)
  os.system(i)

print("==================================")
time.sleep(.2)
print("Mission Passed \n Respect + 99")
time.sleep(.2)
print("Made By M7MD Hossam")
time.sleep(0.8)