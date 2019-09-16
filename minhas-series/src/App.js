import React from 'react';
import {
  Navbar, 
  NavbarBrand, 
  Collapse, 
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';

function App() {
  return (
    <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand>Minhas Séries</NavbarBrand> 
          <Collapse isOpen={true}> </Collapse> 

        </Navbar> 
    </div>
  );
}

export default App;
