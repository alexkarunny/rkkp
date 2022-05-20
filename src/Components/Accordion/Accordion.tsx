
type AccordionType = {
    title: string
}

export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </>
}

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = (props: AccordionTitleProps) => {
    return <h3>{props.title}</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>Lviv</li>
        <li>Minsk</li>
        <li>Vilnius</li>
    </ul>
}