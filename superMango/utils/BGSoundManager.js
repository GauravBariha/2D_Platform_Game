class BGSoundManager {
    soundMap = {}

    addSound(key, options) {
        this.soundMap[key] = play(key, options)
    }

    play(key) {
        this.soundMap[key].seek = 0
        this.soundMap[key].paused = false
    }

    pauseAllSounds() {
        for (const key in this.soundMap) {
            
        }
    }

}