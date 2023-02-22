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

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT * from countries
      WHERE id = $1
      `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    } 
    return new Country(rows[0]);
  }

  static async insert({ country, capitol, spoken_language, continent, population }) {
    const { rows } = await pool.query(
      `
        INSERT INTO countries (country, capitol, spoken_language, continent, population)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [country, capitol, spoken_language, continent, population]
    );
    return new Country(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const country = await Country.getById(id);
    if (!country) return null;
    const updatedData = { ...country, ...newAttrs };
    const { rows } = await pool.query(
      `
      UPDATE countries
      SET country = $2, capitol = $3, spoken_language = $4, continent = $5, population = $6
      WHERE id = $1
      RETURNING *
      `,
      [
        id,
        updatedData.country,
        updatedData.capitol,
        updatedData.spoken_language,
        updatedData.continent,
        updatedData.population
      ]
    );
    return new Country(rows[0]);
  }


  
}

module.exports = { Country };
