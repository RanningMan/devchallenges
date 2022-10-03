import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	variant,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	size,
	color,
	children,
	...props
}) => {
	const variantClass = variant ? `button-${variant}` : '';
	const sizeClass = size ? `button-${size}` : 'button-md';
	const disabledShadow = disableShadow ? 'button-noShadow' : '';
	const disabledButton = disabled ? 'button-disabled' : '';
	const buttonColor = color ? `button-${color}` : 'button-default';
	return (
		<button
			className={`button ${variantClass} ${sizeClass} ${disabledShadow} ${disabledButton} ${buttonColor}`}
			{...props}
		>
			{startIcon && (
				<img
					className='button__icon button__icon-start'
					src={startIcon}
					alt='startIcon'
				/>
			)}
			{children}
			{endIcon && (
				<img
					className='button__icon button__icon-end'
					src={endIcon}
					alt='startIcon'
				/>
			)}
		</button>
	);
};

Button.propTypes = {
	/**
	 * What is the style of the button
	 */
	variant: PropTypes.oneOf(['outline', 'text']),
	/**
	 * Should the button have shadow?
	 */
	disableShadow: PropTypes.bool,
	/**
	 * How the button be disabled?
	 */
	disabled: PropTypes.bool,
	/**
	 * What should be the start icon of the button?
	 */
	startIcon: PropTypes.element,
	/**
	 * What should be the end icon of the button?
	 */
	endIcon: PropTypes.element,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	/**
	 * What should be the color of the button?
	 */
	color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	size: 'md',
	onClick: undefined,
};
