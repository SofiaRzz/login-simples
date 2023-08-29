import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { AuthContext } from "./contexts/AuthContext"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "./lib/firebase"

function Home() {
  const data = useContext(AuthContext)
  const navigate = useNavigate()
  async function handleLogOut(){
    await signOut(auth)
    navigate("/")
  }
  if (data.user){
    return (
      <>
      <div style={{height:"100vh", backgroundColor:"#198754"}}>
        <div>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand>{data.user.email}</Navbar.Brand>
              <Button onClick={handleLogOut}> Sair </Button>
            </Container>
          </Navbar>
        </div>
      </div>
      </>  
    )
  } else {
    useEffect(() => {
      navigate("/")
    })
  }
}

export default Home
