console.log("App.js is Running!");

//JSX = JavaScript XML
const app = {
    title: "Indecision App",
    subtitle: "Put Subtitle",
    options: ['one','Two']
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormSubmitted();
    }
    console.log('Form Submitted!');
};

const removeAll = () => {
    app.options = [];
    renderFormSubmitted();
};

const appRoot = document.getElementById("app");

const renderFormSubmitted = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>

            {app.subtitle ? app.subtitle : "Undefined SubTitle"}
            <p> {app.options.length>0 ? "Here are your options" : "No Options"} </p>
            <p> {app.options.length}</p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
        </div>
    );

    ReactDOM.render(template,appRoot);
};

renderFormSubmitted();










function getSub(subtitle){
    if(subtitle){
        return app.subtitle;
    }
}


var user = {
    name: "Suyash",
    age: 22,
    location: ""
};

function getLocation(location){
    if(location){
        return user.location;
    }else {
        return "Unknown";
    }
}

