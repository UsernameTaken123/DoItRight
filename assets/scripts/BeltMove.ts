
import { _decorator, Component, Node } from 'cc';
import { GameManager, beltMoveSpeedGlobal } from './GameManager';
const { ccclass, property } = _decorator;

 
@ccclass('BeltMove')
export class BeltMove extends Component {
 
    @property(Node)
    belt_1: Node = null

    @property(Node)
    belt_2: Node = null

    // @property(Number)
    // speed: number = 10
    private _beltMoveSpeed = 10

    private _beltY = 0
    private _beltMovingRange = 960

    start () {
        console.log('_beltMoveSpeed: '+ this._beltMoveSpeed)
        console.log('beltMoveSpeedGlobal: '+ beltMoveSpeedGlobal)
        this._beltMoveSpeed = beltMoveSpeedGlobal
        this._init()
    }

    _init(){
        console.log('Conveyor Belt Initing..');
        console.log(this)
        console.log('Belt_1...')
        console.log(this.belt_1)
        this.belt_1.setPosition(0,this._beltY,0)

        console.log('Belt_2...')
        console.log(this.belt_2)
        this.belt_2.setPosition(960,this._beltY,0)

    }

    update (deltaTime: number) {
        this._beltMove(deltaTime)
    }

    _beltMove(deltaTime: number){
        this.belt_1.setPosition(this.belt_1.position.x - this._beltMoveSpeed * deltaTime, this._beltY, 0)
        if (this.belt_1.position.x < -this._beltMovingRange){
            this.belt_1.setPosition(this._beltMovingRange, this._beltY, 0)
        }

        this.belt_2.setPosition(this.belt_2.position.x - this._beltMoveSpeed * deltaTime, this._beltY, 0)
        if (this.belt_2.position.x < -this._beltMovingRange){
            this.belt_2.setPosition(this._beltMovingRange, this._beltY, 0)
        }
    }
}
