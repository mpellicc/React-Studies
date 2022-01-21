import { useState } from "react";

export default function Exercise3() {
    const [cont, setCont] = useState(0);

    return (
        <div className='exercise'>
            <div>
                Button has been clicked {cont} times
            </div>
            <button onClick={() => setCont(cont + 1)}>
                Click Me
            </button>
        </div>
    );
}