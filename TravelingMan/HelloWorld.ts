class Hello {
  constructor(public greeting: string) { }
  greet() {
    return "<p>" + this.greeting + "</p>";
  }
}

const greeter = new Hello("Hello, world!");

document.body.innerHTML = greeter.greet();