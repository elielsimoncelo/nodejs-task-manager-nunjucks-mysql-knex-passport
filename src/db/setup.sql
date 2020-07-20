use controle_tarefas;
 
CREATE TABLE controle_tarefas.users (
    id int(11) NOT NULL AUTO_INCREMENT,
    username varchar(50) NOT NULL,
    password varchar(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE controle_tarefas.tasks (
    id int(11) NOT NULL AUTO_INCREMENT,
    titulo varchar(50) NOT NULL,
    descricao varchar(100) NOT NULL,
    userid int(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES controle_tarefas.users(id)
) ENGINE = InnoDB;
 
INSERT INTO controle_tarefas.users (username, password) values ('admin', '1234');