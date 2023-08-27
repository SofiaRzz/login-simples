import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth" 
import { auth } from "./lib/firebase"

function App() {
  const navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    const data = e.target
    await signInWithEmailAndPassword(auth, data.email.value, data.senha.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
  
  }

  return (
    <div className="d-flex justify-content-center align-items-center " style={{height:"100vh", backgroundColor:"#198754"}}>
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column p-5 rounded-2" style={{width:"25rem", backgroundColor:"white"}}>
        <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="nome@dominio.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control name="senha" type="password" placeholder="•••••••••" />
        </Form.Group>
        <Button type="submit" className="w-100 mt-3"> Entrar </Button>
        <p className="mt-1">Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </Form>

    </div>
  )
}

export default App
