///<reference path="./noa-interfaces.ts"/>
import Express = require("express");

export class ODataRouteHandler {
	db:NOAInterfaces.INOADriver;
	table:NOAInterfaces.ITableDef;
	constructor(db:NOAInterfaces.INOADriver, routeDef:NOAInterfaces.IRouteDef) {
		this.db = db;
		this.table = routeDef.table;
		
	}
}