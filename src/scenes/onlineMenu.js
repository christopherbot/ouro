import { Client } from 'colyseus.js'
import BaseScene from './baseScene'

const log = (...args) => console.log('[OnlineMenu]', ...args)

export default class OnlineMenu extends BaseScene {
  constructor() {
    super('onlineMenu')

    // this.client = new Client('ws://localhost:3000')
    // this.room = this.client.join('room')
    // this.room.onJoin.add(() => {
    //   console.log(this.client.id, 'joined', this.room.name)
    // })
  }

  get menuTextStyles() {
    return {
      ...this.textStyles2,
      fontSize: '12px',
    }
  }

  get onlineMenuTextStyles() {
    return {
      ...this.textStyles,
      fontSize: '40px',
    }
  }

  addAudioText() {
    return this.add.text(
      this.middleX,
      60,
      this.sound.mute ? this.audioOffText : this.audioOnText,
      this.menuTextStyles,
    ).setOrigin(0.5, 0)
  }

  addText() {
    this.add.text(
      this.middleX,
      this.middleY - 50,
      'Waiting for another player.',
      this.onlineMenuTextStyles,
    ).setOrigin(0.5, 0)
  }

  addTitlePrompt() {
    this.titlePrompt = this.add.text(
      this.middleX,
      470,
      'return to title [enter]',
      this.menuTextStyles,
    ).setOrigin(0.5, 0)
  }

  handleKeyPress() {
    if (this.keyJustDown(this.keyM)) {
      this.toggleAudioMute(this.audioText)
    }

    if (this.keyJustDown(this.enterKey)) {
      if (this.players.length === 1) {
        this.room.removeAllListeners()
      }

      this.room.leave()
      this.scene.start('title')
    }
  }

  preload() {
    this.players = []
  }

  create() {
    this.enterKey = this.addKey('ENTER')
    this.keyM = this.addKey('M')

    this.audioText = this.addAudioText()
    this.addSmallGameTitle()
    this.addText()
    this.addTitlePrompt()

    this.client = new Client('ws://localhost:3000')
    this.room = this.client.join('room', {a:1})
    this.room.onJoin.add(() => {
      log(this.client.id, 'joined', this.room.name)

      this.room.state.players.onAdd = (player, key) => {
        if (this.players.length > 1) {
          log('Players list is full. Not adding player', player)

          return
        }

        this.players = [...this.players, player]
        log(player, 'has been added at', key)
        log('Players after addition:', this.players)

        // If you want to track changes on a child object inside a map, this is a common pattern:
        player.onChange = (changes) => {
          changes.forEach(change => {
            log(`${change.field}: ${change.previousValue} -> ${change.value}`)
          })
        }

        // force 'onChange' to be called immediatelly
        player.triggerAll()

        if (this.players.length > 1) {
          this.scene.start('onlineGame', {
            room: this.room,
            players: this.players,
          })
        }
      }

      this.room.state.players.onRemove = (player, key) => {
        this.players = this.players.filter(p => p !== player)
        log(player, 'has been removed at', key)
        log('Players after removal:', this.players)
      }
    })
  }

  update() {
    this.handleKeyPress()
  }
}
