/* eslint-disable no-param-reassign */

const debug = require('debug')('robot')
const bindAll = require('lodash/fp/bindAll')
const Motor = require('./Motor')
const RangeFinder = require('./RangeFinder')

class Robot {
  constructor() {
    bindAll(Object.getOwnPropertyNames(Robot.prototype), this)
    this.leftMotor = new Motor({ directionPin: 23, speedPin: 18 })
    this.rightMotor = new Motor({ directionPin: 22, speedPin: 17 })
    this.rangeFinder = new RangeFinder({ echoPin: 26, triggerPin: 20 })
    this.rangeFinder.on('distance', (distance) => {
      debug('distance', distance)
    })
  }

  backward() {
    this.leftMotor.go(-255)
    this.rightMotor.go(-255)
  }

  forward() {
    this.leftMotor.go(255)
    this.rightMotor.go(255)
  }

  left() {
    this.leftMotor.go(-255)
    this.rightMotor.go(255)
  }

  move({ left, right }) {
    this.leftMotor.go(left)
    this.rightMotor.go(right)
  }

  right() {
    this.leftMotor.go(255)
    this.rightMotor.go(-255)
  }

  stop() {
    this.leftMotor.stop()
    this.rightMotor.stop()
  }
}

module.exports = Robot
