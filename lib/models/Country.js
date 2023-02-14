const pool = require('../../sql/pool');

class Country {
  id;
  country;
  capitol;
  spoken_language;
  continent;
  population;

  constructor(row) {
    this.id = row.id;
    this.country = row.country;
    this.capitol = row.capitol;
    this.spoken_language = row.spoken_language;
    this.continent = row.continent;
    this.population = row.population;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * from countries
      `
    );
    return rows.map((row) => new Country(row));
  }
}

module.exports = { Country };
