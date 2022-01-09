import { useState } from 'react'
import Card from './components/Card/Card'
import Container from './components/Container/Container'
import UserForm from './components/UserForm'
import Usuarios from './components/Usuarios/Usuarios'

function App() {
  
  const [usuarios, setUsuarios] = useState([])

  

    const submit = usuario => {
      setUsuarios([
        ...usuarios,
        usuario,
      ])
    }

  
  return (
    <div style={{marginTop: '7%'}}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <UserForm submit= {submit}/>
          </div>
        </Card>
        <Card>
          {
            usuarios.length > 0  ? 
            <Usuarios usuarios= {usuarios} />
            : 
            <h3 style={{textAlign:'center', marginTop:'70px', color:'#919492' }}>Ingrese datos del usuario</h3>

          }
          
        </Card>
      </Container>
    </div>
  );
}

export default App;
