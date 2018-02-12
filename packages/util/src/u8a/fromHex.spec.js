// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const isFunction = require('../is/function');

const { u8aFromHex } = require('./index');

describe('u8aFromHex', () => {
  it('exists as a function', () => {
    expect(
      isFunction(u8aFromHex)
    ).toEqual(true);
  });
});