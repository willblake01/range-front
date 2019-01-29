describe('Sample test 101', () => {
  it('Works as expected.', () => {
    expect(1).toEqual(1);
  });

  it('Handles ranges just fine.', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it('Makes a list of dog names.', () => {
    const dogs = ['Rover', 'Cletus'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('Rover');
    expect(dogs).toContain('Cletus');
  });
});
