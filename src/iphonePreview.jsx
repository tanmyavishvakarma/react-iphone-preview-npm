import React from 'react';
import PropTypes from 'prop-types';
import phone from "./assets/phone.png"
import notch from "./assets/notch2.png"
import "./iphonePreviewStyles.css"

function IphonePreview({ content, overlayStyle }) {
    return (
        <div className="campaign-iphone-container">
            <img
                src={phone}
                alt="Illustration of an iPhone"
                style={{ width: '100%', display: 'block' }}
            />
            <img
                src={notch}
                alt="iPhone Notch"
                className="campaign-iphone-notch"
            />
            <div
                className="campaign-iphone-overlay"
                style={overlayStyle}>
                {content}
            </div>
        </div>
    );
}

IphonePreview.propTypes = {
    content: PropTypes.node,
    overlayStyle: PropTypes.object,
};

IphonePreview.defaultProps = {
    content: null,
    overlayStyle: {},
};

export default React.memo(IphonePreview);
