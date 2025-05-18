const express = require('express');
const authRoute = require('express').Router();
const AuthController = require('../controllers/AuthController')

// Endpoint masing masing metode autentikasi
authRoute.get('/register', AuthController.register)
authRoute.get('/login', AuthController.login)
authRoute.get('/google', AuthController.google)

module.exports = authRoute;