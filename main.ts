sprites.onCreated(SpriteKind.Player, function (sprite) {
    sprite.setImage(tilesImages[0])
    sprites.setDataNumber(sprite, "rank", 0)
    let randomFound = false
    // get location for the sprite
    while (!randomFound) {
        let randomC = Math.randomRange(0, 3)
        let randomR = Math.randomRange(0, 3)
        if (tilesSprites.length != 0) {
            for (let item of tilesSprites) {
                if (item.tilemapLocation().column != fieldC0 + randomC && item.tilemapLocation().row != fieldR0 + randomR) {
                    tiles.placeOnTile(sprite, tiles.getTileLocation(fieldC0 + randomC, fieldR0 + randomR))
                    randomFound = true
                }
            }
        } else {
            tiles.placeOnTile(sprite, tiles.getTileLocation(fieldC0 + randomC, fieldR0 + randomR))
            randomFound = true
        }         
    }
})

function shiftTiles(direction: number) {
    let vx = 0
    let vy = 0

    switch (direction) {
        case (3): vx = tilesVelocity; break;
        case (6): vy = tilesVelocity; break;
        case (9): vx = -tilesVelocity; break;
        case (0): vy = -tilesVelocity; break;
    }

    for (let item of tilesSprites) {
        let nextC = item.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
        item.setVelocity(vx, vy)
    }
}

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    shiftTiles(_RIGHT)
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    shiftTiles(_DOWN)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    shiftTiles(_LEFT)
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    shiftTiles(_UP)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function(sprite: Sprite, otherSprite: Sprite) {
    
})

let tilesSprites: Sprite[] = []
let tilesImages: Image[] = []

let _UP = 0
let _RIGHT = 3
let _DOWN = 6
let _LEFT = 9

let tilesVelocity = 320
let fieldC0 = 3
let fieldR0 = 2

tilesImages = [
assets.image`tile_0`,
assets.image`tile_1`,
assets.image`tile_2`,
assets.image`tile_3`,
assets.image`tile_4`,
assets.image`tile_5`,
assets.image`tile_6`,
assets.image`tile_7`,
assets.image`tile_8`,
assets.image`tile_9`,
assets.image`tile_10`
]

tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(12)
tilesSprites.push(sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
tilesSprites.push(sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
