const menu = [
  {
    id: 1,
    title: "Logo Design",
    category: "logo",
    price: 3000,
    img: "./images/SamNuTomOl.png",
    desc: `Do you know getting a profession Logo for your business can increase
          your profit in a dramatic way?. At SamGraphics, we offer professional Logo
          designs that are catchy, simple, and helps grow your business.`,
  },
  {
    id: 2,
    title: "Logo mockups",
    category: "logo",
    price: 2000,
    img: "./images/mockup2.jpg",
    desc: `You can beautify your logo by making it look more realistic. Also you can convert your already made logo to 3d`,
  },
  {
    id: 3,
    title: "Logo design + mockup",
    category: "logo",
    price: 4000,
    img: "./images/item3.jpg",
    desc: `Get your self a nice Logo in both 2D and 3D formats at a discounted rate.`,
  },
  {
    id: 4,
    title: "Banner designs",
    category: "banner",
    price: "price varies",
    img: "./images/oou2.jpg",
    desc: `Do you want people in your environment to be aware of what your business is all about?. 
            Then contact us to get an amazing banners in different sizes today`,
  },
  {
    id: 5,
    title: "Poster designs",
    category: "posters",
    price: 2500,
    img: "./images/poster3.jpg",
    desc: `posters are good for your business. Why not contact us today for amazing poster designs for your contents`,
  },
  {
    id: 6,
    title: "Business Branding",
    category: "branding",
    price: "price varies",
    img: "./images/brand.jpg",
    desc: `Have you always wanted to be on top in your business?. Brand your business today with SamGraphics.
          Be rest assured to get amazing branding tactics and great designs that will
          move your business to the next level.`,
  },
  {
    id: 7,
    title: "Business cards design",
    category: "cards",
    price: 2000,
    img: "./images/card.jpg",
    desc: `Get your amazing business card designs for your staffs and yourself today.`,
  },
  {
    id: 8,
    title: "Flier designs",
    category: "flier",
    price: "2000-5000",
    img: "./images/flier.jpg",
    desc: `One of the best way to market your business after identifying your niche is to get an
          amazing flier for your business adverts. A flier can go a long a way to help grow your business
            beyond your wildest imagination.`,
  },
  {
    id: 9,
    title: "image manipulations/editing",
    category: "manipulations",
    price: "2000-5000",
    img: "./images/item.jpg",
    desc: `Are you in need of a good graphics designer, that can easily manipulate images?
            look no further. Just contact us right away for your editing and manipulations`,
  },
];


// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">#${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
