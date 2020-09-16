export const required = value => {
    return value ? undefined : 'Required'
}

const maxLength = max => value => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const maxLength10 = maxLength(10);
export const maxLength50 = maxLength(50);