INSERT INTO burgers VALUES (id, "Malibu Bacon Burger", false, now());
INSERT INTO burgers VALUES (id, "Sunny Side Burger", false, now());
INSERT INTO burgers VALUES (id, "Bulgogi Burger", true, now());

select * from burgers;

UPDATE burgers SET devoured=1 WHERE burger_name = 'Malibu Bacon Burger';