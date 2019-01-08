CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
		id INT AUTO_INCREMENT NOT NULL,
        product_name VARCHAR(150) NOT NULL,
        department_name VARCHAR(75) NOT NULL,
        year SMALLINT NOT NULL, 
        price DECIMAL(8,2) NOT NULL,
        stock_quantity INTEGER NOT NULL,
        PRIMARY KEY(id)
);

DESCRIBE products;

INSERT INTO products (product_name, department_name, year, price, stock_quantity)
VALUES
			('Nat King Cole : A Christmas Song', 'Music', '1967', '20.00', '300'),
			('Tickle Me Elmo', 'Toys', '2010', '20.00', '300'),
			('The Catcher in the Rye', 'Books', '2006', '15.00', '100'),
			('The Nightmere Before Christmas', 'Movies', '1993', '24.50', '150' ),
			('Dr. Barbie', 'Toys', '0', '15.00', '30' ),
			('FIFA Collectors WC Soccer Ball', 'Sports', '2014', '65.00', '3' ),
			('Wilson Federer Tennis Racket', 'Sports', '2017', '25.00', '200' ),
			('Good Night Moon', 'Books', '2000', '12.00', '150' ),
            ('The Problem With Increasing Human Energy', 'Books', '2000', '12.00', '0' ),
			('Folgers Hamlet', 'Books', '2005', '18.00', '250' ),
            ('Shakira La Bicileta', 'Music', '2017', '15.00', '30' ),
			('The Sound Of Music', 'Movies', '2010', '15.00', '100' ),
			('The Sound Of Music', 'Movies', '1965', '100.00', '0' ),
			('Clue', 'Toys', '2010', '20.00', '200' ),
			('Miss Fishers Murder Mysteries: Cocaine Blues', 'Books', '2005', '20.00', '150' ),
			('The Princess Bride', 'Movies', '1987', '20.00', '200' ),
			('Clueless', 'Movie', '1995', '20.00', '200' ),
            ('Ricardo Arjona Minutos', 'Music', '2002', '15.00', '1'),
			('Chess Set', 'Toys', '2010', '20.00', '200' ),
			('Handmade Cedar Chess Set', 'Toys', '2018', '200.00', '200' ),
            ('Tchaikovsky The Nutcracker With The Philiadelphia Symphony', 'Music', '1993', '24.50', '150' );

DROP TABLE products;

SELECT * FROM products;

