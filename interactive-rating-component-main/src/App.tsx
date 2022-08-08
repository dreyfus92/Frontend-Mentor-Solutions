import { useState } from 'react'
import Submit from './components/Submit'

type buttonProps = {
    toggle: boolean
    buttonText: string
}

function App(): JSX.Element {
    const [button1, setButton1] = useState<buttonProps>({
        toggle: false,
        buttonText: '1',
    })
    const [button2, setButton2] = useState<buttonProps>({
        toggle: false,
        buttonText: '2',
    })
    const [button3, setButton3] = useState<buttonProps>({
        toggle: false,
        buttonText: '3',
    })
    const [button4, setButton4] = useState<buttonProps>({
        toggle: false,
        buttonText: '4',
    })
    const [button5, setButton5] = useState<buttonProps>({
        toggle: false,
        buttonText: '5',
    })
    const [handleSubmit, setHandleSubmit] = useState<boolean>(true)
    return handleSubmit ? (
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
                            button1.toggle
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={() =>
                            setButton1((prevButton1) => ({
                                ...prevButton1,
                                toggle: !prevButton1.toggle,
                            }))
                        }
                    >
                        {button1.buttonText}
                    </button>
                    <button
                        className={`${
                            button2.toggle
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={() =>
                            setButton2((prevButton2) => ({
                                ...prevButton2,
                                toggle: !prevButton2.toggle,
                            }))
                        }
                    >
                        {button2.buttonText}
                    </button>
                    <button
                        className={`${
                            button3.toggle
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={() =>
                            setButton3((prevButton3) => ({
                                ...prevButton3,
                                toggle: !prevButton3.toggle,
                            }))
                        }
                    >
                        {button3.buttonText}
                    </button>
                    <button
                        className={`${
                            button4.toggle
                                ? 'bg-gray-300 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={() =>
                            setButton4((prevButton4) => ({
                                ...prevButton4,
                                toggle: !prevButton4.toggle,
                            }))
                        }
                    >
                        {button4.buttonText}
                    </button>
                    <button
                        className={`${
                            button5.toggle
                                ? 'bg-orange-500 text-white'
                                : 'bg-[#252f3a]'
                        } rounded-full w-10 h-10`}
                        onClick={(): void =>
                            setButton5((prevButton5) => ({
                                ...prevButton5,
                                toggle: !prevButton5.toggle,
                            }))
                        }
                    >
                        {button5.buttonText}
                    </button>
                </div>
                <button
                    className="bg-white rounded-full w-full mt-7 p-2 text-orange-500"
                    onClick={(): void => setHandleSubmit(!handleSubmit)}
                >
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
    ) : (
        <Submit submitText={button5.buttonText} />
    )
}

export default App
