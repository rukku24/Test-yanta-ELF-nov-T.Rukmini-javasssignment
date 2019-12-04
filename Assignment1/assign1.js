var car = {
    Name: "benz",
    Color: "Blue",
    Price: 40000000,
    getCarDetails: function () {
        return this.Name + " " + this.Color;
    }
}

console.log("Car name is " + car.Name);
console.log("Car color is " + car.Color);
console.log("Car price is " + car.Price);
console.log("Car deatils is " + car.getCarDetails());
console.log("-----------------------")

var Pen = {
    Name: "ballpen",
    Color: "Black",
    Price: 10,
    getPenDetails: function () {
        return this.Name + " " + this.Price;
    }
}

console.log("Pen name is " + car.Name);
console.log("Pen color is " + car.Color);
console.log("Pen price is " + car.Price);
console.log("Pen deatils is " + Pen.getPenDetails());
console.log("-----------------------")

var Student = {
    Name: "Rakesh",
    ID: 101,
    getStudentDetails: function () {
        return this.Name + " " + this.ID;
    }
}

console.log("Student name is " + Student.Name);
console.log("Student ID is " + Student.ID);
console.log("Student deatils is " + Student.getStudentDetails());
console.log("-----------------------")


var Account = {
    Name: "Rakesh",
    bal: 77777,
    AccntNo: 1234567,
    getAccountDetails: function () {
        return this.Name + " " + this.AccntNo;
    }
}

console.log("Account name is " + Account.Name);
console.log("Account bal is " + Account.bal);
console.log("Account deatils is " + Account.getAccountDetails());
console.log("-----------------------")


var Mobile = {
    Name: "Redmi",
    Color: "Golden",
    Price: 7000,
    getMobileDetails: function () {
        return this.Name + " " + this.Price;
    }
}

console.log("Mobile name is " + Mobile.Name);
console.log("Mobile color is " + Mobile.Color);
console.log("Mobile deatils is " + Mobile.getMobileDetails());
console.log("-----------------------")


var Laptop = {
    Name: "Dell",
    Price: 50000,
    getLaptopDetails: function () {
        return this.Name + " " + this.Price;
    }
}

console.log("Laptop name is " + Laptop.Name);
console.log("Laptop price is " + Laptop.Price);
console.log("Laptop deatils is " + Laptop.getLaptopDetails());
console.log("-----------------------")


var person = {
    FirstName: "Rakesh",
    LastName: "Shivarama",
    Id: 101,
    Age: 23,

    getFullName: function () {
        return this.FirstName + " " + this.LastName;
    }
}

console.log("First name is " + person.FirstName);
console.log("Last name is " + person.LastName);
console.log("Age is " + person.Age);
console.log("Id is " + person.Id);
console.log("Result is " + person.getFullName());
console.log("-----------------------")


var Book = {
    Name: "classmate",
    Price: 50,
    getBookDetails: function () {
        return this.Name + " " + this.Price;
    }
}

console.log("Book name is " + Book.Name);
console.log("Book price is " + Book.Price);
console.log("Book deatils is " + Book.getBookDetails());
console.log("-----------------------")

var TV = {
    Name: "Sumsung",
    Price: 500000,
    getTVDetails: function () {
        return this.Name + " " + this.Price;
    }
}

console.log("TV name is " + TV.Name);
console.log("TV price is " + TV.Price);
console.log("TV deatils is " + TV.getTVDetails());
console.log("-----------------------")

var Shoes = {
    Name: "Puma",
    Price: 6000,
    getShoesDetails: function () {
        return this.Name + " " + this.Price;
    }
}

console.log("Shoes name is " + Shoes.Name);
console.log("Shoes price is " + Shoes.Price);
console.log("Shoes deatils is " + Shoes.getShoesDetails());
console.log("-----------------------");

