const bindAll = require('lodash/fp/bindAll')
const Motor = require('./Motor')

class Robot {
  constructor() {
    bindAll(Object.getOwnPropertyNames(Robot.prototype), this)
    this.leftMotor = new Motor({ pin: 18 })
    this.rightMotor = new Motor({ pin: 17 })
  }

  backward() {
    throw new Error('Not Implemented') // needs the sign bit
  }

  forward() {
    this.leftMotor.go(255)
    this.rightMotor.go(255)
  }

  left() {
    this.leftMotor.go(255)
    this.rightMotor.stutter(255, 20)
  }

  right() {
    this.leftMotor.stutter(255, 20)
    this.rightMotor.go(255)
  }

  stop() {
    this.leftMotor.stop()
    this.rightMotor.stop()
  }
}

module.exports = Robot
