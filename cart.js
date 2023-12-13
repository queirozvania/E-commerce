const search = document.querySelector(".search");
const btnSearch = document.querySelector(".btnSearch");

search.addEventListener("input", filterProducts);

btnSearch.addEventListener("click", filterProducts);

function updateCart() {
	const cartContainer = document.querySelector(".products");
	cartContainer.innerHTML = "";

	const amount = document.querySelector(".num");
	amount.innerText = itensCart.length;
	const price = document.querySelector("span.price");
	price.innerText = formatPrice(priceTotal());

	itensCart.forEach((product, index) => {
		const elProduct = document.createElement("div");
		elProduct.classList.add("product");
		elProduct.id = product.id.toString();

		const img = document.createElement("img");
		img.src = product.imagem;

		const productInfos = document.createElement("div");
		productInfos.classList.add("productinfos");

		const nome = document.createElement("p");
		nome.innerText = product.nome;

		const preco = document.createElement("p");
		preco.innerText = formatPrice(product.preco);
		preco.classList.add("priceProduct");

		const button = document.createElement("button");
		button.innerText = "Remover produto";
		button.addEventListener("click", (e) => {
			itensCart.splice(index, 1);
			updateCart();
		});

		elProduct.appendChild(img);
		productInfos.appendChild(nome);
		productInfos.appendChild(preco);
		productInfos.appendChild(button);
		elProduct.appendChild(productInfos);
		cartContainer.appendChild(elProduct);
	});
}

function priceTotal() {
	const sum = itensCart.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue.preco;
	}, 0);

	return sum;
}
function filterProducts(e) {
	const value = search.value.toLowerCase();
	itensCart = backupCart.filter((product) => {
		const name = product.nome.toLowerCase();
		return name.includes(value);
	});
	updateCart();
	console.log(itensCart)
}

function formatPrice(price) {
	return price.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}
