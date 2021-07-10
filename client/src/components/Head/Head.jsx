import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Head = ({ title = "Home" }) => {
  return (
    <Helmet>
      <title>{`${title} | React Koa Yelp Clone`}</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
