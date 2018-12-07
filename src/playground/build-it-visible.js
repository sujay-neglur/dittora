console.log("build-it-visible.js is Running!");


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.showItem = this.showItem.bind(this);
        this.state = {
          visibility: false
        };
    }

    showItem() {
        //alert('ShowItem');
        this.setState((prevState) => {
           if(prevState.visibility === false){
               return{
                 visibility:true
               };
           }
           else{
               return{
                   visibility:false
               };
           }
        });
    }

    render() {
        //let visibility = false;
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showItem}>
                    {this.state.visibility===false ? 'Show Item':'Hide Item'}
                </button>
                {
                    this.state.visibility===true ? <p>This is how life is!</p>:<p></p>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*
const buildVisibleApp = {
    title: 'Visibility Toggle',
    text: 'The hidden is revealed!'
};

let item = 'Show Item';
let visibility = false;
const onItemShow =() => {

    if(item === 'Show Item'){
        item = 'Hide Item';
        visibility = true;
    }else if(item == 'Hide Item'){
        item = 'Show Item';
        visibility = false;
    }

    renderBuildToggle();
};

const renderBuildToggle = () => {
    const template = (
        <div>
            <h1>{buildVisibleApp.title}</h1>
            <button onClick={onItemShow}>
                {visibility ? item : item}
            </button>

            { visibility && (
                <div>
                    <p>{buildVisibleApp.text}</p>
                </div>
                )}


        </div>
    );

    ReactDOM.render(template, appRoot);
};



const appRoot = document.getElementById("app");

renderBuildToggle();*/
