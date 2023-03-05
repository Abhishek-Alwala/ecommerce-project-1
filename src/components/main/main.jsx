import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";

const Main = ()=> {
    const [actiongame, setActiongame] = useState([]);
    const [children, setChildren] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/actiongames?populate=*').then((actiongame)=> {
            setActiongame(actiongame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/childrens?populate=*').then((children)=> {
            setChildren(children.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section>
                <article><h2>Action game</h2></article>
                {actiongame.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article><h2>Children</h2></article>
                {children.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main