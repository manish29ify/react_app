// import { connect } from "react-redux";


const connect = (states, dispatchs) => {
    let compState = states
    let compDispatch = dispatchs

    // let Button = (comp) => {
    //     return <button>Click</button>;
    // };
    return function comp(comp) {
        let props = { name: "Manish" }

        return comp
    }
    // return Button;

}



export default connect