const jwt = require('jsonwebtoken')
const cookieConfig = require('../config/cookieConfig')

const authenticate = (req, res, next) => {
  console.log("Headers recebidos no DELETE:", req.headers);
  try {
      const token = req.headers['user-token'];
      const parsedToken = JSON.parse(token) 

      console.log("Token De Acesso")
      console.log(token)
      console.log("\n\n")
      console.log (parsedToken)

      jwt.verify(parsedToken, cookieConfig.secret, (err, decoded) => {
          if (err) {
            console.log(err)
            return res.sendStatus(403); // Token inválido
          }
    
          req.userId = decoded.userId; // Decodifica o token e salva os dados do usuário em req.user
          next();
        });
  } catch (err) {
      res.status(401).send('Invalid token');
  }
};

module.exports = authenticate