import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions";
import Btn from "../Btn";

export default ({ data, isCart }) => {

    const dispatch = useDispatch();

    return <div className="product-item">
        <img src={data.thumbnail} />
        <h3 className="title">{data.title}</h3>
        <span className="price">{data.price.toFixed(2)} $</span>
        {
            isCart ?
            <>
                <div className="quantity">
                    <small>quantity:</small>
                    <Btn action='dec' data={data}>-</Btn>
                    <small>{data.quantity}</small>
                    <Btn action='inc' data={data}>+</Btn>
                </div>

                <button onClick={() => dispatch(removeFromCart(data.id))}>Supprimer</button>
            </>
            :
            <button onClick={() => dispatch(addToCart(data))}>Ajouter au panier</button>
        } 
    </div>
}