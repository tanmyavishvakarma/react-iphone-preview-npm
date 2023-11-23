import React from 'react';
import PropTypes from 'prop-types';
import phone from "./assets/phone.png";
import notch from "./assets/notch2.png";
import "./iphonePreviewStyles.css";
function IphonePreview({
  content,
  overlayStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "iphone-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: phone,
    alt: "Illustration of an iPhone",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: notch,
    alt: "iPhone Notch",
    className: "iphone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "iphone-overlay",
    style: overlayStyle
  }, content));
}
IphonePreview.propTypes = {
  content: PropTypes.node,
  overlayStyle: PropTypes.object
};
IphonePreview.defaultProps = {
  content: null,
  overlayStyle: {}
};
export default /*#__PURE__*/React.memo(IphonePreview);