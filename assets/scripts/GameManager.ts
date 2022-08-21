
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export let beltMoveSpeedGlobal = 1

@ccclass('GameManager')
export class GameManager extends Component {
 
    @property(Number)
    beltSpeed: number=20

    onLoad(){
        if (this.beltSpeed > 0 ){
            beltMoveSpeedGlobal = this.beltSpeed
        }
    }

    start () {
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    // Notice the Cocos Creator "Life Cycle Callbacks" sequence
    // Check the difference when calling "beltMoveSpeedGlobal = this.beltSpeed" in onLoad() or Start() functions
    // Cocos doc:  
    // https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
    // 
}

