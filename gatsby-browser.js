const React = require("react");
const Layout = require("./src/components/Layout").default;

exports.wrapPageElement = ({ element, props, ...rest }) => {
  //To avoid double wrapping the /404 page; remove if unnecessary
  if (element && (element.key === "/404.html" || element.key === "/live-data/")) {
    return element
  }

  return <Layout {...props}>{element}</Layout>
};
