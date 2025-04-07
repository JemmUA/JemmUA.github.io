import { useState } from "react";
import CounterButton from './CounterButton.tsx';

export default function Counter() {
    const [countBtn, setCountBtn] = useState(1);
    const addMore = ():void => {
        setCountBtn(countBtn + 1);
    }
    return (
        <>
            <CounterButton count={countBtn} increment={addMore} text={"First child"}>I'm a counterButton</CounterButton>
            <CounterButton count={countBtn} increment={addMore} text={"Second child"}>I'm a counterButton</CounterButton>
            <CounterButton count={countBtn} increment={addMore} text={"Third child"}>I'm a counterButton</CounterButton>
        </>
    );
}