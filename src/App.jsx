import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {

    const onClickButton = () => alert("押下！")


    return (
        <>
            <h1>こんにちは</h1>
            <ColorfulMessage color="blue" children="お元気ですか？" />
            <ColorfulMessage color="green" children="元気です！" />
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}