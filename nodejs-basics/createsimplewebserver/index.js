const http = require('http')
const { EventEmitter } = require('events')
const moment = require('moment')
const ev = new EventEmitter();
async function currenTime(){
    return moment().format('YYYY-MM-DD hh:mm:ss')
}
ev.on('getTime', async (res) => {
    const time = await currenTime()
    res.end(time)
})
ev.on('getPerson', (res) => {
    setTimeout(() => {
        res.end('person-is-ready')
    },2000)
})
http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome')
    }
    if(req.url === '/api/current-time'){
        ev.emit('getTime', res)
    }
    if(req.url === '/api/person'){
        ev.emit('getPerson', res)
    }
}).listen(3000, () => {
    console.log('server is running on port 3000');
})




