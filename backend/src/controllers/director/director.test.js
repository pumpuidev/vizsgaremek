const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const directorController = require('../base/controller');
const directorService = require('../base/service');

jest.mock('../base/service');

describe("actor controler", () => {
    const mockData = [{
        "id": 1,
        "firstName":"Kendall","lastName":"Mayger","year":1993,"movie":"Three on a Weekend","alive":true
    }, {
        "id": 2,
        "firstName":"Felicle","lastName":"Merigeau","year":1985,"movie":"Bad Company","alive":true
    }, {
        "id": 3,
        "firstName":"Julianna","lastName":"Fawckner","year":2012,"movie":"They Live by Night","alive":false
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        directorService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const DIRECTOR_ID = 1;

        const request = mockRequest({
            params: {
                id: DIRECTOR_ID
            }
        });

        return directorController.findOne(request, response, nextFunction)
            .then( () => {
                expect(directorService.findOne).toBeCalledWith(DIRECTOR_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === DIRECTOR_ID)
                );                
            })
    });
});