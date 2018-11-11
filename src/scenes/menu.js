export default class Menu extends Phaser.Scene {
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

  get menuTitle() {
    return 'Menu'
  }

  addMenuTitle() {
    this.add.text(
      this.middleX,
      50,
      this.menuTitle,
      { fill: '#0F0' }
    ).setOrigin(0.5, 1)
  }

  preload() {}

  create() {
    this.addMenuTitle()
  }

  update() {}
}
