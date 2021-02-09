export default (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: true
  });

  return Invoice;
};
