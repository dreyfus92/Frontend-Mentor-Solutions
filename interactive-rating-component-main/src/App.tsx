function App() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="w-[380px] h-auto bg-[#202731] p-9 rounded-3xl">
                <div className="bg-[#252f3a] rounded-full p-3 w-fit">
                    <img src="assets/icon-star.svg" alt="star-icon"></img>
                </div>
                <h1 className="text-white text-xl mb-2 mt-7">How did we do?</h1>
                <p className="text-[#737083] text-[15px]">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <div className="flex justify-between mt-6">
                    <div className="text-[#737083] text-[15px]">
                        <button className="bg-[#252f3a] rounded-full w-10 h-10">
                            1
                        </button>
                    </div>
                    <div className="text-[#737083] text-[15px]">
                        <button className="bg-[#252f3a] rounded-full w-10 h-10">
                            2
                        </button>
                    </div>
                    <div className="text-[#737083] text-[15px]">
                        <button className="bg-[#252f3a] rounded-full w-10 h-10">
                            3
                        </button>
                    </div>
                    <div className="text-white text-[15px]">
                        <button className="bg-gray-300 rounded-full w-10 h-10">
                            4
                        </button>
                    </div>
                    <div className="text-white text-[15px]">
                        <button className="bg-orange-500 rounded-full w-10 h-10">
                            5
                        </button>
                    </div>
                </div>
                <button className="bg-white rounded-full w-full mt-7 p-2 text-orange-500">
                    S U B M I T
                </button>
            </div>
            <div className="text-[11px] text-center text-white mt-6">
                Challenge by &nbsp;
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    className="text-[#3e52a3]"
                >
                    Frontend Mentor
                </a>
                .&nbsp; Coded by &nbsp;
                <a
                    href="https://github.com/dreyfus92"
                    className="text-[#3e52a3]"
                >
                    Paul Valladares
                </a>
                .
            </div>
        </div>
    )
}

export default App
