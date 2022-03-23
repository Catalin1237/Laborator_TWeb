type GreetProp = {
    first: string
    last: string
    group: string
}

export const GreetMe = (props: GreetProp)=>{
    return(
        <div>
            <h2> Salut {props.first} {props.last} din grupa {props.group}</h2>
        </div>
    )
}