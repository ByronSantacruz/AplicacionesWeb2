const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa con la base de datos');
  } catch (error) {
    console.log(error);
    throw new Error('Error al conectarse con la base de datos');
  }
};

module.exports = {
  dbConnection,
};
