import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(oldValue => oldValue + 1);
    };

    const onClearCounter = () => {
        setCount(0);
    };

    //if (count < 0) {
    //    return (
    //        <h3>Invalid Count!</h3>
    //    );
    //}

    let message = null;

    switch (count) {
        case 1:
            message = 'First blood!';
            break;
        case 2:
            message = 'Double kill!';
            break;
        case 3:
            message = 'Tripple kill!';
            break;
        case 4:
            message = 'Multi kill!';
            break;
        case 5:
            message = 'Unstoppable!';
            break;
        case 6:
            message = 'GODLIKE!';
            break;
        default:
            message = 'M-m-m-monster kill!';
    }


    return (
        <div>
            <h3>Counter</h3>

            {count < 0 ? <p>Invalid count!</p> : <p>Valid count!</p>}

            {count == 0 && <p>Please start incrementing</p>}

            <h4>{message}</h4>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={onClearCounter}>clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}