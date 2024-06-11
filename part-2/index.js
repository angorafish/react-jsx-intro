const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet">
            <h3>{name} (@{username})</h3>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Tweet username="user1" name="User One" date="2023-06-01" message="This is my first tweet!" />
            <Tweet username="user2" name="User Two" date="2023-06-02" message="Hello world!" />
            <Tweet username="user3" name="User Three" date="2023-06-03" message="My tweet is the best!" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));