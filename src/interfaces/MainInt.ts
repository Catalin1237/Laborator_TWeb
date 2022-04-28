import RootStore from "../mst/store/RootStore"
import { ContentModel } from "../mst/model/Content.model"
import { Instance } from "mobx-state-tree"
import { LoginStore } from "../Login-mst/LoginStore"
import { LoginModel } from "../Login-mst/LoginModel"

export interface GeneralInfo {
    name: string,
    surname: string,
    age: number
}

export interface SpecificInfo extends GeneralInfo{
    superName: string,
    superPower: string,
    city: string
}

export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{
    
}

export interface ILoginStore extends Instance<typeof LoginStore>{
    
}
export interface ILoginModel extends Instance<typeof LoginModel>{

}