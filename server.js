const express = require('express');
const cors = require('cors');
const moment = require('moment')
const bodyParser = require('body-parser');
const { createConnection } = require('typeorm');
const typeormConfig = require('./typeorm.config');
const Post = require("./src_back/entities/data");


const app = express();
// Middleware para analizar el cuerpo de la solicitud
app.use((req, res, next) => {
  // console.log('Incoming request: ', req);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


createConnection(typeormConfig).then( (connection) => {
  app.use(cors());
  app.use(express.json());
  
  

  // aquí van tus rutas
  app.get('/api/test', async (req, res) => {
    
    // console.log(posts);
    res.send({ data: 'hola mundo prod' });
  });

  app.get('/api/hello', async (req, res) => {
    const postRepository = connection.getRepository(Post);
    const posts = await postRepository.find();
    // console.log(posts);
    res.send({ data: 'hola mundo',posts: posts});
  });

  app.post('/api/data/store', async (req, res) => {
    const postRepository = connection.getRepository(Post);
    let newData = req.body;
    newData.created_at =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    newData.updated_at =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const posts = await postRepository.save(newData);
    res.send({ data: 'registro creado exitosamente', post: posts});
    
  });
  
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => console.log(error));