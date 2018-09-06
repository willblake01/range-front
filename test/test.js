var app = require('../server');
var request = require('supertest');
var chai = require('chai').expect;
var apiRoutes = require('../routing/apiRoutes.js');

describe('sleepingbags', function() {

it('should GET all sleepingbags', function(done) {
    request(app)
    .get('/products/sleepingbags')
    // done();
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .done(function(err, res) {
        expect(res.id).toBeDefined();
        done();
        });
    });
});
