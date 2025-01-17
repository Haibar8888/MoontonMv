import PropTypes from "prop-types";

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    variant = 'primary',
    procesing,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full ${procesing && 'opacity-30'} btn-${variant} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
    procesing: PropTypes.bool,
    children : PropTypes.node
}
