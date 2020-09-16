import React from "react";
import styles from "./renderField.module.css"

const renderField = TagName => ({
                          input, label,
                          meta: {touched, error, warning}, ...props
                      }) => {
    const hasError = touched && error;
    const hasWarning = touched && error;
    return (
        <div className={styles.fieldRender + " " + (hasError ? styles.error : "") }>
            <div>{label}</div>
            <div>
                <TagName label={label} {...input} {...props}/>
            </div>
            <div>
                {(hasError && <span>{error}</span>) || (hasWarning && <span>{warning}</span>)}
            </div>
        </div>
    )
}

export const Textarea = renderField('textarea')
export const Input = renderField('input')