import { useState } from 'react'

type buttonProps ={
    toggle: boolean,
    buttonText: string,
}

function App(): JSX.Element {
    const [toggleButton1, setToggleButton1] = useState<buttonProps>({toggle: false, buttonText: "1"})
    const [toggleButton2, setToggleButton2] = useState<buttonProps>({toggle: false, buttonText: "2"})
    const [toggleButton3, setToggleButton3] = useState<buttonProps>({toggle: false, buttonText: "3"})
    const [toggleButton4, setToggleButton4] = useState<buttonProps>({toggle: false, buttonText: "4"})
    const [toggleButton5, setToggleButton5] = useState<buttonProps>({toggle: false, buttonText: "6"})

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
                <div className="flex justify-between mt-6 text-[#737083] text-[15px]">
                    <button
                        className={`${
                            toggleButton1
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={(): void => {setToggleButton1(...toggleButton1,!toggleButton1.toggle)}}
                    >}
                    </button>
                    <button
                        className={`${
                            toggleButton2
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={(): void => setToggleButton2(!toggleButton2)}
                    >
                        2
                    </button>
                    <button
                        className={`${
                            toggleButton3
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={(): void => setToggleButton3(!toggleButton3)}
                    >
                        3
                    </button>
                    <button
                        className={`${
                            toggleButton4
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={(): void => setToggleButton4(!toggleButton4)}
                    >
                        4
                    </button>
                    <button
                        className={`${
                            toggleButton5
                                ? 'bg-orange-500 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={(): void => setToggleButton5(!toggleButton5)}
                    >
                        5
                    </button>
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
