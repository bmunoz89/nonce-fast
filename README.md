[![Build Status](https://travis-ci.org/bmunoz89/nonce-fast.svg?branch=master)](https://travis-ci.org/bmunoz89/nonce-fast)
[![Maintainability](https://api.codeclimate.com/v1/badges/c3afc1fac7199fbbc9d5/maintainability)](https://codeclimate.com/github/bmunoz89/nonce-fast/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c3afc1fac7199fbbc9d5/test_coverage)](https://codeclimate.com/github/bmunoz89/nonce-fast/test_coverage)
[![npm version](https://badge.fury.io/js/nonce-fast.svg)](https://badge.fury.io/js/nonce-fast)
[![Downloads](https://img.shields.io/npm/dt/nonce-fast.svg)](https://www.npmjs.com/package/nonce-fast)
[![dependency status](https://david-dm.org/bmunoz89/nonce-fast.svg)](https://david-dm.org/bmunoz89/nonce-fast)
[![devDependency status](https://david-dm.org/bmunoz89/nonce-fast/dev-status.svg)](https://david-dm.org/bmunoz89/nonce-fast)

# Welcome

## Install

```bash
npm i nonce-fast
```

or

```bash
yarn add nonce-fast
```

## Usage

```javascript
const Nonce = require('nonce-fast'),
    nonce = Nonce(9); # define the length of the string

nonce(); # '802354675'
nonce(); # '296876554'
nonce(); # '269567223'
```

## Benchmark

Compared with the original nonce generator

```
Nonce x 1,783,560 ops/sec ±1.69% (83 runs sampled)
NonceFast x 5,832,445 ops/sec ±2.35% (77 runs sampled)
Fastest is NonceFast
```

🎉 Some hugs to [Abrkn][github-user-abrkn] for the original project [nonce][github-rep-nonce] 🍻

[github-user-abrkn]: https://github.com/abrkn
[github-rep-nonce]: https://github.com/abrkn/nonce