import React from 'react'

const VideoTitle = ({title, overview, popular, date}) => {
  return (
    <div className="aspect-video w-screen md:pt-[12%] pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="md:text-6xl text-2xl font-bold mt-24 md:mt-0">{title}</h1>
        <p className="md:py-6 md:text-lg md:w-1/4 hidden md:inline-block">{overview}</p>
        <div>
            <button className="hidden md:inline-block bg-white text-black md:py-4 md:px-12 px-2 py-4 text-xl rounded-lg hover:bg-opacity-80 font-bold">▶️ Play</button>
            <button className="hidden md:inline-block bg-gray-500 text-white mx-2 p-4 px-12 text-xl bg-opacity-50 rounded-lg">ℹ️ More info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
