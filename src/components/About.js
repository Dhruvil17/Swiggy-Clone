import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about">
                <h1>About Us</h1>
                <h2>I am learning from Namaste React Web Series</h2>
                <UserClass number={"9727716878"} />
                {/* <User /> */}
            </div>
        );
    }
}

export default About;
