import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {

    const onClickButton = () => alert("押下！")


    return (
        <>
            <h1>こんにちは</h1>
            <ColorfulMessage color="blue" message="お元気ですか？" />
            <ColorfulMessage color="green" message="元気です！" />
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}