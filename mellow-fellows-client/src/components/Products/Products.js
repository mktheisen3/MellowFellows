import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Product from './Product/Product';
// import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import './Products.css';

const Products = props => {

    // const { onFetchProducts } = props;

    // let products = <Spinner />;

    // useEffect(() => {
    //     onFetchProducts();
    // }, [onFetchProducts]);

    // products = props.products.map( product => (
    //     <Product
    //         key={product.id}
    //         ingredients={product.ingredients}
    //         price={product.price} />
    // ) )

    const [isRedirect, setIsRedirect] = useState(false);

    let prodRedirect = null;
    const onClickHandler = () => {
        setIsRedirect(!isRedirect);
    }
    
    return (
        <Aux>
            <ul className="filter">
                    <p style={{fontWeight: "bold", color: "#393D3F"}}>FILTER:</p>
                    <li className="listItem">Winter</li>
                    <li className="listItem">Spring</li>
                    <li className="listItem">Summer</li>
                    <li className="listItem">Autumn</li>
            </ul>
            <div className="parent">
                {isRedirect ? prodRedirect = <Redirect to='/info' /> : null}
                {prodRedirect}
                <Product clicked={onClickHandler} className='child' cardName='snowballFight' />
                <Product clicked={onClickHandler} className='child' cardName='giftGiving' />
                <Product clicked={onClickHandler} className='child' cardName='santaAndReindeer' />
                <Product clicked={onClickHandler} className='child' cardName='mistletoe' />
            </div>
        </Aux>
    );
}

export default Products;