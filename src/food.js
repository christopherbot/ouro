export default new Phaser.Class({
  Extends: Phaser.GameObjects.Image,

  initialize(scene, x, y, options) {
    this.scene = scene
    Phaser.GameObjects.Image.call(this, scene)

    this.setTexture('body')
    this.setPosition(x * 10, y * 10)
    this.setOrigin(0)
    this.setTint(options.color)
    this.setAlpha(0.9)

    this.total = 0

    scene.children.add(this)
  },

  eat(amount = 1) {
    this.totalFood += amount

    const x = Phaser.Math.Between(0, (this.scene.gameWidth / 10) - 1)
    const y = Phaser.Math.Between(0, (this.scene.gameHeight / 10) - 1)

    this.setPosition(x * 10, y * 10)
  },
})
