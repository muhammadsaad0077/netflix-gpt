import React from 'react'

const VideoTitle = ({title, overview, popular, date}) => {
  return (
    <div className="aspect-video w-screen pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80 font-bold">▶️ Play</button>
            <button className="bg-gray-500 text-white mx-2 p-4 px-12 text-xl bg-opacity-50 rounded-lg">ℹ️ More info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
