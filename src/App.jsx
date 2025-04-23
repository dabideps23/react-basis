import { useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {
    console.log("------APP------");
    //フックの宣言
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFase] = useState(true);

    const onClickCountUp = () => {
        //ここでフックの宣言をするとエラー
        // const [num, setNum] = useState(0);

        setNum(num + 1);
        // setNum(num + 1); // 8行目の更新前に評価されるため、相対的に＋１しかしされない。
        // setNum((prev) => prev + 1);
        // setNum((prev) => prev + 1);
    }

    const onClickToggle = () => {
        setIsShowFase(!isShowFace);
    }

    return (
        <>
            <h1>こんにちは</h1>
            <ColorfulMessage color="blue" children="お元気ですか？" />
            <ColorfulMessage color="green" children="元気です！" />
            <button onClick={onClickCountUp}>ボタン</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>(*^^*)</p>}
        </>
    )
}