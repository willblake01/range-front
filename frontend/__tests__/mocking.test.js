function Person(name, foods) {
  this.name = name;
  this.foods = foods;
};

Person.prototype.fetchFavFoods = () => {
  return new Promise((resolve, reject) => {
    // Simulate an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe('Learning Mocking', () => {
  it('Mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
    fetchDogs('hugo');
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it('Can create a person.', () => {
    const me = new Person('Will', ['pizza', 'tacos']);
    expect(me.name).toBe('Will');
  });

  it('Can fetch foods.', async () => {
    const me = new Person('Will', ['pizza', 'tacos']);
    // Mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['pizza', 'tacos']);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain('pizza');
  });
});
