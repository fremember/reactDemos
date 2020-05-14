let data = [{ title: 'web全栈' }, { title: 'java架构师' }]

export default {
    // 方式一
    // "method url": Object或者Array
    // "get /api/goods": { result: data }
    // 方式二
    // "method api": (req, res) => {}
    "get /api/goods": (req, res) => {
        setTimeout(() => {
            res.json({ result: data })
        }, 1250)
    }
}