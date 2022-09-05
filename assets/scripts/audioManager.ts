
// import { _decorator, Component, Node } from 'cc';
// const { ccclass, property } = _decorator;
import { AudioClip, AudioSource, assert, warn, clamp01, resources } from "cc";


// ref: https://docs.cocos.com/creator/3.4/manual/en/audio-system/audioExample.html
 
// @ccclass('audioManager')
export class audioManager {

    private static _instance: audioManager;
    private static _audioSource?: AudioSource;

    static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new audioManager();
        return this._instance;
    }

    /**Manager initialization*/
    init (audioSource: AudioSource) {
        audioManager._audioSource = audioSource;
    }

      /**
     * Play music
     * @param {Boolean} loop Whether to loop
     */
    playMusic (loop: boolean) {
        const audioSource = audioManager._audioSource!
        assert(audioSource, 'AudioManager not inited!');

        audioSource.loop = loop;
        if (!audioSource.playing) {
            audioSource.playing;
        }
    }

     /**
     * Play a sound effect
     * @param {String} name The name of the sound effect
     * @param {Number} volumeScale Playback volume multiplier
     */
    playSound (name: string, volumeScale: number = 1 ) {
        const audioSource = audioManager._audioSource!
        assert(audioSource, 'AudioManager not inited!');

        // Note that the second parameter "volumeScale" is a multiple of the playback volume, the final playback volume is "audioSource.volume * volumeScale"
        // audioSource.playOneShot(audioClip, volumeScale);

    }
    // Set the music volume
    setMusicVolume (flag: number) {
        const audioSource = audioManager._audioSource!
        assert(audioSource, 'AudioManager not inited!');

        flag = clamp01(flag);
        audioSource.volume = flag;
    }

}
