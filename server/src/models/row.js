export default (sequelize, DataTypes) => {
  const Row = sequelize.define('row', {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sellPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      references: 'invoice',
      referencesKey: 'id',
      allowNull: false
    },
  });

  return Row;
}