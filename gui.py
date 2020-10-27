#!/usr/bin/python3.8
import sys
import psutil
import json

newList = []
p = sorted(psutil.pids(), key=lambda x: psutil.Process(x).memory_percent(),reverse=True)
# for pid in p:
#     process = psutil.Process(pid)
#     print(process.name())
#     print(process.memory_percent())
p = p[:10]
for pid in p:
    process = psutil.Process(pid)
    newList.append({
        "name": process.name(),
        "memory": process.memory_percent()
    })
print(json.dumps(newList))
sys.stdout.flush()
# # gives a single float value
# print(psutil.cpu_percent())
# # gives an object with many fields
# print(psutil.virtual_memory())
# # you can convert that object to a dictionary 
# print(dict(psutil.virtual_memory()._asdict()))
# # you can have the percentage of used RAM
# print(psutil.virtual_memory().percent)
# # 79.2
# # you can calculate percentage of available memory
# print(psutil.virtual_memory().available * 100 / psutil.virtual_memory().total)
# # 20.8

# print (tk)
# root = tk.Tk()
# root.geometry("500x500")

# root.title("Process List")
# for pid in p:
#     process = psutil.Process(pid)
#     print(process.name())
#     print(process.memory_percent())
#     name=tk.Label(root,text=process.name())
#     percent=tk.Label(root,text=process.memory_percent())
#     name.pack()
#     percent.pack()
# root.overrideredirect(True)

# root.wait_visibility(root)
# root.wm_attributes('-alpha', 0.3)

# root.mainloop()
