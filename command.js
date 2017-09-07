#!/usr/bin/env node

require('readline').emitKeypressEvents(process.stdin)
const XboxController = require('./lib/XboxController')
const Robot = require('./lib/Robot')

class Command {
  constructor() {
    process.stdin.setRawMode(true)
    this.robot = new Robot()
    this.xboxController = new XboxController()
  }

  run() {
    console.log(`press "escape" to quit (PID: ${process.pid})`) // eslint-disable-line no-console

    process.stdin.on('keypress', (ignored, { name }) => {
      if (name === 'up') this.robot.forward()
      if (name === 'left') this.robot.left()
      if (name === 'right') this.robot.right()
      if (name === 'down') this.robot.stop()

      if (name === 'escape') this.exit()
    })

    this.xboxController.on('leftStick', ({ x, y }) => {
      this.robot.move({ turn: x, forward: y })
    })
  }

  exit() {
    console.log('exiting')
    this.robot.stop()
    process.exit(0)
  }
}

new Command().run()
