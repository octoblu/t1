#!/usr/bin/env node

const { Gpio } = require('pigpio')

const lMotor = new Gpio(18, {mode: Gpio.OUTPUT})
const rMotor = new Gpio(17, {mode: Gpio.OUTPUT})

let dutyCycle = 245;

process.on('SIGINT', () => {
  setInterval(() => {
    lMotor.pwmWrite(5)
    rMotor.pwmWrite(5)
  }, 20)
  setTimeout(process.exit, 1000)
})

setInterval(function () {
  lMotor.pwmWrite(dutyCycle);
 
  dutyCycle += 1;
  if (dutyCycle > 255) {
    dutyCycle = 245;
  }
}, 20);

let go = true
setInterval(function() {
  go = !go
  rMotor.pwmWrite(go ? 255 : 0)
}, 100)
