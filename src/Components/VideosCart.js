import React from 'react'

const VideosCart = ({info}) => {
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails}= snippet
  return (
    <div>
        <img alt='thumbnails' src={thumbnails.high} />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
   </div>
  )
}

export default VideosCart