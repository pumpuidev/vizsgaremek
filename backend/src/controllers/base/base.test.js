const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const baseController = require('./controller');
const baseService = require('./service');

jest.mock('./service');

describe("base controler", () => {
    const mockData = [{
        "id": 1,
        "firstName":"Salvatore","lastName":"Hazart","email":"shazart0@so-net.ne.jp","address":"97 Hauk Place","active":false
    }, {
        "id": 2,
        "firstName":"Burt","lastName":"Rabb","email":"brabb1@msn.com","address":"93 Fairfield Trail","active":true
    }, {
        "id": 3,
        "firstName":"Elyse","lastName":"Monnoyer","email":"emonnoyer2@cam.ac.uk","address":"84 Oriole Trail","active":true
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        baseService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const BASE_ID = 1;

        const request = mockRequest({
            params: {
                id: BASE_ID
            }
        });

        return baseController.findOne(request, response, nextFunction)
            .then( () => {
                expect(baseService.findOne).toBeCalledWith(BASE_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === BASE_ID)
                );                
            })
    });
});