import { GeneralInfo, SpecificInfo } from './MainInt';

interface SuperHeroProps {
    specificInfo: SpecificInfo[];
}

const HeroItem= ( {name, surname, age, superName, superPower, city}: SpecificInfo) => {
    return(
        <>
            <br />
            Numele: {name}
            <br />
            Prenumele: {surname}
            <br />
            Varsta: {age}
            <br />
            Hero name: {superName}
            <br />
            Hero power: {superPower}
            <br />
            Oras: {city}
            <br />
        </>
    )
}

export const CustomInterface = ( { specificInfo }: SuperHeroProps) => {
    return(
        <>
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
        </>
    )
}