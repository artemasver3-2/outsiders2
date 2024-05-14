import Nav from './nav';

function Header() {
 return (
    <header className="App-header">
        <h1 className="Header-Title"><span className='header-title-hover'>The Outsiders</span></h1>
        <h2 className="Header-Subtitle">Ebixia's most wanted <span className='header-sub-hover'>heros</span></h2>
        <Nav />
    </header>
    );
}
  
  export default Header;

