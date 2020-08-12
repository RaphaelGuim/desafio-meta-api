# Desafio Meta (api)
Desafio API

## Para instalar e rodar o projeto é necessário python3 e o npm instalados. 

## Virtual env
1. Baixe este Repositório
2. Crie uma virtualenv na pasta da aplicação
3. Ative a sua virtualenv

## Requirements
Na raiz do projeto se encontra o arquivo requirements.txt. Instale utilizando o comando
`pip install -r requirements.txt`

## Banco de Dados
Para esse Desafio foi utilizado um banco de dados teste, padrão do Django (SQLite), portanto não é preciso configurar nenhuma instancia local para rodar o projeto.

## Migrations
1. Entre na pasta apimeta, onde se encontra-se o arquivo 'manage.py', e crie as migrações:

- `python manage.py makemigrations`
- `python manage.py makemigrations api`
- `python manage.py makemigrations frontend`

2. Aplique as migrações com o comando:
`python manage.py migrate `

## Backend
Backend em Django 2.2.15

1.Na pasta apimeta Execute o comando:
- `python manage.py runserver 8000 `

2. O Backend estará rodando na porta 8000. É possível testar a api manualmente na url
- `http://localhost:8000/api/contatos/`

## Front-end
O Front End é uma aplicação em React que funciona em conjunto com o Backend em Django

1. Navegue até a pasta frontend. Lá você irá encontra o arquivo package.json. Execute:
- `npm install`  

2. Para rodar o Front-End execute:
- `npm run dev`

3. Você pode acessar a aplicação react pelo endereço: 
- `http://localhost:8000`


