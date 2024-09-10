import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        };
        //    console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    //event.target.value give the same value which is we type inside of input
    // function titleChangeHandler(event){
    //     console.log(event.target.value);
    // }
    return (<form onSubmit={submitHandler}>
        <div className='new-product_title'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-produt_date'>
            <label>Date</label>
            <input type='date' value={newDate} min='2023-01-01' max='2024-12-31' onChange={dateChangeHandler}></input>
        </div>
        <div className='new-product-submit'>
            <button type='submit'>Submit</button>
        </div>
    </form>)
}

export default ProductForm;