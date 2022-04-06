import { GeneralInfo, SpecificInfo } from './MainInt';
import'../layouts/layout.css';

interface SuperHeroProps {
    specificInfo: SpecificInfo[];
}

const HeroItem= ( {name, surname, age, superName, superPower, city}: SpecificInfo) => {
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
                <td>{superName}</td>
                <td>{superPower}</td>
                <td>{city}</td>
            </tr>
        </>
    )
}

export const CustomInterface = ( { specificInfo }: SuperHeroProps) => {
    return(
        <>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Super Name</th>
                    <th>Super Power</th>
                    <th>City</th>
                </tr>

                    {
                    specificInfo.map((el) => {
                        return(
                            <HeroItem
                                name = {el.name}
                                surname = {el.surname}
                                age = {el.age}
                                superName = {el.superName}
                                superPower = {el.superPower}
                                city = {el.city}
                            />
                        )
                    }) 
            }
            </table>
        </>
    )
}