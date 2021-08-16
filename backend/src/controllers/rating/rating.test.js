const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const ratingController = require('../base/controller');
const ratingService = require('../base/service');

jest.mock('../base/service');

describe("rating controler", () => {
    const mockData = [{
        "id": 1,
        "movie":"Jason Becker: Not Dead Yet","year":2008,"favourite":true,"rating":85,"description":"sed nisl nunc rhoncus dui"
    }, {
        "id": 2,
        "movie":"Lockdown","year":2004,"favourite":true,"rating":22,"description":"sit amet justo morbi ut odio"
    }, {
        "id": 3,
        "movie":"Bad Company","year":2010,"favourite":true,"rating":7,"description":"enim sit amet nunc viverra"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        ratingService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const RATING_ID = 1;

        const request = mockRequest({
            params: {
                id: RATING_ID
            }
        });

        return ratingController.findOne(request, response, nextFunction)
            .then( () => {
                expect(ratingService.findOne).toBeCalledWith(RATING_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === RATING_ID)
                );                
            })
    });
});