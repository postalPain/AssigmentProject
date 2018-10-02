import items from 'mockData/users'


export default (url, params) => (new Promise((resolve, reject) => {
    const requestParams = JSON.parse(params.body)

    setTimeout(() => {
        resolve({
            json: () => ({
                items: items.slice(requestParams.startItem, requestParams.startItem + requestParams.size)
            })
        })
    }, 2000)
}))
