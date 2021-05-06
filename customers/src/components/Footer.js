import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Footer = () => {
  const location = useLocation()
  return (
    <footer>
   
      {location.pathname === '/' && (
      <Link style={{color:'black'}} to='/form'><h3>No account? Register</h3> </Link>        
      )}
    </footer>
  )
}

export default Footer
