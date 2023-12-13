const itensLoja = [
	{
		id: 0,
		imagem: "./images/image1.jfif",
		nome: "Grace Preto",
		descricao:"Você acredita em magia? Vista esse vestido e veja a mágica acontecer!.",
		preco: 498.8,
	},
	{
		id: 1,
		imagem: "./images/image2.jfif",
		nome: "Casual Fest",
		descricao:"Aquele vestido maravilhoso para você arrasar em qualquer evento.",
		preco: 600.4,
	},
	{
		id: 2,
		imagem: "./images/image3.jfif",
		nome: "Debutante Roxo",
		descricao:"Com o passar dos anos aprendi que, o mais importante num vestido é a mulher que o veste! ",
		preco: 545.75,
	},
	{
		id: 3,
		imagem: "./images/image4.jfif",
		nome: "Preto Glitter",
		descricao:"Este é um visual muito atemporal e versátil, que pode ser usado em qualquer momento do ano!",
		preco: 169.99,
	},
	{
		id: 4,
		imagem: "./images/image5.jfif",
		nome: "Dark Blue Glamor",
		descricao:"Nada melhor que ter um vestido que combina com qualuqer ocasião, não é mesmo?.",
		preco: 754.0,
	},

	{
		id: 5,
		imagem: "./images/image6.jfif",
		nome: "Estampa Flora",
		descricao:"Torne seus 15 anos, o dia mais elegante de todos com a linha brilho bordô.",
		preco: 114.19,
	},
];
let itensCart = [];
let backupCart = [];

const cardContainer = document.querySelector(".cardContainer");

for (let i = 0; i < itensLoja.length; i++) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.id = itensLoja[i].id.toString();

	//  adiciona imagem

	const img = document.createElement("img");
	img.src = itensLoja[i].imagem;

	// adiciona um nome para o produto

	const nome = document.createElement("nome");
	nome.innerText = itensLoja[i].nome;

	// adiciona descriçaõ para o produto
	const descricao = document.createElement("descricao");
	descricao.innerText = itensLoja[i].descricao;

	//  adicionar um preço para o produto
	const preco = document.createElement("preco");
	preco.innerText = formatPrice(itensLoja[i].preco);

	//  adiciona um botão para o produto
	const button = document.createElement("button");
	button.innerText = "Adicionar ao carrinho";
	button.addEventListener("click", (e) => {
		itensCart.push(itensLoja[i]);
		backupCart = [...itensCart];
		updateCart();
	});

	card.appendChild(img);
	card.appendChild(nome);
	card.appendChild(descricao);
	card.appendChild(preco);
	card.appendChild(button);

	cardContainer.appendChild(card);
}
