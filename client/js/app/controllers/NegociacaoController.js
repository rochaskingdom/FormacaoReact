class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        console.log(typeof(this._inputData.value));

        let negociacao = new NegociacaoController(
            this._inoutData.values,
            this._inputQuantidade.value,
            this._inputValor.values
        );

        console.log(negociacao);

    }
}