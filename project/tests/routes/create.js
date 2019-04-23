describe('Test message.', function () {
    describe('Try to create delay message.', function () {
        let data = {
            message: `asdsd ${(new Date().getTime())}`,
            date: new Date(),
        };

        it('Should return ololo response status code.', function (done) {
            chai.request(server)
                .post('/echoAtTime')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');

                    done();
                });
        });
    });
});