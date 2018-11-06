export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('well', 'assets/well.png')
    this.load.image('well2', 'assets/well2.png')
    this.load.image('well3', 'assets/well3.png')
  }

  create() {
    this.add.text(200, 150, 'well, well, well...', { fill: '#0f0' })
    this.add.image(100, 100, 'well').setScale(0.25)
    this.add.image(170, 270, 'well2').setScale(0.25)
    this.add.image(450, 170, 'well3').setScale(0.25)
  }
}
