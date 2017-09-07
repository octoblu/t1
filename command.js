#!/usr/bin/env node

require('readline').emitKeypressEvents(process.stdin)
const Controller = require('./lib/Controller')
const Robot = require('./lib/Robot')

class Command {
  constructor() {
    process.stdin.setRawMode(true)
    this.controller = new Controller()
    this.robot = new Robot()
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

    this.controller.connect((error) => {
      if (error) throw error
      console.log('Connected to controller')
    })
    this.controller.on('move', ({ turn, forward }) => this.robot.move({ turn, forward }))
  }

  exit() {
    console.log('exiting') // eslint-disable-line no-console
    this.robot.stop()
    process.exit(0)
  }
}

new Command().run()
