import * as fromUsers from './users.actions';

describe('uSERUserss', () => {
  it('should return an action', () => {
    expect(fromUsers.uSERUserss().type).toBe('[Users] USER Userss');
  });
});
