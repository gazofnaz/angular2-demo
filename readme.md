0) Install Docker (see https://github.com/gazofnaz/docker-php)

1) `docker pull hensansi/angular2`

2) (docker start?) `docker run -d -p 8082:80 --name dockerangular -v <yourdir>/angular:/var/www/angular hensansi/angular2`

3) `docker exec -i -t dockerangular /bin/bash`

4) Type: `npm install`
    
5) Type: `npm start`

6) Visit http://localhost:8082