// index.js 
// contain <div id="root"> which is the root of the app






// life cycle methods: 

// render is the only one that is required. return jsx. 
render() {
    return (
        // should only have on big div, class is called className =""
        <div className="your-class">        </div>
    )
}


// componentDidMount: used to fetch data after components are created and mount to the app
// https://medium.com/front-end-weekly/async-await-with-react-lifecycle-methods-802e7760d802
// https://medium.com/@kkomaz/react-to-async-await-553c43f243e2
// exp: async vs promise

async componentDidMount() {
    const res = await fetch('https://example.com')
    const something = await res.json()
    this.setState({ something })
}

componentDidMount() {
    fetch('https://example.com')
        .then((res) => res.json())
        .then((something) => this.setState({ something }))
}








// interview practice q
// clicking on "+" should increment the counter and click on "-" should decrease the counter.
// https://codesandbox.io/s/new
import React from "react";
import "./styles.css";

class App extends React.Component {
    state = {
        counter: 1
    };

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        return (
            <div className="App">
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}
export default App;


// practice 2
// a button that toggles some info, a h1 'hello' for example
class App extends React.Component {
    state = {
        class: "show"
    };

    changeClass = () => {
        this.setState({
            class: this.state.class === "show" ? "hide" : "show"
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.changeClass}>Hit me</button>
                <h1 className={this.state.class}>Hello</h1>
            </div>
        );
    }
}
// css
// .show {
//     display: block;
// }
// .hide {
//     display: none;
// }
export default App;



