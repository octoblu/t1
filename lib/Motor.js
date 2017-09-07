/* eslint-disable no-param-reassign */

const bindAll = require('lodash/fp/bindAll')
const Gpio = require('./Gpio')

class Motor {
  constructor({ pin }) {
    bindAll(Object.getOwnPropertyNames(Motor.prototype), this)
    this.gpio = new Gpio(pin, { mode: Gpio.OUTPUT })
  }

  go(speed) {
    if (speed > 255) speed = 255
    if (speed < 0) speed = 0

    this.gpio.pwmWrite(speed)
  }

  stop() {
    this.go(0)
  }
}

module.exports = Motor
