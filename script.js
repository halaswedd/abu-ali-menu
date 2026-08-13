// =========================================
// MENU DATA
// =========================================

const menuItems = [

    // =====================================
    // SANDWICHES
    // =====================================

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "طاووق",
        price: "350,000 LBP",
        image: "assets/tawook.jpg",
        description: "ثوم • كبيس • بطاطا"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "لحمة غنم",
        price: "500,000 LBP",
        image: "assets/lahme-ghanam.jpg",
        description: "حمص • بقدونس • بصل • بندورة • ملح • سماق"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "لحمة بقر",
        price: "350,000 LBP",
        image: "assets/lahme-ba2ar.jpg",
        description: "حمص • بقدونس • بصل • بندورة • ملح • سماق"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "مقانق",
        price: "350,000 LBP",
        image: "assets/makanek.jpg",
        description: "ثوم • خس • بندورة • كبيس • ملح • حامض أو دبس رمان"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "كفتة",
        price: "350,000 LBP",
        image: "assets/kafta.jpg",
        description: "حمص • بقدونس • بصل • بندورة • ملح • سماق"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "سجق",
        price: "350,000 LBP",
        image: "assets/saj2.jpg",
        description: "ثوم • خس • بندورة • كبيس • ملح • حامض أو دبس رمان"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "سودة بقر",
        price: "350,000 LBP",
        image: "assets/soude.jpg",
        description: "ثوم • بقدونس • بصل • بندورة • ملح • سماق"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "كرسبي",
        price: "400,000 LBP",
        image: "assets/crispy.jpg",
        description: "ثوم • بطاطا • كبيس • سلطة • كاتشب"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "اسكالوب",
        price: "400,000 LBP",
        image: "assets/escalope.jpg",
        description: "ثوم • بطاطا • كبيس • سلطة • كاتشب"
    },

    {
        category: "sandwiches",
        categoryName: "سندويشات",
        name: "بطاطا",
        price: "200,000 LBP",
        image: "assets/batata.jpg",
        description: "ثوم • كبيس • سلطة • كاتشب"
    },


    // =====================================
    // DRINKS
    // =====================================

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "Pepsi",
        price: "100,000 LBP",
        image: "assets/pepsi.jpg",
        size: "تنك"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "7UP",
        price: "100,000 LBP",
        image: "assets/7up.jpg",
        size: "تنك"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "Miranda",
        price: "100,000 LBP",
        image: "assets/miranda.jpg",
        size: "تنك"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "Pepsi",
        price: "100,000 LBP",
        image: "assets/pepsi-plastic.jpg",
        size: "بلاستيك"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "7UP",
        price: "100,000 LBP",
        image: "assets/7up-plastic.jpg",
        size: "بلاستيك"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "Miranda",
        price: "100,000 LBP",
        image: "assets/miranda-plastic.jpg",
        size: "بلاستيك"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "Laban",
        price: "50,000 LBP",
        image: "assets/laban.jpg"
    },

    {
        category: "drinks",
        categoryName: "مشروبات",
        name: "Water",
        price: "30,000 LBP",
        image: "assets/water.jpg",
        size: "صغير"
    },


    // =====================================
    // GRILLS
    // =====================================

    {
        category: "grills",
        categoryName: "مشاوي",
        name: "كيلو مشاوي مشكل",
        price: "3,600,000 LBP",
        image: "assets/meshawi-kilo.jpg",

        description: [
            "٤ سياخ طاووق",
            "٤ سياخ لحمة",
            "٦ سياخ كفتة",
            "١ سيخ بصل مشوي",
            "١ سيخ بندورة مشوية",
            "١ خبزة حرة",
            "صحن بطاطا",
            "١ صحن حمص بطحينة",
            "١ علبة ثوم",
            "١ صحن كبيس",
            "١ علبة صوص حر",
            "١ علبة شطة حمرا"
        ]
    },

    {
        category: "grills",
        categoryName: "مشاوي",
        name: "نص كيلو مشاوي مشكل",
        price: "1,800,000 LBP",
        image: "assets/meshawi-half.jpg",

        description: [
            "٢ سياخ طاووق",
            "٢ سياخ لحمة",
            "٤ سياخ كفتة",
            "١ سيخ بصل مشوي",
            "١ سيخ بندورة مشوية",
            "١ خبزة حرة",
            "صحن بطاطا",
            "١ صحن حمص بطحينة",
            "١ علبة ثوم",
            "١ صحن كبيس",
            "١ علبة صوص حر",
            "١ علبة شطة حمرا"
        ]
    },


    // =====================================
    // CHICKEN
    // =====================================

    {
        category: "chicken",
        categoryName: "فروج",
        name: "نص فروج مشوي عالفحم",
        price: "600,000 LBP",
        image: "assets/farouj-half.jpg",

        description: [
            "١ علبة ثوم وسط",
            "١ صحن كبيس",
            "١ علبة صوص حر"
        ]
    },

    {
        category: "chicken",
        categoryName: "فروج",
        name: "فروج مشوي عالفحم",
        price: "1,200,000 LBP",
        image: "assets/farouj-full.jpg",

        description: [
            "١ علبة ثوم كبيرة",
            "١ صحن كبيس",
            "١ علبة صوص حر",
            "١ علبة شطة حمرا"
        ]
    },


    // =====================================
    // MEALS
    // =====================================

    {
        category: "meals",
        categoryName: "وجبات",
        name: "وجبة مسحب",
        price: "1,000,000 LBP",
        image: "assets/msahab-meal.png",

        description: [
            "٤ قطع مسحب",
            "بطاطا",
            "علبة ثوم",
            "علبة سلطة",
            "علبة كبيس"
        ]
    },

    {
        category: "meals",
        categoryName: "وجبات",
        name: "وجبة جوانح",
        price: "750,000 LBP",
        image: "assets/wings-meal.png",

        description: [
            "٨ جوانح دوبل كبار",
            "علبة ثوم",
            "علبة سلطة",
            "علبة كبيس"
        ]
    },

    {
    category: "meals",
    categoryName: "وجبات",

    name: "وجبة زينغر",

    price: "750,000 LBP",

    image: "assets/zinger-meal.jpg",

    description: [
        "قطعتين زينغر",
        "بطاطا",
        "ثوم",
        "سلطة مايونيز",
        "كبيس"
    ]
    },

    // =====================================
    // EXTRAS
    // NO IMAGES
    // =====================================

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة بطاطا",
        price: "200,000 LBP",
        size: "صغير"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة بطاطا",
        price: "450,000 LBP",
        size: "كبير"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة ثوم",
        price: "100,000 LBP"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة حمص",
        price: "100,000 LBP"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة صوص حر",
        price: "150,000 LBP"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة سلطة مايونيز",
        price: "200,000 LBP"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة شطة حرة",
        price: "100,000 LBP"
    },

    {
        category: "extras",
        categoryName: "إضافات",
        name: "علبة كاتشب",
        price: "50,000 LBP"
    }

];


// =========================================
// CATEGORY ORDER
// =========================================

const categoryOrder = [

    "sandwiches",

    "drinks",

    "grills",

    "chicken",

    "meals",

    "extras"

];


// =========================================
// CATEGORY TITLES
// =========================================

const categoryTitles = {

    sandwiches: "سندويشات",

    drinks: "مشروبات",

    grills: "مشاوي",

    chicken: "فروج",

    meals: "وجبات",

    extras: "إضافات"

};


// =========================================
// ELEMENTS
// =========================================

const menuList =
    document.getElementById("menuList");

const categoryButtons =
    document.querySelectorAll(".category-btn");


// =========================================
// CREATE NORMAL ITEM
// =========================================

function createNormalItem(item) {

    const article =
        document.createElement("article");

    article.className =
        item.category === "extras"
            ? "menu-item extra-item"
            : "menu-item";


    // =====================================
    // EXTRAS - NO IMAGE
    // =====================================

    if (item.category === "extras") {

        const sizeHTML = item.size
            ? `
                <span class="item-size">
                    ${item.size}
                </span>
              `
            : "";


        article.innerHTML = `

            <div class="extra-info">

                <h2>
                    ${item.name}
                </h2>

                ${sizeHTML}

            </div>


            <div class="item-price">

                <span class="price">
                    ${item.price}
                </span>

            </div>

        `;

        return article;
    }


    // =====================================
    // NORMAL ITEM
    // =====================================

    const sizeHTML = item.size
        ? `
            <span class="item-size">
                ${item.size}
            </span>
          `
        : "";


    const descriptionHTML = item.description
        ? `
            <p class="item-description">
                ${item.description}
            </p>
          `
        : "";


    article.innerHTML = `

        <div class="item-image">

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

        </div>


        <div class="item-info">

            <h2>
                ${item.name}
            </h2>

            ${sizeHTML}

            ${descriptionHTML}

        </div>


        <div class="item-price">

            <span class="price">
                ${item.price}
            </span>

        </div>

    `;


    return article;
}


// =========================================
// CREATE LARGE ITEM
// GRILLS + CHICKEN + MEALS
// =========================================

function createLargeItem(item) {

    const article =
        document.createElement("article");

    article.className =
        "menu-item large-item";


    const listItems =
        Array.isArray(item.description)

            ? item.description
                .map(
                    ingredient =>
                        `<li>${ingredient}</li>`
                )
                .join("")

            : `
                <li>
                    ${item.description || ""}
                </li>
            `;


    article.innerHTML = `

        <div class="item-image">

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

        </div>


        <div class="item-info">

            <h2>
                ${item.name}
            </h2>


            <div class="large-description">

                <ul>
                    ${listItems}
                </ul>

            </div>

        </div>


        <div class="item-price">

            <span class="price">
                ${item.price}
            </span>

        </div>

    `;


    return article;
}


// =========================================
// CREATE ITEM
// =========================================

function createMenuItem(item) {

    if (
        item.category === "grills" ||
        item.category === "chicken" ||
        item.category === "meals"
    ) {

        return createLargeItem(item);

    }


    return createNormalItem(item);
}


// =========================================
// CREATE CATEGORY TITLE
// =========================================

function createCategoryTitle(category) {

    const title =
        document.createElement("div");

    title.className =
        "category-title";


    title.innerHTML = `

        <span class="category-title-line"></span>

        <h2>
            ${categoryTitles[category]}
        </h2>

        <span class="category-title-line"></span>

    `;


    return title;
}


// =========================================
// RENDER MENU
// =========================================

function renderMenu(selectedCategory = "all") {

    menuList.innerHTML = "";


    // =====================================
    // ALL CATEGORIES
    // =====================================

    if (selectedCategory === "all") {

        categoryOrder.forEach(category => {

            const items =
                menuItems.filter(
                    item =>
                        item.category === category
                );


            if (items.length === 0) {
                return;
            }


            menuList.appendChild(
                createCategoryTitle(category)
            );


            items.forEach(item => {

                menuList.appendChild(
                    createMenuItem(item)
                );

            });

        });

        return;
    }


    // =====================================
    // ONE CATEGORY
    // =====================================

    const filteredItems =
        menuItems.filter(
            item =>
                item.category === selectedCategory
        );


    if (filteredItems.length === 0) {

        menuList.innerHTML = `

            <div class="no-items">

                لا توجد أصناف حالياً.

            </div>

        `;

        return;
    }


    filteredItems.forEach(item => {

        menuList.appendChild(
            createMenuItem(item)
        );

    });

}


// =========================================
// CATEGORY FILTER
// =========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.category;


        // Remove active from all

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Activate clicked button

        button.classList.add("active");


        // Render selected category

        renderMenu(selectedCategory);


        // =================================
        // Scroll back to menu if needed
        // =================================

        const menu =
            document.getElementById("menu");


        if (!menu) {
            return;
        }


        const menuTop =
            menu.getBoundingClientRect().top;


        if (menuTop < 0) {

            window.scrollTo({

                top:
                    window.scrollY +
                    menuTop -
                    10,

                behavior:
                    "smooth"

            });

        }

    });

});


// =========================================
// INITIAL MENU
// =========================================

renderMenu("all");