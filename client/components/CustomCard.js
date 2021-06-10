import { Card } from 'react-bootstrap'

const CustomCard = ({ children, title, classes }) => {
  return (
    <Card className={classes}>
      <Card.Body>
        {title && (
          <Card.Title className='border-bottom pb-3 mb-3'>{title}</Card.Title>
        )}
        {children}
      </Card.Body>
    </Card>
  )
}

export default CustomCard
