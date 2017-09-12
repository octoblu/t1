/* eslint-disable no-param-reassign */

const bindAll = require('lodash/fp/bindAll')
const Gpio = require('./Gpio')

class Motor {
  constructor({ directionPin, speedPin }) {
    bindAll(Object.getOwnPropertyNames(Motor.prototype), this)
    this.direction = new Gpio(directionPin, { mode: Gpio.OUTPUT })
    this.speed = new Gpio(speedPin, { mode: Gpio.OUTPUT })
  }

  go(speed) {
    let absoluteSpeed = Math.abs(speed)

    if (absoluteSpeed > 255) absoluteSpeed = 255

    this.direction.digitalWrite(speed > 0)
    this.speed.pwmWrite(absoluteSpeed)
  }

  stop() {
    this.go(0)
  }
}

module.exports = Motor
