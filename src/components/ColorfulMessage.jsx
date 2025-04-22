export const ColorfulMessage = (props) => {

    const contentStyle = {
        color : props.color,
        fontSize: "15px"
    }

    return (
        <p style={contentStyle}>{props.message}</p>
    )
}