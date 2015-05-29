# node-odata-anywhere

*Just my notes (nothing really to see here)*

Ideas here (not implemented yet)
---------------------------------

noa-interfaces
****
Contains interfaces for schema and for database drivers which will implement
saving and querying

noa-schemaparser
***** 
Contains the mechanism for parsing schema (not sure if this is needed)

noa-actions
******
Contains the implementation for the defined routes passing information 
to the db driver and then pushing that data back via the route.

noa-config
***** 
- should provide a mechanism for setting up odata routes in express with 
a schema interface and a route.

noa-config
***** 
- should provide mechanism to load the proper DB driver (possibly all 
this could be in config)

noa-main 
*****
- Main entry point for the Node module Will return a single object that
exposes the Config mechanism as well as the Express app, so that additional
endpoints can be created

noa-mongodriver
*****
An example driver for mongo
