import 'phaser'
import { Title } from './scenes/title'

const gameConfig = {
  width: 680,
  height: 400,
  scene: Title,
}

const game = new Phaser.Game(gameConfig)
