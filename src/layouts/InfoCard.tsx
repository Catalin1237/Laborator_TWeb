import { Content } from 'antd/lib/layout/layout';
import { CardCustom } from './CardCustom';
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

const InfoCard = () => {
    return(
        <>
            <main>
            <Content style={ { padding: '0 50px' } }>

                <div className='site-layout-content grid-3'>
                    { infoCard.map((el, index) => {
                        return (
                            <CardCustom key={ el.id } title={ el.title } description={ el.description } phoneNumb={ el.phoneNumb } />
                        )
                    })
                    }
                </div>
                
            </Content>
        </main>
        </>
    )

}

export default InfoCard;