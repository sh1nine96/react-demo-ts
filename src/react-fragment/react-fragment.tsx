import React, { Fragment } from "react";

const fruitsEl = (
  <Fragment>
    <li>Apples</li>
    <li>Mangoes</li>
    <li>Bananas</li>
  </Fragment>
);

const veggiesEl = (
  <Fragment>
    <li>Potatoes</li>
    <li>Tomatoes</li>
    <li>Chillies</li>
  </Fragment>
);

const shoppingListEl = (
  <ul>
    {fruitsEl}
    {veggiesEl}
  </ul>
);

export default shoppingListEl;
