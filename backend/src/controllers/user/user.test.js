const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const userController = require('../base/controller');
const userService = require('../base/service');

jest.mock('../base/service');

describe("user controler", () => {
    const mockData = [{
        "id": 1,
        "firstName":"Elyse","lastName":"Monnoyer","email":"emonnoyer2@cam.ac.uk","address":"84 Oriole Trail","active":true
    }, {
        "id": 2,
        "firstName":"Iolanthe","lastName":"Hordell","email":"ihordell5@nyu.edu","address":"87197 Raven Avenue","active":false
    }, {
        "id": 3,
        "firstName":"Gae","lastName":"Lissemore","email":"glissemore7@about.me","address":"1539 Towne Plaza","active":true
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        userService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return userController.findOne(request, response, nextFunction)
            .then( () => {
                expect(userService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === USER_ID)
                );                
            })
    });
});