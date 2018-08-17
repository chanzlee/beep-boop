# _Beep Boop_

#### _Leap Year, August 17, 2018_

#### By _**Chan Lee**_

## Description

_This Webpage will take a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:
Numbers that contain a 0 are replaced (all digits) with "Beep!"
Numbers that contain a 1 are replaced (all digits) with "Boop!"
Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
_

## Setup/Installation Requirements

* Open file in a web browser.
* Clone the repository.

## Known Bugs

_None._

## Support and contact details

chanethanlee@gmail.com_

## Specs
The program detects any 0, 1, 3 in the number input and return true if it detects.

Example Input: 40
Example Output: true

The program print out relevant results for each numbers:
Numbers that contain a 0 : Beep!
Numbers that contain a 1 : Boop!
Numbers divisible by 3 : I'm sorry, Dave. I'm afraid I can't do that.

Example Input: 1
Example Output: Boop!


If there are multiple detection for 0, 1, 3, the program overrides the result of detecting special numbers by following order: 3, 1, 0.

Example Input: 103
Example Output: I'm sorry, Dave. I'm afraid I can't do that.

The program denies input other than number.

Example Input: /,$a0
Example Output: Invalid Input


## Technologies Used

_HTML / CSS / javaScript_

### License

Copyright (c) 2018 **_ Chan Lee_**
