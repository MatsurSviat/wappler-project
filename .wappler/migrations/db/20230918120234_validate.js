
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('authcode');
      table.datetime('validated');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('authcode');
      table.dropColumn('validated');
    })
};
