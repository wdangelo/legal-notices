import { Router } from "express";

const agenciesRoutes = Router();

agenciesRoutes.get("/", (request, response) => {
    response.send("Teste de agencias")
});

export { agenciesRoutes };