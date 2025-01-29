import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(function TextInput(
    {
        type = 'text',
        className = '',
        isFocused = false,
        defaultValue,
        variant = 'primary',
        placeholder,
        isError = false,
        name,
        value,
        ...props
    },
    ref
) {
    const localRef = useRef(null);


    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError ? 'input-error' : ''} input-${variant} ${className}`}
            ref={localRef}
            placeholder={placeholder}
        />
    );
});

// Define PropTypes for the component
TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autocomplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    isError: PropTypes.bool,
};

// Optionally define default props
TextInput.defaultProps = {
    type: 'text',
    className: '',
    isFocused: false,
    variant: 'primary',
    isError: false,
};

export default TextInput;
