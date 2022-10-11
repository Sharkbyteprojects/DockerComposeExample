# Simple Docker Compose Example

- Download it (Docker also required)
- Start with `docker-compose up -d --scale d=5`
- Visit a subpage of `http://mydocker:8080` (replace `mydocker` with the ip of the mashine running Docker) as often as you like (or just use our NodeJS Testscript named `test.js`)
- Visit `http://mydocker:8081/stats` (again, replace `mydocker` with the ip of the mashine running Docker) and see the stats of the load balancing on 5 container
- The container `log` contains all collected logs (use `docker-compose logs` to get all [logs](https://docs.docker.com/config/containers/logging/) or use `docker-compose logs | grep log_1` on linux to get only the logs of `log_1` (container `log`))
- Stop with `docker-compose down`

&copy; Sharkbyteprojects
