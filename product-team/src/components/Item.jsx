import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    };

    this.onAddToCart.bind(this);
  }

  onAddToCart() {
    let { quantity } = this.state;

    quantity++;

    const event = new CustomEvent('productAdded', {
      detail: {
        product: this.props.product,
        quantity: quantity,
      },
    });

    document.dispatchEvent(event);

    this.setState({ quantity: quantity });
  }

  formatMoney(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MXN',
    }).format(price);
  }

  render() {
    return (
      <li className="pt-item" key={this.props.product.slug}>
        <p>{this.props.product.name}</p>
        <img src={this.props.product.image} />
        <p>{this.formatMoney(this.props.product.price)}</p>
        <button
          onClick={() => {
            this.onAddToCart();
          }}
        >
          Add to Cart!
        </button>
      </li>
    );
  }
}

Item.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
  increment: PropTypes.number.isRequired,
};

Item.defaultProps = {
  product: null,
  increment: 1,
};

export default Item;
