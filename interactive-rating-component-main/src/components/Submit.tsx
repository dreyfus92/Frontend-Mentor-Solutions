import { useState } from 'react'

type submitProps = {
    submitText: string
}

function Submit({ submitText }: submitProps): JSX.Element {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="w-[380px] h-auto bg-[#202731] p-8 rounded-3xl ">
                <img
                    className="mx-auto mb-8"
                    src="assets/illustration-thank-you.svg"
                    alt="thank-you-img"
                />
                <p className="bg-gray-700 text-center opacity-50 text-orange-400 rounded-full w-fit px-4 py-1 mx-auto">{`You selected ${submitText} out of 5`}</p>
                <h1 className="text-white text-xl mb-2 mt-7 text-center">
                    Thank you!
                </h1>
                <p className="text-[#737083] text-[15px] text-center">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don't hesitate to get in touch!
                </p>
                <div className="flex justify-between mt-6 text-[#737083] text-[15px]"></div>
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

export default Submit
