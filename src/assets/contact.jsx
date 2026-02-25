import PropTypes from 'prop-types';

export default function Contact(props) {
    return (
        <div>
        <h2>
        {props.email} {props.phone}
        <p>Send me a message!</p>
        </h2>
        </div>
    );
}

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}
