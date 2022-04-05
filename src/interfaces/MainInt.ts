
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