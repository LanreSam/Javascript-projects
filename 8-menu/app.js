const menu = [
  {
    id: 1,
    title: "Logo design",
    category: "logo",
    price: 3000,
    img: "./images/3.png",
    desc: `Does your business have a logo? Do you know a logo can go a long way to 
          boost your business identity? Get you simple and attractive logo at Samgraphics today
          at affordable price.`,
  },
  {
    id: 2,
    title: "Mockup",
    category: "logo",
    price: 2000,
    img: "./images/1.jpg",
    desc: `You can make your logo look more realistic today, by mocking it up with different realistics
          logo concept and modern designs.`,
  },
  {
    id: 3,
    title: "Logo design + mockup",
    category: "logo",
    price: 4000,
    img: "./images/5.jpg",
    desc: `Get your business a nice looking logo and an amazing mockup today at completely affordable price.`,
  },
  {
    id: 4,
    title: "Branding",
    category: "branding",
    price: "Price varies",
    img: "./images/2.jpg",
    desc: `Branding can go a long way to promote your brand identity. Contact us today and let's brand your business for you.`,
  },
  {
    id: 5,
    title: "Flier",
    category: "flier",
    price: "2000 - 5000",
    img: "./images/7.jpg",
    desc: `Do you care for fantastic flier designs? Then you're at the right spot. Contact us for amazing flier designs.`,
  },
  {
    id: 6,
    title: "Poster",
    category: "poster",
    price: "2000",
    img: "./images/8.jpg",
    desc: `Posters are really good in promoting your business contents. Be rest assured to get your posters in different sizes and formats with us.`,
  },
  {
    id: 7,
    title: "Business card",
    category: "card",
    price: "1500",
    img: "./images/9.jpg",
    desc: `Amazing business card designs for your business awaits you today at SamGraphics`,
  },
  {
    id: 8,
    title: "Image manipulaion/Editing",
    category: "editing",
    price: "2000 - 5000",
    img: "./images/4.jpg",
    desc: `Edit/manipulate images to your taste at very cheap price. Also do your general graphics designs with us.`,
  },
  {
    id: 9,
    title: "Banner",
    category: "banner",
    price: "Price varies",
    img: "./images/6.jpg",
    desc: `Can people easily recognize what your business is all about? Why not let us help you tell people about your business with the use of a banner. Contact us today`,
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
      // console.log(e.currentTarget.dataset);
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
