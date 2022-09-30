const headingStyling = {
  fontSize: "4em",
};

const bodyStyling = {
  fontSize: "2.5em",
};

const textCenter = {
  textAlign: "center" as const,
};

const listUnstyled = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const headingFinalStyle = {
  ...headingStyling,
  ...textCenter,
};

export {
  headingStyling,
  bodyStyling,
  textCenter,
  listUnstyled,
  headingFinalStyle,
};
