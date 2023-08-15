import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Cadastro() {

  return (
    <div className="d-flex justify-content-center align-items-center " style={{height:"100vh", backgroundColor:"#198754"}}>
      <Form className="d-flex justify-content-center align-items-center flex-column p-5 rounded-2" style={{width:"25rem", backgroundColor:"white"}}>
      <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Fulaninho" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="nome@dominio.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="•••••••••" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control type="password" placeholder="•••••••••" />
        </Form.Group>
        <Button type="submit" className="w-100 mt-3"> Cadastre-se </Button>
      </Form>

    </div>
  )
}

export default Cadastro
