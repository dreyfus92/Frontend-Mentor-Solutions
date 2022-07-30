import Image from 'next/image'

export function Searchbar(): JSX.Element {
    return (
        <>
            <div className="flex items-center">
                <div className="mr-[24px]">
                    <Image
                        src="/assets/icon-search.svg"
                        width={32}
                        height={32}
                    />
                </div>
                <input
                    className="bg-[#10141E] p-[10px] border-none w-[321px]"
                    type="text"
                    placeholder="Search for movies or TV series"
                />
            </div>
        </>
    )
}
