# Logic

## AC state. num1, num2, op1, op2 empty. [0] on display

- number: start entering numbers, populate display
- decimal: zero is shifted left, decimal on display
- equals: nothing happens
- negative: nothing happens
- operator: operator > op1, ready to enter numbers

### Non [0] on display

#### difference from AC state

- negative: toggles -
- decimal: enters . if no . on display

## Operator has been pressed first time (op1 exists), no previous calculation

- number: display > num1, start entering numbers, populate display
- devimal: display > num1, 0 and decimal on display, populate display
- equals: display > num1 & num2. Calculate num2=num2;op2;num1. Num2 > display, populate.
- negative: nothing happens
- operator: replace op2

## Pr
