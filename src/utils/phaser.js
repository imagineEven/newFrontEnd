import vuePng from '@/assets/logo.png';

class BasePhaser{
  constructor(view) {
      this.game = new Phaser.Game(1180, 708, Phaser.CANVAS, view)
      this.createAllMethods()
  }
  createAllMethods() {
    this.game.createSprite = this.createSprite;
  }

  createSprite(myself, x, y, boj) {
    return myself.add.sprite(x, y, boj)
  }
}

export {
  BasePhaser
}
