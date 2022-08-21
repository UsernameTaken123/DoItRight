
import { _decorator, Component, Node, SystemEvent, PhysicsSystem2D, EventTouch, Touch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WasteDrag')
export class WasteDrag extends Component {

    @property 
    public speed = 1

    @property 
    public color = 1

    start () {
        this.node.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
        PhysicsSystem2D.instance.enable = true;
    }

    _touchMove(touch: Touch, event: EventTouch){
        const delta = touch.getDelta();
        let pos = this.node.position;

        this.node.setPosition(pos.x + this.speed * delta.x, pos.y + this.speed * delta.y, 0);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}