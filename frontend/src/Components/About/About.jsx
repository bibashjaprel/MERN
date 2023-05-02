import { Typography } from '@mui/material'
import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>


        <div className="aboutContainer">

            <Typography>this is a sample quote</Typography>
        </div>
        <div className="aboutContainer2">
             <div>
                <img src="https://www.bibashjaprel.com.np/images/about.jpg" alt="Bibash" className='aboutAvtar' />

                <Typography variant='h4' style={{
                    margin:"1vmax 0", color:"black"
                }}>Bibash Japrel</Typography>

                <Typography>Full Stack Developer</Typography>

                <Typography  style={{
                    margin:"1vmax 0"
                }}> I am a Web Developer</Typography>
             </div>
             <div>

                <Typography style={{
                    wordSpacing:"5px",
                    lineHeight:"50px",
                    letterSpacing:"5px",
                    textAlign:"right",
                }}>this is descreption Lorem i
                    psum dolor sit amet consectetur adipisicing elit. Saepe
                     optio porro corrupti, doloribus, necessitatibus,
                      repellendus eveniet quas quasi voluptatibus 
                      dolorum quaerat.</Typography>
             </div>
        </div>
    </div>
  )
}

export default About