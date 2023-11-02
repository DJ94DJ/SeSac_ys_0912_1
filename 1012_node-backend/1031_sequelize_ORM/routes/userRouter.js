const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/Cuser_mysql")

userRouter.get("/", userController.home);


userRouter.get('/signup', userController.signup)
userRouter.post('/signup', userController.post_signup)

userRouter.get('/signin', userController.signin)
userRouter.post('/signin', userController.post_signin)


userRouter.post('/profile', userController.profile)
userRouter.patch('/profile/edit/:id', userController.profile_edit)
userRouter.delete('/profile/delete/:id', userController.profile_delete)



module.exports = userRouter;
