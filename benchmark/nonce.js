'use strict';

const Benchmark = require('benchmark');
const Nonce = require('nonce')(9);
const NonceFast = require('../index.js')(9);

(new Benchmark.Suite)
    .add('Nonce', () => {
        Nonce();
    })
    .add('NonceFast', () => {
        NonceFast();
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();