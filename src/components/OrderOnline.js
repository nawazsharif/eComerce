import React, { Component } from 'react';
import Title from './Title';
import {storeProducts} from "../data";
import {ProductConsumer} from "../context"

export default class OrderOnline extends Component {
    state ={
        products:storeProducts
    }
    render() {
        console.log(this.state.products);

        return (
            <React.Fragment>
                <div className="container">
                    <Title name="Products" title="Our" />
                    <div className="row">
                        <ProductConsumer >
                            {hello=>{
                            return <h1>{hello}</h1>
                            }}
                        </ProductConsumer >
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
