# Sample nodejs project using nunjucks, mysql, knex and passport

## Pré-requisitos

### Instale o docker 
- [Docker Install](https://docs.docker.com/engine/install/)
- [Docker Compose Install](https://docs.docker.com/compose/install/)

## Executando o projeto 
```sh
$ git clone https://github.com/sousaeliel/nodejs-task-manager-nunjucks-mysql-knex-passport.git
$ cd nodejs-task-manager-nunjucks-mysql-knex-passport
$ docker-compose up -d
```

## Configurações padrões

### Usuário da aplicação
```sh
host: http://localhost:13000/
username: admin
password: 1234
```

### Usuário do banco de dados
```sh
host: localhost
port: 13306
database: controle_tarefas
username: controle_tarefas
password: p@$$w0rd
```

## Destruindo a infraestrutura criada para o projeto 
```sh
$ cd nodejs-task-manager-nunjucks-mysql-knex-passport
$ docker-compose down -d --remove-orphans # to remove context containers
$ docker image rm $(docker images | grep 'nodejs-task-manager-nunjucks-mysql-knex-passport*' | awk '{print $3}') --force # to remove created images
$ docker volume prune # y - to remove unsed volumes
$ docker system prune # y - to remove unsed data
```