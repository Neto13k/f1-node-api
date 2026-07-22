# F1 Node API

API de exemplo para dados de Fórmula 1.

## Escopo atual

API atualmente read-only, dados em memória, sem persistência. CRUD não implementado nesta versão.

## Instalação e execução

```bash
npm install
npm run start:dev
```

## Rotas disponíveis

- `GET /teams`: Lista todos os times
- `GET /teams/:id`: Retorna um time por ID
- `GET /teams/:id/drivers`: Retorna um time e seus pilotos
- `GET /drivers`: Lista todos os pilotos
- `GET /drivers/:id`: Retorna um piloto por ID
