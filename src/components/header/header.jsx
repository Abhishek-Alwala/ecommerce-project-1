import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-context";
import "./header.css"
const Header = ()=> {
    const {cartData} = useContext(CartContext);
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar">
                <section className="log">
                    <h3>GAMEHUB</h3>
                </section>
                <section onClick={()=> {navigate('/cart')}}>
                    <span>{cartData.length}</span>
                    {/* <i className="fa  fa-shopping-cart"></i> */}
                    <img id="cartimg" src="https://th.bing.com/th?id=OIP.LtyHaOKKagzUfiWC8ndhywHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"alt="image"/>
                </section>
            </nav>
        </>
    )
}
export default Header;