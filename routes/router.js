const express = require('express');
const router = express.Router();

// Các controller hiện tại
const changePasswordController = require('../controller/user/changePassword');
const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUsers');
const updateUser = require('../controller/user/updateUser');

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);
router.post("/change-password", authToken, changePasswordController);

// Admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

// Product
const uploadProduct = require('../controller/product/uploadProduct');
const getProduct = require('../controller/product/getProduct');
const updateProduct = require('../controller/product/updateProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProduct = require('../controller/product/filterProduct');
const deleteProduct = require('../controller/product/deleteProduct');
const getProductById = require('../helpers/getProductById');
const getProductDetails = require('../controller/product/getProductDetails');

router.post("/upload-product", authToken, uploadProduct);
router.get("/get-product", getProduct);
router.post("/update-product", authToken, updateProduct);
router.get("/search", searchProduct);
router.post("/filter-product", filterProduct);
router.post('/delete-product', authToken, deleteProduct);
router.post("/product-details", getProductDetails);
router.post('/get-product-by-id/', authToken, getProductById);

// Category
const getCategoryProduct = require('../controller/category/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/category/getCategoryWiseProduct');
const deleteCategory = require('../controller/category/deleteCategory');

router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/delete-category", deleteCategory); // Thêm route này

// User add to cart
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');

router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

// Warehouse
const updateWarehouse = require('../controller/warehouse/UpdateWarehouse');
const uploadWarehouse = require('../controller/warehouse/uploadWarehouse');
const getWarehouse = require('../controller/warehouse/getWarehouse');

router.post('/upload-warehouse', authToken, uploadWarehouse);
router.get('/get-warehouse', authToken, getWarehouse);
router.post('/update-warehouse', authToken, updateWarehouse);

// Address
const getAddressById = require('../helpers/getAddressById');
const UploadAddress = require('../controller/address/uploadAddress');
const getAddress = require('../controller/address/getAddress');
const deleteAddress = require('../controller/address/deleteAddress');
const updateAddress = require('../controller/address/updateAddress');

router.post('/upload-address-delivery', authToken, UploadAddress);
router.get('/get-address-delivery', authToken, getAddress);
router.post('/delete-address-delivery', authToken, deleteAddress);
router.post("/update-address-delivery", authToken, updateAddress);
router.post('/get-address-by-id', authToken, getAddressById);

// Import Order
const uploadImportOrder = require('../controller/importOrder/uploadImportOrder')
const getImportOrder = require('../controller/importOrder/getImportOrder')
const deleteImportOrder = require('../controller/importOrder/deleteImportOrder')
const checkPasswordImportOrder = require('../controller/importOrder/checkPasswordImportOrder ')
const updateImportOrder = require('../controller/importOrder/updateImportOrder')


router.post("/upload-importOrder",authToken,uploadImportOrder)
router.get('/get-importOrder', authToken,getImportOrder)

router.post('/delete-importOrder', deleteImportOrder)
router.post('/check-password-import-order', checkPasswordImportOrder)
router.post('/update-importOrder', updateImportOrder)





// Supplier
const UploadSupplierController = require('../controller/supplier/uploadSupplier')
const getSupplierController = require('../controller/supplier/getSupplier')
const updateSupplier = require('../controller/supplier/updateSupplier')
const deleteSupplier = require('../controller/supplier/deleteSupplier')




router.post("/upload-supplier",authToken,UploadSupplierController)
router.get("/get-supplier", authToken,getSupplierController);
router.post("/update-supplier",authToken, updateSupplier);
router.post("/delete-supplier",authToken, deleteSupplier);
module.exports = router;



