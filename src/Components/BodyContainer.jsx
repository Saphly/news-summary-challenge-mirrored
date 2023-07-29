import PropTypes from "prop-types";

const BodyContainer = ({ children, className }) => {
  return (
    <div
      className={"p-5 min-vh-100 " + className}
      style={{ backgroundColor: "#f9f7f3" }}
    >
      {children}
    </div>
  );
};

BodyContainer.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default BodyContainer;
