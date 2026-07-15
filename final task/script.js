let allProducts = [];
let displayedProducts = [];
let currentCategory = "all";
let currentSort = "none";
let cart = [];

// Clean Categories structured around the updated inventory
const categories = [
  { label: "All Products", value: "all" },
  { label: "Gadgets", value: "gadgets" },
  { label: "Apparel", value: "apparel" },
  { label: "Footwear", value: "footwear" },
  { label: "Accessories", value: "accessories" },
];

const productGrid = document.getElementById("productGrid");
const statusMsg = document.getElementById("statusMsg");
const searchInput = document.getElementById("searchInput");
const categoryBar = document.getElementById("categoryBar");
const sortLowHigh = document.getElementById("sortLowHigh");
const sortHighLow = document.getElementById("sortHighLow");
const sortReset = document.getElementById("sortReset");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartModalClose = document.getElementById("cartModalClose");
const cartItemsEl = document.getElementById("cartItems");
const grandTotalEl = document.getElementById("grandTotal");

init();

function init() {
  renderCategoryButtons();
  attachStaticListeners();
  loadProducts();
}

// Brand New Custom Local Inventory Dataset
function loadProducts() {
  allProducts = [
    {
      id: 1,
      title: "SonicWave Wireless ANC Headphones",
      price: 189.99,
      category: "gadgets",
      description: "Experience absolute pure sound immersion. Features industry-leading Active Noise Cancelling technology, 40-hour ultra-extended playback life, and premium memory foam cups.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      rating: { rate: 4.8, count: 142 }
    },
    {
      id: 2,
      title: "ChronoClassic Minimalist Quartz Watch",
      price: 125.00,
      category: "accessories",
      description: "Timeless sophistication built for the modern professional. Built with a surgical stainless steel case, sapphire scratch-resistant crystal glass, and a genuine Italian tanned leather strap.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      rating: { rate: 4.5, count: 89 }
    },
    {
      id: 3,
      title: "AeroGlide Breathable Mesh Running Shoes",
      price: 95.50,
      category: "footwear",
      description: "Engineered specifically to smash your personal records. Showcases highly responsive foam cushioning matrix, breathable engineered mesh fabric, and targeted high-traction rubber outsoles.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      rating: { rate: 4.7, count: 210 }
    },
    {
      id: 4,
      title: "QuantumForge Mechanical Gaming Keyboard",
      price: 149.99,
      category: "gadgets",
      description: "Tactile dominance at your absolute disposal. Equipped with highly durable linear optical switches, dynamic per-key RGB backlighting systems, and a fully solid aircraft-grade aluminum frame setup.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
      rating: { rate: 4.9, count: 76 }
    },
    {
      id: 5,
      title: "Nomad Shield Anti-Theft Commuter Backpack",
      price: 79.00,
      category: "accessories",
      description: "Your perfect smart travel secure container companion. Flaunts cut-proof structural fabrics, hidden secure zipper pockets, a built-in USB external charging port, and a dedicated 16-inch laptop pocket.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      rating: { rate: 4.4, count: 115 }
    },
    {
      id: 6,
      title: "ThermoWeave Weatherproof Tech Parka",
      price: 210.00,
      category: "apparel",
      description: "Uncompromised insulation built against the harshest winter elements. Provides waterproof exterior shields, recycled thermal fill layers, and intelligent multi-functional utility storage arrays.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80",
      rating: { rate: 4.6, count: 64 }
    },
    {
      id: 7,
      title: "Stratus Luxe Pima Cotton Heavyweight Tee",
      price: 38.00,
      category: "apparel",
      description: "The baseline ultimate upgrades to your casual wardrobe. Mastercrafted strictly using 100% premium grade long-staple Pima cotton fabric offering unmatched softness and shape retention.",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80",
      rating: { rate: 4.3, count: 320 }
    },
    {
      id: 8,
      title: "TerraX All-Terrain Waterproof Leather Boots",
      price: 175.00,
      category: "footwear",
      description: "Conquer remote wilderness trails or unpredictable city streets safely. Features full-grain robust oiled leather exterior, seam-sealed waterproof lining membranes, and intense deep-lug slip protection.",
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
      rating: { rate: 4.8, count: 98 }
    }
  ];
  
  applyFilters();
}

function renderCategoryButtons() {
  categoryBar.innerHTML = categories
    .map(
      (cat) => `
      <button class="category-btn${cat.value === currentCategory ? " active" : ""}" data-category="${cat.value}">
        ${cat.label}
      </button>`
    )
    .join("");
}

function attachStaticListeners() {
  searchInput.addEventListener("input", () => applyFilters());

  categoryBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;
    currentCategory = btn.dataset.category;
    document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });

  sortLowHigh.addEventListener("click", () => {
    currentSort = "low-high";
    updateSortButtonStyles();
    applyFilters();
  });
  sortHighLow.addEventListener("click", () => {
    currentSort = "high-low";
    updateSortButtonStyles();
    applyFilters();
  });
  sortReset.addEventListener("click", () => {
    currentSort = "none";
    updateSortButtonStyles();
    applyFilters();
  });

  productGrid.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-cart-btn");
    if (addBtn) {
      addToCart(Number(addBtn.dataset.id));
      return;
    }
    const openTarget = e.target.closest("[data-open-id]");
    if (openTarget) openProductModal(Number(openTarget.dataset.openId));
  });

  modalClose.addEventListener("click", () => closeModal(productModal));
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeModal(productModal);
  });

  cartBtn.addEventListener("click", () => openCartModal());
  cartModalClose.addEventListener("click", () => closeModal(cartModal));
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) closeModal(cartModal);
  });

  cartItemsEl.addEventListener("click", (e) => {
    const increaseBtn = e.target.closest(".qty-increase");
    const decreaseBtn = e.target.closest(".qty-decrease");
    const removeBtn = e.target.closest(".remove-btn");
    if (increaseBtn) changeQuantity(Number(increaseBtn.dataset.id), 1);
    if (decreaseBtn) changeQuantity(Number(decreaseBtn.dataset.id), -1);
    if (removeBtn) removeFromCart(Number(removeBtn.dataset.id));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(productModal);
      closeModal(cartModal);
    }
  });
}

function updateSortButtonStyles() {
  sortLowHigh.classList.toggle("active", currentSort === "low-high");
  sortHighLow.classList.toggle("active", currentSort === "high-low");
  sortReset.classList.toggle("active", currentSort === "none");
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  let result = allProducts.filter((p) => currentCategory === "all" ? true : p.category === currentCategory);
  result = result.filter((p) => p.title.toLowerCase().includes(query));

  if (currentSort === "low-high") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-low") {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  displayedProducts = result;
  renderProducts();
}

function renderProducts() {
  if (displayedProducts.length === 0) {
    productGrid.innerHTML = `<p class="status-msg">No Products Found</p>`;
    return;
  }

  productGrid.innerHTML = displayedProducts
    .map(
      (p) => `
      <div class="product-card">
        <div class="product-img-wrap" data-open-id="${p.id}">
          <img src="${p.image}" alt="${escapeHtml(p.title)}">
        </div>
        <div class="product-category">${p.category}</div>
        <h3 class="product-title" data-open-id="${p.id}">${escapeHtml(p.title)}</h3>
        <div class="product-rating">⭐ ${p.rating?.rate ?? "N/A"} (${p.rating?.count ?? 0})</div>
        <div class="product-footer">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="add-cart-btn" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>`
    )
    .join("");
}

function openProductModal(id) {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;

  modalContent.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${product.image}" alt="${escapeHtml(product.title)}">
    </div>
    <span class="modal-category-tag">${product.category}</span>
    <h2 class="modal-title">${escapeHtml(product.title)}</h2>
    <p class="modal-desc">${escapeHtml(product.description)}</p>
    <div class="modal-meta">
      <span class="modal-price">$${product.price.toFixed(2)}</span>
      <span>⭐ ${product.rating?.rate ?? "N/A"} (${product.rating?.count ?? 0} reviews)</span>
    </div>
    <button class="add-cart-btn" style="align-self:flex-start; padding:10px 18px;" id="modalAddToCart">
      Add to Cart
    </button>
  `;

  document.getElementById("modalAddToCart").addEventListener("click", () => addToCart(product.id));
  openModal(productModal);
}

function openModal(modalEl) { modalEl.classList.add("open"); }
function closeModal(modalEl) { modalEl.classList.remove("open"); }

function addToCart(id) {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;

  const existingIndex = cart.findIndex((item) => item.id === id);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 });
  }
  updateCartUI();
}

function changeQuantity(id, delta) {
  const index = cart.findIndex((item) => item.id === id);
  if (index === -1) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
}

function getCartCount() { return cart.reduce((sum, item) => sum + item.quantity, 0); }
function getGrandTotal() { return cart.reduce((sum, item) => sum + item.price * item.quantity, 0); }

function updateCartUI() {
  cartCount.textContent = getCartCount();
  renderCartItems();
}

function openCartModal() {
  renderCartItems();
  openModal(cartModal);
}

function renderCartItems() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`;
    grandTotalEl.textContent = "$0.00";
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${escapeHtml(item.title)}">
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(item.title)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn qty-decrease" data-id="${item.id}">−</button>
            Qty: ${item.quantity}
            <button class="qty-btn qty-increase" data-id="${item.id}">+</button>
          </div>
        </div>
        <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </div>`
    )
    .join("");

  grandTotalEl.textContent = `$${getGrandTotal().toFixed(2)}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}