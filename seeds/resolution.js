
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resolution').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolution').insert([
        {name: 'Gavin', resolution: 'Get a mobile developer job and pay off all of my debt'},
      ]);
    });
};
