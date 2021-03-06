
type AccordionType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle title={props.title}/>
        {props.collapsed && <AccordionBody/>}
    </>
}

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = (props: AccordionTitleProps) => {
    return <h3>-----{props.title}-----</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>Lviv</li>
        <li>Minsk</li>
        <li>Vilnius</li>
    </ul>
}