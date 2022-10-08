import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';
import StartIcon from './call.svg';
import EndIcon from './lock.svg';

export default function Input({
	error,
	disabled,
	helperText,
	startIcon,
	endIcon,
	value,
	size,
	fullwidth,
	multiline,
	row,
	...props
}) {
	const [focus, setFocus] = useState(false);
	const [hover, setHover] = useState(false);
	const [labelStyle, setLabelStyle] = useState('input__label');
	const [boxStyle, setBoxStyle] = useState('input__box');
	const [helperTextStyle, setHelperTextStyle] = useState('input__helperText');
	const [startIconStyle, setStartIconStyle] = useState('startIcon');
	const [endIconStyle, setEndIconStyle] = useState('endIcon');
	useEffect(() => {
		if (error) {
			if (focus) {
				setLabelStyle('input__label input__label-error');
				setBoxStyle('input__box input__box-error');
				setHelperTextStyle('input__helperText input__helperText-error');
				setStartIconStyle('startIcon startIcon-error');
				setEndIconStyle('endIcon endIcon-error');
			} else if (hover) {
				setLabelStyle('input__label input__label-hover');
				setBoxStyle('input__box input__box-hover');
				setHelperTextStyle('input__helperText input__helperText-hover');
				setStartIconStyle('startIcon startIcon-hover');
				setEndIconStyle('endIcon endIcon-hovor');
			} else {
				setLabelStyle('input__label input__label-error');
				setBoxStyle('input__box input__box-error');
				setHelperTextStyle('input__helperText input__helperText-error');
				setStartIconStyle('startIcon startIcon-error');
				setEndIconStyle('endIcon endIcon-error');
			}
		} else {
			if (focus) {
				setLabelStyle('input__label input__label-focus');
				setBoxStyle('input__box input__box-focus');
				setHelperTextStyle('input__helperText input__helperText-focus');
				setStartIconStyle('startIcon startIcon-focus');
				setEndIconStyle('endIcon endIcon-focus');
			} else if (hover) {
				setLabelStyle('input__label input__label-hover');
				setBoxStyle('input__box input__box-hover');
				setHelperTextStyle('input__helperText input__helperText-hover');
				setStartIconStyle('startIcon startIcon-hover');
				setEndIconStyle('endIcon endIcon-hovor');
			} else {
				setLabelStyle('input__label');
				setBoxStyle('input__box');
				setHelperTextStyle('input__helperText');
				setStartIconStyle('startIcon');
				setEndIconStyle('endIcon');
			}
		}
	}, [error, focus, hover]);
	const singleLine = (
		<div className={`input__boxwrapper ${
			size === 'sm' ? 'input__boxwrapper-sm' : 'input__boxwrapper-md'
		} ${
			fullwidth
				? 'input__boxwrapper-fullwidth'
				: 'input__boxwrapper-normalwidth'
		}`}>
			{startIcon && <div className={startIconStyle} ><img src={StartIcon} /></div>}
			<input
				className={`${boxStyle} ${startIcon && 'input__box-startIcon'} ${
					endIcon && 'input__box-endIcon'
				}`}
				type={'text'}
				placeholder='placeholder'
				disabled={disabled}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				value={value}
				{...props}
			/>
			{endIcon && <div className={endIconStyle}><img src={EndIcon} /></div>}
		</div>
	);
	const multiLine = (
		<textarea
			rows={row}
			cols='50'
			className={`${boxStyle} ${
				size === 'sm' ? 'input__box-sm' : 'input__box-md'
			} ${fullwidth ? 'input__box-fullwidth' : 'input__box-normalwidth'}`}
			placeholder='placeholder'
			disabled={disabled}
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			value={value}
			{...props}
		></textarea>
	);
	return (
		<div className={`input`}>
			<div className={labelStyle}>Label</div>
			{multiline ? multiLine : singleLine}
			<div className={helperTextStyle}>{helperText}</div>
		</div>
	);
}

Input.propTypes = {
	error: PropTypes.bool,
	disabled: PropTypes.bool,
	helperText: PropTypes.string,
	startIcon: PropTypes.bool,
	endIcon: PropTypes.bool,
	value: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md']),
	fullwidth: PropTypes.bool,
	multiline: PropTypes.bool,
	row: PropTypes.string,
}

Input.defaultProps = {
	size: 'md'
}