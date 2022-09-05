 
import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, Sprite, Color, director, Label, find, AudioSource } from 'cc';
import wasteItemsMap from './WasteList';
import { Waste_Type_Enum } from './WasteList';
const { ccclass, property } = _decorator;
 

@ccclass('WasteCollect')
export class WasteCollect extends Component {
 
   @property(Node)
   scoreBoard: Node = null
 
   @property (Node)
   tips: Node = null

   isWasteCollected: boolean = false

   // reference full scripts from help doc https://docs.cocos.com/creator/manual/en/physics-2d/physics-2d-contact-callback.html
   start () {
       // Registering callback functions for a single collider
       let collider = this.getComponent(Collider2D);
       if (collider) {
           collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
           collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
           collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
           collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
       }
 
       // find score lable: https://docs.cocos.com/creator/manual/en/scripting/access-node-component.html
       this.scoreBoard = find("Canvas/scoreLabel")
       this.tips = find("Canvas/tipsLabel")
   }
 
   onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
       // will be called once when two colliders begin to contact
       // console.log('onBeginContact');
 
       let wastCollectionCorect = false    // record whether the waste collection is correct
       let scoreChange = 0                 // count scores when moving the waste to the correct bin
       this.isWasteCollected = true

       // check the waste type
       let wasteName = this.node.getComponent(Sprite).spriteFrame.name
       let wasteType = wasteItemsMap.get(wasteName)
 
       // effects while move the waste item to a waste bin
       if (otherCollider.tag == 11){           // recycling
           this.node.getComponent(Sprite).color = new Color(255,255,0)
           if (wasteType == Waste_Type_Enum.Recycling){        // verify whether moved to the correct bin
               wastCollectionCorect = true
               this.tips.getComponent(Label).string = "correct!"
           }
           else if (wasteType == Waste_Type_Enum.General_Waste){
               wastCollectionCorect = false
               this.tips.getComponent(Label).string = wasteName + " is not recyclable"
           }
       }else if (otherCollider.tag == 12){     // general waste
           this.node.getComponent(Sprite).color = new Color(255,0,0)
           if (wasteType == Waste_Type_Enum.General_Waste){    // verify whether moved to the correct bin
               wastCollectionCorect = true
               this.tips.getComponent(Label).string = "correct!"
           }
           else if (wasteType == Waste_Type_Enum.Recycling){
               wastCollectionCorect = false
               this.tips.getComponent(Label).string = wasteName + " is recyclable"
           }
       }
       this.node.setScale(0.75, 0.75, 0.75)
 
       if (wastCollectionCorect == true){
           scoreChange = 50
           find("Canvas/Audio").getComponent(AudioSource).play
       }
       else if (wastCollectionCorect == false){
           scoreChange = -50
       }
       // else{
       //     find("Canvas/Audio/AudioWrong").getComponent(AudioSource).play
       // }
 
 
       // const animationComponent = this.node.getComponent(Animation);
       // animationComponent.play()
      
       // add score
       // practice string handling
       // another option but requires es2017: this.scoreBoard.getComponent(Label).string = "Score: " + (Number(this.scoreBoard.getComponent(Label).string.split("Score: ")[1]) + 50).toString().padStart(5, '0')
    //    this.scoreBoard.getComponent(Label).string = "Score: " + ("00000" + (Number(this.scoreBoard.getComponent(Label).string.split("Score: ")[1]) + scoreChange)).slice(-5)      

       let score = Number(this.scoreBoard.getComponent(Label).string.split("Score: ")[1]) + scoreChange
       if (score <0 ){      // if the score becomes negative number, just keep the score as zero
        score = 0
       }
       this.scoreBoard.getComponent(Label).string = "Score: " + ("00000" + score).slice(-5)      


       setTimeout(() => {
           this.node.destroy();
       }, 500);  // seems the timeout is required, else errors will be reported while running
      
   }
   onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
       // will be called once when the contact between two colliders just about to end.
       console.log('onEndContact');
   }
   onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
       // will be called every time collider contact should be resolved
       console.log('onPreSolve');
   }
   onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
       // will be called every time collider contact should be resolved
       console.log('onPostSolve');
   }
 
 
   update (deltaTime: number) {
       // if (this.isWasteCollected == false){
       //     this.node.setPosition(this.node.position.x, this.node.position.y - 50 * deltaTime)
       // }
   }
}