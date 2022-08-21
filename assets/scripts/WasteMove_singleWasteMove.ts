
import { _decorator, Component, Node, Prefab, instantiate, Sprite, resources, SpriteFrame, director } from 'cc';
import { GameManager, beltMoveSpeedGlobal } from './GameManager';

const { ccclass, property } = _decorator;

 
@ccclass('WasteMove_bak')
export class WasteMove_bak extends Component {
    @property(Prefab)
    wastePrefab: Prefab

    @property(Node)
    wasteItemsRoot: Node = null

    private _wasteMoveSpeed = 10
    private _wastePositionY = 0
    private _wasteMovingRange = -580

    private newWasteItem: Node = null

    
    onLoad(){   
    }

    start () {
        this._wasteMoveSpeed = beltMoveSpeedGlobal

        // randomly create new waste item
        // this.schedule(()=>{
        //     let newWasteItem: Node = null
        //     newWasteItem = instantiate(this.wastePrefab)

        //     newWasteItem.parent = this.wasteItemsRoot
        //     // newWasteItem.getComponent(wasteHandling).scoreBoard = this.node.parent.getChildByName('MyScoreBoard')
        //     const spriteFrames = new ResourceManager().loadDir("resources/wastes/recycling")
        //     newWasteItem.getComponent(Sprite).spriteFrame = spriteFrames[0]

        //     newWasteItem.active = true

        //     // let number1 = 10
        //     // let stringA = "this is my string test"
            
        // }, 4);


        // let newWasteItem: Node = null
        this.newWasteItem = instantiate(this.wastePrefab)

        // newWasteItem.parent = this.wasteItemsRoot
        director.getScene().getChildByName('Canvas').addChild(this.newWasteItem)

        // resources.load("wastes/recycling/1_cardboard", SpriteFrame, (err, SpriteFrame) =>{
        resources.load("textures/wastes/generalWaste/1_plastic_straws/spriteFrame", SpriteFrame, (err, theSpriteFrame) =>{
            // Log print if resource loading failed
            // console.log('Log the spriteFrame loaded...')
            // console.log(theSpriteFrame)
            // console.log(err)
            // console.log(err.name)
            // console.log(err.message)            
            this.newWasteItem.getComponent(Sprite).spriteFrame = theSpriteFrame
            
        })

        this.newWasteItem.active = true
        this.newWasteItem.setPosition(580,this._wastePositionY,0)

    }

    update (deltaTime: number) {
        this.newWasteItem.setPosition(this.newWasteItem.position.x - this._wasteMoveSpeed * deltaTime, this.newWasteItem.position.y, 0)
    //     if (this.newWasteItem.position.x < this._wasteMovingRange){
    //         this.newWasteItem.destroy()
    //     }
    }
}
