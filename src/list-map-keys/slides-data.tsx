import React from "react";

const slidesData = [
  {
    id: 1,
    heading: "Styling in React",
    body: (
      <ul className="list-unstyled" style={{ margin: "1em" }}>
        <li>You can provide CSS using classes</li>,
        <li>You can provide inline styles using JS objects</li>
      </ul>
    ),
  },
  {
    id: 2,
    heading: "Components Props",
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        molestiae vitae labore quasi, sunt, eligendi repudiandae necessitatibus
        corporis enim id obcaecati quas voluptatum, deleniti possimus?
      </p>
    ),
  },
  {
    id: 3,
    heading: "Component State",
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae
        consectetur, maxime architecto dignissimos molestiae porro ex eveniet
        fuga ratione vero voluptatem ipsum obcaecati iusto at natus illum odio
        expedita.
      </p>
    ),
  },
  {
    id: 4,
    heading: "List Map Keys",
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae
        consectetur, maxime architecto dignissimos molestiae porro ex eveniet
        fuga ratione
      </p>
    ),
  },
];
export default slidesData;
