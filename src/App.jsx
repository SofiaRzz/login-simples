import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom" 

function App() {
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    navigate("/home")
  }

  return (
    <div className="d-flex justify-content-center align-items-center " style={{height:"100vh", backgroundColor:"#198754"}}>
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column p-5 rounded-2" style={{width:"25rem", backgroundColor:"white"}}>
        <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="nome@dominio.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="•••••••••" />
        </Form.Group>
        <Button type="submit" className="w-100 mt-3"> Entrar </Button>
        <p className="mt-1">Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </Form>

    </div>
  )
}

export default App
