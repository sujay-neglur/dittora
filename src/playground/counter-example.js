
class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.render = this.render.bind(this);
        //this.count = this.props.count;
        this.state = {
          count: props.count
        };

    }

    handleAddOne(){

        this.setState((prevState) => {
            return {
              count: prevState.count + 1
            };
        });


    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }


    render() {
        //let count = 0;
        return (
            <div>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>

        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));







/*
let count = 0;

const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
};
const minusOne = () => {
    if (count>0){count--;}

    console.log('minusOne');
    renderCounterApp();
};
const resetOne = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
};


const appRoot = document.getElementById("app");



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={"my-id-addOne"} className="button" onClick={addOne}>+1</button>
            <button id={"my-id-minusOne"} className="button" onClick={minusOne}>-1</button>
            <button id={"my-id-reset"} className="button" onClick={resetOne}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
};

renderCounterApp();*/
