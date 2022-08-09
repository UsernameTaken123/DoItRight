import { _decorator, Component, Node, Label } from 'cc';
import listInfo from './welcomeMsgList';
const { ccclass, property } = _decorator;

@ccclass('welcomeMsgLoad')
export class welcomeMsgLoad extends Component {
   @property (Label)
    public labelMsg: Label = null

    start () {
        let _listItem = Math.floor(Math.random() * listInfo.length)
        this.labelMsg.string = listInfo[_listItem].content + "   --- " + listInfo[_listItem].src_short
    }
}