import { LoginStore } from "./LoginStore";

export const loginStore = LoginStore.create({
    contents:[
        {
            id: '1',
            user: 'test',
            passwd: 'test'
        },
        {
            id: '2',
            user: 'test2',
            passwd: 'test2'
        },
        {
            id: '3',
            user: 'test3',
            passwd: 'test3'
        },
        {
            id: '4',
            user: 'test4',
            passwd: 'test4'
        },
        {
            id: '5',
            user: 'test5',
            passwd: 'test5'
        },
    ]
})