create database eleicao;

use eleicao;

create table candidato(
	can_codigo int primary key auto_increment,
    can_candidato varchar(20),
    can_partido varchar(15),
    can_sigla varchar(6),
    can_fundacao int,
    can_cargo varchar(15)
);

create table voto(
	vot_codigo int primary key auto_increment,
    vot_eleitor varchar(20),
    vot_nrotitulo int,
    vot_nrourna int,
    vot_zonaeleitoral int,
    can_codigo int,
    constraint fk_foreign foreign key(can_codigo) references candidato(can_codigo)
);