const express = require('express')

const router = express.Router()


const changePasswordController = require('../controller/user/changePassword')
const UploadAddress = require('../controller/address/uploadAddress')
const getAddress = require('../controller/address/getAddress')
const getAddressById = require('../helpers/getAddressById')

//sigup
const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.post("/change-password", authToken, changePasswordController)

// Address
const deleteAddress = require('../controller/address/deleteAddress')
const updateAddress = require('../controller/address/updateAddress')

router.post('/upload-address-delivery', authToken, UploadAddress)
router.get('/get-address-delivery', authToken, getAddress)
router.post('/delete-address-delivery', authToken, deleteAddress)
router.post("/update-address-delivery", authToken, updateAddress)
router.post('/get-product-by-id/', authToken, getProductById);
router.post('/get-address-by-id', authToken, getAddressById)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product
const uploadProduct = require('../controller/product/uploadProduct')
const getProduct = require('../controller/product/getProduct')
const updateProduct = require('../controller/product/updateProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProduct = require('../controller/product/filterProduct')
const deleteProduct = require('../controller/product/deleteProduct')
const getProductById = require('../helpers/getProductById')
const getProductDetails = require('../controller/product/getProductDetails')

router.post("/upload-product",authToken,uploadProduct)
router.get("/get-product",getProduct)
router.post("/update-product",authToken,updateProduct)
router.get("/search",searchProduct)
router.post("/filter-product",filterProduct)
router.post('/delete-product', authToken, deleteProduct)
router.post("/product-details",getProductDetails)

//category


const getCategoryProduct = require('../controller/category/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/category/getCategoryWiseProduct')

router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)



//user add to cart

router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)




// warehouse
const updateWarehouse = require('../controller/warehouse/UpdateWarehouse')
const uploadWarehouse = require('../controller/warehouse/uploadWarehouse')
const getWarehouse = require('../controller/warehouse/getWarehouse')

router.post('/upload-warehouse', authToken, uploadWarehouse)
router.get('/get-warehouse', authToken, getWarehouse)
router.post('/update-warehouse', authToken, updateWarehouse)





module.exports = router;