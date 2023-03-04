import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Example.css';

const Example = () => {
  return (
    <>
    <div className='main-container'>

    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
        <Card  style={{ width: '20rem' }} className='card'>
        <Card.Img variant="Middle" className='img-card' src="./picture/75years.png" className='card-img' />
        <Card.Body>
        <Card.Title className='title'>Card Title</Card.Title>
        <Card.Text className='text-card'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='btn'>Read More</Button>
        </Card.Body>
        </Card>
        </div>

        {/* //seconnd */}
        <div className='col-sm'>
        <Card style={{ width: '20rem' }} className='card'>
        <Card.Img variant="Middle" src="./picture/75years.png" className=' card-img' />
        <Card.Body>
        <Card.Title className='title'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='btn'>Read More</Button>
        </Card.Body>
        </Card>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Example




