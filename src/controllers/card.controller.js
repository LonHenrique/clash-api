const clashApi = require('../config/clash.api')

module.exports = {
    index: async (req, res) => {
        const { data } = await clashApi.get('/cards')
        const names = data.items.map((value) => value.name)        
        return res.json(names)
    }
}

