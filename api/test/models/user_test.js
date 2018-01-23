const assert = require('assert');
const User = require('../../models/user');

describe('Admin user', function(){
  describe('Erin Cheong is the admin name', function() {
    it('Admin should be Erin Cheong', function() {
      const user = new User({firstName: 'Erin', lastName: 'Cheong'})
    })
  })
});
