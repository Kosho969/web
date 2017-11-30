import jasmineEnzyme from 'jasmine-enzyme';
//import App from 'App.jsx'

describe('test', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  // t
  it('Mi funcion suma',() => {
    expect(1+1).toBe(5)
  }) 
});
