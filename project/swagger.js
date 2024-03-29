const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Какое-то название',
        version: '1.0.0',
        description: 'Описания нету',
      },
      servers: [
        {
          url: 'http://localhost:3000', 
          description: 'Development server',
        },
      ],
    },
    apis: ['./back/routes/*.js'], 
  };

  const specs = swaggerJsdoc(options);

  module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(specs));
  }