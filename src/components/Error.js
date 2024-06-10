import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>OOPS!!</h1>
            <h2>Unexpected Error has occured in your application</h2>
            <h3>
                {error.status} : {error.statusText}
            </h3>
        </div>
    );
};

export default Error;
