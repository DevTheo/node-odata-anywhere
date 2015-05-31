module NOAInterfaces
{
	export enum DataTypes {
		Boolean,
		String,
		Int,
		Decimal,
		Date,
		Complex
	}
	export enum SchemaTypes {
		simple,
		full,
		complex
	}
	
	export interface IColumnDef {
		coumnName: String;
		columnType: DataTypes;
		columnLength?: number;
		precision?: number;
		isPrimaryKey?:boolean;
	} 
	export interface ITableDef {
		schemaType:SchemaTypes;
		tableName: String;
		columns:IColumnDef[];
	}
	export interface IRouteDef {
		path:string;
		table:ITableDef;
		disallowGet?:boolean;		
		disallowDelete?:boolean;
		disallowInsert?:boolean;
		disallowUpdate?:boolean;
	}
	export interface IQuery {		
		select:any;
		from:ITableDef;
		where:any;
		orderby:any;
		groupby:any;	
	}
	
	export interface INOADriver {
		connectionString:String;
		tables:ITableDef[];
		registerTable(tableDef:ITableDef);
		select(query:IQuery):any[];
		update(data:any, query?:IQuery);
		insert(data:any);
		delete(queryOrID:IQuery);
		delete(queryOrID:string);
	}
}