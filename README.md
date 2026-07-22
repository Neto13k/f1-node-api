# F1 Node API

API REST de exemplo para consulta de dados de Fórmula 1 (times e pilotos), construída com Fastify e TypeScript.

> Projeto criado durante o bootcamp **DIO: Back-end do Zero à Prática**.

## Escopo atual

API atualmente **read-only**, dados em memória (arrays estáticos no código), sem persistência em banco de dados. CRUD (criação, atualização, remoção) **não implementado** nesta versão.

## Stack

- [Fastify](https://fastify.dev/) 5.x
- TypeScript
- `@fastify/cors`
- `tsx` (execução em dev)
- `tsup` (build para produção)

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto (ou use o já existente) com:

```
PORT=9000
```

Se a variável `PORT` não for definida, a aplicação usa `9000` como padrão.

## Execução

Modo desenvolvimento (com reload manual):

```bash
npm run start:dev
```

Modo desenvolvimento com watch automático:

```bash
npm run start:watch
```

Build e execução via JavaScript compilado:

```bash
npm run start:dist
```

Servidor sobe por padrão em `http://localhost:9000`.

## Rotas disponíveis

| Método | Rota                  | Descrição                                  |
|--------|------------------------|---------------------------------------------|
| GET    | `/teams`               | Lista todos os times                        |
| GET    | `/teams/:id`           | Retorna um time por ID                      |
| GET    | `/teams/:id/drivers`   | Retorna um time e seus pilotos              |
| GET    | `/drivers`             | Lista todos os pilotos                      |
| GET    | `/drivers/:id`         | Retorna um piloto por ID                    |

Todas as rotas retornam `404` com `{ "message": "..." }` quando o recurso não é encontrado, e possuem validação de schema (Fastify JSON Schema) nos parâmetros e no formato de resposta.

## Exemplos de resposta

**GET /teams/1**
```json
{
  "team": {
    "id": 1,
    "name": "McLaren",
    "base": "Woking, United Kingdom"
  }
}
```

**GET /teams/1/drivers**
```json
{
  "team": { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
  "drivers": [
    { "id": 1, "name": "Lando Norris", "team": "McLaren" },
    { "id": 2, "name": "Oscar Piastri", "team": "McLaren" }
  ]
}
```

## Limitações conhecidas

- Sem persistência: dados resetam a cada restart do servidor.
- Sem autenticação/autorização.
- Sem testes automatizados.
- CORS liberado para `*` (adequado para estudo/dev, não para produção).

## Licença

ISC