const { EntitySchema } = require('typeorm');


module.exports = new EntitySchema({
  name: 'Data',
  tableName: "biotemp",
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    temperature: {
      type: 'float'
    },
    humidity: {
      type: 'float'
    },
    created_at: {
      type: 'timestamp',
      createDate: true
    },
    updated_at: {
      type: 'timestamp',
      updateDate: true
    }
  }
});
