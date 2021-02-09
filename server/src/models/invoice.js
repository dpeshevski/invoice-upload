export default (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
  }, {
    timestamps: true
  });

  return Invoice;
};
