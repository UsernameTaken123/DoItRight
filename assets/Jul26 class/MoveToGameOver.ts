
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MoveToGameOver
 * DateTime = Tue Jul 26 2022 19:41:15 GMT+1200 (New Zealand Standard Time)
 * Author = jackhasaboat
 * FileBasename = MoveToGameOver.ts
 * FileBasenameNoExtension = MoveToGameOver
 * URL = db://assets/MoveToGameOver.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MoveToGameOver')
export class MoveToGameOver extends Component {


    start () {
        // [3]
    }

    onLoad(){
        this.node.on('click', this.callback, this)
    }

    callback(){
        director.loadScene("scene-game-over")
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}
