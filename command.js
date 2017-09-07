#!/usr/bin/env node

require('readline').emitKeypressEvents(process.stdin)
const Robot = require('./lib/Robot')

class Command {
  constructor() {
    process.stdin.setRawMode(true)
    this.robot = new Robot()
  }

  run() {
    console.log('press "escape" to quit') // eslint-disable-line no-console

    process.stdin.on('keypress', (ignored, { name }) => {
      if (name === 'up') this.robot.forward()
      if (name === 'left') this.robot.left()
      if (name === 'right') this.robot.right()
      if (name === 'down') this.robot.stop()

      if (name === 'escape') this.exit()
    })
  }

  exit() {
    this.robot.stop()
    process.exit(0)
  }
}

new Command().run()
