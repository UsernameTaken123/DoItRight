
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = startGame
 * DateTime = Tue Jul 26 2022 19:17:10 GMT+1200 (New Zealand Standard Time)
 * Author = jackhasaboat
 * FileBasename = startGame.ts
 * FileBasenameNoExtension = startGame
 * URL = db://assets/startGame.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('startGame')
export class startGame extends Component {


    start () {
        // [3]
    }

    onLoad(){
        this.node.on('click', this.callback, this)
    }

    callback(event){
        director.loadScene("scene-game-main")
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
