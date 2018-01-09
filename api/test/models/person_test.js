"use strict"

const chai = require('chai');
const expect = chai.expect;
const Person = require('../../models/person');

describe('Person', function() {
  it('should have a full name', function() {
    const person = new Person({ firstName: 'John', lastName: 'Brown' })
    expect(person.fullName()).to.equal('John Brown')
  })
})
