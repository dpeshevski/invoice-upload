async function authenticate(sequelize) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (e) {
    console.error(`Unable to connect to the database: ${e}`);
  }
};

function associations(models) {
  const { invoice, row } = models;

  invoice.hasMany(row);
  row.belongsTo(invoice);
};

export default {
  authenticate,
  associations
};
