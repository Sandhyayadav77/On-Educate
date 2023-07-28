import React from 'react'

const ChapterVideo = () => {
    return (
        <>
            <div className='container  px-5 py-20  mx-12 w-full h-fit  flex  justify-start  items-center'>
                <div className="video-container h-[320px] flex justify-center items-start relative rounded-xl  w-[420px] bg-gray-200">
                    <iframe className=' before:content-[""] after:content-[""] shadow-md shadow-white absolute top-6 rounded-2xl' width="385" height="210" src="https://www.youtube.com/embed/U-MMBwx69AM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>

        </>
    )
}

export default ChapterVideo