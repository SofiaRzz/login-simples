import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { auth } from "./lib/firebase/"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Cadastro() {
  const navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    const data = e.target
    await createUserWithEmailAndPassword(auth, data.email.value, data.senha.value)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/")
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
          <Form.Label>Nome</Form.Label>
          <Form.Control name="nome" type="text" placeholder="Fulaninho" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="nome@dominio.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control name="senha" type="password" placeholder="•••••••••" />
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
