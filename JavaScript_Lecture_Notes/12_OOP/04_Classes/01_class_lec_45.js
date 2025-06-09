{
  //* Important Notes

  // Classes are just a syntanctic-sugar added in ES6 (ecma script).

  class User {
    //! constructor is not neccessasry everytime (constructor gets executed, whenever an instance of this is created)
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }

    //! it is just a method (we can make function/method like this without any keyword)
    encryptPassword() {
      return `${this.password}abc`;
    }

    changeUsername() {
      return `${this.username.toUpperCase()}`;
    }
  }

  const chai = new User("chai", "chai@gmail.com", "123");

  console.log(chai.encryptPassword());
  console.log(chai.changeUsername());

  //* Behind-the-scenes (of class - under-the-hood)

  function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  User2.prototype.encryptPassword = function () {
    return `${this.password}abc`;
  };

  User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
  };

  const tea = new User2("tea", "tea@gmail.com", "123");

  console.log(tea.encryptPassword());
  console.log(tea.changeUsername());
}

//* Important notes

/*

In JavaScript, the this keyword behaves differently in arrow functions compared to regular functions. Here's why:

1. Arrow Functions Do Not Have Their Own this
Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope (the function or context in which they are defined). This is different from regular functions, which have their own this that depends on how they are called.

2. Lexical Scoping of this
In a regular function, this is dynamically set based on how the function is called. However, in an arrow function, this is determined by the surrounding lexical scope at the time the function is defined, not when it is called.

3. Arrow Functions Are Useful for Callbacks
Since arrow functions do not change this, they are useful when dealing with callbacks, especially in event listeners or inside methods like map(), setTimeout(), etc.


4. Arrow Functions Cannot Be Used as Constructors
Since arrow functions do not have their own this, they cannot be used as constructors.

Summary:
✅ Use arrow functions when you want this to refer to the surrounding scope (e.g., inside a method, callback, or event listener).
❌ Do not use arrow functions when you need to bind this dynamically, such as in object methods or constructors.



*/
