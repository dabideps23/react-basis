export const ColorfulMessage = ({color, children} = props) => {

    const contentStyle = {
        color,
        fontSize: "15px"
    }

    return (
        <p style={contentStyle}>{children}</p>
    )
}