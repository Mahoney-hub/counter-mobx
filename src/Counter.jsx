import React from 'react';
import counter from "./store/counter";
import {observer} from "mobx-react-lite";

export const Counter = observer(() => {
    return (
        <div className={'counter'}>
            <span className={'title'}>{'counter = ' + counter.count}</span>
            <div className={'btns'}>
                <button className={'btn'} onClick={() => counter.increment()}>+</button>
                <button className={'btn'} onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
})


