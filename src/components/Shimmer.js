const Shimmer = () => {
    const numOfCards = 12;

    const shimmerCards = Array.from({ length: numOfCards }, (v, i, k) => {
        return (
            <div
                key={i}
                className="h-[25rem] w-[16rem] bg-gray-300 mx-6 my-4 p-4  border border-double rounded-xl cursor-pointer"></div>
        );
    });

    return (
        <div className="flex flex-wrap justify-center mt-56 mx-20">
            {shimmerCards}
        </div>
    );
};

export default Shimmer;
