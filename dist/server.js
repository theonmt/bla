"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.context = exports.schema = void 0;
var schema_1 = require("@graphql-tools/schema");
var models_1 = require("./models");
var context_1 = __importDefault(require("./context"));
exports.context = context_1["default"];
var schema = (0, schema_1.makeExecutableSchema)({ typeDefs: models_1.typeDefs, resolvers: models_1.resolvers });
exports.schema = schema;
exports["default"] = { schema: schema, context: context_1["default"] };
//# sourceMappingURL=server.js.map