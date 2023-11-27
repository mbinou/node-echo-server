# node-echo-server

A simple HTTP echo server using Node.js

```
$ npm run start

> node-echo-server@1.0.0 start
> node ./dist/server.js

Server running at http://127.0.0.1:3000/
...

$ curl -X POST -d "hoge" http://127.0.0.1:3000
{"headers":{"host":"localhost:3000","user-agent":"curl/7.88.1","accept":"*/*","content-length":"4","content-type":"application/x-www-form-urlencoded"},"path":"/","body":"hoge"}
```
