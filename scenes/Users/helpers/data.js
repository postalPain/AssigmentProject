import fetch from 'mockObjects/fetch'

export const getUsers = (startItem, size) => fetch('//users', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        startItem,
        size
    })
}).then(res => res.json())
