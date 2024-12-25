"use strict";
(() => {
var exports = {};
exports.id = 898;
exports.ids = [898];
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

/***/ 81485:
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

// NAMESPACE OBJECT: ./app/api/products/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  PATCH: () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
;// CONCATENATED MODULE: ./app/api/products/[id]/route.js

const prisma = new client_.PrismaClient();
// Update Product API
async function PATCH(request, { params }) {
    const { id } = params;
    const { title, weight, shipping, sku, price, stock, videoLink } = await request.json();
    try {
        // Update product and its specifications
        const updatedProduct = await prisma.product.update({
            where: {
                id
            },
            data: {
                title,
                weight: parseFloat(weight),
                shipping,
                sku,
                price,
                stock,
                videoLink
            }
        });
        return new Response(JSON.stringify(updatedProduct), {
            status: 200
        });
    } catch (error) {
        console.error("Error updating product:", error);
        return new Response(JSON.stringify({
            error: "Failed to update product"
        }), {
            status: 500
        });
    }
}
// Delete Product API
async function DELETE(request, { params }) {
    const { id } = params;
    try {
        // Delete the product
        await prisma.product.delete({
            where: {
                id
            }
        });
        return new Response(JSON.stringify({
            message: "Product deleted successfully"
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        return new Response(JSON.stringify({
            error: "Failed to delete product"
        }), {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5Cabc%5CDesktop%5CHadi%5CMy%20Bussiness%5Cjf%5Cjf-%20dash%5Capp&appPaths=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/products/[id]/route","pathname":"/api/products/[id]","filename":"route","bundlePath":"app/api/products/[id]/route"},"resolvedPagePath":"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\jf\\jf- dash\\app\\api\\products\\[id]\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/products/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981], () => (__webpack_exec__(81485)));
module.exports = __webpack_exports__;

})();