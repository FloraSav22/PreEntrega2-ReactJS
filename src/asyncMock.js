<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>



const products = [
  {
    id: "1",
    name: "Lechuga",
    price: 800,
    category: "huerta",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxG17BQQJUANEoyGBAaEO_jnS3gW7jQXrqg&s",
    stock: 50,
    description: "Descripcion de Lechuga",
  },
  {
    id: "2",
    name: "Zanahoria",
    price: 800,
    category: "huerta",
    img: "https://gardenary-data.s3.amazonaws.com/section-image/dMLgnpv1va3XTZHXd1BLxGLM5vVmS4L5UemoWXpV.jpg",
    stock: 50,
    description: "Descripcion de Zanahoria",
  },
  {
    id: "3",
    name: "Tomate",
    price: 1100,
    category: "huerta",
    img: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
    stock: 50,
    description: "Descripcion de Tomate",
  },
  {
    id: "4",
    name: "Manzano",
    price: 9000,
    category: "arboles",
    img: "https://www.oneclickplants.co.uk/cdn/shop/collections/Shutterstock_1798373137_1600x.jpg?v=1701287885",
    stock: 2,
    description: "Descripcion de Manzano",
  },
  {
    id: "5",
    name: "Limonero",
    price: 7500,
    category: "arboles",
    img: "https://plantsexpress.com/cdn/shop/products/Eureka-lemon-tree-3.jpg?v=1684454565",
    stock: 6,
    description: "Descripcion de Limonero",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};