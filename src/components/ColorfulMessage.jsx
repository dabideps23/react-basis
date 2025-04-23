export const ColorfulMessage = ({color, children} = props) => {

    console.log("------ColorfulMessage------");
    const contentStyle = {
        color,
        fontSize: "15px"
    }

    return (
        <p style={contentStyle}>{children}</p>
    )
}