const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const authToken = require('../middleware/authToken');

const router = express.Router();


router.use(authToken);

// User controllers
const changePasswordController = require('../controller/user/changePassword');
const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const userLogout = require('../controller/user/userLogout');
const updateUser = require('../controller/user/updateUser');
const verifyEmailController = require('../controller/user/verifyEmailController');
const allUsers = require('../controller/user/allUsers');

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", userDetailsController);
router.get("/userLogout", userLogout);
router.post("/change-password", changePasswordController);
router.get("/verify-email", verifyEmailController);

// Admin routes for users
router.get("/all-user", isAdmin, allUsers);
router.post("/update-user", updateUser);

// Product controllers
const uploadProduct = require('../controller/product/uploadProduct');
const getProduct = require('../controller/product/getProduct');
const updateProduct = require('../controller/product/updateProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProduct = require('../controller/product/filterProduct');
const deleteProduct = require('../controller/product/deleteProduct');
const getProductById = require('../helpers/getProductById');
const getProductDetails = require('../controller/product/getProductDetails');

router.post("/upload-product", isAdmin, uploadProduct);
router.get("/get-product", getProduct);
router.post("/update-product", isAdmin, updateProduct);
router.get("/search", searchProduct);
router.post("/filter-product", filterProduct);
router.post('/delete-product', isAdmin, deleteProduct);
router.post("/product-details", getProductDetails);
router.post('/get-product-by-id/', getProductById);

// Category controllers
const createCategory = require('../controller/category/createCategory');
const getAllCategories = require('../controller/category/getAllCategories');
const getCategoryById = require('../controller/category/getCategoryById');
const updateCategory = require('../controller/category/updateCategory');
const deleteCategory = require('../controller/category/deleteCategory');
const updateCategoryPositions = require('../controller/category/updateCategoryPositions');
const updateCategoryStatus = require('../controller/category/updateCategoryStatus');
const getCategoryProduct = require('../controller/category/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/category/getCategoryWiseProduct');

router.post('/categories', isAdmin, createCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', isAdmin, updateCategory);
router.delete('/categories/:id', isAdmin, deleteCategory);
router.put('/categories/updatePositions', isAdmin, updateCategoryPositions);
router.put('/categories/:id/status', isAdmin, updateCategoryStatus);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);

// Cart controllers
const addToCartController = require('../controller/carts/addToCartController');
const countAddToCartProduct = require('../controller/carts/countAddToCartProduct');
const addToCartViewProduct = require('../controller/carts/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/carts/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/carts/deleteAddToCartProduct');

router.post("/addtocart", addToCartController);
router.get("/countAddToCartProduct", countAddToCartProduct);
router.get("/view-card-product", addToCartViewProduct);
router.post("/update-cart-product", updateAddToCartProduct);
router.post("/delete-cart-product", deleteAddToCartProduct);

// Warehouse controllers
const updateWarehouse = require('../controller/warehouse/updateWarehouse');
const uploadWarehouse = require('../controller/warehouse/uploadWarehouse');
const getWarehouse = require('../controller/warehouse/getWarehouse');
const deleteWarehouse = require('../controller/warehouse/deleteWarehouse');

router.post('/upload-warehouse', isAdmin, uploadWarehouse);
router.get('/get-warehouse', getWarehouse);
router.post('/update-warehouse', isAdmin, updateWarehouse);
router.delete('/delete-warehouse/:id', isAdmin, deleteWarehouse);

// Address controllers
const getAddressById = require('../helpers/getAddressById');
const UploadAddress = require('../controller/address/uploadAddress');
const getAddress = require('../controller/address/getAddress');
const deleteAddress = require('../controller/address/deleteAddress');
const updateAddress = require('../controller/address/updateAddress');

router.post('/upload-address-delivery', UploadAddress);
router.get('/get-address-delivery', getAddress);
router.post('/delete-address-delivery', deleteAddress);
router.post("/update-address-delivery", updateAddress);
router.post('/get-address-by-id', getAddressById);

// Import Order controllers
const uploadImportOrder = require('../controller/importOrder/uploadImportOrder');
const getImportOrder = require('../controller/importOrder/getImportOrder');
const deleteImportOrder = require('../controller/importOrder/deleteImportOrder');
const checkPasswordImportOrder = require('../controller/importOrder/checkPasswordImportOrder');
const updateImportOrder = require('../controller/importOrder/updateImportOrder');

router.post("/upload-importOrder", isAdmin, uploadImportOrder);
router.get('/get-importOrder', getImportOrder);
router.post('/delete-importOrder', isAdmin, deleteImportOrder);
router.post('/check-password-import-order', checkPasswordImportOrder);
router.post('/update-importOrder', isAdmin, updateImportOrder);

// Supplier controllers
const UploadSupplierController = require('../controller/supplier/uploadSupplier');
const getSupplierController = require('../controller/supplier/getSupplier');
const updateSupplier = require('../controller/supplier/updateSupplier');
const deleteSupplier = require('../controller/supplier/deleteSupplier');

router.post("/upload-supplier", isAdmin, UploadSupplierController);
router.get("/get-supplier", getSupplierController);
router.post("/update-supplier", isAdmin, updateSupplier);
router.post("/delete-supplier", isAdmin, deleteSupplier);

// Order controllers
const createOrder = require('../controller/order/createOrder');
const getAllOrders = require('../controller/order/getAllOrders');
const getOrderById = require('../controller/order/getOrderById');
const updateOrder = require('../controller/order/updateOrder');
const deleteOrder = require('../controller/order/deleteOrder');

router.post('/createorder', createOrder);
router.get('/allorder', isAdmin, getAllOrders);
router.get('/order/:id', getOrderById);
router.put('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);

// Voucher controllers
const createVoucher = require('../controller/voucher/createVoucher');
const getAllVouchers = require('../controller/voucher/getAllVouchers');
const getVoucherById = require('../controller/voucher/getVoucherById');
const updateVoucher = require('../controller/voucher/updateVoucher');
const deleteVoucher = require('../controller/voucher/deleteVoucher');

router.post('/create-voucher', isAdmin, createVoucher);
router.get('/all-vouchers', getAllVouchers);
router.get('/voucher/:id', getVoucherById);
router.put('/voucher/:id', isAdmin, updateVoucher);
router.delete('/voucher/:id', isAdmin, deleteVoucher);

// Flash Sale controllers
const createFlashSale = require('../controller/flashSale/createFlashSale');
const getAllFlashSales = require('../controller/flashSale/getAllFlashSales');
const getFlashSaleById = require('../controller/flashSale/getFlashSaleById');
const updateFlashSale = require('../controller/flashSale/updateFlashSale');
const deleteFlashSale = require('../controller/flashSale/deleteFlashSale');

router.post('/create-flash-sale', isAdmin, createFlashSale);
router.get('/all-flash-sales', getAllFlashSales);
router.get('/flash-sale/:id', getFlashSaleById);
router.put('/flash-sale/:id', isAdmin, updateFlashSale);
router.delete('/flash-sale/:id', isAdmin, deleteFlashSale);

module.exports = router;
