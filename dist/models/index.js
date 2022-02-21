"use strict";
exports.__esModule = true;
exports.resolvers = exports.typeDefs = void 0;
var path_1 = require("path");
var merge_1 = require("@graphql-tools/merge");
var load_1 = require("@graphql-tools/load");
var graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
var loadFilesSync = require('@graphql-tools/load-files').loadFilesSync;
var typeDefs = (0, merge_1.mergeTypeDefs)((0, load_1.loadSchemaSync)((0, path_1.join)(__dirname, './**/*.graphql'), {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()]
}));
exports.typeDefs = typeDefs;
var resolvers = (0, merge_1.mergeResolvers)(loadFilesSync((0, path_1.join)(__dirname, './**/*.resolvers.*')));
exports.resolvers = resolvers;
//# sourceMappingURL=index.js.map