// ARRAY ----------------------------------------------------------------------------------------------------

// CONCAT -> retorna um novo array com a concatenacao dos dois arrays ---------------------------------------
var numeros = [1, 2, 3, 4];
var letras  = ['a', 'b', 'c'];
console.log(numeros.concat(letras));		// [1, 2, 3, 4, "a", "b", "c"]

// EVERY -> retorna verdadeiro se todos elementos satisfazem o predicado (realiza E) ------------------------
var numeros = [30, 40, 8];	// true, true, false = false
console.log(numeros.every(function(n) {return n > 10}));	// false

numeros = [11, 45, 66];		// true, true, true = true
console.log(numeros.every(function(n) {return n > 10}));	// true

// FILTER -> retorna um novo array com os elementos que satisfazem o criterio -------------------------------
var numeros = [1, 2, 3, 4, -5, 6, 78, 45, 34, -33];

function maiorQue5(n) {
 	return n > 5;
}
function menorQue70(n) {
 	return n < 70;
}

var intervalo = numeros
	.filter(maiorQue5)
	.filter(menorQue70);
console.log(intervalo);		// [6, 45, 34]

var livros = [
	{isbn: "0596517741", titulo: "Desconstruindo o SPW em 21 dias", 	   autor: "Itanor Strapazzon", preco: 59.90},
	{isbn: "0594518843", titulo: "Convertendo EJB2 para EJB3 em 7 dias",   autor: "Hercules Avancini", preco: 98.50},
	{isbn: "0296516647", titulo: "SPW Efetivo for Dummies", 			   autor: "Ismael Dewes", 	   preco: 129.35},
	{isbn: "0596521342", titulo: "Migrando do SPW 4 para SPW 5 sem medo!", autor: "Dyego Santin",      preco: 65.60},
	{isbn: "0594317240", titulo: "Testes automatizados: A Biblia", 	  	   autor: "Danilo Martins",    preco: 79.90}
];
function livroDeSPW(livro) {
	if(livro.titulo.match(/SPW/g)) return livro;
}

var livrosDeSPW = livros.filter(livroDeSPW);
console.log(livrosDeSPW);

// FOREACH -> executa a funcao para cada elemento do array --------------------------------------------------
livrosDeSPW.forEach(function(livro) {
	console.log("ISBN = " + livro.isbn + " PRECO = " + livro.preco);
});

// INDEXOF -> retorna o indice de determinado elemento ------------------------------------------------------
var numeros = [4, 5, 6, 7, 8];
console.log(numeros.indexOf(4));	// 0
console.log(numeros.indexOf(8));	// 4
console.log(numeros.indexOf(10));	// -1
console.log(numeros.indexOf(7, 2));	// busca o indice do 7 pesquisando do indice 2 em diante

// JOIN -> retorna uma string com a concatenacao de todos os elementos --------------------------------------
var numeros = [4, 5, 6, 7, 7, 8];
console.log(numeros.join());		// sem separador      -> 4,5,6,7,7,8
console.log(numeros.join(', '));	// virgula com espaço -> 4, 5, 6, 7, 7, 8
console.log(numeros.join(' $ '));	// cifrao			  -> 4 $ 5 $ 6 $ 7 $ 7 $ 8
console.log(numeros.join(''));		// string vazia		  -> 456778

// LASTINDEXOF -> retorna o ultimo indice do elemento pesquisado (pesquisado do fim para o inicio) ----------
var numeros = [4, 5, 6, 7, 7, 8];
console.log(numeros.indexOf(4));		// 0
console.log(numeros.lastIndexOf(8));	// 5
console.log(numeros.lastIndexOf(10));	// -1
console.log(numeros.lastIndexOf(5, 3));	// busca o indice do 5 pesquisando do indice 3 para tras

// MAP -> cria um novo array com o resultado da chamada da funcao para cada elemento ------------------------
var livros = [
	{isbn: "0596517741", titulo: "Desconstruindo o SPW em 21 dias", 	   autor: "Itanor Strapazzon", preco: 59.90},
	{isbn: "0594518843", titulo: "Convertendo EJB2 para EJB3 em 7 dias",   autor: "Hercules Avancini", preco: 98.50},
	{isbn: "0296516647", titulo: "SPW Efetivo for Dummies", 			   autor: "Ismael Dewes", 	   preco: 129.35},
	{isbn: "0596521342", titulo: "Migrando do SPW 4 para SPW 5 sem medo!", autor: "Dyego Santin",      preco: 65.60},
	{isbn: "0594317240", titulo: "Testes automatizados: A Biblia", 	  	   autor: "Danilo Martins",    preco: 79.90}
];
function menorQue70(n) {
	return n < 70;
}
function titulos(livro) {
	return livro.titulo;
}
function paraMaiusculas(titulo) {
	return titulo.toUpperCase();
}

var titulosDosLivros = livros
		.map(titulos)
		.map(paraMaiusculas);

console.log(titulosDosLivros);

function isbnComPrecoDoLivro(livro) {
	return {
		isbn:  livro.isbn, 
		preco: livro.preco
	};
}
function precoDosLivros(livro) {
	return livro.preco;
}
function menorPreco(p1, p2) {
	return p1 > p2;
}

var isbnsComPrecos = livros
		.map(isbnComPrecoDoLivro)
		.map(precoDosLivros)
		.filter(menorQue70)
		.sort(menorPreco);

console.log(isbnsComPrecos);

// POP -> remove elemento do final do array -----------------------------------------------------------------
var numeros = [1, 2, 3, 4, 5];

numeros.pop();
console.log(numeros);	// [1, 2, 3, 4]

numeros.pop();
console.log(numeros);	// [1, 2, 3]

// PUSH -> adiciona elemento ao final do array --------------------------------------------------------------
var numeros = [1, 2, 3, 4, 5];
numeros.push(77);			// adicionando 1 elemento
console.log(numeros);		// [1, 2, 3, 4, 5, 77]

numeros.push(88, 99, 66);	// adicionando varios elementos
console.log(numeros);		// [1, 2, 3, 4, 5, 77, 88, 99, 66]

// REDUCE -> aplica a funcao contra um acumulador -----------------------------------------------------------
var livros = [
	{isbn: "0596517741", titulo: "Desconstruindo o SPW em 21 dias", 	   autor: "Itanor Strapazzon", preco: 59.90},
	{isbn: "0594518843", titulo: "Convertendo EJB2 para EJB3 em 7 dias",   autor: "Hercules Avancini", preco: 98.50},
	{isbn: "0296516647", titulo: "SPW Efetivo for Dummies", 			   autor: "Ismael Dewes", 	   preco: 129.35},
	{isbn: "0596521342", titulo: "Migrando do SPW 4 para SPW 5 sem medo!", autor: "Dyego Santin",      preco: 65.60},
	{isbn: "0594317240", titulo: "Testes automatizados: A Biblia", 	  	   autor: "Danilo Martins",    preco: 79.90}
];
function livroDeSPW(livro) {
	if(livro.titulo.match(/SPW/g)) return livro;
}
function precoDosLivros(livro) {
	return livro.preco;
}
function somaDosPrecos(acumulador, atual) {
	return acumulador + atual;
}
var total = livros
		.filter(livroDeSPW)
		.map(precoDosLivros)
		.reduce(somaDosPrecos, 0);
console.log(total);

function tituloAutorPreco(livro) {
	return {titulo: livro.titulo, autor: livro.autor, preco: livro.preco};
}
function tabelaHtml(livro) {
 	var template = "<tr><td>{a}</td><td>{p}</td><td>{t}</td></tr>";
 	return template.replace("{a}", livro.autor)
				   .replace("{p}", livro.preco)
				   .replace("{t}", livro.titulo);
}

var tabela = livros
		.map(tituloAutorPreco)
		.map(tabelaHtml);
console.log(tabela);

document.getElementById('tab').innerHTML = tabela;

// REDUCERIGHT -> mesmo que reduce, mas da direita para a esquerda ------------------------------------------
var numeros = [1, 2, 3, 4, 5];
var total = numeros.reduceRight(function(acumulado, atual) {return acumulado + atual}, 0);
console.log(total);		// 15

// REVERSE -> inverte a ordem dos elementos do array --------------------------------------------------------
var numerosEmOrdemCrescente = [2, 3, 4, 5, 6];
console.log(numerosEmOrdemCrescente.reverse());		//[6, 5, 4, 3, 2]

// SHIFT -> remove o primeiro elemento do array e o retorna -------------------------------------------------
var numeros = [1, 2, 3, 4, 5];
var elementoRemovido = numeros.shift();
console.log(elementoRemovido);				// 1
console.log(numeros);						// [2, 3, 4, 5]

elementoRemovido = numeros.shift();
console.log(elementoRemovido);				// 2
console.log(numeros);						// [3, 4, 5]

// SLICE -> retorna uma copia de uma parte do array original (segundo indice eh exclusivo) ------------------
var numeros = [33, 44, 55, 66, 77, 88];
var numerosAte55 = numeros.slice(0, 3);
console.log(numerosAte55);				// [33, 44, 55]

// SOME -> retorna verdadeiro se existe pelo menos 1 elemento que satisfaz o predicado (realiza OU) ---------
var numeros = [3, 4, 5, 6];				// false, false, false, true = true
var temAlgumNumeroMaiorQue5 = numeros.some(function(n) {return n > 5});
console.log(temAlgumNumeroMaiorQue5);	// true

// SORT -> ordena o array de acordo com o predicado ---------------------------------------------------------
var numeros = [4, 2, -8, 3, 0, -2, 1];

function ordemAscendente(n1, n2) {
	return n1 > n2;
}
function ordemDecrescente(n1, n2) {
	return n1 < n2;
}
console.log(numeros.sort());			// [-2, -8, 0, 1, 2, 3, 4] ???
console.log(numeros.sort(ordemAscendente));	// [-8, -2, 0, 1, 2, 3, 4] :)
console.log(numeros.sort(ordemDecrescente));	// [4, 3, 2, 1, 0, -2, -8] :)

// SPLICE -> remove/adiciona elementos a partir de um indice ------------------------------------------------
var linguagens = ['java', 'scala', 'ruby', 'c', 'erlang'];
var removida = linguagens.splice(2, 1);
console.log(removida);		// ["ruby"]
console.log(linguagens);	// ["java", "scala", "c", "erlang"]

removida = linguagens.splice(2, 1, 'go');
console.log(removida);		// ["c"]
console.log(linguagens);	// ["java", "scala", "go", "erlang"]

// UNSHIFT -> adiciona um ou mais elementos no inicio do array e retorna o novo tamanho do array ------------
var linguagens = ['java', 'scala', 'ruby', 'c', 'erlang'];

linguagens.unshift('elixir');
console.log(linguagens);		// ["elixir", "java", "scala", "ruby", "c", "erlang"]
linguagens.unshift('swift', 'clojure');
console.log(linguagens);		// ["swift", "clojure", "elixir", "java", "scala", "ruby", "c", "erlang"]

// DUCK TYPING -> polimorfismo em javascript (acordo entre cavalheiros) -------------------------------------
var DeveConterNoMaximo140Caracteres = function(twit) {
 	this.twit = twit;
 	this.mensagem = "O twit nao pode conter mais de 140 caracteres!";

 	this.isSatisfeita = function() {
 		return (this.twit.length <= 140) ? true : false;
 	};
 	this.exibeMensagem = function() {
 		window.alert(this.mensagem);
 	};
};

var NaoDeveConterAPalavraSPW = function(twit) {
 	this.twit = twit;
 	this.mensagem = "O twit nao pode conter a palavra SPW!";

 	this.isSatisfeita = function() {
 		return (!this.twit.match(/SPW/g)) ? true: false;
 	};
 	this.exibeMensagem = function() {
 		window.alert(this.mensagem);
 	};
};

var NaoDeveConterAPalavraHttp = function(twit) {
 	this.twit = twit;
 	this.mensagem = "O twit nao pode conter a palavra http!";

 	this.isSatisfeita = function() {
 		return (!this.twit.match(/http/g)) ? true: false;
 	};
 	this.exibeMensagem = function() {
 		window.alert(this.mensagem);
 	};
};

var twitCom142Caracteres = 
 	"gfdsg fds gfds gfs gs gsg 897 o67go87 87 87o87fds 7 8f7ds 7fs87fs8fg f7gs  lkjhgfdlksjhgfdlkjh Kjh kjhfdsalfsa p9f dsakjhf skkfsdh hjfdsjhfdsd";

var twitCom140Caracteres = 
 	"gfdsg fds gfds gfs gs g 897 o67go87 87 87o87fds 7 8f7ds 7fs87fs8fg f7gs  lkjhgfdlksjhgfdlkjh Kjh kjhfdsalfsa p9f dsakjhf skkfsdh hjfdsjhfdsd";

var twitCom140CaracteresComSPW = 
 	"gfdsg fds gfds gfs gs g SPW o67go87 87 87o87fds 7 8f7ds 7fs87fs8fg f7gs  lkjhgfdlksjhgfdlkjh Kjh kjhfdsalfsa p9f dsakjhf skkfsdh hjfdsjhfdsd";

var twitCom140CaracteresComHttp = 
 	"gfdsg fds gfds gfs gs g http 67go87 87 87o87fds 7 8f7ds 7fs87fs8fg f7gs  lkjhgfdlksjhgfdlkjh Kjh kjhfdsalfsa p9f dsakjhf skkfsdh hjfdsjhfdsd";

var validacoes = [];
validacoes.push(
 	new DeveConterNoMaximo140Caracteres(twitCom142Caracteres), 
 	new NaoDeveConterAPalavraSPW(twitCom142Caracteres),
 	new NaoDeveConterAPalavraHttp(twitCom142Caracteres)
);

var twitValido = validacoes.every(function(validacao) {
 	if(validacao.isSatisfeita()) return true;

 	validacao.exibeMensagem();
 	return false;
});

console.log("twit valido: " + twitValido);
