const FirstComponent = () => {
    return (
        <h1>My very first component</h1>
    );
};

const NamedComponent = ({ name }) => {
    return (
        <p>My name is {name}</p>
    );
};

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John Doe" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));