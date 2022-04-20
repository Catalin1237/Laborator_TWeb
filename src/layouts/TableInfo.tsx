import { CustomInterface } from "../interfaces/CustomInterface";

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

const TabelInfo = () => {
    return(
        <>
            <main>
                <br />
                <CustomInterface specificInfo={infoInterface}/>
            </main>
        </>
    )
}

export default TabelInfo;