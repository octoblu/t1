#!/usr/bin/env node

const { Gpio } = require('pigpio')

const lMotor = new Gpio(17, {mode: Gpio.OUTPUT})
const rMotor = new Gpio(18, {mode: Gpio.OUTPUT})

let dutyCycle = 245;

setInterval(function () {
  lMotor.pwmWrite(dutyCycle);
  rMotor.pwmWrite(dutyCycle);
 
  dutyCycle += 1;
  if (dutyCycle > 255) {
    dutyCycle = 245;
  }
}, 20);
