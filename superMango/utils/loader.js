export const load = {
    fonts: ()=>{
        loadFont("Round", "./assets/Round9x13.ttf")
    },
    assets: ()=>{
        loadSprite("w", "./assets/W_Key_Dark.png"),
        loadSprite("s", "./assets/S_Key_Dark.png"),
        loadSprite("a", "./assets/A_Key_Dark.png"),
        loadSprite("d", "./assets/D_Key_Dark.png"),
        loadSprite("space", "./assets/Space_Key_Dark.png"),
        
        loadSprite("coin-icon", "./assets/Coins_Ui.png")
        loadSprite("red-heart", "./assets/redheart.png")
        loadSprite("coin", "./assets/Coin.png"),
        loadSprite("bridge", "./assets/Bridge.png"),
        loadSprite("sky_background","./assets/sky_background.png")
        loadSprite("forest-background","./assets/Forest_Background_0.png"),
        loadSprite("controls-background", "./assets/Controls_background.png"),
        loadSprite("castle-background", "./assets/Castle_Background_0.png"),
        loadSprite("sky-background-0","./assets/Sky_Background_0.png"),
        loadSprite("sky-background-1","./assets/Sky_Background_1.png"),
        loadSprite("sky-background-2","./assets/Sky_Background_2.png"),
        loadSprite("logo","./assets/Logo.png"),
        loadSprite("logo_2","./assets/Super_Echo_Final.png"),
        loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            },
          })
          loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
              sliceX: 3,
              sliceY: 4,
              anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
              },
          }),
          loadSprite("brick-tileset", "./assets/Brick_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            },
          })
          loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
              sliceX: 3,
              sliceY: 4,
              anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
              },
          }),
          loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            },
          })
          loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
              sliceX: 3,
              sliceY: 4,
              anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
              },
          }),
          
          
          loadSprite("water", "./assets/Water.png", {
              sliceX: 8,
              sliceY: 1,
              anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
               
              },
          }),

          loadSprite("lava", "./assets/Lava.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
              wave: {
                  from: 0,
                  to: 7,
                  speed: 16,
                  loop: true,
              },
             
            },
        }),
        loadSprite("clouds", "./assets/Clouds.png", {
          sliceX: 8,
          sliceY: 1,
          anims: {
            wave: {
                from: 0,
                to: 7,
                speed: 16,
                loop: true,
            },
           
          },
      }),

          loadSprite("player", "./assets/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims:{
              idle:{
                from: 0,
                to: 3,
                loop: true,
              },
              run: {
                from: 4,
                to: 7,
                loop: true
              },
              "jump-up": 8,
              "jump-down" : 9
            },
          }),

          loadSprite("spider-1", "./assets/Spider_1.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
              crawl: { from: 0, to: 2, loop: true },
              idle: 0,
            } 
          }),

          loadSprite("spider-2", "./assets/Spider_2.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
              crawl: { from: 0, to: 2, loop: true },
              idle: 0,
            } ,
          })
          loadSprite("fish", "./assets/Fish_1.png", {
            sliceX: 2,
            sliceY: 1,
            anims: {
              swim: {from: 0, to: 1, loop: true},
            }
          }),
          loadSprite("flame", "./assets/Flame_1.png", {
            sliceX: 2,
            sliceY: 1,
            anims: {
              swim: {from: 0, to: 1, loop: true},
            }
          })
          loadSprite("axe", "./assets/Axe_Trap.png")
          loadSprite("saw", "./assets/Circular_Saw.png")
          loadSprite("bird", "./assets/Bird_2.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
              fly: {
                from: 0,
                to: 2,
                speed: 9,
                loop: true,
              },
            },
          })

    },
    sounds:()=>{
        loadSound("confirm-ui","./sounds/confirm-ui.wav"),
        loadSound("jump", "./sounds/jump.wav")
        loadSound("hit", "./sounds/hit.wav")
        loadSound("coin", "./sounds/coin.wav")
        loadSound("spider-attack", "./sounds/spider-attack.mp3")
        loadSound("swinging-axe", "./sounds/swinging-axe.mp3")
        loadSound("saw", "./sounds/saw.wav")
        loadSound("dive", "./sounds/dive.wav")
        loadSound("water", "./sounds/water-ambience.mp3")
        loadSound("lava", "./sounds/lava.wav")
        loadSound("wind", "./sounds/strong-wind.wav")
      }



    
}