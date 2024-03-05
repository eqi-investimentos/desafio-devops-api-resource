# API recurso para desafio Devops

Esta api foi elaborada como um recurso para o [desafio Devops](https://github.com/eqi-investimentos/teste-devops). <br>
Ela consiste em uma única rota no root (/), que busca registro no mongoDb a fim de testar a disponibilidade do serviço por inteiro.

## Instruções Gerais

- Criar o arquivo .env responsável por informar a porta e conexao com mongoDb $cp .env.example > .env
- Instalar os pacotes com o comando `npm ci`
- Gerar o dist do projeto através do comando `npm run build`
- Rodar utilizando docker com o comando `npm run start`

## Dica ultilizando docker

- Ultilize versão do node >= 18
- Rodar o buid da aplicação
- Rodar a instalação de dependências
- Exportar uma porta para acesso api x container

Em caso de dúvidas, sinta-se à vontade para entrar em contato.
