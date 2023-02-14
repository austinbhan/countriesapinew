const { setupDb } = require('./utils');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(setupDb);

  it('#GET /countries should return a list of countries', async () => {
    const resp = await request(app).get('/countries');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      { id: '1', country: 'United States', capitol: 'Washington DC', spoken_language: 'English', continent: 'North America', population: 335999183 },
      { id: '2', country: 'United Kingdom', capitol: 'London', spoken_language: 'English', continent: 'Europe', population: 67081234 },
      { id: '3', country: 'India', capitol: 'New Dehli', spoken_language: 'Hindi', continent: 'Asia', population: 1414940553 },
      { id: '4', country: 'Romania', capitol: 'Bucharest', spoken_language: 'Romanian', continent: 'Europe', population: 18907736 },
      { id: '5', country: 'China', capitol: 'Beijing', spoken_language: 'Chinese', continent: 'Asia', population: 1453629085 },
      { id: '6', country: 'Mexico', capitol: 'Mexico City', spoken_language: 'Spanish', continent: 'North America', population: 132150971 },
      { id: '7', country: 'South Africa', capitol: 'Johannesburg', spoken_language: 'Afrikaans', continent: 'Africa', population: 61254923 }
    ]);
  });

  it('#GET /countries/:id should return a single country', async () => {
    const resp = await request(app).get('/countries/2');
    expect(resp.body).toEqual({
      id: '2',
      country: 'United Kingdom',
      capitol: 'London',
      spoken_language: 'English',
      continent: 'Europe',
      population: 67081234
    });
  });
});
