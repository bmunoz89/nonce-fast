'use strict';

let Nonce = require('../index.js'),
    expect = require('chai').expect;

describe('nonce', function() {
    it('length: default 15', () => {
        const nonce = Nonce();
        expect(nonce()).to.have.lengthOf(15);
    });
    it('length: 0', () => {
        const nonce = Nonce(0);
        expect(nonce()).to.have.lengthOf(15);
    });
    it('length: -1', () => {
        const nonce = Nonce(-1);
        expect(nonce()).to.have.lengthOf(15);
    });
    it('length: 4', () => {
        const nonce = Nonce(4);
        expect(nonce()).to.have.lengthOf(4);
    });
    it('length: 20', () => {
        const nonce = Nonce(20);
        expect(nonce()).to.have.lengthOf(20);
    });
    it('duplicate', () => {
        let nonce = Nonce(1),
            list = [],
            repeat = false;

        for (let i = 0; i < 11; i++) {
            let now = nonce();
            if (list.indexOf(now) !== -1) {
                repeat = true;
                break;
            }
            list.push(now);
        }
        expect(repeat).to.be.true;
    });
    it('doesnt duplicate', () => {
        let nonce = Nonce(),
            last = null;

        for (let i = 0; i < 1000; i++) {
            let now = nonce();
            expect(now).to.not.be.equal(last);
            last = now;
        }
    });
});