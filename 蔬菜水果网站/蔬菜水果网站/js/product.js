const products = {
    "1": {
        name:"阳光玫瑰",
        img:"img/ygmg.jpg",
        category:"水果",
        price:"$1.99",
        description:"阳光玫瑰，营养价值高，营养成分丰富，具有滋补功能，可补充维生素C，抗氧化，防癌，抑制衰老。"
    },
    "2": {
        name:"宣化牛奶葡萄",
        img:"img/xhnnpt.jpg",
        category:"水果",
        price:"$2.99",
        description:"宣化牛奶葡萄，产于中国河北省张家口市宣化区，粒大、皮薄、肉厚、含糖量高，好的宣化牛奶葡萄据说用刀切开之后不会流汁，宣化牛奶葡萄一般在公历十月一日前后上市。\n" +
            "\n" +
            "宣化牛奶葡萄已经有1300多年历史，唐朝开始引进栽培，到辽金时期已经开始形成规模，属欧亚种，东方品种群。由于宣化植被偏少，昼夜温差大，四季分明，降水量偏低，日照充足，特别适合葡萄的生长和糖分的积累，所以好的宣化牛奶葡萄特别的甜。\n" +
            "\n" +
            "宣化牛奶葡萄这一商品名称已获得中国国家地理标志保护。"
    },
    "3": {
        name:"石榴",
        img:"img/sl.jpg",
        category:"水果",
        price:"$3.99",
        description:"石榴外种皮肉质，呈鲜红、淡红或白色，多汁，甜而带酸，即为可食用的部分；内种皮为角质，也有退化变软的，即软籽石榴。原产亚洲中部。中国南北各省区均有栽培。安石榴全株均可入药，性温；果可食用，味酸、涩；果皮及根、花药用，有收敛止泻、止血、杀虫等用途"
    },
    "4": {
        name:"柿子",
        img:"img/shizi.jpg",
        category:"水果",
        price:"$1.96",
        description:"柿、柿子一般指的是柿树属的果实，最常见的物种是原产中国的柿树[1]，但其他地区也有柿属植物。\n" +
            "\n" +
            "柿子的品种有1000多种，以脱涩与否分为甜柿和涩柿两大类为主[2]，前者成熟时已经脱涩可以直接食用，后者需要人工脱涩，中国、日本、韩国和巴西是世界的主要产地。"
    },
    "5": {
        name:"香蕉",
        img:"img/xiangjiao.jpg",
        category:"水果",
        price:"$1.99",
        description:"香蕉（学名：Musa × paradisiaca），又名甘蕉、芎蕉、芽蕉，弓蕉（闽南语：king-tsio/kin-tsio；" +
            "客家语：Khiûng-tsiâu），为芭蕉科芭蕉属小果野蕉（M. acuminata）及野蕉（M. balbisiana）的自然或人工杂交的栽培种，" +
            "为多年生草本植物。果实长有棱；果皮黄色或绿色，果肉白色，味道香甜。主要生长于热带、亚热带地区。原产于亚洲东南部热带、亚热带地区。"
    },
    "6": {
        name:"橘子",
        img:"img/jvzi.jpg",
        category:"水果",
        price:"$4.99",
        description:"柑和橘都属于芸香科柑橘属的宽皮柑橘类，果实外皮肥厚且充满柠烯香味，内藏瓤瓣，由汁泡和种子构成。李时珍在《本草纲目·果部》中记载" +
            "：“橘实小，其瓣味微醋（即酸），其皮薄而红，味辛而苦；柑大于橘，其瓣味酢，其皮稍厚而黄，叶辛而甘。”一般说来，柑的果形正圆，黄赤色，皮紧" +
            "纹细不易剥，多汁甘香；橘的果形扁圆，红或黄色，皮薄而光滑易剥，味微甘酸。柑和橘虽有区别，但在日常语言中常混用，如广柑也说广橘，" +
            "蜜橘也说蜜柑。"
    },
    "7": {
        name:"茄子",
        img:"img/qz.jpg",
        category:"蔬菜",
        price:"$1.99",
        description:"茄子，原产于中国，是一种多年生草本植物，茄子果实呈圆形，果肉厚实，味甘、苦、微酸。茄子的营养价值较高，含有丰富的蛋白质、脂肪、碳水化合物、维生素C、钙、铁、锌、磷、钾等营养成分，具有滋补功能，可补充维生素C，抗氧化，防癌，抑制衰老。"
    },
    "8": {
        name:"胡萝卜",
        img:"img/hlb.jpg",
        category:"蔬菜",
        price:"$3.99",
        description:"胡萝卜营养丰富。人们一般食用其肉质根，有时也食用胡萝卜叶。胡萝卜种子内含有挥发性油。胡萝卜根可以直接生食，也可加工成块、丁、丝同其他食材一同烹饪。胡萝卜汁也是一种常见的胡萝卜加工制成品，胡萝卜汁或胡萝卜泥也可和面粉或米粉等淀粉类物质混合做成糕饼类食物。还可腌制、酱渍、制干或作饲料。其风味主要来自于萜烯类物质，该物质味道较为独特，并非所有人都能接受。"
    },
    "9": {
        name:"香芹",
        img:"img/xiangqin.jpg",
        category:"蔬菜",
        price:"$1.22",
        description:"香芹（学名：Apium graveolens），又称芹菜、药芹、富菜，是伞形科芹属的植物，原生于马卡罗尼西亚及爱尔兰，之后扩展至欧洲大陆，传入非洲及亚洲，并引入到美洲及大洋洲。芹菜可作为蔬菜，主要食用部分为叶柄，叶虽然略带苦味，但也可以食用。在中国菜中是一种常见的蔬菜，在意大利菜中也常用作爆香料。"
    },
    "10": {
        name:"西兰花",
        img:"img/huacai.jpg",
        category:"蔬菜",
        price:"$0.99",
        description:"西兰花富含丰富维生素C和膳食纤维，还含有具强效抗癌性能的多种营养成分，如二吲哚甲烷和少量硒。每100克西蓝花就含有89.2毫克的维生素C，含量是大白菜的4倍[5]。当中发现一种叫做3,3'-二吲哚甲烷的物质，对人的先天免疫系统好比一个有效的调制器，具有抗病毒，抗细菌和抗肿瘤活性作用。"
    },
    "11": {
        name:"土豆",
        img:"img/tudou.jpg",
        category:"蔬菜",
        price:"$1.32",
        description:"马铃薯是目前世界上除了谷物以外，用作人类主食的最重要的粮食作物，主要食用其地下块茎。食用后有很好的饱腹感,马铃薯是天然无麸质饮食。建议患有乳糜泻疾病或非乳糜性面筋过敏的人应该将马铃薯作为餐桌上的必备菜之一。"
    },
    "12": {
        name:"西红柿",
        img:"img/xihongshi.jpg",
        category:"蔬菜",
        price:"$1.99",
        description:"番茄（学名：Solanum lycopersicum）是茄科茄属的一种植物。番茄原产于中美洲和南美洲，现作为食用蔬果已被全球广泛种植，同时具医疗效用，是茄科开花植物的模型生物之一。"
    },
    "13": {
        name:"魔鬼椒",
        img:"img/mgj.jpg",
        category:"蔬菜",
        price:"$7.99",
        description:"断魂椒是盛产于印度东北部阿萨姆邦的一种辣椒，在2007年的《吉尼斯世界纪录大全》中被确认为世界最辣的辣椒，目前纪录为X辣椒。"
    },
    "14": {
        name:"蛇果",
        img:"img/sheguo.jpg",
        category:"水果",
        price:"$1.99",
        description:"蛇果（学名：Citrus sinensis）是一种果实，产于南美洲、北美洲、欧洲、亚洲和非洲。其果肉含有丰富的营养成分，有益于人体的健康。"
    },
    "15": {
        name:"猕猴桃",
        img:"img/mht.jpg",
        category:"水果",
        price:"$2.99",
        description:"猕猴桃（学名：Citrus maxima）是一种果实，产于南美洲、北美洲、欧洲、亚洲和非洲。其果肉含有丰富的营养成分，有益于人体的健康。"
    },
    "16": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "17": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "18": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "19": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "20": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "21": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "22": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "23": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    },
    "24": {
        name:"",
        img:"",
        category:"",
        price:"",
        description:""
    }
};

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id") || "1"; // 默认显示第一个产品
const product = products[productId];

// 更新页面内容

document.querySelector(".img-fluid.rounded").src = product.img;
document.querySelector(".img-fluid.rounded").alt = product.name;
document.querySelector(".fw-bold.mb-3").textContent = product.name;
document.querySelector("p.mb-3").textContent = product.category;
document.querySelector("h5.fw-bold.mb-3").textContent = "价格：" + product.price+"/kg";
document.querySelector(".tab-pane.active").textContent = product.description;