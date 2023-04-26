module.exports = {
  development: {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    host: 'database-2.c1nvk61y3e9z.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'colkie',
  },
};
