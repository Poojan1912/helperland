import React from 'react'

type imgProps = {
    alt: string,
    address: string
}

const ImageBanner = (props: imgProps) => {    
    return (
        <div>
            <img src={props.address} style={{width: '100%'}} alt={props.alt} />
        </div>
    )
}

export default ImageBanner
