# Logic

## 1.0 AC state. num1, num2, numRes, op empty. [0] on display

- number: display > num1, displArray cleared, ready entering numbers, populate display
- decimal: zero is shifted left, decimal on display
- equals: nothing happens
- negative: nothing happens
- operator: operator > op, ready to enter numbers

### 1.1 Non [0] on display

#### difference from AC state 1.0

- negative: toggles -
- decimal: enters . if no . on display

## 2.0 Operator has been pressed first time (op1 exists), no previous calculation

- number: display > num2, displArray cleared, start entering numbers, populate display
- decimal: display > num2, 0 and decimal on displayArray, ready entering numbers, populate display
- equals: display > num1 & num2. Calculate: numRes=num2;op;num2. NumRes > display, populate display. Num1 intact.
- negative: nothing happens
- operator: replace op1

## 3.0 Previous calculation exists

- number: displayArray cleared, start entering numbers, populate display
- decimal: 0 and decimal on displayArray, ready entering numbers, populate display
- equals: Calculate: numRes=num1;op;num2. NumRes > display, populate. Num2 intact.
- negative: nothing happens
- operator: replace op1

## Decimal

- after operator or =: stores display value num, clears display, starts with 0. Display refresh.
- after a number pushes . if no . on display. Display refresh.

## Number

- after a number pushes number if there is space
- after operator or =: stores display value num, clears display

## Negative

- toggles state only between number and . entry and operator or 0

## C

- clears all

## Operator

- IF (number, operator, number entered)
  --triggers calculation
  -- rewrites op field
- IF (number entered)
  --rewrites op field

## Equal

- IF (op empty)
  -- null
- ## IF (op exists)
  -- calculates
