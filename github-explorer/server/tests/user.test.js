const axios = require('axios');
const app = require('../server'); 

jest.mock('axios');

describe('User Route', () => {
  it('should fetch user data from GitHub API', async () => {
    const mockUserData = { login: 'exampleUser', name: 'Example User' };
    axios.get.mockResolvedValue({ data: mockUserData });

    const response = await supertest(app).get('/api/github/user/exampleUser');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUserData);
  });

  it('should handle errors from GitHub API', async () => {
    axios.get.mockRejectedValue({ response: { status: 404, statusText: 'Not Found' } });

    const response = await supertest(app).get('/api/github/user/nonexistentUser');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Not Found' });
  });
});
