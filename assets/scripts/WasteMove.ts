
import { _decorator, Component, Node, Prefab, instantiate, Sprite, resources, SpriteFrame, director } from 'cc';
import { GameManager, beltMoveSpeedGlobal } from './GameManager';

const { ccclass, property } = _decorator;

 
@ccclass('WasteMove')
export class WasteMove extends Component {
    @property(Prefab)
    wastePrefab: Prefab

    @property(Node)
    wasteItemsRoot: Node = null

    private _theSpriteFrame: SpriteFrame = null
    private _theSpriteFrameSet: SpriteFrame[] = null

    private _wasteMoveSpeed = 10
    private _wastePositionY = 0
    private _wasteMovingRange = -580

    // private newWasteItem: Node = null

    
    onLoad(){   
        // single resource load:
        // let path = "textures/wastes/generalWaste/1_plastic_straws/spriteFrame"
        // let path = "textures/wastes/recycling/1_cardboard/spriteFrame"
        // resources.load(path, SpriteFrame, (err, theSpriteFrame) =>{
        //     // Log print if resource loading failed
        //     // console.log('Log the spriteFrame loaded...')
        //     // console.log(theSpriteFrame)
        //     // console.log(err)
        //     // console.log(err.name)
        //     // console.log(err.message)            
        //     this._theSpriteFrame = theSpriteFrame
        // })

        // load all SpriteFrame resources in a folder
        // resources.loadDir("textures/wastes", SpriteFrame, function (err, theAssets) {
        //     console.log("load folder...")
        //     console.log(theAssets)
        //     // _theSpriteFrameSet = theAssets
        // });

        resources.loadDir("textures/wastes", SpriteFrame, null, (err, assets) => this.loadSpriteFrames(err, assets))
    }

    loadSpriteFrames (err, theAssets){
        console.log("load all SpriteFrames from folder...")
        console.log(theAssets)
        this._theSpriteFrameSet = theAssets
    }

    start () {
        this._wasteMoveSpeed = beltMoveSpeedGlobal

        this.schedule(()=>{
            let newWasteItem: Node = null
            newWasteItem = instantiate(this.wastePrefab)

            newWasteItem.parent = this.wasteItemsRoot
            // director.getScene().getChildByName('Canvas').addChild(newWasteItem)

            // resources.load("wastes/recycling/1_cardboard", SpriteFrame, (err, SpriteFrame) =>{
            // resources.load("textures/wastes/generalWaste/1_plastic_straws/spriteFrame", SpriteFrame, (err, theSpriteFrame) =>{      
            //     newWasteItem.getComponent(Sprite).spriteFrame = theSpriteFrame
            // })

            // get a SpriteFrame randomly
            let _spriteIndex = Math.floor(Math.random() * this._theSpriteFrameSet.length)
            this._theSpriteFrame = this._theSpriteFrameSet[_spriteIndex]
        
            newWasteItem.getComponent(Sprite).spriteFrame = this._theSpriteFrame

            newWasteItem.active = true
            newWasteItem.setPosition(0,this._wastePositionY,0)     // the position is the relative position to the parent object
        }, 3);
    }

    update (deltaTime: number) {
        for (let wasteItem of this.wasteItemsRoot.children){
            wasteItem.setPosition(wasteItem.position.x - this._wasteMoveSpeed * deltaTime, wasteItem.position.y, 0)

            // if (wasteItem.position.x < this._wasteMovingRange){
            //     wasteItem.destroy()
            // }
        }

    }

}
