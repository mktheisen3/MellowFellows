import React, { useState } from 'react';

import snowballFight from '../../assets/images/snowballFight.jpg';
import Aux from '../../hoc/Aux/Aux';
import './ProductInfo.css';
import Input from '../UI/Input/Input';
import { updateObject } from '../../shared/utility';

const ProductInfo = () => {

    const [Count, setCount] = useState( {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 5, displayValue: '6 Cards'},
                {value: 10, displayValue: '12 Cards'},
                {value: 15, displayValue: '18 Cards'},
                {value: 20, displayValue: '24 Cards'}
            ]
        },
        value: 5,
        valid: true
    });

    const inputChangedHandler = ( event ) => {

        const updatedCount = updateObject( Count, {
            value: event.target.value,
            touched: true
        } );

        setCount(updatedCount);
    }

    return (
        <Aux className="Content">
            <div className="Image">
                <img className="Image" src={snowballFight} alt="SnowballFight" />
            </div>
            <div className="ProductInfo">
                <p className="ProductTitle"><strong>Snowball Fight</strong></p>
                <Input 
                    key="Count"
                    elementType={Count.elementType}
                    elementConfig={Count.elementConfig}
                    value={Count.value}
                    invalid={!Count.valid}
                    touched={Count.touched}
                    changed={( event ) => inputChangedHandler( event )} />
                <p style={{marginLeft: "10px"}}>Price: ${Number.parseFloat(Count.value).toFixed(2)}</p>
            </div>
        </Aux>
    );
};

export default ProductInfo;