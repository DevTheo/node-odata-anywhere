export module NOAInterfaces
{
	enum SchemaTypes {
		Simple,
		Full,
		Complex
	}
	
	interface IColumnDef {
		CoumnName: String,
		ColumnType: any,
		ColumnLength?: number,
		Precision?: number,
		IsPrimaryKey?:boolean
	} 
	interface ITableDef {
		TableName: String,
		Columns:IColumnDef[]
	}
	
	interface IQuery {
	}
	
	interface INOADriver {
		ConnectionString:String;
		Tables:ITableDef[];
		
	}
}