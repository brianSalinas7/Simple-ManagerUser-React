import './Usuarios.css'
const Usuarios = ({usuarios}) => {
    return(
        
            <ul>
                {console.log(usuarios)}

                {usuarios.map(x =>
                    x.name === '' || x.lastname === '' || x.email === '' ? 
                     ""  
                    :
                    <li key={x.email} className="listItem" >{
                        `${x.name} 
                        ${x.lastname} : 
                        ${x.email}`}
                    </li>
                    )}
            </ul>
        
    )
}

export default Usuarios