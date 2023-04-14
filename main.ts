controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let tile of tileSprites) {
        tile.setVelocity(0, -300)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.sayText("" + convertToText(location.column) + "," + convertToText(location.row), 500, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let tile of tileSprites) {
        tile.setVelocity(-300, 0)
    }
})
function addTile () {
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
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let tile of tileSprites) {
        tile.setVelocity(300, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let tile of tileSprites) {
        tile.setVelocity(0, 300)
    }
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
    for (let value of freeCells) {
        tiles.setWallAt(value, false)
    }
}
sprites.onCreated(SpriteKind.Player, function (sprite) {
    sprites.setDataNumber(sprite, "rank", 0)
    sprite.setImage(tilesImages[sprites.readDataNumber(sprite, "rank")])
    location = freeCells._pickRandom()
    tiles.placeOnTile(sprite, location)
    tiles.setWallAt(location, true)
    freeCells.removeAt(freeCells.indexOf(location))
})
let location: tiles.Location = null
let freeCells: tiles.Location[] = []
let tileSprites: Sprite[] = []
let tilesImages: Image[] = []
let gameNumbers: number[] = []
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
tileSprites = []
resetFreeCells()
addTile()
