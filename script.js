/* Guarda este contenido como script.js. Funciona con las versiones de carta.html y pedidos.html entregadas anteriormente. */
(() => {
  'use strict';

  const CART_KEY = 'casita-cart';
  const ORDER_API_URL = '/api/orders';
  const products = [
    { id: 'cevichepollo', name: 'Ceviche de pollo', description: 'Exquisito ceviche a base de pollo.', price: 9, category: 'criollo', tag: 'CRIOLLO', icon: '??', image: './images/cevichepollo.png' },
    { id: 'adobo', name: 'Adobo de chancho', description: 'Preparado al estilo clásico, con guarnición peruana.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/adobo.png' },
    { id: 'tallarinpollo', name: 'Tallarín con pollo', description: 'Fideos frescos con pollo.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/tallarinp.png' },
    { id: 'ajigallina', name: 'Ají de gallina', description: 'Un clásico de la cocina peruana.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/ajig.png' },
    { id: 'pollohorno', name: 'Pollo al horno', description: 'Pollo al horno con guarnición.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/pollohorno.png' },
    { id: 'pescadofrito', name: 'Pescado frito', description: 'Pescado frito, preparado al momento.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/pescado.png' },
    { id: 'gpollohorno', name: 'Garbanzo con pollo al horno', description: 'Garbanzo acompañado de pollo al horno.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/garbanzop.png' },
    { id: 'galita', name: 'Garbanzo con alita broaster', description: 'Garbanzo acompañado de alita broaster.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/garbanzoab.png' },
    { id: 'gpescado', name: 'Garbanzo con pescado', description: 'Garbanzo acompañado de pescado.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/garbanzopez.png' },
    { id: 'gadobo', name: 'Garbanzo con adobo de chancho', description: 'Garbanzo acompañado de adobo.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/garbanzoadobo.png' },
    { id: 'erpollohorno', name: 'Ensalada rusa con pollo al horno', description: 'Ensalada rusa con pollo al horno.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/erpollohorno.png' },
    { id: 'erpescado', name: 'Ensalada rusa con pescado', description: 'Ensalada rusa acompañada de pescado.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/erpescado.png' },
    { id: 'eralita', name: 'Ensalada rusa con alita broaster', description: 'Ensalada rusa acompañada de alita broaster.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/eralita.png' },
    { id: 'erpolloplancha', name: 'Ensalada rusa con pollo a la plancha', description: 'Ensalada rusa con pollo a la plancha.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/erpolloplancha.png' },
    { id: 'polloplancha', name: 'Pollo a la plancha', description: 'Pollo a la plancha con guarnición.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/polloplancha.png' },
    { id: 'alita', name: 'Alita broaster', description: 'Alita broaster preparada al momento.', price: 9, category: 'criollo', tag: 'CRIOLLO', image: './images/alita.png' },
	  
    { id: 'cuych', name: 'Cuy Chactado', description: 'Cuy crocante, papas doradas y ensalada.', price: 22, category: 'menucuy', tag: 'DE LA CASA', image: './images/cuychactado.png' },
	  { id: 'cuyc', name: 'Cuy Colorado', description: 'Cuy frito, papas doradas y salsa de la casa.', price: 22, category: 'menucuy', tag: 'DE LA CASA', image: './images/cuyc.png' },
	  { id: 'cuyb', name: 'Cuy Broaster', description: 'Cuy crocante, papas doradas y aj� especial.', price: 22, category: 'menucuy', tag: 'DE LA CASA', image: './images/cuyb.png' },
    
	  
	  
    { id: 'cnegra', name: 'Cerveza Negra', description: 'Refrescante bebida tradicional de Cusco.', price: 9, category: 'bebidas', tag: 'HECHA EN CASA', image: './images/cervezan.png'},
	 { id: 'ccusquena', name: 'Cerveza Cusque�a', description: 'Refrescante bebida tradicional de Cusco.', price: 9, category: 'bebidas', tag: 'HECHA EN CASA', image: './images/cervezac.png'},
	 { id: 'gaseosap', name: 'Gaseosa Personal', description: 'Refrescante bebida gasificada.', price: 3, category: 'bebidas', tag: 'HECHA EN CASA', image: './images/gaseosap.png'},
	 { id: 'inkagordita', name: 'Inka Cola Gordita', description: 'Refrescante bebida gasificada', price: 5, category: 'bebidas', tag: 'HECHA EN CASA', image: './images/inkagordita.png'},
	  { id: 'agua', name: 'Agua Mineral', description: 'Refrescante bebida', price: 2, category: 'bebidas', tag: 'HECHA EN CASA', image: './images/agua.png'},
	  { id: 'inkalitro', name: 'Inka Cola - 1 Litro', description: 'Refrescante bebida gasificada', price: 7, category: 'bebidas', tag: 'HECHA EN CASA', image: './images/inkalitro.png'},
	  
	  { id: 'chaufap', name: 'Arroz Chaufa de Pollo', description: 'Comida Fusi�n Peruana China', price: 17, category: 'extras', tag: 'HECHA EN CASA', image: './images/chaufap.png'},
	  { id: 'chaufac', name: 'Arroz Chaufa de Carne', description: 'Comida Fusi�n Peruana China', price: 20, category: 'extras', tag: 'HECHA EN CASA', image: './images/chaufac.png'},
	  { id: 'tspollo', name: 'Tallar�n Saltado de Pollo', description: 'Comida Fusi�n Peruana China', price: 17, category: 'extras', tag: 'HECHA EN CASA', image: './images/tspollo.png'},
	  { id: 'tscarne', name: 'Tallar�n Saltado de Carne', description: 'Comida Fusi�n Peruana China', price: 20, category: 'extras', tag: 'HECHA EN CASA', image: './images/tscarne.png'},
	  { id: 'lspollo', name: 'Lomo Saltado de Pollo', description: 'Comida Fusi�n Peruana China', price: 17, category: 'extras', tag: 'HECHA EN CASA', image: './images/lspollo.png'},
    { id: 'lscarne', name: 'Lomo Saltado de Carne', description: 'Comida Fusi�n Peruana China', price: 20, category: 'extras', tag: 'HECHA EN CASA', image: './images/lscarne.png'}
  ];
  const productById = new Map(products.map((product) => [product.id, product]));
  const money = (amount) => `S/ ${amount.toFixed(2)}`;
  let cart = readCart();
  let toastTimer;
  let previousFocus = null;

  function readCart() {
    try {
      const entries = JSON.parse(sessionStorage.getItem(CART_KEY) || '[]');
      if (!Array.isArray(entries)) return new Map();
      return new Map(entries.filter((entry) =>
        Array.isArray(entry) && entry.length === 2 && productById.has(entry[0]) &&
        Number.isSafeInteger(entry[1]) && entry[1] > 0
      ));
    } catch {
      return new Map();
    }
  }

  function writeCart() {
    try {
      sessionStorage.setItem(CART_KEY, JSON.stringify([...cart]));
    } catch {
      showToast('No se pudo guardar el pedido en esta sesión.');
    }
  }

  function cartLines() {
    return [...cart].map(([id, quantity]) => {
      const product = productById.get(id);
      return { ...product, quantity, lineTotal: product.price * quantity };
    });
  }

  function itemCount() {
    return [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
  }

  function refresh() {
    writeCart();
    document.querySelectorAll('.cart-count').forEach((element) => {
      element.textContent = String(itemCount());
    });
    renderDrawer();
    renderOrder();
  }

  function showToast(message) {
    const toast = document.querySelector('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function renderProducts(category = 'todos') {
  const grid = document.querySelector('#product-grid');
  if (!grid) return;

  const visible = products.filter(
    (product) => category === 'todos' || product.category === category
  );

  grid.innerHTML = visible.map((product) => {
    const media = product.image
      ? `<img class="food-photo" src="${product.image}" alt="${product.name}" loading="lazy">`
      : `<span class="food-symbol" aria-hidden="true">${product.icon}</span>`;

    return `
      <article class="product-card">
        <div class="product-image">
          ${media}
          <span class="product-tag">${product.tag}</span>
        </div>
        <div class="product-info">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="product-meta">
            <span class="product-price">${money(product.price)}</span>
            <button class="add-button" type="button" data-add="${product.id}" aria-label="Agregar ${product.name} al pedido">+</button>
          </div>
        </div>
      </article>`;
  }).join('');
}

  function renderDrawer() {
    const items = document.querySelector('#cart-items');
    const empty = document.querySelector('#cart-empty');
    const totalElement = document.querySelector('#cart-total');
    if (!items || !empty || !totalElement) return;
    const lines = cartLines();
    const total = lines.reduce((sum, line) => sum + line.lineTotal, 0);
    totalElement.textContent = money(total);
    empty.classList.toggle('hidden', lines.length > 0);
    items.classList.toggle('hidden', lines.length === 0);
    items.innerHTML = lines.map((line) => `
      <article class="cart-row"><div><h3>${line.name}</h3><p>${money(line.price)} · ${money(line.lineTotal)}</p></div>
      <div class="qty-control" aria-label="Cantidad de ${line.name}"><button type="button" data-change="${line.id}" data-delta="-1" aria-label="Quitar una unidad de ${line.name}">−</button><span>${line.quantity}</span><button type="button" data-change="${line.id}" data-delta="1" aria-label="Agregar una unidad de ${line.name}">+</button></div></article>`).join('');
  }

  function renderOrder() {
    const list = document.querySelector('#order-list');
    if (!list) return;
    const lines = cartLines();
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const total = lines.reduce((sum, line) => sum + line.lineTotal, 0);
    const countElement = document.querySelector('#order-count');
    const subtotalElement = document.querySelector('#order-subtotal');
    const totalElement = document.querySelector('#order-total');
    const submitButton = document.querySelector('#confirm-order');
    if (countElement) countElement.textContent = String(count);
    if (subtotalElement) subtotalElement.textContent = money(total);
    if (totalElement) totalElement.textContent = money(total);
    if (submitButton) submitButton.disabled = lines.length === 0;

    if (lines.length === 0) {
      list.innerHTML = '<div class="cart-empty"><h3>Tu pedido está vacío.</h3><p>Agrega platos desde nuestra carta para comenzar.</p><a class="text-link" href="./carta.html">Ir a la carta →</a></div>';
      return;
    }
    list.innerHTML = lines.map((line) => `
      <article class="cart-row order-row"><div><h3>${line.name}</h3><p>${money(line.price)} por unidad · Total: <strong>${money(line.lineTotal)}</strong></p></div>
      <div class="qty-control" aria-label="Cantidad de ${line.name}"><button type="button" data-change="${line.id}" data-delta="-1" aria-label="Quitar una unidad de ${line.name}">−</button><span>${line.quantity}</span><button type="button" data-change="${line.id}" data-delta="1" aria-label="Agregar una unidad de ${line.name}">+</button><button type="button" data-remove="${line.id}" aria-label="Eliminar ${line.name}">Eliminar</button></div></article>`).join('');
  }

  document.querySelectorAll('.category-tabs').forEach((tabs) => tabs.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    tabs.querySelectorAll('[data-category]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
      if (tab.hasAttribute('aria-selected')) tab.setAttribute('aria-selected', String(active));
    });
    renderProducts(button.dataset.category);
  }));

  document.addEventListener('click', (event) => {
    const add = event.target.closest('[data-add]');
    const change = event.target.closest('[data-change]');
    const remove = event.target.closest('[data-remove]');
    if (add) {
      const product = productById.get(add.dataset.add);
      if (!product) return;
      cart.set(product.id, (cart.get(product.id) || 0) + 1);
      refresh();
      showToast(`${product.name} se agregó a tu pedido.`);
      return;
    }
    if (change) {
      const id = change.dataset.change;
      const next = (cart.get(id) || 0) + Number(change.dataset.delta);
      if (!productById.has(id) || !Number.isInteger(next)) return;
      if (next <= 0) cart.delete(id);
      else cart.set(id, next);
      refresh();
      return;
    }
    if (remove && cart.has(remove.dataset.remove)) {
      cart.delete(remove.dataset.remove);
      refresh();
    }
  });

  function closeCart() {
    const overlay = document.querySelector('#cart-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  }

  document.querySelectorAll('[data-open-cart]').forEach((button) => button.addEventListener('click', (event) => {
    const overlay = document.querySelector('#cart-overlay');
    if (!overlay) return;
    event.preventDefault();
    previousFocus = button;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.querySelector('.close-cart')?.focus();
  }));
  document.querySelector('.close-cart')?.addEventListener('click', closeCart);
  document.querySelector('.continue-shopping')?.addEventListener('click', closeCart);
  document.querySelector('#cart-overlay')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeCart();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('#cart-overlay')?.classList.contains('open')) closeCart();
  });

  document.querySelectorAll('.menu-toggle').forEach((button) => {
    const nav = document.getElementById(button.getAttribute('aria-controls')) || document.querySelector('.nav');
    if (!nav) return;
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('open');
    }));
  });

  document.querySelectorAll('#contact-form').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formStatus = document.querySelector('#form-status');
    if (formStatus) formStatus.textContent = 'Gracias por escribirnos. Este formulario todavía no envía mensajes a un servidor.';
    form.reset();
  }));

  document.querySelectorAll('#order-form').forEach((form) => form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.querySelector('#order-status');
    const submitButton = form.querySelector('#confirm-order');
    const lines = cartLines();
    if (!lines.length) {
      if (status) status.textContent = 'Agrega al menos un plato antes de enviar el pedido.';
      return;
    }
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const payload = {
      customer: {
        name: String(fields.get('name') || '').trim(),
        phone: String(fields.get('phone') || '').trim(),
        address: String(fields.get('address') || '').trim(),
        notes: String(fields.get('notes') || '').trim()
      },
      items: lines.map(({ id, quantity }) => ({ id, quantity }))
    };

    if (submitButton) submitButton.disabled = true;
    if (status) status.textContent = 'Enviando tu pedido…';

    try {
      const response = await fetch(ORDER_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true || !result.order?.reference) {
        throw new Error(result?.error || 'No se pudo enviar el pedido. Inténtalo nuevamente.');
      }

      cart.clear();
      refresh();
      form.reset();
      if (status) status.textContent = `Pedido guardado. Referencia: ${result.order.reference}. Subtotal: ${money(Number(result.order.subtotal))}.`;
    } catch (error) {
      if (status) status.textContent = error instanceof Error ? error.message : 'No se pudo enviar el pedido. Inténtalo nuevamente.';
    } finally {
      if (submitButton) submitButton.disabled = cartLines().length === 0;
    }
  }));

  document.querySelectorAll('#year').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
  renderProducts();
  refresh();
})();
