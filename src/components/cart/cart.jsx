import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    const total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_zMG47TCkWPM9be",
            amount: total*100,
            currency: "INR",
            name: "gamehub",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "Alwala Abhishek",
                email: "AbhishekAlwala090601@gmail.com",
                contact: "9876543210"
            
            },
            notes: {
                address: "office address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    
    //total.current.price = 0;
    return (
        <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <article>
                        <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
                        <article>{cartItem.title}</article>
                        <article>{cartItem.price}</article>
                        <button>Remove from cart</button>
                    </article>
                )
            })}
                </section>
                <section>
                <article>Billing Page</article>
                  {cartData.map((cart)=> {
                      //total.current.price = total.current.price + cart.price
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total:2785</article>
                  <button onClick={()=>{razorPayDisplay(6000)}}>Checkout</button>
                </section>
            </section>
           
        </>
    )
}
export default Cart;