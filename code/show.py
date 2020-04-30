from matplotlib import pyplot as plt
import json

plt.xkcd()


def read():
    with open("scores.json", "r") as f:
        return json.load(f)


print(read())

x = [list(read().keys()), list(read().values())]
print(x)
plt.bar(x[0], x[1])
plt.xlabel("MENSCHEN")
plt.ylabel("LIEGESTUETZE")

plt.show()
