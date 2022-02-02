controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . 5 5 2 . . . . . . 
        . . . . . . . 5 5 2 . . . . . . 
        . . . . . . . 5 5 2 . . . . . . 
        . . . . . . . 5 5 2 . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myPlayer, 0, -50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
    myPlayer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . 6 5 5 5 6 . . . . . . 
        . . . . 6 6 5 5 5 6 6 . . . . . 
        . . . . 6 2 5 5 5 2 6 . . . . . 
        . . . . 6 2 5 5 5 2 6 . . . . . 
        . . . 6 6 2 5 5 5 2 6 6 . . . . 
        . . . 6 5 2 5 5 5 2 5 6 . . . . 
        . . 6 6 5 2 5 5 5 2 5 6 6 . . . 
        . . 6 2 5 2 5 5 5 2 5 2 6 . . . 
        6 6 6 2 5 2 5 5 5 2 5 2 6 6 6 6 
        6 5 5 2 5 2 5 5 5 2 5 2 5 5 5 6 
        6 6 6 2 5 2 5 5 5 2 5 2 6 6 6 6 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(myPlayer)
    myPlayer.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let myPlayer: Sprite = null
effects.starField.startScreenEffect()
myPlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 5 5 5 6 . . . . . . 
    . . . . 6 6 5 5 5 6 6 . . . . . 
    . . . . 6 2 5 5 5 2 6 . . . . . 
    . . . . 6 2 5 5 5 2 6 . . . . . 
    . . . 6 6 2 5 5 5 2 6 6 . . . . 
    . . . 6 5 2 5 5 5 2 5 6 . . . . 
    . . 6 6 5 2 5 5 5 2 5 6 6 . . . 
    . . 6 2 5 2 5 5 5 2 5 2 6 . . . 
    6 6 6 2 5 2 5 5 5 2 5 2 6 6 6 6 
    6 5 5 2 5 2 5 5 5 2 5 2 5 5 5 6 
    6 6 6 2 5 2 5 5 5 2 5 2 6 6 6 6 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(myPlayer)
myPlayer.setStayInScreen(true)
info.setScore(0)
info.setLife(2)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.setPosition(randint(5, scene.screenWidth()), 0)
    enemyShip.vy = 20
})
