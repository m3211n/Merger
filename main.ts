controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    doSwipe(_UP)
})
// sprites.onCreated(SpriteKind.Player, function (sprite) {
// sprites.setDataNumber(sprite, "rank", 0)
// sprite.setImage(tilesImages[sprites.readDataNumber(sprite, "rank")])
// location = freeCells._pickRandom()
// tiles.placeOnTile(sprite, location)
// tiles.setWallAt(location, true)
// freeCells.removeAt(freeCells.indexOf(location))
// })
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (location.column < 7 && location.column > 3 && location.row > 2 && location.row < 6) {
        // check if not the grid wall
        if (location.column == sprite.tilemapLocation().column && location.row < sprite.tilemapLocation().row + 1) {
            for (let item of tileSprites) {
                if (item.tilemapLocation().column == location.column && item.tilemapLocation().row == location.row && sprites.readDataNumber(item, "rank") == sprites.readDataNumber(sprite, "rank")) {
                    tiles.setWallAt(location, false)
                    sprite.setVelocity(0, tilesVelocity)
                }
            }
        } else if (location.column == sprite.tilemapLocation().column && location.row < sprite.tilemapLocation().column - 1) {
        	
        } else if (location.column == sprite.tilemapLocation().column + 1 && location.row < sprite.tilemapLocation().row) {
        	
        } else {
        	
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    doSwipe(_LEFT)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    doSwipe(_RIGHT)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    doSwipe(_DOWN)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "rank") == sprites.readDataNumber(otherSprite, "rank")) {
        sprites.destroy(otherSprite)
        sprites.changeDataNumberBy(sprite, "rank", 1)
        sprite.setImage(tilesImages[sprites.readDataNumber(sprite, "rank")])
    }
})
function resetFreeCells () {
    freeCells = [
    tiles.getTileLocation(3, 2),
    tiles.getTileLocation(4, 2),
    tiles.getTileLocation(5, 2),
    tiles.getTileLocation(6, 2),
    tiles.getTileLocation(3, 3),
    tiles.getTileLocation(4, 3),
    tiles.getTileLocation(5, 3),
    tiles.getTileLocation(6, 3),
    tiles.getTileLocation(3, 4),
    tiles.getTileLocation(4, 4),
    tiles.getTileLocation(5, 4),
    tiles.getTileLocation(6, 4),
    tiles.getTileLocation(3, 5),
    tiles.getTileLocation(4, 5),
    tiles.getTileLocation(5, 5),
    tiles.getTileLocation(6, 5)
    ]
    for (let location of freeCells) {
        tiles.setWallAt(location, false)
    }
}
function doSwipe (direction: number) {
    if (direction == _RIGHT) {
        vx = tilesVelocity
        vy = 0
    } else if (direction == _DOWN) {
        vx = 0
        vy = tilesVelocity
    } else if (direction == _LEFT) {
        vx = 0 - tilesVelocity
        vy = 0
    } else {
        vx = 0
        vy = 0 - tilesVelocity
    }
    for (let tile of tileSprites) {
        tile.setVelocity(vx, vy)
    }
}
let vy = 0
let vx = 0
let freeCells: tiles.Location[] = []
let _RIGHT = 0
let tileSprites: Sprite[] = []
let tilesImages: Image[] = []
let tilesVelocity = 0
let _UP = 0
let _LEFT = 0
let _DOWN = 0
let gameNumbers: number[] = []
_DOWN = 1
_LEFT = 2
_UP = 3
tilesVelocity = 250
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(12)
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
tileSprites.push(sprites.create(img`
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
tileSprites.push(sprites.create(img`
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
