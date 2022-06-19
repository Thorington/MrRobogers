# _Indepedent Project #3: Mr. Roboger's Neighborhood_

#### Contributors: _**Claire Thorington**_

#### _A page demonstrating new skills in JavaScript and jQuery!_


## Technologies Used

* HTML
* CSS
* Markdown
* JavaScript
* jQuery

## Description

This page asks the user for a number and returns a range of numbers from 0 to the user's number with the following substitutions made within the returned range:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Tests

# _Describe: output(number)_

| Test Description  | Input Example (Code) | Expected Output Example |
| ------------- | ------------- | ------------- |
| "It should return an array of numbers from 0 to the user's number"  | output(5); | [0, 1, 2, 3, 4, 5] |
| "It should replace resulting numbers that contain a 1 with "Beep!" | output(5); | [0, "Beep!", 2, 3, 4, 5] |
| "Additionally, it should replace resulting numbers that contain a 2 with "Boop!"  | output(5); | [0, "Beep!", "Boop!", 3, 4, 5] |
| "Additionally, it should replace resulting numbers that contain a 3 with "Won't you be my neighbor?"  | output(5); | [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5] |

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* None!

## License

_MIT_

Copyright (c) _2022_ _Claire Thorington_