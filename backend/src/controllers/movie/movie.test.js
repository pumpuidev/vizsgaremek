const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const movieController = require('../base/controller');
const movieService = require('../base/service');

jest.mock('../base/service');

describe("movie controler", () => {
    const mockData = [{
        "id": 1,
        "title":"Ernest Goes to Africa","genre":"Comedy","year":2000,"producer":"Koralle Tookill","watchlist":false
    }, {
        "id": 2,
        "title":"Youth of the Son","genre":"Drama","year":2007,"producer":"Gael Barhams","watchlist":true
    }, {
        "id": 3,
        "title":"Formosa Betrayed","genre":"Thriller","year":1996,"producer":"Rossy O'Fallone","watchlist":false
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        movieService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MOVIE_ID = 1;

        const request = mockRequest({
            params: {
                id: MOVIE_ID
            }
        });

        return movieController.findOne(request, response, nextFunction)
            .then( () => {
                expect(movieService.findOne).toBeCalledWith(MOVIE_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === MOVIE_ID)
                );                
            })
    });
});