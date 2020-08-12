# desafio-meta-api
Desafio API

## Necessário python3

Para rodar a API:

## Virtual env
1. Baixe o Repositório
2. Crie uma virtualenv na pasta da aplicação
3. Ative a sua virtualenv

## Requirements
Na raiz do projeto se encontra os arquivo requirements.txt. Instale utilizando o comando
`pip install -r requirements.txt`

## Banco de Dados
Para esse Desafio foi utilizado um banco de dados para teste padrão do Django (SQLite), portanto não é preciso configurar nenhuma instancia local para rodar o projeto.

## Migrations
1. Entre na pasta apimeta e faça as migrações:

`python manage.py makemigrations
python manage.py makemigrations api
python manage.py makemigrations frontend
`
2. Aplique as migrações com o comando:
`python manage.py migrate `

## Backend
Backend em Django 2.2.15

1.Ainda na pasta apimeta, encontra-se o arquivo 'manage.py'. Execute o comando na pasta onde ele se encontra:
`python manage.py runserver 8000 `

2. O Backend estará agora rodando na porta 8000. É possível testar a api manualmente na url
`http://localhost:8000/api/contatos/`

## Front-end
O Front End é uma aplicação em React que funciona em conjunto com o Backend em Django

1. Navegue até a pasta frontend. Lá você irá encontra o arquivo package.json. Execute:
`npm install`  

2. Para rodar o Front-End execute:
`npm run dev`

3. Você pode acessar a aplicaço react pelo endereço: 
`http://localhost:8000`


