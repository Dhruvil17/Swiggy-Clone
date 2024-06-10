const Contact = () => {
    return (
        <div className="my-16 py-16">
            <h1 className="font-bold text-3xl px-4">Contact Us</h1>
            <div className="m-1 p-4">
                <input
                    className="flex my-2 p-2 rounded-xl border border-gray-600"
                    placeholder="Enter your Name"
                    type="text"
                />
                <input
                    className="flex my-4 p-2 rounded-xl border border-gray-600"
                    placeholder="Enter your Message"
                    type="text"
                />
                <button className="flex my-2 bg-green-200 px-4 py-2 rounded-lg hover:bg-green-400">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Contact;
