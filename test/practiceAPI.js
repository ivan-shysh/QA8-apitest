const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('https://nazarov-kanban-server.herokuapp.com');
let response;
//const express = require('express');
//const app = express();



/*app.get('/card', (req, res) => {
    res.send(cards);
}); */


describe.skip('GET ALL CARDS', () => {
    before(async () => {
        const cards = await request.get('/card')
            .then(res => {
                response = res;
                return res.status;
            })
    })
    it('should return all cards', () => {
       // request.get('/card')
            expect(response.status).equal(200);
    })
    it('should create a card', async () => {
        let cards =
            //{description: "first name", priority: 2, status: "to do", name: "Ivan"},
           // {description: "first name", priority: 3, status: "urgent to do", name: "Emil"},
            {description: "first name", priority: 0, status: "skip", name: "Andrey"}



        let resNew;
       await request
            .post('/card')
            .send(cards)
            //.set("Accept", "application/json")
            .then(res => {
                resNew = res;
               // return res.status;
            })
        expect(resNew.status).eq(201);
    })

})
