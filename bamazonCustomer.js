var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });

  var tot = 

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    //start();
    console.log(chalk.keyword('orange')('Welcome to our database!') + chalk.keyword('purple')('Please take a look at what we have in store for you:'));
    selectProduct();
  })
  function selectProduct() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products ", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      inquirer.prompt([
          {
            name: "choice",
            type: "list",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                // choiceArray.push(results[i].id);
                choiceArray.push(results[i]
                  );
                // choiceArray.push(results[i].stock_quantity);
              }
              return choiceArray;
            },
            message: "What is the id of the item you wish to purchase?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many of these items would you like to buy?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          // console.log("works");
          // var chosenProduct = answer.product_name;
          // var chosenProductId = answer.product_name;
          // var chosenQuantity = answer.product_name;

        //   for (var i = 0; i < results.length; i++) {
        //   if (results[i].product_name === answer.choice) {
        //   chosenProduct = results[i];
        //   console.log("works");
        // }
        if (answer.quantity <= results[i].stock_quantity) {
          // bid was high enough, so update db, let the user know, and start over
          var tot = answer.quantity * answer.price
          console.log("Thank you, the total for your order is $ " + tot);
          updateDB();
        }
        else if (answer.quantity > results[i].stock_quantity)  {
          // there were none in stock, so apologize and start over
          console.log(chalk.blue("We are sorry, but we seem to be out of stock! Please try again later!"));
          console.log(chalk.green("Or signup to our listserve, and we will be in touch when the item is available."));
          inquirer.prompt([
            {
              name: "email",
              type: "input",
              message: "Sign Up Today:"
            }
          ])
          .then(function(emailAnswer) {
            console.log("Thanks, we'll be in touch soon!");
            inquirer.prompt([
              {
                name: "email",
                type: "rawlist",
                choices: ['Continue Shopping','End Connection'],
                message: "What would you like to do next?"
              }
            ])
            .then(function(finalStep){
              if (choices[0]){
                selectProduct();
              }  
              else if (choices[1]){
                connection.end;
              }
            });
      });
    }




          function updtadeDB (){
            connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: answer.quantity
              },
              {
                product_name: chosenProduct.product_name
              }
            ],
            function(error) {
              if (error) throw err;
              console.log(chalk.blue("You can take one of these home!"));
              // start();
            }
          );
        } 
        
        });
  })};
        // determine if there is enough quantity
//         if (chosenItem.highest_bid < parseInt(answer.bid)) {
//           // if there is, update db on the change and let the user know their total price, and start over (connection.query)