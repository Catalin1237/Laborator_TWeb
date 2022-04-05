import Card from 'antd/lib/card';

export const CardCustom = ({title, description, phoneNumb}: {title: string, description: string, phoneNumb: number}) => {
    return(
        <Card title={ title } bordered={ false } hoverable={ true } style={{ width: 300, border: '1px solid black'}}> 
            Descriere: { description }
            <br /><hr />
            Telefon: { phoneNumb }
        </Card>
    )
}