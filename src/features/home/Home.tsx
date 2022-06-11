import { Box } from '@mui/material'
import React from 'react'
import Filter from '../../components/Filter'
import ProjectCard from '../../components/ProjectCard'

function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Filter />
      <Box>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Box>
  )
}

export default HomePage