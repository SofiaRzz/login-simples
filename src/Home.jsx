import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
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
      <div className="d-flex justify-content-center align-items-center " style={{height:"100vh", backgroundColor:"#198754"}}>
        {data.user.email}

        <Button onClick={handleLogOut}> Sair </Button>
      </div>
    )
  } else {
    useEffect(() => {
      navigate("/")
    })
  }
}

export default Home
