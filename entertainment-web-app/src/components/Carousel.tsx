import Image from 'next/image'
import { data } from '../utils/data'

export function Carousel(): JSX.Element {
    const carouselFilteredArray = data.filter((item) => item.isTrending)
    const carouselPhotos = carouselFilteredArray.map((photo, index) => {
        return (
            <div
                key={index}
                className="relative w-[470px] h-[230px] inline-block"
            >
                <Image
                    src={`/${photo.thumbnail.trending?.small}`}
                    alt="thumb-image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        )
    })

    return (
        <>
            <div className="">{carouselPhotos}</div>
        </>
    )
}
