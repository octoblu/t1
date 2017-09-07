const { EventEmitter } = require('events')
const HID = require('node-hid')

const PRODUCT_ID = 654
const VENDOR_ID = 1118

class XboxController extends EventEmitter {
  constructor() {
    super()
    try {
      this.controller = new HID.HID(VENDOR_ID, PRODUCT_ID)
    } catch (error) {
      return
    }

    this.controller.on('data', (data) => {
      console.log('data', data)
      const bytes = data.slice(6, 10)

      const x = bytes[0]
      const y = 255 - bytes[2]
      // this.emit('leftStick', { x, y })
    })
  }
}

module.exports = XboxController
