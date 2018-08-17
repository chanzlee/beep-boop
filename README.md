# _Beep Boop (HAL 9000 Counting Numbers)_

#### _August 17, 2018_

#### By _**Chan Lee**_

## Description

_This Webpage will take a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:
Numbers that contain a 0 are replaced (all digits) with "Beep!"
Numbers that contain a 1 are replaced (all digits) with "Boop!"
Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."_

## Setup/Installation Requirements

* Clone the repository.
* Open index.html in a web browser.

## Known Bugs

_None_

## Support and contact details

chanethanlee@gmail.com_

## Specs

| | Spec | Input | Output |
| :-------------     | :-------------     | :------------- | :------------- |
| 1 |The program detects any 0, 1 in the number input and return true if it detects._  | 40 | true |
| 2 |The program detects number input that is divisible by 3 and return true if it detects._  | 3 | true |
| 3 | Program replaces number containing a 0 to "Beep!"  | 0 | _"Beep!"_ |
| 4 | Program replaces number containing a 1 with "Boop!" | 1 | _"Boop!"_ |
| 5 | Program replaces number containing divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that." | 3 | "I'm sorry, Dave. I'm afraid I can't do that." |
| 6 | Program returns results for range of numbers from 0 to the chosen number_ | 3 | I'm sorry, Dave. I'm afraid I can't do that. Boop! 2 I'm sorry, Dave. I'm afraid I can't do that. |
| 7 | If there are multiple detection for 0, 1, 3, the program overrides the result of detecting special numbers by following order: 3, 1, 0 | 310 | ... I'm sorry, Dave. I'm afraid I can't do that. |
| 8 | If user returns name input, use it to replace the default value, "Dave". | 3 | I'm sorry, [nameInput]. I'm afraid I can't do that. |
| 9 | The program denies input other than number. | /,$a0 | This conversation can serve no purpose anymore. |

## Technologies Used

_HTML / CSS / javaScript_

### License

Under the license of _Simon Lepel_ , https://github.com/simbo

Copyright (c) 2018 **_Chan Lee_**
