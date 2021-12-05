const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url ==='/')
    {
        res.write('MAIN')
        res.end()
    }
});

server.listen(3000, ()=>console.log(`listening on port 3000...`));

server.on('connection', connection=>console.log("New conn: ", connection.remoteAddress+":"+ connection.remotePort));

server.on('request', (req,  res)=>{
	if(req.url === '/req'){
		res.write('REQ')
		res.end()
	}
	else if(req.url === 'new'){
		res.write('NEW')
		res.end()
	}
})
