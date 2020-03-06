<p align="center">
  <img
    src="https://raw.githubusercontent.com/mjs-community/learning-tests/master/docs/logo.png"
    alt="learning tests"
    width="600px"
  />
</p>

<em> <p align="center"> "Just because you’ve counted all the trees doesn’t mean you’ve seen the forest." </p> </em>

<p align=center>
  <img src="https://img.shields.io/badge/revisão-1-red" />
  <img src="https://img.shields.io/badge/exemplos-WIP-red" />
</p>

## TL;DR
O objetivo desse treinamento é mostrar os principais conceitos relativos a testes de software, trazer alguns casos de estudo e mostrar como uma aplicação em Node pode ser testada utilizando o [Jest](https://jestjs.io/).

## Desafio
O desafio será construir, com uso de práticas relacionadas ao BDD, a API de um encurtador de links, como o bit.ly.

### Requisitos Básicos
- [ ] O usuário da API deve conseguir enviar o link que deseja encurtar e receber a URL simplificada;
- [ ] Caso queira, o usuário pode enviar também uma string personalizada, que será utilizada para encurtar a URL.
- [ ] Caso tenha enviado uma URL personalizada e a mesma já esteja sendo utilizada, o usuário deve ser informado da impossibilidade de encurtar o link.

Exemplos: 
- O usuário envia a URL `https://github.com/mjs-community/learning-tests/edit/master/README.md` e recebe algo como `localhost:3000/5a127994a9352fdbf6e045f4bfd80884`
- O usuário envia a URL `https://github.com/mjs-community/learning-tests/edit/master/README.md` e a string `"meu-link"` recebe algo como `localhost:3000/meu-link`.
- O usuario envar outra URL com a mesma string de um link já encurtado e recebe a mensagem `"Essa string já está em uso"`.

> No exemplo, é utilizado `localhost:3000`, mas isso depende do host em que a API estiver deployada, além do domínio.

## Gists
<em> Em breve </em>

## Referências
- [goldbergyoni/javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices/)
- [jest.js](https://jestjs.io/)
- [BDD: Behavior-Driven Development (Wikipedia) ](https://pt.wikipedia.org/wiki/Behavior_Driven_Development)
- [BDD for your express node-js backend (dev.to)](https://dev.to/teodeleanu/automated-tests-bdd-for-your-express-node-js-backend-4b0d)
- [Fundamentos do Teste de Software (Backefront)](https://backefront.com.br/fundamentos-teste-software/)
- [Defeitos, Erros e Falhas (Devmedia)](https://www.devmedia.com.br/testes-de-software-entendendo-defeitos-erros-e-falhas/22280)
- [Defect vs Bug vs Error](https://medium.com/swlh/what-is-difference-between-defect-bug-error-b477e76b5502)
- [Test Pyramid](https://medium.com/@timothy.cochran/test-pyramid-the-key-to-good-automated-test-strategy-9f3d7e3c02d5)
