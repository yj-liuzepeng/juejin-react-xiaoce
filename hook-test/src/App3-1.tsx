import { useState } from "react";
import { produce } from 'immer';

function App() {
    const [obj, setObj] = useState({
        a: {
            c: {
                e: 0,
                f: 0
            },
            d: 0
        },
        b: 0
    });

    return (
        <div>
            <div onClick={() => {
                // obj.a.c.e ++;
                // setObj(obj);
                setObj(produce(obj, (obj) => {
                  obj.a.c.e ++;
              }))
            }}>加</div>
            <div>{JSON.stringify(obj)}</div>
        </div>
    );
}

export default App;
