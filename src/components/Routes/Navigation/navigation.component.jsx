import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CartIcon from '../../cart-icon/cart-icon.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import './navigation.styles.scss';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';

const NavigationBar = () => {
    const {currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    

    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to = '/' >
                <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                    ):(
                      <Link className='nav-link' to='/auth'>
                      SIGN-IN
                      </Link>
                    )}
                    <div>
                      <CartIcon />
                    </div>
                    {isCartOpen && <CartDropdown />}
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

export default NavigationBar;