import React from "react";
import { GITHUB_USER } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Dummy",
            bio: "Default",
            location: "Default",
            image: "",
        };

        //console.log("Constructor called");
    }

    async componentDidMount() {
        const fetchData = await fetch(GITHUB_USER);
        const data = await fetchData.json();

        this.setState({
            name: data.name,
            bio: data.bio,
            location: data.location,
            image: data.avatar_url,
        });

        this.timer = setInterval(() => {
            console.log("Hello from Interval");
        }, 1000);

        //console.log("Component Did Mount called");
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevProps);
        //console.log(prevState);

        if (this.state.name !== prevState.name) {
            //console.log("Inside If Condition");
            this.setState({
                name: "Dhruvil N. Soni",
            });
        }

        if (this.state.location !== prevState.location) {
            //console.log("Inside If Condition");
            this.setState({
                location: "Bengaluru, Karnataka",
            });
        }

        //console.log("Component Did Update called");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        //console.log("Component Will Unmount called");
    }

    render() {
        const { name, image, bio, location } = this.state;

        //console.log("Render called");

        return (
            <div className="card">
                <h2>Name: {name}</h2>
                <img src={image} alt={name} />
                <p>Bio: {bio}</p>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}

export default UserClass;
