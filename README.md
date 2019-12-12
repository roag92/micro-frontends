Micro Frontends
======

A PoC about Micro Frontends using [Hypernova](https://github.com/airbnb/hypernova) for SSR views in React and Vue.

The `web-container` embedded the two micro frontends `checkout-team` using `vue` and `product-team` using `react`.

# Pre-requisites

 - node
 - yarn

# Installation

```bash
# Dependencies
yarn --cwd product-team install
yarn --cwd checkout-team install
yarn --cwd web-container install
```

```bash
# Start
yarn --cwd product-team start
yarn --cwd checkout-team start
yarn --cwd web-container start
```
