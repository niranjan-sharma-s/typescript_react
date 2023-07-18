import { Component } from "react";

type StateType = {
    count: number;
}

class Counter extends Component<{}, StateType>{
    constructor(props: StateType) {
        super(props);

        this.state = {
            count: 0
        }

    }

    handleClick = () => {
        this.setState((prevCount) => ({ count: prevCount.count + 1 }))
    }
    render() {
        return (

            <div>
                Count:{this.state.count}
                <div>

                    <button onClick={this.handleClick}>increment</button>
                </div>
            </div>
        )
    }
}

export default Counter
