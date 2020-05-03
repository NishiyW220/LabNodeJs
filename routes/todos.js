const {Router} = require('express')
const router= Router()


router.get('/', (req, res)=>{
    res.render('index',{title:'Главная страница'})
})

router.get('/Orders', (req, res)=>{
    res.render('Orders',{title:'Создание заказа'})
})

router.get('/City', (req, res)=>{
    res.render('City',{title:'Города'})
})

router.get('/Driver', (req, res)=>{
    res.render('Driver',{title:'Водители'})
})

router.get('/Type', (req, res)=>{
    res.render('Type',{title:'Посылки'})
})



module.exports= router