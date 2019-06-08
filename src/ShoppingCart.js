//creates class called ShoppingCart

class ShoppingCart {
    constructor() {
       this.items = [];
    }
    //returns current items
    getItems() {
        return this.items;
    }
    //adds items to current array
    addItem(name, quantity, pricePerUnit) {
        this.items.push({
            name: name,
            quantity: quantity,
            pricePerUnit: pricePerUnit
        })
    }
    //clears array
    clear() {
        this.items = [];
    }

    //returns total price. Map creates new array, based on quantity * priceperunit, 
    //.reduce converts the newly formed array into a single value by cycling/iterating through array and adding the values
    total() {
        return this.getItems()
          .map(itemTotal => itemTotal.quantity * itemTotal.pricePerUnit)
          .reduce((total, currentValue) => {

           return total + currentValue}, 0);
      }
    
}

const cart = new ShoppingCart();

module.exports = ShoppingCart;