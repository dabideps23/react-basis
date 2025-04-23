export const ColorfulMessage = (props) => {

    const {color, children} = props;
    
    const contentStyle = {
        color : color,
        fontSize: "15px"
    }

    return (
        <p style={contentStyle}>{children}</p>
    )
}