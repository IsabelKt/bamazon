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

  connection.connect(function(err) {
    if (err) throw err;
    console.log(chalk.keyword('orange')('Welcome to our database!') + chalk.keyword('purple')('Please take a look at what we have in store for you:'));
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("\n" + ((chalk.keyword('pink')(res[i].id)) + (chalk.keyword('orange')("|")) + chalk.blue(res[i].product_name) + (chalk.keyword('orange')("|")) + res[i].department_name + (chalk.keyword('orange')("|")) + res[i].price + (chalk.keyword('orange')("|")) + res[i].stock_quantity));
        }
    })
    selectProduct();
  })

  function selectProduct() {
    inquirer
      .prompt({
        name: "table",
        type: "list",
        message: "How would you like to pull up your product?",
        choices: [
            "By id",
            "By name"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find by id":
          productIdSearch();
          break;
  
        case "Find by name":
          productNameSearch();
          break;
        }
      });
    }

    function productIdSearch() {
        inquirer
          .prompt({
            name: "id",
            type: "input",
            message: "What is your product's id number?"
          })
          .then(function(answer) {
            var query = "SELECT id, product_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { id: answer.id }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Id: " + res[i].id + " || Name: " + res[i].product_name + " || Price: " + res[i].price+ " || Quantity: " + res[i].stock_quantity);
              }
              selectProduct();
            });
          });
      }








//   function selectProduct() {
//     connection.query("SELECT * FROM products", function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(res[i].id + (chalk.keyword('orange')("|")) + chalk.blue(res[i].product_name) + (chalk.keyword('orange')("|")) + res[i].department_name + (chalk.keyword('orange')("|"))  + res[i].price + (chalk.keyword('orange')("|")) + res[i].stock_quantity);
//         }
//         console.log("-----------------------------------");
//       });