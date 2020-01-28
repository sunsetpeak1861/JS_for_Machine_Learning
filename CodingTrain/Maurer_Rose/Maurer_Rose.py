import math, turtle

screen = turtle.Screen()
screen.setup(width=800, height=800, startx=0, starty=0)
screen.bgcolor('black')
pen = turtle.Turtle()
pen.speed(20)
n = 3
d = 71

pen.color('blue')
pen.pensize(0.5)
for theta in range(361):
    k = 0.5 * theta * d * math.pi / 180
    r = 300 * math.sin(n * k)
    x = r * math.cos(k)
    y = r * math.sin(k)
    pen.goto(x, y)

pen.color('red')
pen.pensize(4)
for theta in range(361):
    k = theta * math.pi / 180
    r = 300 * math.sin(n * k)
    x = r * math.cos(k)
    y = r * math.sin(k)
    pen.goto(x, y)
    
# for theta in range(3610):
#     n += 0.01
#     d += 0.01

