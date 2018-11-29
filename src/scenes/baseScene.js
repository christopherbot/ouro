export default class BaseScene extends Phaser.Scene {
  get gameTitle() {
    return 'Ouro'
  }

  get gameWidth() {
    return this.sys.game.config.width
  }

  get gameHeight() {
    return this.sys.game.config.height
  }

  get middleX() {
    return this.gameWidth / 2
  }

  get middleY() {
    return this.gameHeight / 2
  }

  get textStyles() {
    return {
      fontFamily: 'Cabin',
      color: '#F6FEFF',
    }
  }

  createCursorKeys() {
    return this.input.keyboard.createCursorKeys()
  }

  addKey(key) {
    return this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key])
  }

  keyJustDown(key) {
    return Phaser.Input.Keyboard.JustDown(key)
  }

  hexStringToColor(hex) {
    if (!hex.startsWith('#')) {
      console.warn(`[hexStringToColor]: ${hex} is not a valid hex string.`)

      return hex
    }

    return Phaser.Display.Color.HexStringToColor(hex).color
  }
}
