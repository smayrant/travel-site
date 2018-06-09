var person = {
  name: 'Rick Mayrant',
  favColor: 'blue',
  greeting: function (){
    console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favColor}`);
  }
}

person.greeting();
