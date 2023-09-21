import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit, OnChanges {

  @Input() buttonName = 'Verify';
  @Input() backgroundType: 'line' | 'blurry' = 'line';
  @Input() strokeColor = '#2F9688';
  @Input() backgroundColor = '#f2efd2';
  @Input() fontColor = '#000000';
  @Input() fontSize = '35px';
  @Input() type: 'random' | 'arithmatic' | 'alphabets' | 'alphabetSmall' | 'alphabetCapital' | 'numbers' = 'random';
  @Input() message: { valid: string, invalid: string } = { valid: 'Verified', invalid: 'Captcha not valid' };
  @Input() showMessage = true;
  @Output() captchaCode = new EventEmitter();

  captchInput = '';
  code: any = null;
  resultCode: any = null;
  randomNumber = 1;
  validCaptcha: any = null;
  captchaLength = 7;

  ngOnInit(): void {
    this.createCaptcha();
  }

  ngOnChanges() {
    this.createCaptcha();
  }

  createCaptcha() {
    if (this.type === 'numbers') {
      this.code = this.resultCode = this.generateRandomNumberString();
    } else {
      let characters = '';
      switch (this.type) {
        case 'alphabets':
          characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        case 'alphabetSmall':
          characters = 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'alphabetCapital':
          characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        case 'arithmatic':
          const firstNumber = Math.floor(Math.random() * 99);
          const sencondNumber = Math.floor(Math.random() * 9);
          const operators = ['+', '-'];
          const operator = operators[(Math.floor(Math.random() * operators.length))];
          this.code = firstNumber + operator + sencondNumber + '=?';
          this.resultCode = (operator == '+') ? (firstNumber + sencondNumber) : (firstNumber - sencondNumber);
          break;
        default:
          characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      }
      if (this.type !== 'arithmatic') {
        this.code = this.resultCode = this.generateRandomString(this.captchaLength, characters);
      }
    }
    this.createCanvas();
  }

  generateRandomNumberString() {
    const min = 1000000; // Minimum 7-digit number (1,000,000)
    const max = 9999999; // Maximum 7-digit number (9,999,999)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('randomNumber', randomNumber);
    return randomNumber.toString();
  }

  generateRandomString(length: number, characters: string) {
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }

  createCanvas() {
    let captcahCanvas: any = document.getElementById('captcahCanvas');
    let ctx = captcahCanvas?.getContext('2d');
    captcahCanvas.width = 300;
    captcahCanvas.height = 100;
    ctx.fillStyle = this.backgroundColor;
    if (this.backgroundType === 'blurry') {
      ctx.filter = 'blur(2px)';
    }
    ctx.fillRect(0, 0, captcahCanvas.width, captcahCanvas.height);
    ctx.beginPath();
    captcahCanvas.style.letterSpacing = '10px';
    ctx.font = `${this.fontSize} Arial`;
    ctx.fillStyle = this.fontColor;
    ctx.textBaseline = 'middle';
    ctx.fillText(this.code, 40, 50);

    if (this.strokeColor && this.backgroundType === 'line') {
      ctx.strokeStyle = this.strokeColor;
      for (let i = 0; i < 50; i++) {
        ctx.moveTo(Math.random() * captcahCanvas.width, Math.random() * captcahCanvas.height);
        ctx.lineTo(Math.random() * captcahCanvas.width, Math.random() * captcahCanvas.height);
      }
      ctx.stroke();
    }
    this.validCaptcha = null;
    this.captchInput = '';
  }

  checkCaptcha() {
    this.validCaptcha = false;
    if (this.type !== 'arithmatic') {
      this.validCaptcha = this.captchInput === this.resultCode;
    } else {
      this.validCaptcha = +this.captchInput === this.resultCode;
    }
    this.captchaCode.emit(this.validCaptcha);
  }

}
