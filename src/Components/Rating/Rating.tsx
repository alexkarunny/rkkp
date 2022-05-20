
type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingProps) => {
    return (
        <>
            <Star selected={true} value={1} ratingValue={props.value}/>
            <Star selected={true} value={2} ratingValue={props.value}/>
            <Star selected={true} value={3} ratingValue={props.value}/>
            <Star selected={false} value={4} ratingValue={props.value}/>
            <Star selected={true} value={5} ratingValue={props.value}/>
        </>
    )
}

type StarProps = {
    selected: boolean
    value: number
    ratingValue: number
}

const Star = (props: StarProps) => {
    return <span>{(props.value <= props.ratingValue) ? <b>star</b> : 'star'}</span>
}