import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Main = () => {

    const url = 'https://thronesapi.com/api/v2/Characters'

  const [members, setMembers] = useState([])
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getMembers = async () => {
      const res = await axios.get(`${url}/asdf`)
      setMembers(res.data)
      console.log(res.data)
    }
    getMembers()
  }, [])

  return (
    <>
    <div className='additional'>
      <input className='m-auto' type="text" placeholder='Search...' onChange={e => setSearchTerm(e.target.value)} />
    </div>
    <Container>
    <Grid container>
      {members.filter(val => {
        if(searchTerm == ''){
          return val
        }else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((member, id) => (
        <Grid item key={id} xs={12} md={3} style={{padding: '15px'}}>
          <Card sx={{ maxWidth: 325 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src={member.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    </>
  )
}

export default Main