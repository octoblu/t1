#!/usr/bin/env node

const { Gpio } = require('pigpio')

const lMotor = new Gpio(17, {mode: Gpio.OUTPUT})
const rMotor = new Gpio(18, {mode: Gpio.OUTPUT})

setInterval(() => {
  lMotor.pwmWrite(5)
  rMotor.pwmWrite(5)
}, 20)
