import { useState, useEffect } from "react";

const User = ({ name, location, contact }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste React OP");
        }, 1000);

        //console.log("Use Effect");

        return () => {
            //Called when the Component is Unmounted
            //console.log("After useEffect");
            clearInterval(timer);
        };
    });

    //console.log("Render");

    return (
        <div className="card">
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
        </div>
    );
};

export default User;
