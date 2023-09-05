import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <Container component={Paper} sx={{height: 400}}>
        <Typography gutterBottom variant='h3'>Oops - we could find what you are looking for</Typography>
        <Divider />
        <Button fullWidth component={Link} to='/catalog'>Go Back to Shop</Button>
    </Container>
  )
}

export default NotFound