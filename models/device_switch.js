module.exports = function (sequelize, DataTypes) {
  const deviceSwitch = sequelize.define('device_switch', {
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    room: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'device_switch',
    timestamps: true,
    classMethods: {}
  })
  return deviceSwitch
}
