import vuePng from '@/assets/logo.png';

class BasePhaser{
  constructor(view) {
      this.game = new Phaser.Game(1180, 708, Phaser.CANVAS, view)
  }

  allMethods() {
    this.game.add.tween(vueImage).to( { angle: 720 }, 1500, 'Linear', true).onComplete.add(() => {

    })    
  }

  toggleState() {

  }
}

export {
  BasePhaser
}
