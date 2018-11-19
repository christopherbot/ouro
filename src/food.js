export default new Phaser.Class({
  Extends: Phaser.GameObjects.Image,

  initialize(scene, x, y, options) {
    Phaser.GameObjects.Image.call(this, scene)

    this.setTexture('body')
    this.setPosition(x * 10, y * 10)
    this.setOrigin(0)
    this.setScale(0.044) // 10 / 255 (arbitrary num / dimension of body asset)
    this.setTint(Phaser.Display.Color.HexStringToColor(options.color).color)
    this.setAlpha(0.9)

    this.total = 0

    scene.children.add(this)
  },

  eat(amount = 1) {
    this.totalFood += amount
  },
})
