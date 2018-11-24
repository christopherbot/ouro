export default new Phaser.Class({
  Extends: Phaser.GameObjects.Image,

  initialize(scene, x, y, options) {
    this.scene = scene
    Phaser.GameObjects.Image.call(this, scene)

    this.color = options.color
    this.size = options.size || 10
    this.scale = this.size / 10 // the `body` asset is 10x10

    this.setTexture('body')
    this.setPosition(x * this.size, y * this.size)
    this.setScale(this.scale)
    this.setOrigin(0)
    this.setTint(this.color)
    this.setAlpha(0.9)

    this.total = 0

    scene.children.add(this)
  },

  eat(amount = 1) {
    this.totalFood += amount

    const x = Phaser.Math.Between(0, (this.scene.gameWidth / this.size) - 1)
    const y = Phaser.Math.Between(0, (this.scene.gameHeight / this.size) - 1)

    this.setPosition(x * this.size, y * this.size)
  },
})
