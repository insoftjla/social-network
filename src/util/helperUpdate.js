export const updateObjectInArray = (array, paramName, value, newObjectParam) => {
    let newArray = array.map(u => {
        if (u[paramName] === value)
            return {...u, ...newObjectParam}
        return u;
    })
    return newArray;
}