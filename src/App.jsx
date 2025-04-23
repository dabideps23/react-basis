import { useEffect, useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {
    console.log("------APP------");
    //フックの宣言
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(true);

    //主な再レンダリングのトリガー
    // 1.フックの値が更新されたら
    // 2.プロップスの値が変わったら
    // 3.親コンポーネントが再レンダリングされたら

    //カウントアップ
    const onClickCountUp = () => {
        //ここでフックの宣言をするとエラー
        // const [num, setNum] = useState(0);

        setNum((prev) => prev + 1);
    }

    //顔の表示非表示
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    }

    //useEfect 
    // 第一引数：処理
    // 第二引数：依存配列
    // ※第二引数に指定された変数が更新された時だけ、useEffectが動作する。
    useEffect(() => {
        console.log("------useEffect------");
        if (num > 0) {
            //3の倍数の時だけ顔を表示
            if (num % 3 === 0){
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]);

    // 第二引数にnumを指定することで、numが更新された時だけ、3の倍数の評価が行われるようになった。

    return (
        <>
            <h1>こんにちは</h1>
            <ColorfulMessage color="blue" children="お元気ですか？" />
            <ColorfulMessage color="green" children="元気です！" />
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>(*^^*)</p>}
        </>
    )
}