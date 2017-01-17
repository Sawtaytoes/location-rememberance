const http = require('http');

const index = `
<html>
<head>
	<meta charset="utf-8">
	<title>Test Location</title>
</head>
<body>
	<script>navigator.geolocation.getCurrentPosition(t => console.debug(t))</script>
</body>
</html>
`;

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(index);
	console.log('Listening on port 8080...');
}).listen(8080);
