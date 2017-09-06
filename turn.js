#!/usr/bin/env node

const Robot = require('./lib/Robot')

const robot = new Robot()
const interval = setInterval(robot.right, 100)

process.on('SIGINT', () => {
  clearInterval(interval)
  robot.stop()
})
