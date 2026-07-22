import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});


const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Ferrari", base: "Maranello, Italy" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Mercedes-AMG Petronas", base: "Brackley, United Kingdom" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Haas", base: "Kannapolis, United States" },
  { id: 8, name: "RB (Racing Bulls)", base: "Faenza, Italy" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Sauber (Audi)", base: "Hinwil, Switzerland" }
];

const drivers = [
  // McLaren
  { id: 1, name: "Lando Norris", team: "McLaren" },
  { id: 2, name: "Oscar Piastri", team: "McLaren" },
  
  // Ferrari
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Lewis Hamilton", team: "Ferrari" },

  // Red Bull Racing
  { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 6, name: "Liam Lawson", team: "Red Bull Racing" },

  // Mercedes
  { id: 7, name: "George Russell", team: "Mercedes-AMG Petronas" },
  { id: 8, name: "Kimi Antonelli", team: "Mercedes-AMG Petronas" },

  // Aston Martin
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },

  // Alpine
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Jack Doohan", team: "Alpine" },

  // Haas
  { id: 13, name: "Esteban Ocon", team: "Haas" },
  { id: 14, name: "Oliver Bearman", team: "Haas" },

  // RB (Racing Bulls)
  { id: 15, name: "Yuki Tsunoda", team: "RB (Racing Bulls)" },
  { id: 16, name: "Isack Hadjar", team: "RB (Racing Bulls)" },

  // Williams
  { id: 17, name: "Alexander Albon", team: "Williams" },
  { id: 18, name: "Carlos Sainz", team: "Williams" },

  // Sauber
  { id: 19, name: "Nico Hülkenberg", team: "Sauber (Audi)" },
  { id: 20, name: "Gabriel Bortoleto", team: "Sauber (Audi)" }
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200).send;

  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200).send;

  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    response.type("application/json").code(404).send;
    return { message: "Driver not found" };
  }
  else{}
    response.type("application/json").code(200).send;
    return { driver };
  }
);

server.listen({ port: 9000 }, () => {
  console.log("Server is running on port 9000");
});