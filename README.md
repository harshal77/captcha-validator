# Captcha Validator
This Angular component provides captcha validation functionality, allowing you to enhance the security of your web forms and applications by protecting against automated bots and spam submissions.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Inputs
You can customize the behavior and appearance of the captcha component by providing input parameters:

`buttonName`: Title of the button (default value is "Verify").

`backgroundType`: Type of background for the captcha canvas, options are 'line' or 'blurry' (default is 'line').

`strokeColor`: Distraction line color (default is '#2F9688').

`backgroundColor`: Background color of the canvas/captcha (default is '#f2efd2').

`fontColor`: Font color for the captcha text (default is '#000000').

`fontSize`: Font size for the captcha text (default is '35px').

`message`: An object containing messages for valid and invalid captchas (default is { valid: 'Verified', invalid: 'Captcha not valid' }).

`showMessage`: Boolean flag to control whether to display the valid or invalid captcha message when the user submits the captcha (default is true).

## Captcha Types
Generate the random captcha which containe alphabets and arithmatic expressions/
`type`: 'random' | 'arithmatic' | 'alphabets' | 'alphabetSmall' | 'alphabetCapital' | 'numbers' = 'random'; 
The type parameter allows you to specify the type of captcha to generate. Available options include:
random: Generates a captcha containing alphabets and arithmetic expressions (default).
alphabets: Generates a captcha with random capital and small letters.
alphabetSmall: Generates a captcha with small letters only.
alphabetCapital: Generates a captcha with capital letters only.
numbers: Generates a captcha with random numbers.

## Output event
`captchaCode` Event: Emits a boolean value (`true` or `false`) upon captcha submission.

## Example Usage
<app-captcha-validator
  [buttonName]="'Verify'"
  [backgroundType]="'line'"
  [strokeColor]="'#2F9688'"
  [backgroundColor]="'#f2efd2'"
  [fontColor]="'#000000'"
  [fontSize]="'35px'"
  [message]="{ valid: 'Verified', invalid: 'Captcha not valid' }"
  [showMessage]="true"
  [type]="'random'"></app-captcha-validator>


---

**Thank You! 🙏 🙌**

We appreciate your interest in the Captcha Validator component. If you find this project useful or valuable, please consider giving it a star on GitHub. Your support helps us grow and improve this project for the community.

[![GitHub stars](https://img.shields.io/github/stars/harshal77/captcha-validator)](https://github.com/harshal77/captcha-validator)

Feel free to open issues, submit pull requests, or provide feedback. We welcome contributions from the community.

---
