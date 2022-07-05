const express = require('express')

//instead of creating another const app = express() we create the routers
const route = express.Router()
const { Router } = require('express')

route.get('/', (req, res) => res.render('index'))
route.get('/blog', (req, res) => res.render('blog'))
route.get('/blog/ces', (req, res) => res.render('chemical_engineering_speicalisation'))
route.get('/blog/nuclear-waste', (req, res) => res.render('problems_with_nuclear _waste'))
route.get('/blog/climate-change', (req, res) => res.render('climate_change'))
route.get('/team', (req, res) => res.render('team'))
route.get('/contact', (req, res) => res.render('contact'))
route.get('8', (req, res) => res.redirect('/'))

module.exports = route