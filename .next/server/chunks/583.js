"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 96583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47447);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploadcare_react_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46145);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ImageForm = ({ defaultValue, HandleImagesChange })=>{
    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [imgs, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            pt: "1.5em"
        },
        children: load && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uploadcare_react_widget__WEBPACK_IMPORTED_MODULE_3__.W, {
            clearable: true,
            multiple: true,
            imagesOnly: true,
            // values={imgs}
            onChange: ()=>{
                // setProduct({
                //     ...product,
                //     images: imgs
                // })
                HandleImagesChange(imgs);
            },
            onFileSelect: async (e)=>{
                let filess = e && e.files();
                if (!filess) return;
                const immg = [];
                for(let i = 0; i < filess.length; i++){
                    filess[i].done((file)=>{
                        if (file?.cdnUrl) {
                            immg.push(`${file.cdnUrl}`);
                        }
                    });
                }
                setImages(immg);
            },
            publicKey: "998cbc4a64cbfa34b932"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageForm);


/***/ })

};
;