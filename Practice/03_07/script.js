/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const backpack = {
  name: 'EPAM backpack',
  volume: 30,
  isLaptopInside: true,
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  toggleLaptop(boolean) {
    this.isLaptopInside = boolean;
  },
  changeName: (newName) => {
    this.name = newName; // no this. context in arrow functions
  },
  laptop: {
    type: 'workstation',
    weight: 4,
  },
};

backpack.toggleLaptop(false);
backpack.changeVolume(50);
backpack.changeName('My Backpack'); // no changes

console.log(backpack);
