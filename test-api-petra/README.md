<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">Esse projeto foi desenvolvido em Nestjs.</p>


## Perguntas

Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?

## Resposta

```bash
$ 3 horas, se caso tivesse mais tempo teria criado os testes, apenas não criei porque estou acustumado usar o TypeORM e o sequelize, porem para esse projeto resolvi usar o Prisma, e muda algumas coisas, porem não quiz focar nisso para esse momento.
$ Nesse exemplo fiz enviando um arquivo por vez, mas poderia ter adicionado varios, extremamente simples,
$ Poderia ter adicionado validações de entrada de data ex: tamanho e formato adicionei apenas de ticket
$ Teria adicionado o Swagger para a documentação de trativa de api
$ Adicionado docker, usei o docker apenas para o banco de dados em mysql
$ Framework utilizado Nestjs.
```

## Exemplo de consulta paginada por ano e ticker

```bash
$ http://localhost:3000/quote?skip=0&take=12&year=2021&ticker=VALE3
```

## Exemplo de envio do arquivo, nesse exemplo fiz um arquivo por vez

```bash
$ http://localhost:3000/quote/upload
necessario passar no body:
key: file
value: arquivo de envio ex: PETR4.SA.csv
```