// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import LoginForm from '../LoginForm/LoginForm';

// const Navbar = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
//     const [showLoginForm, setShowLoginForm] = useState(false);

//     useEffect(() => {
//         localStorage.setItem('isLoggedIn', isLoggedIn);
//     }, [isLoggedIn]);

//     const handleLoginLogout = () => {
//         if (isLoggedIn) {
//             setIsLoggedIn(false);
//         } else {
//             setShowLoginForm(true);
//         }
//     };

//     const handleLoginSuccess = () => {
//         setIsLoggedIn(true);
//         setShowLoginForm(false);
//     };

//     return (
//         <div className='navbar'>
//             <img className='logo' src={assets.logo} alt="" />
//             <button onClick={handleLoginLogout}>{isLoggedIn ? 'Выйти' : 'Войти'}</button>
//             {showLoginForm && <LoginForm onLogin={handleLoginSuccess} />}
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    

    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt="" />
            
        </div>
    );
};

export default Navbar;
