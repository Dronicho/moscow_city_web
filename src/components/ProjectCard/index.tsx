import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function ProjectCard(props: any) {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        sx={{ flex: 1, m: '16px', borderRadius: '8px' }}
        component="img"
        height="140"
        image='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }} >

          <Button size="small">Learn More</Button>
        </Box>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default ProjectCard