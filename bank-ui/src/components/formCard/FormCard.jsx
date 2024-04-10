import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'

const FormCard = () => {
    return(
      <Form className='formCard'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='labelForm'>Número do Cartão</Form.Label>
          <Form.Control type="numeric" placeholder="Número do Cartão" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='labelForm'>Digite o nome do titular</Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label className='labelForm'>Validade</Form.Label>
        <Form.Control placeholder="DD/MM" />
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
        <Form.Label className='labelForm'>CVC</Form.Label>
        <Form.Control placeholder="123" />
      </Form.Group>
      </Row>

      <Button className='buttonForm' variant="primary" type="submit">
        Add Card
      </Button>
    </Form>
    )
}
export default FormCard