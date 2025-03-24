const products = {
    "1": {
        name: "辣椒炒肉",
        img: "static/picture/lajiaochaorou.jpg",
        num:"1",
        newprice: "76.00",
        oldprice: "98.00",
        description: "bang bang bang",},
    "2": {
        name: "凉拌猪耳",
        img: "static/picture/zhuer.jpg",
        num:"2",
        newprice: "86.00",
        oldprice: "30.00",
        description: "bang bang bang",},
    "3": {
        name: "松花皮蛋",
        img: "static/picture/pidan.jpg",
        num:"3",
        newprice: "98.00",
        oldprice: "122.00",
        description: "bang bang bang",},
    "4": {
        name: "片片鱼",
        img: "static/picture/pianpianyu.jpg",
        num:"4",
        newprice: "96.00",
        oldprice: "121.00",
        description: "bang bang bang",},
    "5": {
        name: "金钱蛋",
        img: "static/picture/jinqiandan.jpg",
        num:"5",
        newprice: "98.00",
        oldprice: "122.00",
        description: "bang bang bang",},
    "6": {
        name: "竹笋炒肉",
        img: "static/picture/zscr.webp",
        num:"6",
        newprice: "20",
        oldprice: "",
        description: "bang bang bang",},
    "7": {
        name: "湘西猪肝",
        img: "static/picture/xxzg.webp",
        num:"7",
        newprice: "122",
        oldprice: "",
        description: "bang bang bang",},
    "8": {
        name: "辣味炒泥蒿",
        img: "static/picture/lwcnh.webp",
        num:"8",
        newprice: "241.00",
        oldprice: "",
        description: "bang bang bang",},
    "9": {
        name: "辣子土豆鸡块",
        img: "static/picture/lztdjk.webp",
        num:"9",
        newprice: "241.00",
        oldprice: "",
        description: "bang bang bang",},
    "10": {
        name: "辣味金针菇",
        img: "static/picture/lwjzg.webp",
        num:"3",
        newprice: "745.00",
        oldprice: "",
        description: "bang bang bang",},
    "11": {
        name: "腊味合蒸",
        img: "static/picture/lwhz.webp",
        num:"3",
        newprice: "893.00",
        oldprice: "",
        description: "bang bang bang",},
    "12": {
        name: "湖南煎糍粑",
        img: "static/picture/hnjcb.webp",
        num:"12",
        newprice: "454.00",
        oldprice: "",
        description: "bang bang bang",},
    "13": {
        name: "辣酒花螺",
        img: "static/picture/ljhl.webp",
        num:"13",
        newprice: "873.00",
        oldprice: "",
        description: "bang bang bang",},
    "14": {
        name: "爆炒香辣牛蛙",
        img: "static/picture/bcxgnw.webp",
        num:"3",
        newprice: "412.00",
        oldprice: "",
        description: "bang bang bang",},
    "15": {
        name: "湖南豆腐乳",
        img: "static/picture/hndfr.webp",
        num:"15",
        newprice: "854.00",
        oldprice: "",
        description: "bang bang bang",},
    "16": {
        name: "剁椒鱼头",
        img: "static/picture/yutou.jpg",
        num:"16",
        newprice: "72.00",
        oldprice: "82.00",
        description: "bang bang bang",},
    "17": {
        name: "小炒牛肉",
        img: "static/picture/liuyan.jpg",
        num:"17",
        newprice: "98.00",
        oldprice: "122.00",
        description: "bang bang bang",},
    "18": {
        name: "小炒牛肉",
        img: "static/picture/logo.jpg",
        num:"18",
        newprice: "482.00",
        oldprice: "602.00",
        description: "bang bang bang",},
};

// 从 URL 获取产品 ID，例如 ?id=phone-x
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id") || "phone-x"; // 默认显示第一个产品
const product = products[productId];

// 更新页面内容
document.querySelector(".breadcrumb-main .page-title").textContent = product.name;
document.querySelector(".product-left .img-thumbnail").src = product.img;
document.querySelector(".product-left .img-thumbnail").alt = product.name;
document.querySelector(".product-left .img-thumbnail").title = product.name;
document.querySelector(".product-right h1 ").textContent = product.name;
document.querySelector("#tab-description").textContent = product.name;
document.querySelector(".breadcrumb>li:last-child a ").textContent = product.name;
document.querySelector(".product-right .disc1 ").textContent = product.num;
document.querySelector(".pro_price  ").textContent = product.newprice;
document.querySelector(".pro_oldprice  ").textContent = product.oldprice;