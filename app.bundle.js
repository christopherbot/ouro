webpackJsonp([0],{

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseScene = __webpack_require__(220);

var _baseScene2 = _interopRequireDefault(_baseScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_BaseScene) {
  _inherits(Title, _BaseScene);

  function Title(props) {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, 'title'));
  }

  _createClass(Title, [{
    key: 'addGameTitle',
    value: function addGameTitle() {
      this.add.text(this.middleX, this.middleY - 50, this.gameTitle.toUpperCase(), _extends({}, this.textStyles, {
        fontSize: '175px',
        padding: 10
      })).setOrigin(0.5, 0.5).setShadow(2, 2, '#FFF', 20, true, true);
    }
  }, {
    key: 'addMenuPrompt',
    value: function addMenuPrompt() {
      this.menuPrompt = this.add.text(this.middleX, this.middleY + 75, this.menuPromptText, _extends({}, this.textStyles2, {
        fontSize: '20px',
        padding: 10
      })).setOrigin(0.5, 0).setShadow(1, 1, '#FFF', 1, true, true);

      this.graphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } });
      this.graphics.strokeRoundedRect(this.menuPrompt.x - this.menuPrompt.width * 1.25 / 2, this.menuPrompt.y, this.menuPrompt.width * 1.25, this.menuPrompt.height, 5 // border radius
      );
    }
  }, {
    key: 'addSnakeAnimation',
    value: function addSnakeAnimation() {
      this.snakeAnimation = this.add.sprite(this.middleX, this.snakeSpriteHeight, 'snake').setScale(1.5);
      this.isSnakeMovingUp = true;

      this.anims.create({
        key: 'snakeDance',
        frames: this.anims.generateFrameNames('snake', { start: 1, end: 4 }),
        frameRate: 5,
        repeat: -1
      });

      this.snakeAnimation.anims.play('snakeDance');
    }
  }, {
    key: 'moveSnake',
    value: function moveSnake(delta) {
      this.snakeAnimation.x = Phaser.Math.Wrap(this.snakeAnimation.x - delta / 8, -45, this.gameWidth + 45);

      if (this.isSnakeMovingUp) {
        this.snakeAnimation.y -= delta / 16;

        if (this.snakeAnimation.y < this.snakeSpriteHeight - 30) {
          this.isSnakeMovingUp = false;
        }
      } else {
        this.snakeAnimation.y += delta / 16;

        if (this.snakeAnimation.y > this.snakeSpriteHeight + 30) {
          this.isSnakeMovingUp = true;
        }
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      if (this.keyJustDown(this.keyM)) {
        this.toggleAudioMute();
      }

      if (this.keyJustDown(this.enterKey)) {
        this.scene.start('menu');
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.spritesheet('snake', 'assets/snakeSprite.png', { frameWidth: 56, frameHeight: 14 });
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
      this.load.audio('simpleTheme', 'assets/audio/simpleTheme.wav');
      this.load.audio('complexTheme', 'assets/audio/complexTheme.wav');
    }
  }, {
    key: 'addText',
    value: function addText() {
      this.addGameTitle();
      this.addMenuPrompt();
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.loading = true;

      var simpleTheme = this.sound.add('simpleTheme', { loop: true });
      simpleTheme.play();

      WebFont.load({
        google: {
          families: ['Cabin', 'Press Start 2P']
        },
        active: function active() {
          _this2.loading = false;
          _this2.addText();
          _this2.addSnakeAnimation();
        }
      });

      this.enterKey = this.addKey('ENTER');
      this.keyM = this.addKey('M');
    }
  }, {
    key: 'update',
    value: function update(time, delta) {
      if (this.loading) {
        return;
      }

      this.moveSnake(delta);
      this.handleKeyPress();
    }
  }, {
    key: 'menuPromptText',
    get: function get() {
      return 'hit [enter]';
    }
  }, {
    key: 'snakeSpriteHeight',
    get: function get() {
      return this.gameHeight - 70;
    }
  }]);

  return Title;
}(_baseScene2.default);

exports.default = Title;

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseScene = __webpack_require__(220);

var _baseScene2 = _interopRequireDefault(_baseScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_BaseScene) {
  _inherits(Menu, _BaseScene);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, 'menu'));
  }

  _createClass(Menu, [{
    key: 'createColorBoxes',
    value: function createColorBoxes(offset) {
      var _this2 = this;

      var colorBoxes = this.colors.map(this.hexStringToColor).reduce(function (boxes, color, i) {
        var box = _this2.add.rectangle(i * 30 + (_this2.colorBoxSpacing + offset), 29, _this2.colorBoxSize, _this2.colorBoxSize, color).setOrigin(0, 0);

        boxes.push(box);

        return boxes;
      }, []);

      return colorBoxes;
    }
  }, {
    key: 'addPlayerSections',
    value: function addPlayerSections() {
      this.player1Header = this.add.text(0, 0, this.text.player1, this.textStyles2);
      this.player2Header = this.add.text(0, 0, this.text.player2, this.textStyles2);
      this.chooseColor1Text = this.add.text(0, 30, this.text.chooseColor, this.menuTextStyles);
      this.chooseColor2Text = this.add.text(0, 30, this.text.chooseColor, this.menuTextStyles);

      var player1Elements = [this.player1Header, this.chooseColor1Text].concat(_toConsumableArray(this.createColorBoxes(this.chooseColor1Text.width)), [this.add.image(0, 70, 'WASD').setOrigin(0, 0), this.add.text(22, 160, this.text.controls, this.menuTextStyles)]);

      var player2Elements = [this.player2Header, this.chooseColor2Text].concat(_toConsumableArray(this.createColorBoxes(this.chooseColor2Text.width)), [this.add.image(0, 70, 'arrowKeys').setOrigin(0, 0), this.add.text(22, 160, this.text.controls, this.menuTextStyles)]);

      var getContainerWidth = function getContainerWidth(width, child) {
        if (child.x + child.width > width) {
          width = child.x + child.width;
        }

        return width;
      };

      var container1Width = player1Elements.reduce(getContainerWidth, 0);
      var container2Width = player2Elements.reduce(getContainerWidth, 0);

      var container1X = (this.middleX - container1Width) * 2 / 3;
      var container2X = this.middleX + (this.middleX - container2Width) / 3;

      this.player1Container = this.add.container(container1X, 100, player1Elements);
      this.player2Container = this.add.container(container2X, 100, player2Elements);

      this.cursor1 = new Phaser.Geom.Triangle.BuildEquilateral(this.player1Container.x + this.chooseColor1Text.width + this.colorBoxSpacing + this.colorBoxSize / 2, this.player1Container.y + 55, 15);

      this.cursor2 = new Phaser.Geom.Triangle.BuildEquilateral(
      // `+ 30` to begin on second color:
      this.player2Container.x + this.chooseColor2Text.width + this.colorBoxSpacing + this.colorBoxSize / 2 + 30, this.player2Container.y + 55, 15);

      this.cursorGraphics = this.add.graphics({ fillStyle: { color: 0xFFFFFF } });
      this.cursorGraphics.fillTriangleShape(this.cursor1);
      this.cursorGraphics.fillTriangleShape(this.cursor2);
    }
  }, {
    key: 'addGameInstructions',
    value: function addGameInstructions() {
      var _this3 = this;

      this.add.text(this.middleX, 350, this.text.gameInstructionsHeader, this.menuTextStyles).setOrigin(0.5, 0);
      this.text.instructions.forEach(function (instruction, i) {
        return _this3.add.text(_this3.middleX, i * 20 + 390, instruction, _this3.menuTextStyles).setOrigin(0.5, 0);
      });
    }
  }, {
    key: 'addGamePrompt',
    value: function addGamePrompt() {
      this.gamePrompt = this.add.text(this.middleX, 470, this.text.gamePrompt, _extends({}, this.menuTextStyles, {
        padding: 10
      })).setOrigin(0.5, 0);

      this.gamePromptGraphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } });
      this.gamePromptGraphics.strokeRoundedRect(this.gamePrompt.x - this.gamePrompt.width * 1.25 / 2, this.gamePrompt.y, this.gamePrompt.width * 1.25, this.gamePrompt.height, 5 // border radius
      );
    }
  }, {
    key: 'addAudioText',
    value: function addAudioText() {
      return this.add.text(this.middleX, 60, this.sound.mute ? this.audioOffText : this.audioOnText, this.menuTextStyles).setOrigin(0.5, 0);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      if (this.keyJustDown(this.enterKey)) {
        this.scene.start('game', {
          color1: this.colors[this.player1ColorIndex],
          color2: this.colors[this.player2ColorIndex]
        });
      }

      if (this.keyJustDown(this.keyM)) {
        this.toggleAudioMute(this.audioText);
      }

      if (this.keyJustDown(this.keyD)) {
        if (this.player1ColorIndex === this.colors.length - 1) {
          this.player1ColorIndex = 0;
          this.cursor1.left -= 30 * (this.colors.length - 1);
        } else {
          this.player1ColorIndex += 1;
          this.cursor1.left += 30;
        }
      }

      if (this.keyJustDown(this.keyA)) {
        if (this.player1ColorIndex === 0) {
          this.player1ColorIndex = this.colors.length - 1;
          this.cursor1.left += 30 * (this.colors.length - 1);
        } else {
          this.player1ColorIndex -= 1;
          this.cursor1.left -= 30;
        }
      }

      if (this.keyJustDown(this.cursors.right)) {
        if (this.player2ColorIndex === this.colors.length - 1) {
          this.player2ColorIndex = 0;
          this.cursor2.left -= 30 * (this.colors.length - 1);
        } else {
          this.player2ColorIndex += 1;
          this.cursor2.left += 30;
        }
      }

      if (this.keyJustDown(this.cursors.left)) {
        if (this.player2ColorIndex === 0) {
          this.player2ColorIndex = this.colors.length - 1;
          this.cursor2.left += 30 * (this.colors.length - 1);
        } else {
          this.player2ColorIndex -= 1;
          this.cursor2.left -= 30;
        }
      }
    }
  }, {
    key: 'changePlayerHeaderFills',
    value: function changePlayerHeaderFills() {
      this.player1Header.setFill('' + this.colors[this.player1ColorIndex]);
      this.player2Header.setFill('' + this.colors[this.player2ColorIndex]);

      this.cursorGraphics.clear();
      this.cursorGraphics.fillTriangleShape(this.cursor1);
      this.cursorGraphics.fillTriangleShape(this.cursor2);
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.image('WASD', 'assets/WASD.png');
      this.load.image('arrowKeys', 'assets/arrowKeys.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.addSmallGameTitle();
      this.addPlayerSections();
      this.addGameInstructions();
      this.addGamePrompt();
      this.audioText = this.addAudioText();

      this.cursors = this.createCursorKeys();
      this.keyW = this.addKey('W');
      this.keyA = this.addKey('A');
      this.keyS = this.addKey('S');
      this.keyD = this.addKey('D');
      this.keyM = this.addKey('M');
      this.enterKey = this.addKey('ENTER');

      this.player1ColorIndex = 0;
      this.player2ColorIndex = 1;
    }
  }, {
    key: 'update',
    value: function update() {
      this.handleKeyPress();
      this.changePlayerHeaderFills();
    }
  }, {
    key: 'colors',
    get: function get() {
      return ['#DF1A2D', '#0798BB', '#F8E71C', '#7ED321'];
    }
  }, {
    key: 'text',
    get: function get() {
      return {
        player1: 'Player 1',
        player2: 'Player 2',
        chooseColor: 'Choose Colour:',
        controls: 'Controls',
        gameInstructionsHeader: 'Game Instructions',
        instructions: ['- Player score +1 when opponent fails to return ball'],
        gamePrompt: 'hit [enter]'
      };
    }
  }, {
    key: 'colorBoxSize',
    get: function get() {
      return 20;
    }
  }, {
    key: 'colorBoxSpacing',
    get: function get() {
      return 8;
    }
  }, {
    key: 'menuTextStyles',
    get: function get() {
      return _extends({}, this.textStyles2, {
        fontSize: '12px'
      });
    }
  }]);

  return Menu;
}(_baseScene2.default);

exports.default = Menu;

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseScene = __webpack_require__(220);

var _baseScene2 = _interopRequireDefault(_baseScene);

var _snake = __webpack_require__(1152);

var _snake2 = _interopRequireDefault(_snake);

var _food = __webpack_require__(1153);

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_BaseScene) {
  _inherits(Game, _BaseScene);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 'game'));
  }

  _createClass(Game, [{
    key: 'drawCourtBoundaries',
    value: function drawCourtBoundaries() {
      var horizontalLine1 = new Phaser.Geom.Line(0, this.courtTop, this.gameWidth, this.courtTop);
      var horizontalLine2 = new Phaser.Geom.Line(0, this.gameHeight - 1, this.gameWidth, this.gameHeight - 1);
      var verticalLine = new Phaser.Geom.Line(this.middleX, this.courtTop + 1, this.middleX, this.gameHeight - 2);

      var lineGraphics = this.add.graphics({ lineStyle: { color: 0xFFFFFF } });
      lineGraphics.strokeLineShape(horizontalLine1);
      lineGraphics.strokeLineShape(horizontalLine2);
      lineGraphics.strokeLineShape(verticalLine);
    }
  }, {
    key: 'createScoreDisplay',
    value: function createScoreDisplay(dx, text) {
      return this.add.text(this.middleX + dx, this.middleY + this.courtTop / 2, text, _extends({}, this.textStyles2, {
        fontSize: '40px'
      })).setOrigin(0.5, 0.5);
    }
  }, {
    key: 'createFoodScoreDisplay',
    value: function createFoodScoreDisplay(dx, text, color) {
      return this.add.text(this.middleX + dx, this.courtTop / 2, text, {
        fontFamily: "'Press Start 2P'",
        fontSize: '20px'
      }).setOrigin(0.5, 0.5).setTint(color);
    }
  }, {
    key: 'initScores',
    value: function initScores() {
      this.score1Display = this.createScoreDisplay(-35, this.score1);
      this.score2Display = this.createScoreDisplay(40, this.score2);

      this.foodScore2Display = this.createFoodScoreDisplay(0.85 * this.middleX, this.food2.total, this.color2);
      this.foodScore1Display = this.createFoodScoreDisplay(-0.85 * this.middleX, this.food1.total, this.color1);
    }
  }, {
    key: 'updateScore1',
    value: function updateScore1() {
      this.score1 += 1;

      if (!this.isScore1DoubleDigits && this.score1.toString().length > 1) {
        this.isScore1DoubleDigits = true;
        this.score1Display.x -= 15;
      }

      if (!this.isScore1TripleDigits && this.score1.toString().length > 2) {
        this.isScore1TripleDigits = true;
        this.score1Display.x -= 20;
      }

      this.score1Display.setText(this.score1);
    }
  }, {
    key: 'updateScore2',
    value: function updateScore2() {
      this.score2 += 1;

      if (!this.isScore2DoubleDigits && this.score2.toString().length > 1) {
        this.isScore2DoubleDigits = true;
        this.score2Display.x += 15;
      }

      if (!this.isScore2TripleDigits && this.score2.toString().length > 2) {
        this.isScore2TripleDigits = true;
        this.score2Display.x += 20;
      }

      this.score2Display.setText(this.score2);
    }
  }, {
    key: 'updateFoodScore1',
    value: function updateFoodScore1() {
      this.foodScore1Display.setText(this.food1.total);
    }
  }, {
    key: 'updateFoodScore2',
    value: function updateFoodScore2() {
      this.foodScore2Display.setText(this.food2.total);
    }
  }, {
    key: 'resetBall',
    value: function resetBall(directionInteger) {
      var _this2 = this;

      this.ball.setVelocity(0);
      this.ball.x = this.middleX;
      this.ball.y = this.middleY + this.courtTop / 2;

      setTimeout(function () {
        return _this2.ball.setVelocity(directionInteger * _this2.ballStartingVelocity, _this2.ballStartingVelocity);
      }, 1000);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      if (this.keyJustDown(this.keyM)) {
        this.toggleAudioMute(this.audioText);
      }

      if (this.keyJustDown(this.keyD)) {
        this.snake1.goRight();
      } else if (this.keyJustDown(this.keyA)) {
        this.snake1.goLeft();
      } else if (this.keyJustDown(this.keyW)) {
        this.snake1.goUp();
      } else if (this.keyJustDown(this.keyS)) {
        this.snake1.goDown();
      }

      if (this.keyJustDown(this.cursors.right)) {
        this.snake2.goRight();
      } else if (this.keyJustDown(this.cursors.left)) {
        this.snake2.goLeft();
      } else if (this.keyJustDown(this.cursors.up)) {
        this.snake2.goUp();
      } else if (this.keyJustDown(this.cursors.down)) {
        this.snake2.goDown();
      }
    }
  }, {
    key: 'addAudioText',
    value: function addAudioText() {
      return this.add.text(this.middleX * 1.5, this.courtTop / 2, this.sound.mute ? this.audioOffText : this.audioOnText, _extends({}, this.textStyles2, {
        fontSize: '12px'
      })).setOrigin(0.5, 0.5);
    }
  }, {
    key: 'changeMusicTheme',
    value: function changeMusicTheme() {
      var complexTheme = this.sound.add('complexTheme', { loop: true });

      var simpleTheme = this.sound.sounds.find(function (_ref) {
        var key = _ref.key;
        return key === 'simpleTheme';
      });
      var currentSeek = simpleTheme.seek;

      // crossfade the two sounds using tweens
      var crossfadeDurationInMs = 1000;

      this.tweens.add({
        targets: simpleTheme,
        volume: {
          getStart: function getStart() {
            return 1;
          },
          getEnd: function getEnd() {
            return 0;
          }
        },
        duration: crossfadeDurationInMs,
        ease: 'Linear',
        onComplete: function onComplete() {
          return simpleTheme.stop();
        }
      });

      this.tweens.add({
        targets: complexTheme,
        onStart: function onStart() {
          return complexTheme.play({ seek: currentSeek });
        },
        volume: {
          getStart: function getStart() {
            return 0;
          },
          getEnd: function getEnd() {
            return 1;
          }
        },
        duration: crossfadeDurationInMs,
        ease: 'Linear'
      });
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.image('body', 'assets/body.png');

      this.score1 = 0;
      this.score2 = 0;

      this.isScore1DoubleDigits = false;
      this.isScore2DoubleDigits = false;
      this.isScore1TripleDigits = false;
      this.isScore2TripleDigits = false;
      // Oh man I hope no one is playing into quadruple digits...

      this.ballStartingVelocity = 150;
      this.ballVelocityMultiplier = 1.1;
    }
  }, {
    key: 'hitBall',
    value: function hitBall(snake, ball, snakeBody) {
      var _this3 = this;

      // The ball velocity has been updated by the hit at this point.
      var _ball$body$velocity = ball.body.velocity,
          vx = _ball$body$velocity.x,
          vy = _ball$body$velocity.y;


      if (vx === 0 && vy === 0) {
        // don't do anything if the ball is at its starting position
        return;
      }

      var upperVelocityBound = function upperVelocityBound(velocity) {
        return velocity * _this3.ballVelocityMultiplier;
      };

      ball.setVelocity(Phaser.Math.Between(vx, upperVelocityBound(vx)), Phaser.Math.Between(vy, upperVelocityBound(vy)));

      snakeBody.setTint(0xFFFFFF);
      setTimeout(function () {
        return snakeBody.setTint(snake.color);
      }, 100);
    }
  }, {
    key: 'create',
    value: function create(data) {
      this.changeMusicTheme();

      this.physics.world.setBounds(0, this.courtTop, this.gameWidth, this.gameHeight - this.courtTop);
      this.physics.world.setBoundsCollision(false, false, true, true);
      this.color1 = this.hexStringToColor(data.color1);
      this.color2 = this.hexStringToColor(data.color2);
      this.addSmallGameTitle();
      this.drawCourtBoundaries();
      this.audioText = this.addAudioText();

      this.cursors = this.createCursorKeys();
      this.keyW = this.addKey('W');
      this.keyA = this.addKey('A');
      this.keyS = this.addKey('S');
      this.keyD = this.addKey('D');
      this.keyM = this.addKey('M');

      this.snake1 = new _snake2.default(this, 10, 10, {
        color: this.color1,
        bounds: this.player1Bounds
      });

      this.snake2 = new _snake2.default(this, 30, 10, {
        color: this.color2,
        bounds: this.player2Bounds
      });

      this.food1 = new _food2.default(this, 10, 20, {
        color: this.color1,
        bounds: this.player1Bounds
      });

      this.food2 = new _food2.default(this, 30, 20, {
        color: this.color2,
        bounds: this.player2Bounds
      });

      this.initScores();

      this.ball = this.physics.add.image(400, 200, 'body').setCollideWorldBounds(true).setScale(1.6).setBounce(1).setVelocity(this.ballStartingVelocity);

      this.physics.add.collider(this.ball, this.snake1.body, this.hitBall.bind(this, this.snake1), null, this);
      this.physics.add.collider(this.ball, this.snake2.body, this.hitBall.bind(this, this.snake2), null, this);
    }
  }, {
    key: 'update',
    value: function update(time) {
      this.handleKeyPress();

      if (this.snake1.update(time)) {
        this.snake1.handleOverlapSelf();

        if (this.snake1.handleOverlapFood(this.food1)) {
          this.food1.eat();
          this.updateFoodScore1();
        }
      }

      if (this.snake2.update(time)) {
        this.snake2.handleOverlapSelf();

        if (this.snake2.handleOverlapFood(this.food2)) {
          this.food2.eat();
          this.updateFoodScore2();
        }
      }

      if (this.ball.x < 0) {
        this.updateScore2();
        this.resetBall(1);
      }

      if (this.ball.x > this.gameWidth) {
        this.updateScore1();
        this.resetBall(-1);
      }
    }
  }, {
    key: 'courtTop',
    get: function get() {
      return 64;
    }
  }, {
    key: 'player1Bounds',
    get: function get() {
      return {
        top: this.courtTop,
        right: this.middleX,
        bottom: this.gameHeight,
        left: 0
      };
    }
  }, {
    key: 'player2Bounds',
    get: function get() {
      return {
        top: this.courtTop,
        right: this.gameWidth,
        bottom: this.gameHeight,
        left: this.middleX
      };
    }
  }]);

  return Game;
}(_baseScene2.default);

exports.default = Game;

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UP = 'UP';
var DOWN = 'DOWN';
var LEFT = 'LEFT';
var RIGHT = 'RIGHT';

var Snake = function () {
  function Snake(scene, x, y) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Snake);

    this.scene = scene;

    // TODO move into static class property
    var defaultOptions = {
      bounds: {},
      color: 0x96BD26,
      size: 16,
      movesPerSecond: 12

      // TODO move into static proprty
      // width assumed to be the same as its height:
    };var assetSize = this.scene.textures.get('body').getSourceImage().width;

    options = _extends({}, defaultOptions, options);

    this.bounds = options.bounds;
    this.color = options.color;
    this.size = options.size;
    this.movesPerSecond = options.movesPerSecond;

    this.scale = this.size / assetSize;

    this.headPosition = new Phaser.Geom.Point(x, y);
    this.tail = new Phaser.Geom.Point(x, y);

    this.body = this.scene.physics.add.group({ immovable: true });

    this.head = this.body.create(x * this.size, y * this.size, 'body').setScale(this.scale).setOrigin(0).setTint(this.color);

    this.nextUpdateTime = 0;

    this.direction = DOWN;
    this.nextDirection = DOWN;
  }

  _createClass(Snake, [{
    key: 'goLeft',
    value: function goLeft() {
      if (this.direction === UP || this.direction === DOWN) {
        this.nextDirection = LEFT;
      }
    }
  }, {
    key: 'goRight',
    value: function goRight() {
      if (this.direction === UP || this.direction === DOWN) {
        this.nextDirection = RIGHT;
      }
    }
  }, {
    key: 'goUp',
    value: function goUp() {
      if (this.direction === LEFT || this.direction === RIGHT) {
        this.nextDirection = UP;
      }
    }
  }, {
    key: 'goDown',
    value: function goDown() {
      if (this.direction === LEFT || this.direction === RIGHT) {
        this.nextDirection = DOWN;
      }
    }
  }, {
    key: 'wrapVerticalPosition',
    value: function wrapVerticalPosition(y) {
      return Phaser.Math.Wrap(y, this.bounds.top / this.size, this.bounds.bottom / this.size);
    }
  }, {
    key: 'wrapHorizontalPosition',
    value: function wrapHorizontalPosition(x) {
      return Phaser.Math.Wrap(x, this.bounds.left / this.size, this.bounds.right / this.size);
    }
  }, {
    key: 'move',
    value: function move(time) {
      switch (this.nextDirection) {
        case UP:
          this.headPosition.y = this.wrapVerticalPosition(this.headPosition.y - 1);
          break;
        case DOWN:
          this.headPosition.y = this.wrapVerticalPosition(this.headPosition.y + 1);
          break;
        case LEFT:
          this.headPosition.x = this.wrapHorizontalPosition(this.headPosition.x - 1);
          break;
        case RIGHT:
          this.headPosition.x = this.wrapHorizontalPosition(this.headPosition.x + 1);
          break;
      }

      this.direction = this.nextDirection;

      Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * this.size, this.headPosition.y * this.size, 1, this.tail);

      this.nextUpdateTime = time + 1000 / this.movesPerSecond;

      return true;
    }
  }, {
    key: 'overlapsWith',
    value: function overlapsWith(item) {
      if (!item) {
        return false;
      }

      return this.head.x === item.x && this.head.y === item.y;
    }
  }, {
    key: 'handleOverlapSelf',
    value: function handleOverlapSelf() {
      var _this = this;

      var strandedChildren = [];

      var removeTheRest = false;
      this.body.children.each(function (child, index) {
        if (index === 0) {
          return;
        }

        if (removeTheRest) {
          _this.body.remove(child);
          strandedChildren.push(child);
        } else if (_this.overlapsWith(child)) {
          removeTheRest = true;
          _this.body.remove(child);
          strandedChildren.push(child);
        }
      });

      strandedChildren.forEach(function (child, index) {
        var fadeDuration = 300;
        var delay = index * 20;

        _this.scene.tweens.add({
          targets: child,
          alpha: 0,
          ease: 'Sine.easeInOut',
          duration: fadeDuration,
          delay: delay
        });

        _this.scene.time.addEvent({
          delay: fadeDuration + delay,
          callback: child.destroy,
          loop: false
        });
      });

      return strandedChildren.length;
    }
  }, {
    key: 'handleOverlapFood',
    value: function handleOverlapFood(food) {
      if (this.overlapsWith(food)) {
        return this.grow();
      }
    }
  }, {
    key: 'grow',
    value: function grow() {
      var _this2 = this;

      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      [].concat(_toConsumableArray(Array(amount))).forEach(function () {
        _this2.body.create(_this2.tail.x, _this2.tail.y, 'body').setScale(_this2.scale).setOrigin(0).setTint(_this2.color);
      });

      return true;
    }
  }, {
    key: 'update',
    value: function update(time) {
      if (time >= this.nextUpdateTime) {
        return this.move(time);
      }
    }
  }]);

  return Snake;
}();

exports.default = Snake;

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Food = function (_Phaser$GameObjects$I) {
  _inherits(Food, _Phaser$GameObjects$I);

  function Food(scene, x, y) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Food);

    var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, scene, x, y));

    _this.scene = scene;
    Phaser.GameObjects.Image.call(_this, _this.scene);

    // TODO move into static class property
    var defaultOptions = {
      bounds: {},
      color: 0xFFFFFF,
      size: 16
    };

    options = _extends({}, defaultOptions, options);

    // TODO move into static proprty
    // width assumed to be the same as its height:
    var assetSize = _this.scene.textures.get('body').getSourceImage().width;

    _this.color = options.color;
    _this.bounds = options.bounds;
    _this.size = options.size;
    _this.scale = _this.size / assetSize;

    _this.setTexture('body');
    _this.setPosition(x * _this.size, y * _this.size);
    _this.setScale(_this.scale);
    _this.setOrigin(0);
    _this.setTint(_this.color);
    _this.setAlpha(0.9);

    _this.total = 0;

    _this.scene.children.add(_this);
    return _this;
  }

  _createClass(Food, [{
    key: 'reposition',
    value: function reposition(x, y) {
      x = x || Phaser.Math.Between(this.bounds.left / this.size, this.bounds.right / this.size - 1);
      y = y || Phaser.Math.Between(this.bounds.top / this.size, this.bounds.bottom / this.size - 1);

      this.setPosition(x * this.size, y * this.size);
    }
  }, {
    key: 'eat',
    value: function eat() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.total += amount;

      this.reposition();
    }
  }]);

  return Food;
}(Phaser.GameObjects.Image);

exports.default = Food;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseScene = function (_Phaser$Scene) {
  _inherits(BaseScene, _Phaser$Scene);

  function BaseScene() {
    _classCallCheck(this, BaseScene);

    return _possibleConstructorReturn(this, (BaseScene.__proto__ || Object.getPrototypeOf(BaseScene)).apply(this, arguments));
  }

  _createClass(BaseScene, [{
    key: 'toggleAudioMute',
    value: function toggleAudioMute(audioText) {
      var shouldMute = !this.sound.mute;
      this.sound.setMute(shouldMute);
      audioText && audioText.setText(shouldMute ? this.audioOffText : this.audioOnText);
    }
  }, {
    key: 'addSmallGameTitle',
    value: function addSmallGameTitle(x, y) {
      this.add.text(x || this.middleX, y || 0, this.gameTitle.toUpperCase(), _extends({}, this.textStyles, {
        fontSize: '40px',
        padding: 10
      })).setOrigin(0.5, 0).setShadow(1, 1, '#FFF', 10, true, true);
    }
  }, {
    key: 'createCursorKeys',
    value: function createCursorKeys() {
      return this.input.keyboard.createCursorKeys();
    }
  }, {
    key: 'addKey',
    value: function addKey(key) {
      return this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key]);
    }
  }, {
    key: 'keyJustDown',
    value: function keyJustDown(key) {
      return Phaser.Input.Keyboard.JustDown(key);
    }
  }, {
    key: 'hexStringToColor',
    value: function hexStringToColor(hex) {
      if (!hex.startsWith('#')) {
        console.warn('[hexStringToColor]: ' + hex + ' is not a valid hex string.');

        return hex;
      }

      return Phaser.Display.Color.HexStringToColor(hex).color;
    }
  }, {
    key: 'gameTitle',
    get: function get() {
      return 'Ouro';
    }
  }, {
    key: 'gameWidth',
    get: function get() {
      return this.sys.game.config.width;
    }
  }, {
    key: 'gameHeight',
    get: function get() {
      return this.sys.game.config.height;
    }
  }, {
    key: 'middleX',
    get: function get() {
      return this.gameWidth / 2;
    }
  }, {
    key: 'middleY',
    get: function get() {
      return this.gameHeight / 2;
    }
  }, {
    key: 'audioOnText',
    get: function get() {
      return 'audio: on [m]';
    }
  }, {
    key: 'audioOffText',
    get: function get() {
      return 'audio: off [m]';
    }
  }, {
    key: 'textStyles',
    get: function get() {
      return {
        fontFamily: 'Cabin',
        color: '#F6FEFF'
      };
    }
  }, {
    key: 'textStyles2',
    get: function get() {
      return {
        fontFamily: "'Press Start 2P'", // See `docs/notes.md` for why this is wrapped in 2 quotes
        color: '#32EEF8'
      };
    }
  }]);

  return BaseScene;
}(Phaser.Scene);

exports.default = BaseScene;

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(221);

var _title = __webpack_require__(1149);

var _title2 = _interopRequireDefault(_title);

var _menu = __webpack_require__(1150);

var _menu2 = _interopRequireDefault(_menu);

var _game = __webpack_require__(1151);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameConfig = {
  width: 800,
  height: 560,
  backgroundColor: '#072C40',
  physics: {
    default: 'arcade'
  },
  scene: [_title2.default, _menu2.default, _game2.default]
};

var game = new Phaser.Game(gameConfig);

/***/ })

},[467]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jhc2VTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGl0bGUiLCJwcm9wcyIsImFkZCIsInRleHQiLCJtaWRkbGVYIiwibWlkZGxlWSIsImdhbWVUaXRsZSIsInRvVXBwZXJDYXNlIiwidGV4dFN0eWxlcyIsImZvbnRTaXplIiwicGFkZGluZyIsInNldE9yaWdpbiIsInNldFNoYWRvdyIsIm1lbnVQcm9tcHQiLCJtZW51UHJvbXB0VGV4dCIsInRleHRTdHlsZXMyIiwiZ3JhcGhpY3MiLCJsaW5lU3R5bGUiLCJjb2xvciIsIndpZHRoIiwic3Ryb2tlUm91bmRlZFJlY3QiLCJ4IiwieSIsImhlaWdodCIsInNuYWtlQW5pbWF0aW9uIiwic3ByaXRlIiwic25ha2VTcHJpdGVIZWlnaHQiLCJzZXRTY2FsZSIsImlzU25ha2VNb3ZpbmdVcCIsImFuaW1zIiwiY3JlYXRlIiwia2V5IiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU5hbWVzIiwic3RhcnQiLCJlbmQiLCJmcmFtZVJhdGUiLCJyZXBlYXQiLCJwbGF5IiwiZGVsdGEiLCJQaGFzZXIiLCJNYXRoIiwiV3JhcCIsImdhbWVXaWR0aCIsImtleUp1c3REb3duIiwia2V5TSIsInRvZ2dsZUF1ZGlvTXV0ZSIsImVudGVyS2V5Iiwic2NlbmUiLCJsb2FkIiwic3ByaXRlc2hlZXQiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJzY3JpcHQiLCJhdWRpbyIsImFkZEdhbWVUaXRsZSIsImFkZE1lbnVQcm9tcHQiLCJsb2FkaW5nIiwic2ltcGxlVGhlbWUiLCJzb3VuZCIsImxvb3AiLCJXZWJGb250IiwiZ29vZ2xlIiwiZmFtaWxpZXMiLCJhY3RpdmUiLCJhZGRUZXh0IiwiYWRkU25ha2VBbmltYXRpb24iLCJhZGRLZXkiLCJ0aW1lIiwibW92ZVNuYWtlIiwiaGFuZGxlS2V5UHJlc3MiLCJnYW1lSGVpZ2h0IiwiQmFzZVNjZW5lIiwiTWVudSIsIm9mZnNldCIsImNvbG9yQm94ZXMiLCJjb2xvcnMiLCJtYXAiLCJoZXhTdHJpbmdUb0NvbG9yIiwicmVkdWNlIiwiYm94ZXMiLCJpIiwiYm94IiwicmVjdGFuZ2xlIiwiY29sb3JCb3hTcGFjaW5nIiwiY29sb3JCb3hTaXplIiwicHVzaCIsInBsYXllcjFIZWFkZXIiLCJwbGF5ZXIxIiwicGxheWVyMkhlYWRlciIsInBsYXllcjIiLCJjaG9vc2VDb2xvcjFUZXh0IiwiY2hvb3NlQ29sb3IiLCJtZW51VGV4dFN0eWxlcyIsImNob29zZUNvbG9yMlRleHQiLCJwbGF5ZXIxRWxlbWVudHMiLCJjcmVhdGVDb2xvckJveGVzIiwiaW1hZ2UiLCJjb250cm9scyIsInBsYXllcjJFbGVtZW50cyIsImdldENvbnRhaW5lcldpZHRoIiwiY2hpbGQiLCJjb250YWluZXIxV2lkdGgiLCJjb250YWluZXIyV2lkdGgiLCJjb250YWluZXIxWCIsImNvbnRhaW5lcjJYIiwicGxheWVyMUNvbnRhaW5lciIsImNvbnRhaW5lciIsInBsYXllcjJDb250YWluZXIiLCJjdXJzb3IxIiwiR2VvbSIsIlRyaWFuZ2xlIiwiQnVpbGRFcXVpbGF0ZXJhbCIsImN1cnNvcjIiLCJjdXJzb3JHcmFwaGljcyIsImZpbGxTdHlsZSIsImZpbGxUcmlhbmdsZVNoYXBlIiwiZ2FtZUluc3RydWN0aW9uc0hlYWRlciIsImluc3RydWN0aW9ucyIsImZvckVhY2giLCJpbnN0cnVjdGlvbiIsImdhbWVQcm9tcHQiLCJnYW1lUHJvbXB0R3JhcGhpY3MiLCJtdXRlIiwiYXVkaW9PZmZUZXh0IiwiYXVkaW9PblRleHQiLCJjb2xvcjEiLCJwbGF5ZXIxQ29sb3JJbmRleCIsImNvbG9yMiIsInBsYXllcjJDb2xvckluZGV4IiwiYXVkaW9UZXh0Iiwia2V5RCIsImxlbmd0aCIsImxlZnQiLCJrZXlBIiwiY3Vyc29ycyIsInJpZ2h0Iiwic2V0RmlsbCIsImNsZWFyIiwiYWRkU21hbGxHYW1lVGl0bGUiLCJhZGRQbGF5ZXJTZWN0aW9ucyIsImFkZEdhbWVJbnN0cnVjdGlvbnMiLCJhZGRHYW1lUHJvbXB0IiwiYWRkQXVkaW9UZXh0IiwiY3JlYXRlQ3Vyc29yS2V5cyIsImtleVciLCJrZXlTIiwiY2hhbmdlUGxheWVySGVhZGVyRmlsbHMiLCJHYW1lIiwiaG9yaXpvbnRhbExpbmUxIiwiTGluZSIsImNvdXJ0VG9wIiwiaG9yaXpvbnRhbExpbmUyIiwidmVydGljYWxMaW5lIiwibGluZUdyYXBoaWNzIiwic3Ryb2tlTGluZVNoYXBlIiwiZHgiLCJmb250RmFtaWx5Iiwic2V0VGludCIsInNjb3JlMURpc3BsYXkiLCJjcmVhdGVTY29yZURpc3BsYXkiLCJzY29yZTEiLCJzY29yZTJEaXNwbGF5Iiwic2NvcmUyIiwiZm9vZFNjb3JlMkRpc3BsYXkiLCJjcmVhdGVGb29kU2NvcmVEaXNwbGF5IiwiZm9vZDIiLCJ0b3RhbCIsImZvb2RTY29yZTFEaXNwbGF5IiwiZm9vZDEiLCJpc1Njb3JlMURvdWJsZURpZ2l0cyIsInRvU3RyaW5nIiwiaXNTY29yZTFUcmlwbGVEaWdpdHMiLCJzZXRUZXh0IiwiaXNTY29yZTJEb3VibGVEaWdpdHMiLCJpc1Njb3JlMlRyaXBsZURpZ2l0cyIsImRpcmVjdGlvbkludGVnZXIiLCJiYWxsIiwic2V0VmVsb2NpdHkiLCJzZXRUaW1lb3V0IiwiYmFsbFN0YXJ0aW5nVmVsb2NpdHkiLCJzbmFrZTEiLCJnb1JpZ2h0IiwiZ29MZWZ0IiwiZ29VcCIsImdvRG93biIsInNuYWtlMiIsInVwIiwiZG93biIsImNvbXBsZXhUaGVtZSIsInNvdW5kcyIsImZpbmQiLCJjdXJyZW50U2VlayIsInNlZWsiLCJjcm9zc2ZhZGVEdXJhdGlvbkluTXMiLCJ0d2VlbnMiLCJ0YXJnZXRzIiwidm9sdW1lIiwiZ2V0U3RhcnQiLCJnZXRFbmQiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwic3RvcCIsIm9uU3RhcnQiLCJiYWxsVmVsb2NpdHlNdWx0aXBsaWVyIiwic25ha2UiLCJzbmFrZUJvZHkiLCJib2R5IiwidmVsb2NpdHkiLCJ2eCIsInZ5IiwidXBwZXJWZWxvY2l0eUJvdW5kIiwiQmV0d2VlbiIsImRhdGEiLCJjaGFuZ2VNdXNpY1RoZW1lIiwicGh5c2ljcyIsIndvcmxkIiwic2V0Qm91bmRzIiwic2V0Qm91bmRzQ29sbGlzaW9uIiwiZHJhd0NvdXJ0Qm91bmRhcmllcyIsIlNuYWtlIiwiYm91bmRzIiwicGxheWVyMUJvdW5kcyIsInBsYXllcjJCb3VuZHMiLCJGb29kIiwiaW5pdFNjb3JlcyIsInNldENvbGxpZGVXb3JsZEJvdW5kcyIsInNldEJvdW5jZSIsImNvbGxpZGVyIiwiaGl0QmFsbCIsImJpbmQiLCJ1cGRhdGUiLCJoYW5kbGVPdmVybGFwU2VsZiIsImhhbmRsZU92ZXJsYXBGb29kIiwiZWF0IiwidXBkYXRlRm9vZFNjb3JlMSIsInVwZGF0ZUZvb2RTY29yZTIiLCJ1cGRhdGVTY29yZTIiLCJyZXNldEJhbGwiLCJ1cGRhdGVTY29yZTEiLCJ0b3AiLCJib3R0b20iLCJVUCIsIkRPV04iLCJMRUZUIiwiUklHSFQiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJzaXplIiwibW92ZXNQZXJTZWNvbmQiLCJhc3NldFNpemUiLCJ0ZXh0dXJlcyIsImdldCIsImdldFNvdXJjZUltYWdlIiwic2NhbGUiLCJoZWFkUG9zaXRpb24iLCJQb2ludCIsInRhaWwiLCJncm91cCIsImltbW92YWJsZSIsImhlYWQiLCJuZXh0VXBkYXRlVGltZSIsImRpcmVjdGlvbiIsIm5leHREaXJlY3Rpb24iLCJ3cmFwVmVydGljYWxQb3NpdGlvbiIsIndyYXBIb3Jpem9udGFsUG9zaXRpb24iLCJBY3Rpb25zIiwiU2hpZnRQb3NpdGlvbiIsImdldENoaWxkcmVuIiwiaXRlbSIsInN0cmFuZGVkQ2hpbGRyZW4iLCJyZW1vdmVUaGVSZXN0IiwiY2hpbGRyZW4iLCJlYWNoIiwiaW5kZXgiLCJyZW1vdmUiLCJvdmVybGFwc1dpdGgiLCJmYWRlRHVyYXRpb24iLCJkZWxheSIsImFscGhhIiwiYWRkRXZlbnQiLCJjYWxsYmFjayIsImRlc3Ryb3kiLCJmb29kIiwiZ3JvdyIsImFtb3VudCIsIkFycmF5IiwibW92ZSIsIkdhbWVPYmplY3RzIiwiSW1hZ2UiLCJjYWxsIiwic2V0VGV4dHVyZSIsInNldFBvc2l0aW9uIiwic2V0QWxwaGEiLCJyZXBvc2l0aW9uIiwic2hvdWxkTXV0ZSIsInNldE11dGUiLCJpbnB1dCIsImtleWJvYXJkIiwiSW5wdXQiLCJLZXlib2FyZCIsIktleUNvZGVzIiwiSnVzdERvd24iLCJoZXgiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsIndhcm4iLCJEaXNwbGF5IiwiQ29sb3IiLCJIZXhTdHJpbmdUb0NvbG9yIiwic3lzIiwiZ2FtZSIsImNvbmZpZyIsIlNjZW5lIiwiZ2FtZUNvbmZpZyIsImJhY2tncm91bmRDb2xvciIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7QUFDbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWCxPQURXO0FBRWxCOzs7O21DQVVjO0FBQ2IsV0FBS0MsR0FBTCxDQUFTQyxJQUFULENBQ0UsS0FBS0MsT0FEUCxFQUVFLEtBQUtDLE9BQUwsR0FBZSxFQUZqQixFQUdFLEtBQUtDLFNBQUwsQ0FBZUMsV0FBZixFQUhGLGVBS08sS0FBS0MsVUFMWjtBQU1JQyxrQkFBVSxPQU5kO0FBT0lDLGlCQUFTO0FBUGIsVUFVR0MsU0FWSCxDQVVhLEdBVmIsRUFVa0IsR0FWbEIsRUFXR0MsU0FYSCxDQVdhLENBWGIsRUFXZ0IsQ0FYaEIsRUFXbUIsTUFYbkIsRUFXMkIsRUFYM0IsRUFXK0IsSUFYL0IsRUFXcUMsSUFYckM7QUFZRDs7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O0FBVUEsSUFBTW9LLE9BQU8sSUFBSWhSLE9BQU80RyxJQUFYLENBQWdCdUssVUFBaEIsQ0FBYixDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNjZW5lIGZyb20gJy4vYmFzZVNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEJhc2VTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoJ3RpdGxlJylcbiAgfVxuXG4gIGdldCBtZW51UHJvbXB0VGV4dCgpIHtcbiAgICByZXR1cm4gJ2hpdCBbZW50ZXJdJ1xuICB9XG5cbiAgZ2V0IHNuYWtlU3ByaXRlSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVIZWlnaHQgLSA3MFxuICB9XG5cbiAgYWRkR2FtZVRpdGxlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoXG4gICAgICB0aGlzLm1pZGRsZVgsXG4gICAgICB0aGlzLm1pZGRsZVkgLSA1MCxcbiAgICAgIHRoaXMuZ2FtZVRpdGxlLnRvVXBwZXJDYXNlKCksXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMudGV4dFN0eWxlcyxcbiAgICAgICAgZm9udFNpemU6ICcxNzVweCcsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgfVxuICAgIClcbiAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAuc2V0U2hhZG93KDIsIDIsICcjRkZGJywgMjAsIHRydWUsIHRydWUpXG4gIH1cblxuICBhZGRNZW51UHJvbXB0KCkge1xuICAgIHRoaXMubWVudVByb21wdCA9IHRoaXMuYWRkLnRleHQoXG4gICAgICB0aGlzLm1pZGRsZVgsXG4gICAgICB0aGlzLm1pZGRsZVkgKyA3NSxcbiAgICAgIHRoaXMubWVudVByb21wdFRleHQsXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMudGV4dFN0eWxlczIsXG4gICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgfSxcbiAgICApXG4gICAgICAuc2V0T3JpZ2luKDAuNSwgMClcbiAgICAgIC5zZXRTaGFkb3coMSwgMSwgJyNGRkYnLCAxLCB0cnVlLCB0cnVlKVxuXG4gICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKHsgbGluZVN0eWxlOiB7IGNvbG9yOiAweDk3OTc5Nywgd2lkdGg6IDIgfSB9KVxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlUm91bmRlZFJlY3QoXG4gICAgICB0aGlzLm1lbnVQcm9tcHQueCAtIHRoaXMubWVudVByb21wdC53aWR0aCAqIDEuMjUgLyAyLFxuICAgICAgdGhpcy5tZW51UHJvbXB0LnksXG4gICAgICB0aGlzLm1lbnVQcm9tcHQud2lkdGggKiAxLjI1LFxuICAgICAgdGhpcy5tZW51UHJvbXB0LmhlaWdodCxcbiAgICAgIDUsIC8vIGJvcmRlciByYWRpdXNcbiAgICApXG4gIH1cblxuICBhZGRTbmFrZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLnNuYWtlQW5pbWF0aW9uID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMubWlkZGxlWCwgdGhpcy5zbmFrZVNwcml0ZUhlaWdodCwgJ3NuYWtlJykuc2V0U2NhbGUoMS41KVxuICAgIHRoaXMuaXNTbmFrZU1vdmluZ1VwID0gdHJ1ZVxuXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnc25ha2VEYW5jZScsXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCdzbmFrZScsIHsgc3RhcnQ6IDEsIGVuZDogNCB9KSxcbiAgICAgIGZyYW1lUmF0ZTogNSxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcblxuICAgIHRoaXMuc25ha2VBbmltYXRpb24uYW5pbXMucGxheSgnc25ha2VEYW5jZScpXG4gIH1cblxuICBtb3ZlU25ha2UoZGVsdGEpIHtcbiAgICB0aGlzLnNuYWtlQW5pbWF0aW9uLnggPSBQaGFzZXIuTWF0aC5XcmFwKHRoaXMuc25ha2VBbmltYXRpb24ueCAtIGRlbHRhIC8gOCwgLTQ1LCB0aGlzLmdhbWVXaWR0aCArIDQ1KVxuXG4gICAgaWYgKHRoaXMuaXNTbmFrZU1vdmluZ1VwKSB7XG4gICAgICB0aGlzLnNuYWtlQW5pbWF0aW9uLnkgLT0gZGVsdGEgLyAxNlxuXG4gICAgICBpZiAodGhpcy5zbmFrZUFuaW1hdGlvbi55IDwgdGhpcy5zbmFrZVNwcml0ZUhlaWdodCAtIDMwKSB7XG4gICAgICAgIHRoaXMuaXNTbmFrZU1vdmluZ1VwID0gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbmFrZUFuaW1hdGlvbi55ICs9IGRlbHRhIC8gMTZcblxuICAgICAgaWYgKHRoaXMuc25ha2VBbmltYXRpb24ueSA+IHRoaXMuc25ha2VTcHJpdGVIZWlnaHQgKyAzMCkge1xuICAgICAgICB0aGlzLmlzU25ha2VNb3ZpbmdVcCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcygpIHtcbiAgICBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmtleU0pKSB7XG4gICAgICB0aGlzLnRvZ2dsZUF1ZGlvTXV0ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5lbnRlcktleSkpIHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ21lbnUnKVxuICAgIH1cbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzbmFrZScsICdhc3NldHMvc25ha2VTcHJpdGUucG5nJywgeyBmcmFtZVdpZHRoOiA1NiwgZnJhbWVIZWlnaHQ6IDE0IH0pXG4gICAgdGhpcy5sb2FkLnNjcmlwdCgnd2ViZm9udCcsICdodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL3dlYmZvbnQvMS42LjI2L3dlYmZvbnQuanMnKVxuICAgIHRoaXMubG9hZC5hdWRpbygnc2ltcGxlVGhlbWUnLCAnYXNzZXRzL2F1ZGlvL3NpbXBsZVRoZW1lLndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdjb21wbGV4VGhlbWUnLCAnYXNzZXRzL2F1ZGlvL2NvbXBsZXhUaGVtZS53YXYnKVxuICB9XG5cbiAgYWRkVGV4dCgpIHtcbiAgICB0aGlzLmFkZEdhbWVUaXRsZSgpXG4gICAgdGhpcy5hZGRNZW51UHJvbXB0KClcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG5cbiAgICBjb25zdCBzaW1wbGVUaGVtZSA9IHRoaXMuc291bmQuYWRkKCdzaW1wbGVUaGVtZScsIHsgbG9vcDogdHJ1ZSB9KVxuICAgIHNpbXBsZVRoZW1lLnBsYXkoKVxuXG4gICAgV2ViRm9udC5sb2FkKHtcbiAgICAgIGdvb2dsZToge1xuICAgICAgICBmYW1pbGllczogWydDYWJpbicsICdQcmVzcyBTdGFydCAyUCddXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuYWRkVGV4dCgpXG4gICAgICAgIHRoaXMuYWRkU25ha2VBbmltYXRpb24oKVxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgdGhpcy5lbnRlcktleSA9IHRoaXMuYWRkS2V5KCdFTlRFUicpXG4gICAgdGhpcy5rZXlNID0gdGhpcy5hZGRLZXkoJ00nKVxuICB9XG5cbiAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlU25ha2UoZGVsdGEpXG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcygpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2VuZXMvdGl0bGUuanMiLCJpbXBvcnQgQmFzZVNjZW5lIGZyb20gJy4vYmFzZVNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQmFzZVNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ21lbnUnKVxuICB9XG5cbiAgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyNERjFBMkQnLFxuICAgICAgJyMwNzk4QkInLFxuICAgICAgJyNGOEU3MUMnLFxuICAgICAgJyM3RUQzMjEnLFxuICAgIF1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXIxOiAnUGxheWVyIDEnLFxuICAgICAgcGxheWVyMjogJ1BsYXllciAyJyxcbiAgICAgIGNob29zZUNvbG9yOiAnQ2hvb3NlIENvbG91cjonLFxuICAgICAgY29udHJvbHM6ICdDb250cm9scycsXG4gICAgICBnYW1lSW5zdHJ1Y3Rpb25zSGVhZGVyOiAnR2FtZSBJbnN0cnVjdGlvbnMnLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBbXG4gICAgICAgICctIFBsYXllciBzY29yZSArMSB3aGVuIG9wcG9uZW50IGZhaWxzIHRvIHJldHVybiBiYWxsJyxcbiAgICAgICAgLy8gJy0gUGxheWVyIGxvc2VzIHdoZW4gc25ha2UgdG91Y2hlcyBhIHdhbGwnLFxuICAgICAgXSxcbiAgICAgIGdhbWVQcm9tcHQ6ICdoaXQgW2VudGVyXSdcbiAgICB9XG4gIH1cblxuICBnZXQgY29sb3JCb3hTaXplKCkge1xuICAgIHJldHVybiAyMFxuICB9XG5cbiAgZ2V0IGNvbG9yQm94U3BhY2luZygpIHtcbiAgICByZXR1cm4gOFxuICB9XG5cbiAgZ2V0IG1lbnVUZXh0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnRleHRTdHlsZXMyLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb2xvckJveGVzKG9mZnNldCkge1xuICAgIGNvbnN0IGNvbG9yQm94ZXMgPSB0aGlzLmNvbG9yc1xuICAgICAgLm1hcCh0aGlzLmhleFN0cmluZ1RvQ29sb3IpXG4gICAgICAucmVkdWNlKChib3hlcywgY29sb3IsIGkpID0+IHtcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgICAgIGkgKiAzMCArICh0aGlzLmNvbG9yQm94U3BhY2luZyArIG9mZnNldCksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgdGhpcy5jb2xvckJveFNpemUsXG4gICAgICAgICAgdGhpcy5jb2xvckJveFNpemUsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgICkuc2V0T3JpZ2luKDAsIDApXG5cbiAgICAgICAgYm94ZXMucHVzaChib3gpXG5cbiAgICAgICAgcmV0dXJuIGJveGVzXG4gICAgICB9LCBbXSlcblxuICAgIHJldHVybiBjb2xvckJveGVzXG4gIH1cblxuICBhZGRQbGF5ZXJTZWN0aW9ucygpIHtcbiAgICB0aGlzLnBsYXllcjFIZWFkZXIgPSB0aGlzLmFkZC50ZXh0KDAsIDAsIHRoaXMudGV4dC5wbGF5ZXIxLCB0aGlzLnRleHRTdHlsZXMyKVxuICAgIHRoaXMucGxheWVyMkhlYWRlciA9IHRoaXMuYWRkLnRleHQoMCwgMCwgdGhpcy50ZXh0LnBsYXllcjIsIHRoaXMudGV4dFN0eWxlczIpXG4gICAgdGhpcy5jaG9vc2VDb2xvcjFUZXh0ID0gdGhpcy5hZGQudGV4dCgwLCAzMCwgdGhpcy50ZXh0LmNob29zZUNvbG9yLCB0aGlzLm1lbnVUZXh0U3R5bGVzKVxuICAgIHRoaXMuY2hvb3NlQ29sb3IyVGV4dCA9IHRoaXMuYWRkLnRleHQoMCwgMzAsIHRoaXMudGV4dC5jaG9vc2VDb2xvciwgdGhpcy5tZW51VGV4dFN0eWxlcylcblxuICAgIGNvbnN0IHBsYXllcjFFbGVtZW50cyA9IFtcbiAgICAgIHRoaXMucGxheWVyMUhlYWRlcixcbiAgICAgIHRoaXMuY2hvb3NlQ29sb3IxVGV4dCxcbiAgICAgIC4uLnRoaXMuY3JlYXRlQ29sb3JCb3hlcyh0aGlzLmNob29zZUNvbG9yMVRleHQud2lkdGgpLFxuICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgNzAsICdXQVNEJykuc2V0T3JpZ2luKDAsIDApLFxuICAgICAgdGhpcy5hZGQudGV4dCgyMiwgMTYwLCB0aGlzLnRleHQuY29udHJvbHMsIHRoaXMubWVudVRleHRTdHlsZXMpLFxuICAgIF1cblxuICAgIGNvbnN0IHBsYXllcjJFbGVtZW50cyA9IFtcbiAgICAgIHRoaXMucGxheWVyMkhlYWRlcixcbiAgICAgIHRoaXMuY2hvb3NlQ29sb3IyVGV4dCxcbiAgICAgIC4uLnRoaXMuY3JlYXRlQ29sb3JCb3hlcyh0aGlzLmNob29zZUNvbG9yMlRleHQud2lkdGgpLFxuICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgNzAsICdhcnJvd0tleXMnKS5zZXRPcmlnaW4oMCwgMCksXG4gICAgICB0aGlzLmFkZC50ZXh0KDIyLCAxNjAsIHRoaXMudGV4dC5jb250cm9scywgdGhpcy5tZW51VGV4dFN0eWxlcyksXG4gICAgXVxuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyV2lkdGggPSAod2lkdGgsIGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQueCArIGNoaWxkLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSBjaGlsZC54ICsgY2hpbGQud2lkdGhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpZHRoXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyMVdpZHRoID0gcGxheWVyMUVsZW1lbnRzLnJlZHVjZShnZXRDb250YWluZXJXaWR0aCwgMClcbiAgICBjb25zdCBjb250YWluZXIyV2lkdGggPSBwbGF5ZXIyRWxlbWVudHMucmVkdWNlKGdldENvbnRhaW5lcldpZHRoLCAwKVxuXG4gICAgY29uc3QgY29udGFpbmVyMVggPSAodGhpcy5taWRkbGVYIC0gY29udGFpbmVyMVdpZHRoKSAqIDIgLyAzXG4gICAgY29uc3QgY29udGFpbmVyMlggPSB0aGlzLm1pZGRsZVggKyAodGhpcy5taWRkbGVYIC0gY29udGFpbmVyMldpZHRoKSAvIDNcblxuICAgIHRoaXMucGxheWVyMUNvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihjb250YWluZXIxWCwgMTAwLCBwbGF5ZXIxRWxlbWVudHMpXG4gICAgdGhpcy5wbGF5ZXIyQ29udGFpbmVyID0gdGhpcy5hZGQuY29udGFpbmVyKGNvbnRhaW5lcjJYLCAxMDAsIHBsYXllcjJFbGVtZW50cylcblxuICAgIHRoaXMuY3Vyc29yMSA9IG5ldyBQaGFzZXIuR2VvbS5UcmlhbmdsZS5CdWlsZEVxdWlsYXRlcmFsKFxuICAgICAgdGhpcy5wbGF5ZXIxQ29udGFpbmVyLnggKyB0aGlzLmNob29zZUNvbG9yMVRleHQud2lkdGggKyB0aGlzLmNvbG9yQm94U3BhY2luZyArICh0aGlzLmNvbG9yQm94U2l6ZSAvIDIpLFxuICAgICAgdGhpcy5wbGF5ZXIxQ29udGFpbmVyLnkgKyA1NSxcbiAgICAgIDE1LFxuICAgIClcblxuICAgIHRoaXMuY3Vyc29yMiA9IG5ldyBQaGFzZXIuR2VvbS5UcmlhbmdsZS5CdWlsZEVxdWlsYXRlcmFsKFxuICAgICAgLy8gYCsgMzBgIHRvIGJlZ2luIG9uIHNlY29uZCBjb2xvcjpcbiAgICAgIHRoaXMucGxheWVyMkNvbnRhaW5lci54ICsgdGhpcy5jaG9vc2VDb2xvcjJUZXh0LndpZHRoICsgdGhpcy5jb2xvckJveFNwYWNpbmcgKyAodGhpcy5jb2xvckJveFNpemUgLyAyKSArIDMwLFxuICAgICAgdGhpcy5wbGF5ZXIyQ29udGFpbmVyLnkgKyA1NSxcbiAgICAgIDE1LFxuICAgIClcblxuICAgIHRoaXMuY3Vyc29yR3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcyh7IGZpbGxTdHlsZTogeyBjb2xvcjogMHhGRkZGRkYgfSB9KVxuICAgIHRoaXMuY3Vyc29yR3JhcGhpY3MuZmlsbFRyaWFuZ2xlU2hhcGUodGhpcy5jdXJzb3IxKVxuICAgIHRoaXMuY3Vyc29yR3JhcGhpY3MuZmlsbFRyaWFuZ2xlU2hhcGUodGhpcy5jdXJzb3IyKVxuICB9XG5cbiAgYWRkR2FtZUluc3RydWN0aW9ucygpIHtcbiAgICB0aGlzLmFkZC50ZXh0KHRoaXMubWlkZGxlWCwgMzUwLCB0aGlzLnRleHQuZ2FtZUluc3RydWN0aW9uc0hlYWRlciwgdGhpcy5tZW51VGV4dFN0eWxlcykuc2V0T3JpZ2luKDAuNSwgMClcbiAgICB0aGlzLnRleHQuaW5zdHJ1Y3Rpb25zLmZvckVhY2goKGluc3RydWN0aW9uLCBpKSA9PlxuICAgICAgdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVgsIGkgKiAyMCArIDM5MCwgaW5zdHJ1Y3Rpb24sIHRoaXMubWVudVRleHRTdHlsZXMpLnNldE9yaWdpbigwLjUsIDApLFxuICAgIClcbiAgfVxuXG4gIGFkZEdhbWVQcm9tcHQoKSB7XG4gICAgdGhpcy5nYW1lUHJvbXB0ID0gdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVgsIDQ3MCwgdGhpcy50ZXh0LmdhbWVQcm9tcHQsIHtcbiAgICAgIC4uLnRoaXMubWVudVRleHRTdHlsZXMsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUsIDApXG5cbiAgICB0aGlzLmdhbWVQcm9tcHRHcmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKHsgbGluZVN0eWxlOiB7IGNvbG9yOiAweDk3OTc5Nywgd2lkdGg6IDIgfSB9KVxuICAgIHRoaXMuZ2FtZVByb21wdEdyYXBoaWNzLnN0cm9rZVJvdW5kZWRSZWN0KFxuICAgICAgdGhpcy5nYW1lUHJvbXB0LnggLSB0aGlzLmdhbWVQcm9tcHQud2lkdGggKiAxLjI1IC8gMixcbiAgICAgIHRoaXMuZ2FtZVByb21wdC55LFxuICAgICAgdGhpcy5nYW1lUHJvbXB0LndpZHRoICogMS4yNSxcbiAgICAgIHRoaXMuZ2FtZVByb21wdC5oZWlnaHQsXG4gICAgICA1LCAvLyBib3JkZXIgcmFkaXVzXG4gICAgKVxuICB9XG5cbiAgYWRkQXVkaW9UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmFkZC50ZXh0KFxuICAgICAgdGhpcy5taWRkbGVYLFxuICAgICAgNjAsXG4gICAgICB0aGlzLnNvdW5kLm11dGUgPyB0aGlzLmF1ZGlvT2ZmVGV4dCA6IHRoaXMuYXVkaW9PblRleHQsXG4gICAgICB0aGlzLm1lbnVUZXh0U3R5bGVzLFxuICAgIClcbiAgICAgIC5zZXRPcmlnaW4oMC41LCAwKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoKSB7XG4gICAgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5lbnRlcktleSkpIHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWUnLCB7XG4gICAgICAgIGNvbG9yMTogdGhpcy5jb2xvcnNbdGhpcy5wbGF5ZXIxQ29sb3JJbmRleF0sXG4gICAgICAgIGNvbG9yMjogdGhpcy5jb2xvcnNbdGhpcy5wbGF5ZXIyQ29sb3JJbmRleF0sXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5TSkpIHtcbiAgICAgIHRoaXMudG9nZ2xlQXVkaW9NdXRlKHRoaXMuYXVkaW9UZXh0KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5RCkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcjFDb2xvckluZGV4ID09PSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggPSAwXG4gICAgICAgIHRoaXMuY3Vyc29yMS5sZWZ0IC09ICgzMCAqICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggKz0gMVxuICAgICAgICB0aGlzLmN1cnNvcjEubGVmdCArPSAzMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5QSkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcjFDb2xvckluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggPSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxXG4gICAgICAgIHRoaXMuY3Vyc29yMS5sZWZ0ICs9ICgzMCAqICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggLT0gMVxuICAgICAgICB0aGlzLmN1cnNvcjEubGVmdCAtPSAzMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMuY3Vyc29ycy5yaWdodCkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcjJDb2xvckluZGV4ID09PSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMucGxheWVyMkNvbG9ySW5kZXggPSAwXG4gICAgICAgIHRoaXMuY3Vyc29yMi5sZWZ0IC09ICgzMCAqICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyMkNvbG9ySW5kZXggKz0gMVxuICAgICAgICB0aGlzLmN1cnNvcjIubGVmdCArPSAzMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMuY3Vyc29ycy5sZWZ0KSkge1xuICAgICAgaWYgKHRoaXMucGxheWVyMkNvbG9ySW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIyQ29sb3JJbmRleCA9IHRoaXMuY29sb3JzLmxlbmd0aCAtIDFcbiAgICAgICAgdGhpcy5jdXJzb3IyLmxlZnQgKz0gKDMwICogKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIyQ29sb3JJbmRleCAtPSAxXG4gICAgICAgIHRoaXMuY3Vyc29yMi5sZWZ0IC09IDMwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlUGxheWVySGVhZGVyRmlsbHMoKSB7XG4gICAgdGhpcy5wbGF5ZXIxSGVhZGVyLnNldEZpbGwoYCR7dGhpcy5jb2xvcnNbdGhpcy5wbGF5ZXIxQ29sb3JJbmRleF19YClcbiAgICB0aGlzLnBsYXllcjJIZWFkZXIuc2V0RmlsbChgJHt0aGlzLmNvbG9yc1t0aGlzLnBsYXllcjJDb2xvckluZGV4XX1gKVxuXG4gICAgdGhpcy5jdXJzb3JHcmFwaGljcy5jbGVhcigpXG4gICAgdGhpcy5jdXJzb3JHcmFwaGljcy5maWxsVHJpYW5nbGVTaGFwZSh0aGlzLmN1cnNvcjEpXG4gICAgdGhpcy5jdXJzb3JHcmFwaGljcy5maWxsVHJpYW5nbGVTaGFwZSh0aGlzLmN1cnNvcjIpXG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgnV0FTRCcsICdhc3NldHMvV0FTRC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZSgnYXJyb3dLZXlzJywgJ2Fzc2V0cy9hcnJvd0tleXMucG5nJylcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFkZFNtYWxsR2FtZVRpdGxlKClcbiAgICB0aGlzLmFkZFBsYXllclNlY3Rpb25zKClcbiAgICB0aGlzLmFkZEdhbWVJbnN0cnVjdGlvbnMoKVxuICAgIHRoaXMuYWRkR2FtZVByb21wdCgpXG4gICAgdGhpcy5hdWRpb1RleHQgPSB0aGlzLmFkZEF1ZGlvVGV4dCgpXG5cbiAgICB0aGlzLmN1cnNvcnMgPSB0aGlzLmNyZWF0ZUN1cnNvcktleXMoKVxuICAgIHRoaXMua2V5VyA9IHRoaXMuYWRkS2V5KCdXJylcbiAgICB0aGlzLmtleUEgPSB0aGlzLmFkZEtleSgnQScpXG4gICAgdGhpcy5rZXlTID0gdGhpcy5hZGRLZXkoJ1MnKVxuICAgIHRoaXMua2V5RCA9IHRoaXMuYWRkS2V5KCdEJylcbiAgICB0aGlzLmtleU0gPSB0aGlzLmFkZEtleSgnTScpXG4gICAgdGhpcy5lbnRlcktleSA9IHRoaXMuYWRkS2V5KCdFTlRFUicpXG5cbiAgICB0aGlzLnBsYXllcjFDb2xvckluZGV4ID0gMFxuICAgIHRoaXMucGxheWVyMkNvbG9ySW5kZXggPSAxXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcygpXG4gICAgdGhpcy5jaGFuZ2VQbGF5ZXJIZWFkZXJGaWxscygpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2VuZXMvbWVudS5qcyIsImltcG9ydCBCYXNlU2NlbmUgZnJvbSAnLi9iYXNlU2NlbmUnXG5pbXBvcnQgU25ha2UgZnJvbSAnLi4vY2xhc3Nlcy9zbmFrZSdcbmltcG9ydCBGb29kIGZyb20gJy4uL2NsYXNzZXMvZm9vZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEJhc2VTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdnYW1lJylcbiAgfVxuXG4gIGdldCBjb3VydFRvcCgpIHtcbiAgICByZXR1cm4gNjRcbiAgfVxuXG4gIGdldCBwbGF5ZXIxQm91bmRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMuY291cnRUb3AsXG4gICAgICByaWdodDogdGhpcy5taWRkbGVYLFxuICAgICAgYm90dG9tOiB0aGlzLmdhbWVIZWlnaHQsXG4gICAgICBsZWZ0OiAwLFxuICAgIH1cbiAgfVxuXG4gIGdldCBwbGF5ZXIyQm91bmRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMuY291cnRUb3AsXG4gICAgICByaWdodDogdGhpcy5nYW1lV2lkdGgsXG4gICAgICBib3R0b206IHRoaXMuZ2FtZUhlaWdodCxcbiAgICAgIGxlZnQ6IHRoaXMubWlkZGxlWCxcbiAgICB9XG4gIH1cblxuICBkcmF3Q291cnRCb3VuZGFyaWVzKCkge1xuICAgIGNvbnN0IGhvcml6b250YWxMaW5lMSA9IG5ldyBQaGFzZXIuR2VvbS5MaW5lKDAsIHRoaXMuY291cnRUb3AsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmNvdXJ0VG9wKVxuICAgIGNvbnN0IGhvcml6b250YWxMaW5lMiA9IG5ldyBQaGFzZXIuR2VvbS5MaW5lKDAsIHRoaXMuZ2FtZUhlaWdodCAtIDEsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQgLSAxKVxuICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IG5ldyBQaGFzZXIuR2VvbS5MaW5lKHRoaXMubWlkZGxlWCwgdGhpcy5jb3VydFRvcCArIDEsIHRoaXMubWlkZGxlWCwgdGhpcy5nYW1lSGVpZ2h0IC0gMilcblxuICAgIGNvbnN0IGxpbmVHcmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKHsgbGluZVN0eWxlOiB7IGNvbG9yOiAweEZGRkZGRiB9IH0pXG4gICAgbGluZUdyYXBoaWNzLnN0cm9rZUxpbmVTaGFwZShob3Jpem9udGFsTGluZTEpXG4gICAgbGluZUdyYXBoaWNzLnN0cm9rZUxpbmVTaGFwZShob3Jpem9udGFsTGluZTIpXG4gICAgbGluZUdyYXBoaWNzLnN0cm9rZUxpbmVTaGFwZSh2ZXJ0aWNhbExpbmUpXG4gIH1cblxuICBjcmVhdGVTY29yZURpc3BsYXkoZHgsIHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVggKyBkeCwgdGhpcy5taWRkbGVZICsgKHRoaXMuY291cnRUb3AgLyAyKSwgdGV4dCwge1xuICAgICAgLi4udGhpcy50ZXh0U3R5bGVzMixcbiAgICAgIGZvbnRTaXplOiAnNDBweCcsXG4gICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KVxuICB9XG5cbiAgY3JlYXRlRm9vZFNjb3JlRGlzcGxheShkeCwgdGV4dCwgY29sb3IpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVggKyBkeCwgdGhpcy5jb3VydFRvcCAvIDIsIHRleHQsIHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiJ1ByZXNzIFN0YXJ0IDJQJ1wiLFxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgIC5zZXRUaW50KGNvbG9yKVxuICB9XG5cbiAgaW5pdFNjb3JlcygpIHtcbiAgICB0aGlzLnNjb3JlMURpc3BsYXkgPSB0aGlzLmNyZWF0ZVNjb3JlRGlzcGxheSgtMzUsIHRoaXMuc2NvcmUxKVxuICAgIHRoaXMuc2NvcmUyRGlzcGxheSA9IHRoaXMuY3JlYXRlU2NvcmVEaXNwbGF5KDQwLCB0aGlzLnNjb3JlMilcblxuICAgIHRoaXMuZm9vZFNjb3JlMkRpc3BsYXkgPSB0aGlzLmNyZWF0ZUZvb2RTY29yZURpc3BsYXkoMC44NSAqIHRoaXMubWlkZGxlWCwgdGhpcy5mb29kMi50b3RhbCwgdGhpcy5jb2xvcjIpXG4gICAgdGhpcy5mb29kU2NvcmUxRGlzcGxheSA9IHRoaXMuY3JlYXRlRm9vZFNjb3JlRGlzcGxheSgtMC44NSAqIHRoaXMubWlkZGxlWCwgdGhpcy5mb29kMS50b3RhbCwgdGhpcy5jb2xvcjEpXG4gIH1cblxuICB1cGRhdGVTY29yZTEoKSB7XG4gICAgdGhpcy5zY29yZTEgKz0gMVxuXG4gICAgaWYgKCF0aGlzLmlzU2NvcmUxRG91YmxlRGlnaXRzICYmIHRoaXMuc2NvcmUxLnRvU3RyaW5nKCkubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5pc1Njb3JlMURvdWJsZURpZ2l0cyA9IHRydWVcbiAgICAgIHRoaXMuc2NvcmUxRGlzcGxheS54IC09IDE1XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzU2NvcmUxVHJpcGxlRGlnaXRzICYmIHRoaXMuc2NvcmUxLnRvU3RyaW5nKCkubGVuZ3RoID4gMikge1xuICAgICAgdGhpcy5pc1Njb3JlMVRyaXBsZURpZ2l0cyA9IHRydWVcbiAgICAgIHRoaXMuc2NvcmUxRGlzcGxheS54IC09IDIwXG4gICAgfVxuXG4gICAgdGhpcy5zY29yZTFEaXNwbGF5LnNldFRleHQodGhpcy5zY29yZTEpXG4gIH1cblxuICB1cGRhdGVTY29yZTIoKSB7XG4gICAgdGhpcy5zY29yZTIgKz0gMVxuXG4gICAgaWYgKCF0aGlzLmlzU2NvcmUyRG91YmxlRGlnaXRzICYmIHRoaXMuc2NvcmUyLnRvU3RyaW5nKCkubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5pc1Njb3JlMkRvdWJsZURpZ2l0cyA9IHRydWVcbiAgICAgIHRoaXMuc2NvcmUyRGlzcGxheS54ICs9IDE1XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzU2NvcmUyVHJpcGxlRGlnaXRzICYmIHRoaXMuc2NvcmUyLnRvU3RyaW5nKCkubGVuZ3RoID4gMikge1xuICAgICAgdGhpcy5pc1Njb3JlMlRyaXBsZURpZ2l0cyA9IHRydWVcbiAgICAgIHRoaXMuc2NvcmUyRGlzcGxheS54ICs9IDIwXG4gICAgfVxuXG4gICAgdGhpcy5zY29yZTJEaXNwbGF5LnNldFRleHQodGhpcy5zY29yZTIpXG4gIH1cblxuICB1cGRhdGVGb29kU2NvcmUxKCkge1xuICAgIHRoaXMuZm9vZFNjb3JlMURpc3BsYXkuc2V0VGV4dCh0aGlzLmZvb2QxLnRvdGFsKVxuICB9XG5cbiAgdXBkYXRlRm9vZFNjb3JlMigpIHtcbiAgICB0aGlzLmZvb2RTY29yZTJEaXNwbGF5LnNldFRleHQodGhpcy5mb29kMi50b3RhbClcbiAgfVxuXG4gIHJlc2V0QmFsbChkaXJlY3Rpb25JbnRlZ2VyKSB7XG4gICAgdGhpcy5iYWxsLnNldFZlbG9jaXR5KDApXG4gICAgdGhpcy5iYWxsLnggPSB0aGlzLm1pZGRsZVhcbiAgICB0aGlzLmJhbGwueSA9IHRoaXMubWlkZGxlWSArICh0aGlzLmNvdXJ0VG9wIC8gMilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5iYWxsLnNldFZlbG9jaXR5KFxuICAgICAgZGlyZWN0aW9uSW50ZWdlciAqIHRoaXMuYmFsbFN0YXJ0aW5nVmVsb2NpdHksXG4gICAgICB0aGlzLmJhbGxTdGFydGluZ1ZlbG9jaXR5XG4gICAgKSwgMTAwMClcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKCkge1xuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5TSkpIHtcbiAgICAgIHRoaXMudG9nZ2xlQXVkaW9NdXRlKHRoaXMuYXVkaW9UZXh0KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5RCkpIHtcbiAgICAgIHRoaXMuc25ha2UxLmdvUmlnaHQoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmtleUEpKSB7XG4gICAgICB0aGlzLnNuYWtlMS5nb0xlZnQoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmtleVcpKSB7XG4gICAgICB0aGlzLnNuYWtlMS5nb1VwKClcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5rZXlTKSkge1xuICAgICAgdGhpcy5zbmFrZTEuZ29Eb3duKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmN1cnNvcnMucmlnaHQpKSB7XG4gICAgICB0aGlzLnNuYWtlMi5nb1JpZ2h0KClcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5jdXJzb3JzLmxlZnQpKSB7XG4gICAgICB0aGlzLnNuYWtlMi5nb0xlZnQoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmN1cnNvcnMudXApKSB7XG4gICAgICB0aGlzLnNuYWtlMi5nb1VwKClcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5jdXJzb3JzLmRvd24pKSB7XG4gICAgICB0aGlzLnNuYWtlMi5nb0Rvd24oKVxuICAgIH1cbiAgfVxuXG4gIGFkZEF1ZGlvVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQudGV4dChcbiAgICAgIHRoaXMubWlkZGxlWCAqIDEuNSxcbiAgICAgIHRoaXMuY291cnRUb3AgLyAyLFxuICAgICAgdGhpcy5zb3VuZC5tdXRlID8gdGhpcy5hdWRpb09mZlRleHQgOiB0aGlzLmF1ZGlvT25UZXh0LFxuICAgICAge1xuICAgICAgICAuLi50aGlzLnRleHRTdHlsZXMyLFxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgfSxcbiAgICApXG4gICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICB9XG5cbiAgY2hhbmdlTXVzaWNUaGVtZSgpIHtcbiAgICBjb25zdCBjb21wbGV4VGhlbWUgPSB0aGlzLnNvdW5kLmFkZCgnY29tcGxleFRoZW1lJywgeyBsb29wOiB0cnVlIH0pXG5cbiAgICBjb25zdCBzaW1wbGVUaGVtZSA9IHRoaXMuc291bmQuc291bmRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ3NpbXBsZVRoZW1lJylcbiAgICBjb25zdCBjdXJyZW50U2VlayA9IHNpbXBsZVRoZW1lLnNlZWtcblxuICAgIC8vIGNyb3NzZmFkZSB0aGUgdHdvIHNvdW5kcyB1c2luZyB0d2VlbnNcbiAgICBjb25zdCBjcm9zc2ZhZGVEdXJhdGlvbkluTXMgPSAxMDAwXG5cbiAgICB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogc2ltcGxlVGhlbWUsXG4gICAgICB2b2x1bWU6IHtcbiAgICAgICAgZ2V0U3RhcnQ6ICgpID0+IDEsXG4gICAgICAgIGdldEVuZDogKCkgPT4gMCxcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjogY3Jvc3NmYWRlRHVyYXRpb25Jbk1zLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiBzaW1wbGVUaGVtZS5zdG9wKCksXG4gICAgfSlcblxuICAgIHRoaXMudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiBjb21wbGV4VGhlbWUsXG4gICAgICBvblN0YXJ0OiAoKSA9PiBjb21wbGV4VGhlbWUucGxheSh7IHNlZWs6IGN1cnJlbnRTZWVrIH0pLFxuICAgICAgdm9sdW1lOiB7XG4gICAgICAgIGdldFN0YXJ0OiAoKSA9PiAwLFxuICAgICAgICBnZXRFbmQ6ICgpID0+IDEsXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IGNyb3NzZmFkZUR1cmF0aW9uSW5NcyxcbiAgICAgIGVhc2U6ICdMaW5lYXInLFxuICAgIH0pXG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYm9keScsICdhc3NldHMvYm9keS5wbmcnKVxuXG4gICAgdGhpcy5zY29yZTEgPSAwXG4gICAgdGhpcy5zY29yZTIgPSAwXG5cbiAgICB0aGlzLmlzU2NvcmUxRG91YmxlRGlnaXRzID0gZmFsc2VcbiAgICB0aGlzLmlzU2NvcmUyRG91YmxlRGlnaXRzID0gZmFsc2VcbiAgICB0aGlzLmlzU2NvcmUxVHJpcGxlRGlnaXRzID0gZmFsc2VcbiAgICB0aGlzLmlzU2NvcmUyVHJpcGxlRGlnaXRzID0gZmFsc2VcbiAgICAvLyBPaCBtYW4gSSBob3BlIG5vIG9uZSBpcyBwbGF5aW5nIGludG8gcXVhZHJ1cGxlIGRpZ2l0cy4uLlxuXG4gICAgdGhpcy5iYWxsU3RhcnRpbmdWZWxvY2l0eSA9IDE1MFxuICAgIHRoaXMuYmFsbFZlbG9jaXR5TXVsdGlwbGllciA9IDEuMVxuICB9XG5cbiAgaGl0QmFsbChzbmFrZSwgYmFsbCwgc25ha2VCb2R5KSB7XG4gICAgLy8gVGhlIGJhbGwgdmVsb2NpdHkgaGFzIGJlZW4gdXBkYXRlZCBieSB0aGUgaGl0IGF0IHRoaXMgcG9pbnQuXG4gICAgY29uc3QgeyB4OiB2eCwgeTogdnkgfSA9IGJhbGwuYm9keS52ZWxvY2l0eVxuXG4gICAgaWYgKHZ4ID09PSAwICYmIHZ5ID09PSAwKSB7XG4gICAgICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiB0aGUgYmFsbCBpcyBhdCBpdHMgc3RhcnRpbmcgcG9zaXRpb25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyVmVsb2NpdHlCb3VuZCA9IHZlbG9jaXR5ID0+IHZlbG9jaXR5ICogdGhpcy5iYWxsVmVsb2NpdHlNdWx0aXBsaWVyXG5cbiAgICBiYWxsLnNldFZlbG9jaXR5KFxuICAgICAgUGhhc2VyLk1hdGguQmV0d2Vlbih2eCwgdXBwZXJWZWxvY2l0eUJvdW5kKHZ4KSksXG4gICAgICBQaGFzZXIuTWF0aC5CZXR3ZWVuKHZ5LCB1cHBlclZlbG9jaXR5Qm91bmQodnkpKSxcbiAgICApXG5cbiAgICBzbmFrZUJvZHkuc2V0VGludCgweEZGRkZGRilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNuYWtlQm9keS5zZXRUaW50KHNuYWtlLmNvbG9yKSwgMTAwKVxuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICB0aGlzLmNoYW5nZU11c2ljVGhlbWUoKVxuXG4gICAgdGhpcy5waHlzaWNzLndvcmxkLnNldEJvdW5kcygwLCB0aGlzLmNvdXJ0VG9wLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5jb3VydFRvcClcbiAgICB0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzQ29sbGlzaW9uKGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSlcbiAgICB0aGlzLmNvbG9yMSA9IHRoaXMuaGV4U3RyaW5nVG9Db2xvcihkYXRhLmNvbG9yMSlcbiAgICB0aGlzLmNvbG9yMiA9IHRoaXMuaGV4U3RyaW5nVG9Db2xvcihkYXRhLmNvbG9yMilcbiAgICB0aGlzLmFkZFNtYWxsR2FtZVRpdGxlKClcbiAgICB0aGlzLmRyYXdDb3VydEJvdW5kYXJpZXMoKVxuICAgIHRoaXMuYXVkaW9UZXh0ID0gdGhpcy5hZGRBdWRpb1RleHQoKVxuXG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5jcmVhdGVDdXJzb3JLZXlzKClcbiAgICB0aGlzLmtleVcgPSB0aGlzLmFkZEtleSgnVycpXG4gICAgdGhpcy5rZXlBID0gdGhpcy5hZGRLZXkoJ0EnKVxuICAgIHRoaXMua2V5UyA9IHRoaXMuYWRkS2V5KCdTJylcbiAgICB0aGlzLmtleUQgPSB0aGlzLmFkZEtleSgnRCcpXG4gICAgdGhpcy5rZXlNID0gdGhpcy5hZGRLZXkoJ00nKVxuXG4gICAgdGhpcy5zbmFrZTEgPSBuZXcgU25ha2UodGhpcywgMTAsIDEwLCB7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvcjEsXG4gICAgICBib3VuZHM6IHRoaXMucGxheWVyMUJvdW5kcyxcbiAgICB9KVxuXG4gICAgdGhpcy5zbmFrZTIgPSBuZXcgU25ha2UodGhpcywgMzAsIDEwLCB7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvcjIsXG4gICAgICBib3VuZHM6IHRoaXMucGxheWVyMkJvdW5kcyxcbiAgICB9KVxuXG4gICAgdGhpcy5mb29kMSA9IG5ldyBGb29kKHRoaXMsIDEwLCAyMCwge1xuICAgICAgY29sb3I6IHRoaXMuY29sb3IxLFxuICAgICAgYm91bmRzOiB0aGlzLnBsYXllcjFCb3VuZHMsXG4gICAgfSlcblxuICAgIHRoaXMuZm9vZDIgPSBuZXcgRm9vZCh0aGlzLCAzMCwgMjAsIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yMixcbiAgICAgIGJvdW5kczogdGhpcy5wbGF5ZXIyQm91bmRzLFxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRTY29yZXMoKVxuXG4gICAgdGhpcy5iYWxsID0gdGhpcy5waHlzaWNzLmFkZC5pbWFnZSg0MDAsIDIwMCwgJ2JvZHknKVxuICAgICAgLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKVxuICAgICAgLnNldFNjYWxlKDEuNilcbiAgICAgIC5zZXRCb3VuY2UoMSlcbiAgICAgIC5zZXRWZWxvY2l0eSh0aGlzLmJhbGxTdGFydGluZ1ZlbG9jaXR5KVxuXG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJhbGwsIHRoaXMuc25ha2UxLmJvZHksIHRoaXMuaGl0QmFsbC5iaW5kKHRoaXMsIHRoaXMuc25ha2UxKSwgbnVsbCwgdGhpcylcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYmFsbCwgdGhpcy5zbmFrZTIuYm9keSwgdGhpcy5oaXRCYWxsLmJpbmQodGhpcywgdGhpcy5zbmFrZTIpLCBudWxsLCB0aGlzKVxuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLmhhbmRsZUtleVByZXNzKClcblxuICAgIGlmICh0aGlzLnNuYWtlMS51cGRhdGUodGltZSkpIHtcbiAgICAgIHRoaXMuc25ha2UxLmhhbmRsZU92ZXJsYXBTZWxmKClcblxuICAgICAgaWYgKHRoaXMuc25ha2UxLmhhbmRsZU92ZXJsYXBGb29kKHRoaXMuZm9vZDEpKSB7XG4gICAgICAgIHRoaXMuZm9vZDEuZWF0KClcbiAgICAgICAgdGhpcy51cGRhdGVGb29kU2NvcmUxKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zbmFrZTIudXBkYXRlKHRpbWUpKSB7XG4gICAgICB0aGlzLnNuYWtlMi5oYW5kbGVPdmVybGFwU2VsZigpXG5cbiAgICAgIGlmICh0aGlzLnNuYWtlMi5oYW5kbGVPdmVybGFwRm9vZCh0aGlzLmZvb2QyKSkge1xuICAgICAgICB0aGlzLmZvb2QyLmVhdCgpXG4gICAgICAgIHRoaXMudXBkYXRlRm9vZFNjb3JlMigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmFsbC54IDwgMCkge1xuICAgICAgdGhpcy51cGRhdGVTY29yZTIoKVxuICAgICAgdGhpcy5yZXNldEJhbGwoMSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5iYWxsLnggPiB0aGlzLmdhbWVXaWR0aCkge1xuICAgICAgdGhpcy51cGRhdGVTY29yZTEoKVxuICAgICAgdGhpcy5yZXNldEJhbGwoLTEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NlbmVzL2dhbWUuanMiLCJjb25zdCBVUCA9ICdVUCdcbmNvbnN0IERPV04gPSAnRE9XTidcbmNvbnN0IExFRlQgPSAnTEVGVCdcbmNvbnN0IFJJR0hUID0gJ1JJR0hUJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcblxuICAgIC8vIFRPRE8gbW92ZSBpbnRvIHN0YXRpYyBjbGFzcyBwcm9wZXJ0eVxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm91bmRzOiB7fSxcbiAgICAgIGNvbG9yOiAweDk2QkQyNixcbiAgICAgIHNpemU6IDE2LFxuICAgICAgbW92ZXNQZXJTZWNvbmQ6IDEyLFxuICAgIH1cblxuICAgIC8vIFRPRE8gbW92ZSBpbnRvIHN0YXRpYyBwcm9wcnR5XG4gICAgLy8gd2lkdGggYXNzdW1lZCB0byBiZSB0aGUgc2FtZSBhcyBpdHMgaGVpZ2h0OlxuICAgIGNvbnN0IGFzc2V0U2l6ZSA9IHRoaXMuc2NlbmUudGV4dHVyZXMuZ2V0KCdib2R5JykuZ2V0U291cmNlSW1hZ2UoKS53aWR0aFxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9XG5cbiAgICB0aGlzLmJvdW5kcyA9IG9wdGlvbnMuYm91bmRzXG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3JcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemVcbiAgICB0aGlzLm1vdmVzUGVyU2Vjb25kID0gb3B0aW9ucy5tb3Zlc1BlclNlY29uZFxuXG4gICAgdGhpcy5zY2FsZSA9IHRoaXMuc2l6ZSAvIGFzc2V0U2l6ZVxuXG4gICAgdGhpcy5oZWFkUG9zaXRpb24gPSBuZXcgUGhhc2VyLkdlb20uUG9pbnQoeCwgeSlcbiAgICB0aGlzLnRhaWwgPSBuZXcgUGhhc2VyLkdlb20uUG9pbnQoeCwgeSlcblxuICAgIHRoaXMuYm9keSA9IHRoaXMuc2NlbmUucGh5c2ljcy5hZGQuZ3JvdXAoeyBpbW1vdmFibGU6IHRydWUgfSlcblxuICAgIHRoaXMuaGVhZCA9IHRoaXMuYm9keVxuICAgICAgLmNyZWF0ZSh4ICogdGhpcy5zaXplLCB5ICogdGhpcy5zaXplLCAnYm9keScpXG4gICAgICAuc2V0U2NhbGUodGhpcy5zY2FsZSlcbiAgICAgIC5zZXRPcmlnaW4oMClcbiAgICAgIC5zZXRUaW50KHRoaXMuY29sb3IpXG5cblxuXG4gICAgdGhpcy5uZXh0VXBkYXRlVGltZSA9IDBcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gRE9XTlxuICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IERPV05cbiAgfVxuXG4gIGdvTGVmdCgpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFVQIHx8IHRoaXMuZGlyZWN0aW9uID09PSBET1dOKSB7XG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBMRUZUXG4gICAgfVxuICB9XG5cbiAgZ29SaWdodCgpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFVQIHx8IHRoaXMuZGlyZWN0aW9uID09PSBET1dOKSB7XG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBSSUdIVFxuICAgIH1cbiAgfVxuXG4gIGdvVXAoKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUIHx8IHRoaXMuZGlyZWN0aW9uID09PSBSSUdIVCkge1xuICAgICAgdGhpcy5uZXh0RGlyZWN0aW9uID0gVVBcbiAgICB9XG4gIH1cblxuICBnb0Rvd24oKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUIHx8IHRoaXMuZGlyZWN0aW9uID09PSBSSUdIVCkge1xuICAgICAgdGhpcy5uZXh0RGlyZWN0aW9uID0gRE9XTlxuICAgIH1cbiAgfVxuXG4gIHdyYXBWZXJ0aWNhbFBvc2l0aW9uKHkpIHtcbiAgICByZXR1cm4gUGhhc2VyLk1hdGguV3JhcCh5LCB0aGlzLmJvdW5kcy50b3AgLyB0aGlzLnNpemUsIHRoaXMuYm91bmRzLmJvdHRvbSAvIHRoaXMuc2l6ZSlcbiAgfVxuXG4gIHdyYXBIb3Jpem9udGFsUG9zaXRpb24oeCkge1xuICAgIHJldHVybiBQaGFzZXIuTWF0aC5XcmFwKHgsIHRoaXMuYm91bmRzLmxlZnQgLyB0aGlzLnNpemUsIHRoaXMuYm91bmRzLnJpZ2h0IC8gdGhpcy5zaXplKVxuICB9XG5cbiAgbW92ZSh0aW1lKSB7XG4gICAgc3dpdGNoKHRoaXMubmV4dERpcmVjdGlvbikge1xuICAgICAgY2FzZSBVUDpcbiAgICAgICAgdGhpcy5oZWFkUG9zaXRpb24ueSA9IHRoaXMud3JhcFZlcnRpY2FsUG9zaXRpb24odGhpcy5oZWFkUG9zaXRpb24ueSAtIDEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIERPV046XG4gICAgICAgIHRoaXMuaGVhZFBvc2l0aW9uLnkgPSB0aGlzLndyYXBWZXJ0aWNhbFBvc2l0aW9uKHRoaXMuaGVhZFBvc2l0aW9uLnkgKyAxKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBMRUZUOlxuICAgICAgICB0aGlzLmhlYWRQb3NpdGlvbi54ID0gdGhpcy53cmFwSG9yaXpvbnRhbFBvc2l0aW9uKHRoaXMuaGVhZFBvc2l0aW9uLnggLSAxKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBSSUdIVDpcbiAgICAgICAgdGhpcy5oZWFkUG9zaXRpb24ueCA9IHRoaXMud3JhcEhvcml6b250YWxQb3NpdGlvbih0aGlzLmhlYWRQb3NpdGlvbi54ICsgMSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMubmV4dERpcmVjdGlvblxuXG4gICAgUGhhc2VyLkFjdGlvbnMuU2hpZnRQb3NpdGlvbihcbiAgICAgIHRoaXMuYm9keS5nZXRDaGlsZHJlbigpLFxuICAgICAgdGhpcy5oZWFkUG9zaXRpb24ueCAqIHRoaXMuc2l6ZSxcbiAgICAgIHRoaXMuaGVhZFBvc2l0aW9uLnkgKiB0aGlzLnNpemUsXG4gICAgICAxLFxuICAgICAgdGhpcy50YWlsLFxuICAgIClcblxuICAgIHRoaXMubmV4dFVwZGF0ZVRpbWUgPSB0aW1lICsgKDEwMDAgLyB0aGlzLm1vdmVzUGVyU2Vjb25kKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG92ZXJsYXBzV2l0aChpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oZWFkLnggPT09IGl0ZW0ueCAmJiB0aGlzLmhlYWQueSA9PT0gaXRlbS55XG4gIH1cblxuICBoYW5kbGVPdmVybGFwU2VsZigpIHtcbiAgICBjb25zdCBzdHJhbmRlZENoaWxkcmVuID0gW11cblxuICAgIGxldCByZW1vdmVUaGVSZXN0ID0gZmFsc2VcbiAgICB0aGlzLmJvZHkuY2hpbGRyZW4uZWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1vdmVUaGVSZXN0KSB7XG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmUoY2hpbGQpXG4gICAgICAgIHN0cmFuZGVkQ2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vdmVybGFwc1dpdGgoY2hpbGQpKSB7XG4gICAgICAgIHJlbW92ZVRoZVJlc3QgPSB0cnVlXG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmUoY2hpbGQpXG4gICAgICAgIHN0cmFuZGVkQ2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RyYW5kZWRDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhZGVEdXJhdGlvbiA9IDMwMFxuICAgICAgY29uc3QgZGVsYXkgPSBpbmRleCAqIDIwXG5cbiAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgZWFzZTogJ1NpbmUuZWFzZUluT3V0JyxcbiAgICAgICAgZHVyYXRpb246IGZhZGVEdXJhdGlvbixcbiAgICAgICAgZGVsYXksXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xuICAgICAgICBkZWxheTogZmFkZUR1cmF0aW9uICsgZGVsYXksXG4gICAgICAgIGNhbGxiYWNrOiBjaGlsZC5kZXN0cm95LFxuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBzdHJhbmRlZENoaWxkcmVuLmxlbmd0aFxuICB9XG5cbiAgaGFuZGxlT3ZlcmxhcEZvb2QoZm9vZCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXBzV2l0aChmb29kKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvdygpXG4gICAgfVxuICB9XG5cbiAgZ3JvdyhhbW91bnQgPSAxKSB7XG4gICAgWy4uLkFycmF5KGFtb3VudCldLmZvckVhY2goKCkgPT4ge1xuICAgICAgdGhpcy5ib2R5XG4gICAgICAgIC5jcmVhdGUodGhpcy50YWlsLngsIHRoaXMudGFpbC55LCAnYm9keScpXG4gICAgICAgIC5zZXRTY2FsZSh0aGlzLnNjYWxlKVxuICAgICAgICAuc2V0T3JpZ2luKDApXG4gICAgICAgIC5zZXRUaW50KHRoaXMuY29sb3IpXG4gICAgfSlcblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aW1lID49IHRoaXMubmV4dFVwZGF0ZVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vdmUodGltZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzc2VzL3NuYWtlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSlcblxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZS5jYWxsKHRoaXMsIHRoaXMuc2NlbmUpXG5cbiAgICAvLyBUT0RPIG1vdmUgaW50byBzdGF0aWMgY2xhc3MgcHJvcGVydHlcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGJvdW5kczoge30sXG4gICAgICBjb2xvcjogMHhGRkZGRkYsXG4gICAgICBzaXplOiAxNixcbiAgICB9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH1cblxuICAgIC8vIFRPRE8gbW92ZSBpbnRvIHN0YXRpYyBwcm9wcnR5XG4gICAgLy8gd2lkdGggYXNzdW1lZCB0byBiZSB0aGUgc2FtZSBhcyBpdHMgaGVpZ2h0OlxuICAgIGNvbnN0IGFzc2V0U2l6ZSA9IHRoaXMuc2NlbmUudGV4dHVyZXMuZ2V0KCdib2R5JykuZ2V0U291cmNlSW1hZ2UoKS53aWR0aFxuXG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3JcbiAgICB0aGlzLmJvdW5kcyA9IG9wdGlvbnMuYm91bmRzXG4gICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplXG4gICAgdGhpcy5zY2FsZSA9IHRoaXMuc2l6ZSAvIGFzc2V0U2l6ZVxuXG4gICAgdGhpcy5zZXRUZXh0dXJlKCdib2R5JylcbiAgICB0aGlzLnNldFBvc2l0aW9uKHggKiB0aGlzLnNpemUsIHkgKiB0aGlzLnNpemUpXG4gICAgdGhpcy5zZXRTY2FsZSh0aGlzLnNjYWxlKVxuICAgIHRoaXMuc2V0T3JpZ2luKDApXG4gICAgdGhpcy5zZXRUaW50KHRoaXMuY29sb3IpXG4gICAgdGhpcy5zZXRBbHBoYSgwLjkpXG5cbiAgICB0aGlzLnRvdGFsID0gMFxuXG4gICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5hZGQodGhpcylcbiAgfVxuXG4gIHJlcG9zaXRpb24oeCwgeSkge1xuICAgIHggPSB4IHx8IFBoYXNlci5NYXRoLkJldHdlZW4odGhpcy5ib3VuZHMubGVmdCAvIHRoaXMuc2l6ZSwgKHRoaXMuYm91bmRzLnJpZ2h0IC8gdGhpcy5zaXplKSAtIDEpXG4gICAgeSA9IHkgfHwgUGhhc2VyLk1hdGguQmV0d2Vlbih0aGlzLmJvdW5kcy50b3AgLyB0aGlzLnNpemUsICh0aGlzLmJvdW5kcy5ib3R0b20gLyB0aGlzLnNpemUpIC0gMSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oeCAqIHRoaXMuc2l6ZSwgeSAqIHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGVhdChhbW91bnQgPSAxKSB7XG4gICAgdGhpcy50b3RhbCArPSBhbW91bnRcblxuICAgIHRoaXMucmVwb3NpdGlvbigpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzc2VzL2Zvb2QuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBnZXQgZ2FtZVRpdGxlKCkge1xuICAgIHJldHVybiAnT3VybydcbiAgfVxuXG4gIGdldCBnYW1lV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoXG4gIH1cblxuICBnZXQgZ2FtZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0XG4gIH1cblxuICBnZXQgbWlkZGxlWCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lV2lkdGggLyAyXG4gIH1cblxuICBnZXQgbWlkZGxlWSgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lSGVpZ2h0IC8gMlxuICB9XG5cbiAgZ2V0IGF1ZGlvT25UZXh0KCkge1xuICAgIHJldHVybiAnYXVkaW86IG9uIFttXSdcbiAgfVxuXG4gIGdldCBhdWRpb09mZlRleHQoKSB7XG4gICAgcmV0dXJuICdhdWRpbzogb2ZmIFttXSdcbiAgfVxuXG4gIHRvZ2dsZUF1ZGlvTXV0ZShhdWRpb1RleHQpIHtcbiAgICBjb25zdCBzaG91bGRNdXRlID0gIXRoaXMuc291bmQubXV0ZVxuICAgIHRoaXMuc291bmQuc2V0TXV0ZShzaG91bGRNdXRlKVxuICAgIGF1ZGlvVGV4dCAmJiBhdWRpb1RleHQuc2V0VGV4dChzaG91bGRNdXRlID8gdGhpcy5hdWRpb09mZlRleHQgOiB0aGlzLmF1ZGlvT25UZXh0KVxuICB9XG5cbiAgZ2V0IHRleHRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbnRGYW1pbHk6ICdDYWJpbicsXG4gICAgICBjb2xvcjogJyNGNkZFRkYnLFxuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0U3R5bGVzMigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udEZhbWlseTogXCInUHJlc3MgU3RhcnQgMlAnXCIsIC8vIFNlZSBgZG9jcy9ub3Rlcy5tZGAgZm9yIHdoeSB0aGlzIGlzIHdyYXBwZWQgaW4gMiBxdW90ZXNcbiAgICAgIGNvbG9yOiAnIzMyRUVGOCcsXG4gICAgfVxuICB9XG5cbiAgYWRkU21hbGxHYW1lVGl0bGUoeCwgeSkge1xuICAgIHRoaXMuYWRkLnRleHQoXG4gICAgICB4IHx8IHRoaXMubWlkZGxlWCxcbiAgICAgIHkgfHwgMCxcbiAgICAgIHRoaXMuZ2FtZVRpdGxlLnRvVXBwZXJDYXNlKCksXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMudGV4dFN0eWxlcyxcbiAgICAgICAgZm9udFNpemU6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICB9LFxuICAgIClcbiAgICAgIC5zZXRPcmlnaW4oMC41LCAwKVxuICAgICAgLnNldFNoYWRvdygxLCAxLCAnI0ZGRicsIDEwLCB0cnVlLCB0cnVlKVxuICB9XG5cbiAgY3JlYXRlQ3Vyc29yS2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKClcbiAgfVxuXG4gIGFkZEtleShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzW2tleV0pXG4gIH1cblxuICBrZXlKdXN0RG93bihrZXkpIHtcbiAgICByZXR1cm4gUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKGtleSlcbiAgfVxuXG4gIGhleFN0cmluZ1RvQ29sb3IoaGV4KSB7XG4gICAgaWYgKCFoZXguc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtoZXhTdHJpbmdUb0NvbG9yXTogJHtoZXh9IGlzIG5vdCBhIHZhbGlkIGhleCBzdHJpbmcuYClcblxuICAgICAgcmV0dXJuIGhleFxuICAgIH1cblxuICAgIHJldHVybiBQaGFzZXIuRGlzcGxheS5Db2xvci5IZXhTdHJpbmdUb0NvbG9yKGhleCkuY29sb3JcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjZW5lcy9iYXNlU2NlbmUuanMiLCJpbXBvcnQgJ3BoYXNlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuL3NjZW5lcy90aXRsZSdcbmltcG9ydCBNZW51IGZyb20gJy4vc2NlbmVzL21lbnUnXG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjZW5lcy9nYW1lJ1xuXG5jb25zdCBnYW1lQ29uZmlnID0ge1xuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDU2MCxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzA3MkM0MCcsXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJ1xuICB9LFxuICBzY2VuZTogW1RpdGxlLCBNZW51LCBHYW1lXSxcbn1cblxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==