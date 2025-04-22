export const App = () => {

    const onClickButton = () => alert("押下！")

    return (
        <>
            <h1>こんにちは</h1>
            <p>お元気ですか</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}