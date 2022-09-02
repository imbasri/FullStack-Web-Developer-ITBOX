// CookiBrownies : parent class
// Chocolate , Strawberry ,Blueberry : child class / subclass
// Oven : factory class

class Cookie {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
class Chocolate extends Cookie {
    constructor(name, price, isSweet) {
        super(name, "Chocolate", price);
        this.isSweet = isSweet || false;
    }
}
class Strawberry extends Cookie {
    constructor(name, price, isSweet) {
        super(name, "Strawberry", price);
        this.isSweet = isSweet || false;
    }
}
class Blueberry extends Cookie {
    constructor(name, price, isSweet) {
        super(name, "Blueberry", price);
        this.isSweet = isSweet || false;
    }
}

class Oven {
    constructor(container) {
        this.container = container || [];
    }
    bake(cookie) {
        this.container.push(cookie);
    }
    delivery(cookie_name) {
        this.container = this.container.filter(
            (cookie) => cookie.name !== cookie_name
        );
    }
}

let oven = new Oven();
oven.bake(new Chocolate("Brownies", 125000));
oven.bake(new Strawberry("Red Valvet", 150000));
oven.bake(new Blueberry("Blueberry Cake", 175000));
oven.delivery("Brownies");
console.log(oven.container);
