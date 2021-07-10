import PropTypes from "prop-types";
import Head from "../Head/Head";

const SEORoute = ({ component: Component, title, ...props }) => {
  return (
    <>
      <Head title={title} />
      <Component {...props} />
    </>
  );
};

SEORoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  title: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export default SEORoute;
