import { useEffect, useState, useId } from 'react'
// import { pure } from 'recompose'
// import connect from './myHigher'

export default function User(props) {
    const [counter, updateCounter] = useState(0)
    const [money, updateMoney] = useState(0)
    // const [names, updateNames] = useState([])
    // const [form, updateForm] = useState({ name: "", email: "", password: "" })
    const id = useId();
    console.log('====================================');
    console.log(id);
    console.log('====================================');

    // useEffect(() => {
    //     let interv = setInterval(() => inc(), 1000);
    //     return () => {
    //         clearInterval(interv)
    //         console.log("cleanup");
    //     };
    // }, [counter]);



    useEffect(() => {
        console.log("money effect");
        return () => {
            console.log("money cleanup");
        };
    }, [money]);


    const inc = () => {
        updateCounter((prevState) => {
            console.log("prevState", prevState)
            return prevState + 1
        })
    }


    // const handleFormUpdate = () => {
    //     updateMoney((prevState) => {
    //         console.log("prevState", prevState)
    //         return prevState + 1
    //     })
    // }

    // const addName = (name) => {
    //     updateMoney((prevState) => {
    //         console.log("prevState", prevState)
    //         return prevState + 1
    //     })
    // }

    // console.log(props);
    return (
        <div className="App">
            <h1>User</h1>
            <h1>{'dsad'}</h1>
            <div>Counter {counter}</div>
            <button onClick={() => inc()}>counter</button>
            <button onClick={() => updateMoney(money + 1)}>money is {money}</button>

        </div>
    );
}

// export default connect(null, null)(User)

// export default App;
