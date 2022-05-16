import CadastroPage from '../Pages/CadastroPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro de entregador - Validação de cadastro', () => {
    const cadastroPage = new CadastroPage()
    var deliver = signupFactory.deliver()

    it('Cadastrando informações corretas', () => {
        cadastroPage.go()
        cadastroPage.accessForm()
        cadastroPage.fillForm(deliver)
        cadastroPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastroPage.modalContentShouldBe(expectedMessage)
        cadastroPage.clicButton()
    })

    it('Cadastro de entregador - CPF inválido - Número a menos', () => {
        var deliver = signupFactory.deliver()
        deliver.cpf = '0000000009'
        cadastroPage.go()
        cadastroPage.accessForm()
        cadastroPage.fillForm(deliver)
        cadastroPage.submit()

        const expectedMessage = 'Oops! CPF inválido'
        cadastroPage.alertMessageShouldBe(expectedMessage)

    })

    it('Cadastro de entregador - CPF inválido - Número a mais', () => {
        var deliver = signupFactory.deliver()
        deliver.cpf = '000000000911'
        cadastroPage.go()
        cadastroPage.accessForm()
        cadastroPage.fillForm(deliver)
        cadastroPage.submit()

        const expectedMessage = 'Oops! CPF inválido'
        cadastroPage.alertMessageShouldBe(expectedMessage)

    })

    context('Cadastro de entregador - Todos os campos em branco', function () {
        const mensagens = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'numero', output: 'É necessário informar o número do endereço' },
            { field: 'metodo_entrega', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        before(function () {
            cadastroPage.go()
            cadastroPage.accessForm()
            cadastroPage.submit()
        })

        mensagens.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                cadastroPage.alertMessageShouldBe(msg.output)
            })
        })
    })

})