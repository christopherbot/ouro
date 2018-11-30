## NOTES

### anims.create:

loop the animation

    { repeat: -1 }

---

### anims.generateFrameNames

#### options (second arg)

    {
      zeroPad: 4,
      prefix: 'dance/',
      suffix: '.png'
    }

The above options would change the result from:

    { key:'snake', frame:'1' }

to:

    { key:'snake', frame:'dance/0001.png' }

---

### add.text:

default font-family is `Courier`

Font families with numbers and spaces in the name don't get loaded properly:

E.g. the following doesn't work:

    { fontFamily: 'Press Start 2P' }

[https://streamelements.helprace.com/i375-fix-the-press-start-2p-font-on-the-overlay](https://streamelements.helprace.com/i375-fix-the-press-start-2p-font-on-the-overlay)

The solution is to wrap the name with another pair of quotation marks:

    { fontFamily: "'Press Start 2P'"}

[https://github.com/PhenX/canvas-text/issues/3#issuecomment-78888723](https://github.com/PhenX/canvas-text/issues/3#issuecomment-78888723)
