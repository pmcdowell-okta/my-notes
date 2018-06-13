#### Hacking Nginx as reverse proxy

##### Create a local file called nginx.conf

Add this:

```
events {
    worker_connections  1024;
}

http {
  server {
    listen 8000;
    server_name localhost;
    location / {
      proxy_pass http://oktaproxy.com;
    }
  }
}
```

##### Run Docker with this command:

``` 
docker run -it -p 80:8000  -v  "$PWD":/etc/nginx nginx /bin/bash -c "nginx ; bash"
```
##### Then Connect to `http://localhost:80`

You should see Oktaproxy running on your local machine


