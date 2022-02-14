import React from 'react'

type imgProps = {
    alt: string,
    address: string
}

const ImageBanner = (props: imgProps) => {
    return (
        <>
            <div className='image-banner' style={{ backgroundImage: `url(${props.address})` }}></div>
        </>
    )
}

export default ImageBanner
