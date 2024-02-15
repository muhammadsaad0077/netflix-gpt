import React from 'react'

const VideoTitle = ({title, overview, popular, date}) => {
  return (
    <div className="pt-36 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-white hover:text-black hover:font-bold">▶️ Play</button>
            <button className="bg-gray-500 text-white mx-2 p-4 px-12 text-xl bg-opacity-50 rounded-lg  hover:bg-white hover:text-black hover:font-bold">More info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
