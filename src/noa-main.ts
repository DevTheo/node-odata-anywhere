///<reference path="./noa-interfaces.ts"/>
import Express = require("express");

interface ISetupConfig {
	db:NOAInterfaces.INOADriver;
	
	port?:number;
	callback?:()=>void;
	oDataRoutes:NOAInterfaces.IRouteDef[];
}

interface INOAMain {	
	db:NOAInterfaces.INOADriver;	
	app: Express.Application;
	
	setup(config:ISetupConfig);
}

class NOAMain implements INOAMain {
	db:NOAInterfaces.INOADriver;	
	app: Express.Application;

	setup(config:ISetupConfig) {
		this.db = config.db;		
		this.app = Express();
		
		for(var i=0; i<config.oDataRoutes.length; i++) {
			var route = config.oDataRoutes[i];
			this.db.registerTable(route.table);
			var handler = new 
			if(!route.disallowGet) {
				this.app.get(route.path, `)
			}
			
		}
	}
	
}

export var main = new NOAMain();