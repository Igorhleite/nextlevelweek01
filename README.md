## :rocket: Next Level Week #01 | Rocketseat

- Desenvolvimento de uma aplicação utilizando a stack **Node.js**, **ReactJS** e **React Native**.
- A aplicação tem o intuito de fornecer pontos de coleta de materiais recicláveis, além de outros dipos de residuos reutilizaveis.

### Estrutura do Projeto

 - Back-End:
    - Desenvolvido utilizando Node.JS.
    - Fornece uma API onde é possivel cadastrar/listar os pontos de coleta em tempo real.
    - Usado um banco de dados SQL através da lib sqlite3.

  - Front-End (Web):
    - Desenvolvido utilizando React.JS.
    - Fornece uma interface amigável onde é possivel cadastrar novos pontos de coleta, escolhendo quais itens são aceitaveis no ponto.
    - Utilizado o mapa de código aberto OpenStreetMap atráves da lib Leaflet, onde é possivel "marcar" a localização exata do ponto a ser cadastrado.
    - É possivel fazer upload da faixada do local a ser cadastrado.
    - Consome a API do IBGE que fornece os estados(UF's) e seus respectivos municipios.

  - Mobile (Andoid/IOS):
    - Desenvolvido utilizando React Native.
    - Consome a API do IBGE que fornece os estados(UF's) e seus respectivos municipios.
    - Fornece uma interface onde é possivel o usuário selecionar qual item deseja depositar em um ponto de coleta. Após essa escolha oferece as marcações no mapa de todos os pontos próximos a localização do usuário, que fazem coleta dos itens selecionados.
    
### Repositórios do projeto:

  - [backend](https://github.com/Igorhleite/nextlevelweek01/tree/master/backend)
  - [frontend](https://github.com/Igorhleite/nextlevelweek01/tree/master/frontend)
  - [mobile](https://github.com/Igorhleite/nextlevelweek01/tree/master/mobile)
  
### Interfaces

- Interface inicial da aplicação web:

<h1 align="center">
  <img alt="Login" title="Login" src="https://i.ibb.co/qFd9jj3/1.png" width="500px" />
</h1>

- Interface da aplicação web onde é possivel cadastrar novos pontos:

<h1 align="center">
  <img alt="Login" title="Login" src="https://media1.tenor.com/images/6a5328f04ad34d662ac77564a3476a67/tenor.gif" width="500px" />
</h1>

- Após o cadastro do ponto é apresentado um modal (desenvolvido a parte):

<h1 align="center">
  <img alt="Login" title="Login" src="https://i.ibb.co/wSPWvTH/2.png" width="500px" />
</h1>

- Interfaces mobile (Android/OIS) :

<h1 align="center">
  <img alt="Login" title="Login" src="https://i.ibb.co/wSPWvTH/2.png" width="500px" />
</h1>

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

:wave: [Get in touch!](https://www.linkedin.com/in/igor-henrique-leite-a77b37160/)
