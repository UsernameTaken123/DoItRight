
import { _decorator, Component, Node, Canvas, view, screen, UITransform, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ScreenAdapter
 * DateTime = Mon Jul 25 2022 23:11:40 GMT+1200 (New Zealand Standard Time)
 * Author = jackhasaboat
 * FileBasename = ScreenAdapter.ts
 * FileBasenameNoExtension = ScreenAdapter
 * URL = db://assets/scripts/ScreenAdapter.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ScreenAdapter')
export class ScreenAdapter extends Component {

    onLoad () {
        //监听窗口大小变化时的回调，窗口变化时自动适配
        view.setResizeCallback(() => this.screenAdapter());
        this.screenAdapter();

        // view.getCanvasSize
        // screen.windowSize
        // screen.windowSize.width

        // view.getDesignResolutionSize
        
    }

    start () {
        
    }

    screenAdapter(){
        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        let _uitransform: UITransform = this.node.getComponent(UITransform)
        let scaleForShowAll = Math.min
        (
            screen.windowSize.width / _uitransform.width,
            screen.windowSize.height / _uitransform.height
        );
        let realWidth = _uitransform.width * scaleForShowAll;
        let realHeight = _uitransform.height * scaleForShowAll;
  
          // 2. 基于第一步的数据，再做缩放适配
        
        let _scale = Math.max(
        screen.windowSize.width / realWidth, 
        screen.windowSize.height / realHeight
        )

        this.node.setScale(_scale, _scale, _scale)
    
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
