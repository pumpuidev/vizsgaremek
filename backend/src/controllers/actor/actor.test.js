const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const actorController = require('../base/controller');
const actorService = require('../base/service');

jest.mock('../base/service');

describe("actor controler", () => {
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
        actorService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ACTOR_ID = 1;

        const request = mockRequest({
            params: {
                id: ACTOR_ID
            }
        });

        return actorController.findOne(request, response, nextFunction)
            .then( () => {
                expect(actorService.findOne).toBeCalledWith(ACTOR_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ACTOR_ID)
                );                
            })
    });
});