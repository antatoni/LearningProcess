import { useState } from "react";


const MyComponent = () => {

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery');

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const changeName = (event) => {
        setName(event.target.value);
    }
    return (
        <div>

            <input value={name} onChange={changeName} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
                placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="AmericanExpress">AmericanExpress</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange} />
                Pick Up
            </label>
            <br />
            <label htmlFor="">
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping {shipping}</p>
        </div>
    )
}

export default MyComponent