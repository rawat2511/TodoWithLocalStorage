

export const getValueToken = (key) => {

    var data = localStorage.getItem(key);

    if( data === null ) {
        return key === "todos" ? [] : "";
    }
    return key === "todos" ? JSON.parse(data) : data;

}

export const setValueToken = (key, value) => {
    localStorage.setItem(key, value);
}