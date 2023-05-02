import { Typography } from '@mui/material'
import React from 'react'
import "./Projects.css"
import {AiOutlineProject} from "react-icons/ai"

const Projects = () => {
  const projects = [];
  return (
    <div className="Projects">
      <Typography>Projects<AiOutlineProject/></Typography>

      <div className="projectsWrapper">
        {projects.map((project, index)=>{
          
        })}
      </div>

    </div>

  )
}

export default Projects