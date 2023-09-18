
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('authcode');
      table.dropColumn('validated');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('authcode', 255);
      table.datetime('validated');
    })
};
