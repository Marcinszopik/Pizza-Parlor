// Business Logic
    var pizzaSize = ["small", "medium", "large"];
    var sizePrice = [ 8.00, 10.00, 12.00];

    var meatToppings = ["Pepperoni", "Sausage"];
    var meatPrice = [1.50, 1.25];

    var vegToppings = ["Broccolli", "Olives", "Mushrooms"];
    var vegPrice = []

    function Pizza(){
        this.pizzaSize;
        this.meatToppings = [];
        this.vegToppings =[];
        this.sizePrice = 0;
    }

// Pizza Constructor, represents a single pizza
    function Pizza(pizzaSize, Cheese) {
    this.pizzaSize = pizzaSize;
    this.cheese = Cheese;
    this.meatToppings = Pepperoni;
    this.vegToppings = Mushrooms;
    }

    Pizza.prototype.chooseSize = function(size,price){
        this.pizzaSize = size;
        this.price = price;
        $("#pizzaSize").text("Size: " + size);
        $("#pizzaSizeButtons").toggle();
        $("#pizzaToppings").toggle();
      }
      
      Pizza.prototype.printToppings = function(){
        $("#toppingList").empty();
        for(i=0;i<this.toppings.length;i++){
          $("#toppingList").append("<li>" + this.toppings[i]+ "</li>");
        }
      }
