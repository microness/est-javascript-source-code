const express = require('express');
const path = require('path');

const app = express();

const cors = require('cors');
app.use(cors()); // 모든 origin 허용 (테스트 용도)

app.get('/:file', (HTTPRequest, HTTPResponse) => {
    console.log(HTTPRequest.params.file);
    HTTPResponse.sendFile(path.resolve( __dirname, HTTPRequest.params.file ));
});

// HTTP 응답(파일 응답)을 즉각적으로 수행
app.get('/:dir/:file', (HTTPRequest, HTTPResponse) => {
    HTTPResponse.sendFile(path.resolve( __dirname, HTTPRequest.params.dir, HTTPRequest.params.file));
} );

// 전달받은 시간만큼 HTTP 응답(파일 응답)을 지연시킴
app.get('/:delay/:dir/:file', (HTTPRequest, HTTPResponse) => {
    setTimeout(() => {
        HTTPResponse.sendFile(path.resolve( __dirname, HTTPRequest.params.dir, HTTPRequest.params.file));
    }, Number(HTTPRequest.params.delay));
} );


const port = 4000;
app.listen(port, () => console.log(`http://127.0.0.1:${port}/ app listening on port ${port}`));