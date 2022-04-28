
import { IContentModel } from '../interfaces/MainInt';
import { Note } from '../Notes/Notes';
import { CardCustom2 } from './CardCustom2';
import { List } from 'antd';
import { useRootStore } from '..';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

export const InsertAndRead = observer(() => {

    
    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return(
        <>
            <main>
                

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
            </main>
        </>
    )
})