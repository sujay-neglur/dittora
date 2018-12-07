console.log('src/playground/app.js is running');

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options
        };
    }

    handleDeleteOptions() {
        /*this.setState(() =>  {
            return {
                options: []
            };
        });*/
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(openToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => openToRemove !== option)
        }));
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNumber];
        console.log(option);
    }

    handleAddOption(option) {
        /*e.preventDefault();
        const option = e.target.elements.option.value.trim();*/

        if(!option) {
            return 'Enter a valid Item to add.';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This item already exists';
        }

        if(option) {
            //alert(option);
            let newOptions = this.state.options.slice();
            newOptions.push(option);
            /*this.setState((prevState) => {
               return {
                   options: prevState.options.concat(option)
               };
            });*/
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    }

    render() {
        //const title = "Indecision";
        const subtitle = "Secret";
        return (

            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />

                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'
};
/*class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}*/

const Action = (props) => {
    return (
        <div>

            <button
                disabled={!props.hasOption}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    );
};

/*class Action extends React.Component {

    render() {
        return (
            <div>

                <button
                    disabled={!this.props.hasOption}
                    onClick={this.props.handlePick}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}*/

const Options = (props) => {
    return (
        <div>

            {props.options.map((option) =>
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />)}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

/*class Options extends React.Component {

    render() {
        return (
            <div>

                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}*/

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >Remove</button>
        </div>
    );
};

/*class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}*/

class AddOption extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          error: undefined
        };
    }


    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        /*this.setState(() => {
            return {
              error
            };
        });*/
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

/*const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);*/

const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, appRoot);

//stateless React Component