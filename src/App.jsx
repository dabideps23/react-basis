export const App = () => {

    const onClickButton = () => alert("押下！")

    const contentStyle = {
        color : "red",
        fontSize: "30px"
    }
    
    return (
        <>
            <h1 style={contentStyle}>こんにちは</h1>
            <p>お元気ですか</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}