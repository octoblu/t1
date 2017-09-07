/* eslint-disable no-param-reassign */

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
    this.leftMotor.go(0)
    this.rightMotor.go(255)
  }

  move({ left, right }) {
    this.leftMotor.go(left)
    this.rightMotor.go(right)
  }

  right() {
    this.leftMotor.go(255)
    this.rightMotor.go(0)
  }

  stop() {
    this.leftMotor.stop()
    this.rightMotor.stop()
  }
}

module.exports = Robot
