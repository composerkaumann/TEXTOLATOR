# TEXTOLATOR

#### The calculator that uses div grid layout and is text-only.

https://learning.music.ee/calc

## Goals

- find the way to compose the layout pattern and populate divs with necessary characters
- compose the calculator layout entirely with text (monospace) and 25x20 css grid
- make the the layout dynamically scalable in real-time
- define buttons with 3 adjacent divs, also active state hilight
  -- un-hilight buttons also when while mouse down the cursor moves away from button
  -- TODO: how to un-hilight when mouse in down state moves out of browser window and then is released?
- make the keyboard work
- rounding: find a way to analyse the result and round the number dynamically accordingly to fit the display
- find the way to populate the display divs
- make logic work in different case scenarios and key sequences

### Neglected

- aborted the idea of using precise JS decimal calculations. No actual need, skipped using libraries.
- tried to convert to TypeScript but aborted the mission: too much is depending of JS loose typing. Next time.
