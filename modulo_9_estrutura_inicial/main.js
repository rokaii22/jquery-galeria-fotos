$(document).ready(function(){
    
    $('header button').click(function() {
      $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
    
        // Corrigindo o seletor do campo de endereço da nova imagem
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
    
        // Criação de um novo <li> para inserir a nova imagem
        const novoItem = $('<li style="display: none"></li>');
    
        // Adicionando a nova imagem ao novo <li>
        $(`<img src="${enderecoDaNovaImagem}" alt="Nova imagem" />`).appendTo(novoItem);
    
        // Adicionando a div com o link para a imagem em tamanho real
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
    
        // Adicionando o novo <li> à lista <ul> e aplicando o fadeIn
        $('ul').append(novoItem);
        $(novoItem).fadeIn(1000); // Exibe o novo item com efeito de fadeIn

        // Limpa o campo de input após a submissão
        $('#endereco-imagem-nova').val(''); // Verifique o ID no HTML
        
        // Fecha o formulário após adicionar a imagem
        $('form').slideUp();
    });
    
    })
