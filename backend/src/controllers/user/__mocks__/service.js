const service = jest.mock('./user.route');

let mockData;

service.findOne = jest.fn( id => Promise.resolve(
    mockData.find( entity => entity.id === id) ) 
);

service.__setMockData = data => mockData = data;

module.exports = service;