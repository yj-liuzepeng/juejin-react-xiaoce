import { memo, useEffect, useState, useCallback } from "react";

function Aaa() {
    const [, setNum] = useState(1);

    const [count, setCount] = useState(2);


    useEffect(() => {
        setInterval(() => {
            setNum(Math.random());
        }, 2000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setCount(Math.random());
        }, 2000)
    }, []);

    // function bbbCallback () {

    // }
    const bbbCallback = useCallback(function () {
        // xxx
    }, []);
    return <div>
        <MemoBbb count={count} callback={bbbCallback}></MemoBbb>
    </div>
}

interface BbbProps {
    count: number;
    callback: Function
}

function Bbb(props: BbbProps) {
    console.log('bbb render');

    return <h2>{props.count}</h2>
}

const MemoBbb = memo(Bbb);

export default Aaa;
