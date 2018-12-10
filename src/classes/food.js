export default class Food extends Phaser.GameObjects.Image {
  constructor(scene, x, y, options = {}) {
    super(scene, x, y)
    this.scene = scene
    Phaser.GameObjects.Image.call(this, scene)

    this.color = options.color
    this.bounds = options.bounds
    this.size = options.size || 16
    this.scale = this.size / 10 // the `body` asset is 10x10

    this.setTexture('body')
    this.setPosition(x * this.size, y * this.size)
    this.setScale(this.scale)
    this.setOrigin(0)
    this.setTint(this.color)
    this.setAlpha(0.9)

    this.total = 0

    scene.children.add(this)
  }

  reposition(x, y) {
    x = x || Phaser.Math.Between(this.bounds.left / this.size, (this.bounds.right / this.size) - 1)
    y = y || Phaser.Math.Between(this.bounds.top / this.size, (this.bounds.bottom / this.size) - 1)

    this.setPosition(x * this.size, y * this.size)
  }

  eat(amount = 1) {
    this.total += amount

    this.reposition()
  }
}
