import kaboom from "./libs/kaboom.mjs"

import { Player } from "./entities/Player.js"
import { attachCamera } from "./utils/camera.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { level1Config } from "./content/level1/config.js"
import { level1Mappings, level1Layout } from "./content/level1/level1Layout.js"
import { level2Config } from "./content/level2/config.js" 
import { level2Mappings, level2Layout } from "./content/level2/level2Layout.js"
import { level3Config } from "./content/level3/config.js" 
import { level3Mappings, level3Layout } from "./content/level3/level3Layout.js"
import { Spiders } from "./entities/Spiders.js"
import { Projectiles } from "./entities/Projectiles.js"
import { Axes } from "./entities/Axes.js"
import { Saws } from "./entities/Saw.js"
import { Birds } from "./entities/Birds.js"



kaboom({
    width: 1280,
    height: 720,
    letterbox: true,
})

load.fonts()
load.sounds()
load.assets()

const scenes = {
    menu:()=>{
       uiManager.displayMainMenu()

    },
    controls:()=>{
        uiManager.displayControlsMenu()

    },
    1: () => {
        const water = play("water",
         {volume: 0.05, loop: true})

         onSceneLeave(() => {
            water.paused = true
         }) 
        setGravity(1400)


        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout, level1Mappings)

        const player = new Player(
            level1Config.playerStartPosX, 
            level1Config.playerStartPosY,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVunerablility()
        player.update()

        //calling spider class
        const spiders = new Spiders(
            level1Config.spiderPositions.map(spiderPos => spiderPos()),
            level1Config.spiderRanges,
            level1Config.spiderDuration,
            level1Config.spiderType
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()

        //calling fish class
        const fish = new Projectiles(
            level1Config.fishPositions.map(fishPos => fishPos()),
            level1Config.fishRanges,
            "fish",
        )
        fish.setMovementPattern()

        
        attachCamera(player.gameObj, 0, 200)
        level1.drawWaves("water", "wave")

        

        uiManager.addDarkBg()
        
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.liveCountUI)

    },
    2:()=>{
        const lava = play("lava",
         {volume: 0.05, loop: true})

        onSceneLeave(() => {
            lava.paused = true
        })
        
        setGravity(1400)


        const level2 = new Level()
        level2.drawBackground("castle-background")
        level2.drawMapLayout(level2Layout, level2Mappings)

        const player = new Player(
            level2Config.playerStartPosX, 
            level2Config.playerStartPosY,
            level2Config.playerSpeed,
            level2Config.jumpForce,
            level2Config.nbLives,
            2,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVunerablility()
        player.update()

        //calling spider properties
        const spiders = new Spiders(
            level2Config.spiderPositions.map(spiderPos => spiderPos()),
            level2Config.spiderRanges,
            level2Config.spiderDurations,
            level2Config.spiderType
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()

        //calling flame properties
        const flames = new Projectiles(
            level2Config.flamePositions.map(flamePos => flamePos()),
            level2Config.flameRanges,
            "flame",
        )
        flames.setMovementPattern()

        //calling axe properties
        const axes = new Axes(
            level2Config.axesPositions.map(axePos => axePos()),
            level2Config.axesSwingDurations
        )
        axes.setMovementPattern()

        //calling saw properties
        const saws = new Saws(
            level2Config.sawPositions.map(sawPos => sawPos()),
            level2Config.sawRanges
        )

        saws.setMovementPattern()

        
        attachCamera(player.gameObj, 0, 200)
        level2.drawWaves("water", "wave")

        uiManager.addDarkBg()
        
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.liveCountUI)
    },
    3:()=>{
        const wind = play("wind",
         {volume: 0.05, loop: true})
        
         onSceneLeave(() => {
            wind.paused = true
         }) 
        
        setGravity(1400)


        const level3 = new Level()
        level3.drawBackground("sky-background-0")
        level3.drawBackground("sky-background-1")
        level3.drawBackground("sky-background-2")
        level3.drawMapLayout(level3Layout, level3Mappings)

        const player = new Player(
            level3Config.playerStartPosX, 
            level3Config.playerStartPosY,
            level3Config.playerSpeed,
            level3Config.jumpForce,
            level3Config.nbLives,
            3,
            true
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVunerablility()
        player.update()

        //calling class Bird
        const birds = new Birds(
            level3Config.birdPositions.map(birdPos => birdPos()),
            level3Config.birdRanges,
        )
        birds.setMovementPattern()

        
        attachCamera(player.gameObj, 0, 200)
        level3.drawWaves("clouds", "wave")

        uiManager.addDarkBg()
        
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.liveCountUI)
    
    },
    gameover:()=>{
        uiManager.displayGameOverScreen()
    },
    end:()=>{
        uiManager.displayEndGameScreen()
        
    }
}

for (const key in scenes){
    scene(key, scenes[key])
}

go("menu")


