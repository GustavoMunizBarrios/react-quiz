import { useReducer } from "react";

const initialState = { count: 0, step: 1 }


function reducer(state, action) {
    // ({ state.count: _, state.step: _ }, {action.type, action.payload})
    console.log(state, action)

    switch (action.type) {
        case "inc":
            // spread the entire current state object (...state), and then override the count property (count: state.count + 1)
            return { ...state, count: state.count + state.step };
        case "dec":
            return { ...state, count: state.count - state.step };
        case "setCount":
            return { ...state, count: action.payload }
        case "setStep":
            return { ...state, step: action.payload }
        case "reset":
            return initialState // { count: 0, step: 1 }
        default:
            throw new Error("Unknown action");
    }
}

function DateCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    const dec = function () {
        dispatch({ type: "dec" })
    };

    const inc = function () {
        dispatch({ type: "inc" })
    };

    const defineCount = function (e) {
        dispatch({ type: "setCount", payload: Number(e.target.value) })
    };

    const defineStep = function (e) {
        dispatch({ type: "setStep", payload: Number(e.target.value) })
    };

    const reset = function () {
        dispatch({ type: "reset" })
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;