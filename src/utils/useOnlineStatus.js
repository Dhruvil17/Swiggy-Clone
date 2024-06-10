import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    //Determine the Online Status of my Web Application
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        //Offline Event Listener
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        //Online Event Listener
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
