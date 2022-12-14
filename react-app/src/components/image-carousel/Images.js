import React, { useEffect, useState } from 'react'
import "./images.css"

const Images = (images) => {
    const { children } = images//does this need to be 'children'?
    // console.log(images)

    const [currentImg, setCurrentImg] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentImg < (length - 1)) {
            setCurrentImg(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentImg > 0) {
            setCurrentImg(prevState => prevState - 1)
        }
    }

    return (
        <div id="images-box-outer">
            <img className={currentImg === 0 ? 'grey-arrow' : 'white-arrow'} onClick={prev} id="left-arrow" src='https://i.imgur.com/oTediJN.png' />
            {/* <button onClick={prev} id="left-arrow">
                {`<`}
            </button> */}
            <div id="images-box-inner">
                <div id="images-display">
                    <div id="images" style={{ transform: `translateX(-${currentImg * 720}px)` }}>
                        {children}
                    </div>
                </div>
            </div>
            <img className={currentImg >= 1 ? 'grey-arrow' : 'white-arrow'} onClick={currentImg < 1 ? next : null} id="right-arrow" src='https://i.imgur.com/UpFYkCd.png' />
            {/* <button onClick={next} id="right-arrow">
                {`>`}
            </button> */}
        </div >
    )
}

export default Images
