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

  - Aplicativo (Andoid/IOS):
    - Desenvolvido utilizando React Native.
    - Consome a API do IBGE que fornece os estados(UF's) e seus respectivos municipios.
    - Fornece uma interface onde é possivel o usuário selecionar qual item deseja depositar em um ponto de coleta. Após essa escolha oferece as marcações no mapa de todos os pontos próximos a localização do usuário, que fazem coleta dos itens selecionados.
    
### Repositórios do projeto:

  - [backend](https://github.com/Igorhleite/nextlevelweek01/tree/master/backend)
  - [frontend](https://github.com/Igorhleite/nextlevelweek01/tree/master/frontend)
  - [mobile](https://github.com/Igorhleite/nextlevelweek01/tree/master/mobile)
  
### Interfaces
