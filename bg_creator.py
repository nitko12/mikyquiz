from random import randint
import numpy as np

s = '''
<line x1="0" y1="0" x2="0" y2="0" stroke="rgb(191, 64, 191, 0.7)">
    <animate
      attributeName="x1"
      values="{x1_from};{x1_to}"
      dur="{dur}"
      begin="-100s"
      repeatCount="indefinite" />
    <animate
      attributeName="y1"
      values="{y1_from};{y1_to}"
      dur="{dur}"
      begin="-100s"
      repeatCount="indefinite" />
    <animate
      attributeName="x2"
      values="{x2_from};{x2_to}"
      dur="{dur}"
      begin="-100s"
      repeatCount="indefinite" />
    <animate
      attributeName="y2"
      values="{y2_from};{y2_to}"
      dur="{dur}"
      begin="-100s"
      repeatCount="indefinite" />
  </line>'''

# s = '''
# <circle cx="0" cy="0" r="10" fill="red">
#     <animate
#       attributeName="cx"
#       values="{x1_from};{x1_to}"
#       dur="10s"
#       repeatCount="indefinite" />
#     <animate
#       attributeName="cy"
#       values="{y1_from};{y1_to}"
#       dur="10s"
#       repeatCount="indefinite" />
#   </circle>
# '''

w = 1920
h = 1080

n_lines = 500

passing = [
    np.array([randint(0, w), randint(0, h)])
    for _ in range(n_lines)
]
passing = np.array(passing)

dir = np.array([-1, 1])
path = 1000
lenth = 200

print(f'<svg width="{w}" height="{h}">')

for i in range(n_lines):
    start = passing[i] - dir * path
    start_end = start + dir * lenth
    end = passing[i] + dir * path
    end_end = end + dir * lenth

    # print(s.format(x1_from=start[0],
    #       y1_from=start[1], x1_to=end[0], y1_to=end[1]))

    print(s.format(x1_from=start[0], y1_from=start[1],
                   x2_from=start_end[0], y2_from=start_end[1],
                   x1_to=end[0], y1_to=end[1],
                   x2_to=end_end[0], y2_to=end_end[1],
                   dur=np.random.uniform(3, 10)))

print('</svg>')
