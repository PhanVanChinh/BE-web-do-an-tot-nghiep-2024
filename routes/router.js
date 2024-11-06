const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const authToken = require('../middleware/authToken');

const router = express.Router();


// router.use(authToken);

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


module.exports = router;
