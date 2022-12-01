import React from 'react'

import styles from './Input.module.css'

// React.forwardRef to forward input reference to where we use our Input component (MealItemForm.jsx)
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input