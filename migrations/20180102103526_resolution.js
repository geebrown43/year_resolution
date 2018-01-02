
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('resolution', (table) => {
            table.increments().primary()
            table.string('name')
            table.text('resolution')
        })
    ])
  
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('resolution')
};
