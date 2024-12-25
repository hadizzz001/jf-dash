"use strict";
(() => {
var exports = {};
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 37001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/clients/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
;// CONCATENATED MODULE: ./app/api/clients/route.js

const prisma = new client_.PrismaClient();
async function GET(req) {
    try {
        const categories = await prisma.client.findMany();
        return new Response(JSON.stringify(categories), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({
            error: "Failed to fetch data"
        }), {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const { client, location } = await req.json();
        const category = await prisma.client.create({
            data: {
                location,
                client
            }
        });
        return new Response(JSON.stringify({
            message: "Client created successfully",
            category
        }), {
            status: 201
        });
    } catch (error) {
        console.error("Error creating category:", error);
        return new Response(JSON.stringify({
            error: "Failed to create category"
        }), {
            status: 500
        });
    }
}
async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) return new Response(JSON.stringify({
            error: "ID is required"
        }), {
            status: 400
        });
        const deletedCategory = await prisma.client.delete({
            where: {
                id
            }
        });
        return new Response(JSON.stringify({
            message: "Client deleted successfully",
            deletedCategory
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error deleting category:", error);
        return new Response(JSON.stringify({
            error: "Failed to delete category"
        }), {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fclients%2Froute&name=app%2Fapi%2Fclients%2Froute&pagePath=private-next-app-dir%2Fapi%2Fclients%2Froute.js&appDir=C%3A%5CUsers%5Cabc%5CDesktop%5CHadi%5CMy%20Bussiness%5Cjf%5Cjf-%20dash%5Capp&appPaths=%2Fapi%2Fclients%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/clients/route","pathname":"/api/clients","filename":"route","bundlePath":"app/api/clients/route"},"resolvedPagePath":"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\jf\\jf- dash\\app\\api\\clients\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/clients/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981], () => (__webpack_exec__(37001)));
module.exports = __webpack_exports__;

})();