import React from 'react';
import { FormControl, InputLabel, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		'& label': {
			marginTop: "10px"
		} 
	}
})

const FormTextField = ({ lbl, placeholder, size, variant }) => {
	const classes = useStyles();
	const label = `form-${lbl}`
	const tfLabel = `${lbl} ${label}`

	return (
		<FormControl id={label}>
			<InputLabel aria-label={lbl} aria-labelledby={label} id={lbl}>{lbl}</InputLabel>
			<TextField className={classes.root} aria-labelledby={tfLabel} aria-placeholder={placeholder} size={size} placeholder={placeholder} variant={variant}/>
		</FormControl>
	)

}

export default FormTextField;