import { useCustomTableName } from 'sequelize-sharding';


module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Photo = app.model.define('photo', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
  }, {
      freezeTableName: true,
      timestamps: false
    });
  useCustomTableName(app.Sequelize, Photo, 'where', true, function (where) {
    console.log(where, 'where');
    const id = parseInt(where.id);
    return id % 2;
  })
  return Photo;
};