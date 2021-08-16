const service = jest.mock('./movie.route');

let mockData;

service.findOne = jest.fn( id => Promise.resolve(
    mockData.find( entity => entity.id === id) ) 
);

service.__setMockData = data => mockData = data;

module.exports = service;