const Person = ({ name, age, hobbies }) => {
    const displayName = name.length > 8 ? name.slice(0, 6) : name;

    return (
        <div className="person">
            <p>Learn some information about this person:</p>
            <p>Name: {displayName}</p>
            <p>Age: {age}</p>
            <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Person name="Alexander" age={20} hobbies={["Reading", "Swimming", "Coding"]} />
            <Person name="Bob" age={16} hobbies={["Gaming", "Drawing"]} />
            <Person name="Catherine" age={30} hobbies={["Cooking", "Running", "Traveling"]} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));