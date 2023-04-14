// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000b0f100b0b0b0b100f0b0b10010202030204100b0b0b0900000000050b0b0b0b0a00000000050b0b0b0b0900000000050b0b0b0b0900000000050b0b0b10080707070706100d0b0f100b0b0b0b100e0c`, img`
. . . . . . . . . . 
. . 2 2 2 2 2 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 2 2 2 2 2 . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
