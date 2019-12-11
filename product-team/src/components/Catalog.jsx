import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="pt-catalog">
        {this.props.products.map(product => {
          return <Item key={product.slug} product={product}></Item>;
        })}
      </ul>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.arrayOf(Item.propTypes.product),
};

Catalog.defaultProps = {
  products: [],
};

export default Catalog;
