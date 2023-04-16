// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000800040302020202020203040402050e0e0d0e06020404020b0000000010020404120c0000000010020404020b000000000f110404020b00000000100204040207090a090908020404030202020202020104`, img`
. . . . . . . . . . 
. . 2 2 2 2 2 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 2 2 2 2 2 . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark3,sprites.dungeon.floorDark0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4], TileScale.Sixteen);
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
