const products=[
    {id:1, name:'VESTIDO BUSTIER MAEVE', price:179.99},
    {id:2, name:'VESTIDO BUSTIER RENDA', price:159.90 },
    {id:3, name:'VESTIDO MODELADOR', price:269.90 },
    {id:4, name:'VESTIDO SELENA', price:239.90 },
    {id:5, name:'CORSET SAMANTHA', price:169.90 },
    {id:6, name:'VESTIDO CLOE', price:259.90 },
    {id:7, name:'VESTIDO SOPHIE ', price:169.90},
    {id:8, name:'VESTIDO ANNE', price:199.90 },
    {id:9, name:'VESTIDO SAMIRA', price:189.90}
];

let cart=[];

function addToCart(product_id){
    const product = products.find(p => p.id === product_id);
    if(product){
        const cartItem = cart.find(item => item.id === product.id)
        if(cartItem){
            cartItem.quantidade += 1; 
        }else{
            cart.push({...product, quantidade:1});
        }
        renderCart();
    }
}

function removeFromCart(product_id){
    cart = cart.filter(item => item.id !== product_id);
    renderCart();
}

function renderCart(){
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantidade}`;
        const removeButton = document.createElement('button');
        const lixeira = document.createElement('img')
        lixeira.src='roupas/lixeira.png';
        lixeira.style='width: 10px; height: auto;';        
        removeButton.appendChild(lixeira);

        removeButton.onclick= ()=> removeFromCart(item.id);

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    atualizarTotal();
}
function atualizarTotal(){
    const valorTotal = cart.reduce((acumulado, item) => acumulado + item.price * item.quantidade, 0);
    document.getElementById('total-value').innerHTML= valorTotal.toFixed(2)
}

function filterProducts(categoria){
    const itens = document.getElementsByClassName('produto');

    for(let i=0; i< itens.length; i++){
        if(categoria === 'all'){
            itens[i].style.display = '';
            document.getElementById('categoria').innerHTML= "Todos os Produtos";
        }else{
            if(itens[i].classList.contains(categoria)){
                itens[i].style.display = '';
            }else{
                itens[i].style.display = 'none';
            }
        }
    }

    document.getElementById('categoria').innerHTML=categoria;
}




function carrinho_preto(){
    document.getElementById('carrinho').src='roupas/126510.png'
}

function carrinho_branco(){
    document.getElementById('carrinho').src='roupas/carrinho branco.png'
}

