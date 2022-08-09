
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SceneSwitch
 * DateTime = Tue Jul 26 2022 18:18:33 GMT+1200 (New Zealand Standard Time)
 * Author = jackhasaboat
 * FileBasename = SceneSwitch.ts
 * FileBasenameNoExtension = SceneSwitch
 * URL = db://assets/scripts/SceneSwitch.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('SceneSwitch')
export class SceneSwitch extends Component {

    @property (String)
    public nextScene: String = null

    start () {
        // director.loadScene("scene")
    }


    onLoad () {
        this.node.on('click', this.callback, this);
    }
     
    callback(event) {
        // var button = event.detail;

        if (this.nextScene == "MainScene"){
            director.loadScene("scene")
        }else if (this.nextScene == "GameOver"){
            director.loadScene("scene-end")
        }else if (this.nextScene == "Start"){
            director.loadScene("scene-start")
        }
        
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
