import React, { Component } from 'react'
const ProductContext = React.createContext();

class ProductProvide extends Component {
    render() {
        return (
            <ProductContext.Provider value="peoduct list">
                {this.props.children}

            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;
export  {ProductProvide,ProductConsumer};
