
import { _decorator, Component, Node, Label } from 'cc';
import listInfo from './KnowledgeSharingList';
const { ccclass, property } = _decorator;


@ccclass('WelcomeLoading')
export class WelcomeLoading extends Component {

    @property (Label)
    public labelInfoSharing: Label = null;


    start () {
        // this.labelInfoSharing.string = listInfo[0][0].content + "   --- " + listInfo[0][0].src_short
        let _listItem = Math.floor(Math.random() * listInfo.length)
        this.labelInfoSharing.string = listInfo[_listItem].content + "   --- " + listInfo[_listItem].src_short
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
