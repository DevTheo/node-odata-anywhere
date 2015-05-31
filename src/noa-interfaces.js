var NOAInterfaces;
(function (NOAInterfaces) {
    (function (DataTypes) {
        DataTypes[DataTypes["Boolean"] = 0] = "Boolean";
        DataTypes[DataTypes["String"] = 1] = "String";
        DataTypes[DataTypes["Int"] = 2] = "Int";
        DataTypes[DataTypes["Decimal"] = 3] = "Decimal";
        DataTypes[DataTypes["Date"] = 4] = "Date";
        DataTypes[DataTypes["Complex"] = 5] = "Complex";
    })(NOAInterfaces.DataTypes || (NOAInterfaces.DataTypes = {}));
    var DataTypes = NOAInterfaces.DataTypes;
    (function (SchemaTypes) {
        SchemaTypes[SchemaTypes["simple"] = 0] = "simple";
        SchemaTypes[SchemaTypes["full"] = 1] = "full";
        SchemaTypes[SchemaTypes["complex"] = 2] = "complex";
    })(NOAInterfaces.SchemaTypes || (NOAInterfaces.SchemaTypes = {}));
    var SchemaTypes = NOAInterfaces.SchemaTypes;
})(NOAInterfaces || (NOAInterfaces = {}));
