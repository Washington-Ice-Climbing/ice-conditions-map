export default function Stars({numStars, style}) {
    const stars = [...Array(numStars).keys()].map(k =>
        <img
            src="/icons/star.png"
            style={{height: '20px', width: '20px'}}
            key={k}
        />

    )
    return (
        <div style={style}>
            {stars}
        </div>
    )
}