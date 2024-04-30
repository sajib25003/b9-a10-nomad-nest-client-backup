
const Offers = () => {
    return (
        <div className=" h-[400px] flex flex-col md:flex-row bg-base-200 justify-center shadow-xl items-center px-10 lg:px-24 mb-10">
        <div className="flex-grow items-center text-center lg:text-right space-y-6 ">
        <h2 className=" text-red-500 text-xl md:text-3xl lg:text-5xl font-bold">Anniversary Special Offer</h2>
        <p className=" text-base md:text-2xl font-semibold text-gray-600">Enjoy upto 60% discount on every tour till 10 May, 2024.</p>
        <p className=" text-red-500 text-base md:text-xl font-bold">DO NOT BE TOO LATE. TIME IS LIMITED</p>
        </div>
        <img className=" hover:scale-110 items-center h-[180px] lg:h-[350px]" src="/offer-1.png" alt="" />
      </div>

    );
};

export default Offers;