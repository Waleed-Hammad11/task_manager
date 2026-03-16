import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
const options = {
    definition: {
    openapi: "3.0.0",
    info: {
        title: "Task Manager API",
        version: "1.0.0",
        description: "Task Manager",
    },
    servers: [
        {
        url: "http://localhost:3000",
        description: "Local server",
        },
    ],
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc (options);

export const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
    console.log(" Swagger Docs available at http://localhost:3000/api-docs");
};
