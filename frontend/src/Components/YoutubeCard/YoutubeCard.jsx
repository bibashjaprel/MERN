import { Typography } from '@mui/material'
import React from 'react'
import "./YoutubeCard.css"

const YoutubeCard = ({
    url = "https://www.youtube.com/c/BibashJaprel",
    title ="Title",
    image,
}) => {
  return (
    <div className='YoutubeCard'>
        <a href={url} target="blank">

            <img src={image} alt="Video" />
            <Typography>{title}</Typography>
        </a>
    </div>
  )
}

export default YoutubeCard