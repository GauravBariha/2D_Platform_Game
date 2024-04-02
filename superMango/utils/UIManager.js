class UIManager {

    displayLivesCount(player) {
        this.liveCountUI = add([
            text("", {
                font:"Round",
                size:50
            }),
            fixed(),
            pos(75, 20)
        ])

        this.liveCountUI.add([
            sprite("red-heart"),
            pos(-136, -60),
            scale(3),
            fixed()
        ])
    }


    displayCoinCount(player) {
        this.coinCountUI = add([
            text("", {
                font:"Round",
                size: 50
            }),
            {
                fullCoinCount: get("coin", {recursive: true}).length
            },
            fixed(),
            pos(75,75)
        ])   

        this.coinCountUI.add([
            sprite("coin-icon"),
            pos(-60, 0),
            scale(3),
            fixed()
        ])
    }


    displayBlinkingUIMessage(content, position){
        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])

        message.onStateEnter("flash-up", async ()=>{
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })
        message.onStateEnter("flash-down", async ()=>{
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
        })
        

    }

    displayMainMenu() {
        add([
            // sprite("forest-background"),
            // scale(4)
            sprite("sky_background"),
            scale(0.7)

        ])
        add([
            sprite("logo_2"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
            scale(1.5)
        ])

        this.displayBlinkingUIMessage(
            "Press [Enter] to Start the Game",
            vec2(center().x , center().y + 100)
        )

        onKeyPress("enter", ()=>{
            play("confirm-ui", {speed: 1.5})
            go("controls")
        })
    }

    displayControlsMenu() {
        add([
            sprite("controls-background"),
            scale(1.3)
            
        ])
        add([
            text("Controls", { font:"Round", size: 50}),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200)
        ])

        const controlPrompts = add([
            pos(center().x + 30, center().y)
        ])

        controlPrompts.add([sprite("w"),pos(-200, -75)])
        controlPrompts.add([sprite("s"),pos(-200, 0)])
        controlPrompts.add([sprite("a"),pos(-275, 0)])
        controlPrompts.add([sprite("d"),pos(-125, 0)])
        controlPrompts.add([sprite("space"),pos(0, 10)])

        controlPrompts.add([
            text("Jump", {font:"Round", size: 32}),
            pos(10,100)
        ])

        controlPrompts.add([
            text("Move", {font:"Round", size: 32}),
            pos(-190,100)
        ])

        this.displayBlinkingUIMessage(
            "Press [Enter] to Start the Game",
            vec2(center().x , center().y + 300)
        )

        onKeyPress("enter", ()=>{
            play("confirm-ui", {speed: 1.5})
            go(1)
        })


    }

    displayGameOverScreen() {
        add([rect(1280, 720), color(0, 0, 0)])
        add([
            text("Game-Over", {size: 50, font: "Round"}),
            area(),
            anchor("center"),
            pos(center()),
        ])

        this.displayBlinkingUIMessage(
            //add([text("By Pressing Enter you will be in GAME LOGO SCREEN")]),
            "Press [ Enter ] to Continue",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("confirm-ui")
            go("1")
        })


    }

    displayEndGameScreen() {
        add([rect(1200, 720), color(0,0,0)])
        add([
            text("You Won! Thanks for Playing :) .", { size: 50, font: "Round"}),
            area(),
            anchor("center"),
            pos(center()),
        ])

        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Play Again",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("confirm-ui")
            go("1")
        })
    }


    addDarkBg() {
        add([
            rect(270, 140), 
            color(0, 0, 0),
            fixed()
        ])
    }
}


export const uiManager = new UIManager()