import { Link } from 'react-router-dom'
function Nav() {
return (
    <nav className="nav"> 
        <Link to="/" className='a'>HOME</Link>&nbsp;
        <Link to="" className='a'>NEWS</Link>&nbsp;
        <Link to="" className='a'>BLURBS</Link>&nbsp;
        <Link to="" className='a'>CHARACTERS</Link>
    </nav>
     );
}
         
    
export default Nav;
       