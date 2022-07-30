import Image from 'next/image'
import { buttons } from './buttons'

export function Navbar(): JSX.Element {
    const navButtons = buttons.map((item, index) => {
        return (
            <button className="mb-[40px]" key={index}>
                {
                    <Image
                        src={item.srcBtn}
                        alt={item.altBtn}
                        width={item.widthBtn}
                        height={item.heightBtn}
                    />
                }
            </button>
        )
    })
    return (
        <div className="bg-[#161D2F] rounded-2xl my-8 ml-8 mr-9 w-24 h-[95vh] flex flex-col justify-between">
            <div className="flex flex-col">
                <button className="mt-[35.41px]">
                    {
                        <Image
                            src="/assets/logo.svg"
                            alt="home-button"
                            width={32}
                            height={25.6}
                        />
                    }
                </button>
                <div className="mt-[75px] flex flex-col">{navButtons}</div>
            </div>
            <div className="mx-7 mb-8 w-[40px] h-[40px] relative border-solid border-[1px] rounded-full">
                <Image
                    src="/assets/image-avatar.png"
                    alt="profile-picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
        </div>
    )
}
