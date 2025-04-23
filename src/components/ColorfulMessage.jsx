// export const ColorfulMessage = ({color, children} = props) => {
const ColorfulMessage = ({color, children} = props) => {
    console.log("------ColorfulMessage------");
    const contentStyle = {
        color,
        fontSize: "15px"
    }

    return (
        <p style={contentStyle}>{children}</p>
    )
}

export default ColorfulMessage;
//1ファイルで一回だけ
//取得先で名前を指定できる。