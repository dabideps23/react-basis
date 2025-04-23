import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {
    const [num, setNum] = useState(0);

    const onClickCountUp = () => {
        setNum(num + 1);
        setNum(num + 1); // 8行目の更新前に評価されるため、相対的に＋１しかしされない。
    }

    return (
        <>
            <h1>こんにちは</h1>
            <ColorfulMessage color="blue" children="お元気ですか？" />
            <ColorfulMessage color="green" children="元気です！" />
            <button onClick={onClickCountUp}>ボタン</button>
            <p>{num}</p>
        </>
    )
}