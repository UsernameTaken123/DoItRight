import { resources, SpriteFrame } from "cc"

export default class ResourceManager{

  public loadDir(path: string, type: typeof SpriteFrame= SpriteFrame){
    return new Promise<SpriteFrame[]>( (resolve, reject) => {
        resources.loadDir(path, type, function (err, assets) {
            if (err){
                reject(err)
                return
            }

            resolve(assets)
        })

    })
}
}