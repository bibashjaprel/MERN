import { Typography } from '@mui/material'
import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import {BsGithub,BsYoutube,BsLinkedin,BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="Footer">
        <div>
            <Typography variant='h5'>About Me</Typography>

            <Typography>Hello sir/mam! My name's Bibash Japrel, i'm 18 years old and I was born and rised in Nepal,Bajhang , 
                I'm Secondary level student in Kankali Secondary School. I love to code when i'm alone. 
                I usually work while listening music.
             </Typography>
            

            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Me</Typography>
            </Link>


        </div>
        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href='https://github.com/bibashjaprel' target="blank"><BsGithub /></a>
            <a href='https://github.com/bibashjaprel' target="blank"><BsYoutube /></a>
            <a href='https://github.com/bibashjaprel' target="blank"><BsInstagram /></a>
            <a href='https://github.com/bibashjaprel' target="blank"><BsLinkedin /></a>
        </div>
    </div>
  )
}

export default Footer