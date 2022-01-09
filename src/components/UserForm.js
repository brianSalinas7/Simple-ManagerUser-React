import useFormulario from '../hooks/useFormulario'
import Input from './Input/Input'
import Button from './Button/Button'


const UserForm = ({submit}) => {

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email: '',    
      })

      const handleSubmit = (e) =>{
          e.preventDefault()
          submit(formulario)
          reset()
      }
      

    return(
        <form onSubmit={handleSubmit}>
              <Input 
                label="Nombre"
                name= "name"
                placeholder="Nombre"
                value= {formulario.name}
                onChange={handleChange}
              />

              <Input 
                label="Apellido"
                name= "lastname"
                placeholder="Apellido"
                value= {formulario.lastname}
                onChange={handleChange}
              />

              <Input 
                label="Correo"
                name= "email"
                placeholder="example@gmail.com"
                value= {formulario.email}
                onChange={handleChange}
              />

              <Button>Enviar</Button>
        </form>
    )
}

export default UserForm