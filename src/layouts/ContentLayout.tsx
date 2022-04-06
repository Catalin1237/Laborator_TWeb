import { List } from 'antd';
import { Content } from 'antd/lib/layout/layout'
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useRootStore } from '..';
import { CustomForm } from '../Forms/CustomForm';
import { CustomInterface } from '../interfaces/CustomInterface';
import { IContentModel } from '../interfaces/MainInt';
import { Note } from '../Notes/Notes';
import { CardCustom } from './CardCustom'
import { CardCustom2 } from './CardCustom2';
import './layout.css';

const infoCard = [
    {
        id: 1,
        title: "Titlul 1",
        description: "Descriere",
        phoneNumb: 69420
    },
    {
        id: 2,
        title: "Titlul 2",
        description: "Descriere",
        phoneNumb: 69420
    },
    {
        id: 3,
        title: "Titlul 3",
        description: "Descriere",
        phoneNumb: 69420
    },
    {
        id: 4,
        title: "Titlul 4",
        description: "Descriere",
        phoneNumb: 69420
    },
]

const infoInterface = [
    {
        name: "Parker",
        surname: "Peter",
        age: 16,
        superName: "Spiderman",
        superPower: "spider power",
        city: "Queens"
    },
    {
        name: "Wayne",
        surname: "Bruce",
        age: 35,
        superName: "Batman",
        superPower: "Rich",
        city: "Gotham City"
    },
]

export const ContentLayout = observer(() => {

    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return(
        <main>
            <Content style={ { padding: '0 50px' } }>

                <div>
                    <CustomForm />
                </div>
                
                <div className='site-layout-content grid-3'>
                    { infoCard.map((el, index) => {
                        return (
                            <CardCustom key={ el.id } title={ el.title } description={ el.description } phoneNumb={ el.phoneNumb } />
                        )
                    })
                    }
                </div>

                <br />

                <div>
                    <CustomInterface specificInfo={infoInterface}/>
                </div>
                
                <br />

                <div>
                    
                    <div>
                        {
                            contents.map((content: IContentModel) => {
                                return(
                                    <CardCustom2 key={ content.id } content={ content } />
                                )
                            })
                        }
                    </div>

                    <br />

                    <div>
                        {
                            contents_notes.map((content: IContentModel) => {
                                return(
                                    <List.Item>

                                        <Note key={ content.id } content={ content } />

                                    </List.Item>
                                )
                            })
                        }
                    </div>

                </div>
            </Content>
        </main>
    )
})