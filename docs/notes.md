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