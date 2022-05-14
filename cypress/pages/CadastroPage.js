
class CadastroPage {

    go() {
        cy.visit('/')
    }
    accessForm() {
        cy.get('a').contains('Cadastre-se para fazer entregas').click()
        //cy.get('#btn-dropdown-header-estude').click()
    }

    fillForm(deliver) {
        /*--Preenchimento da aba Informações globais--*/
        // Campo Nome Completo
        cy.get('input[name="name"]').type(deliver.name)
        //Campo CPF
        cy.get('input[name="cpf"]').type(deliver.cpf)
        //Campo E-mail
        cy.get('input[name="email"]').type(deliver.email)
        //Campo Whatsapp
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        //Campo CEP
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        //Buscar endereço pelo CEP
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        //Campo Número do endereço
        cy.get('input[name="address-number"]').type(deliver.address.number)
        //Campo Complemento
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //Validação dos campos preenchidos automaticamente
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        //Anexando o arquivo CNH
        cy.get('input[type="file"]').
            selectFile('cypress/fixtures/' + deliver.cnh, { force: true })

    }

    cpfFaltandoNum() {
        /*--Preenchimento da aba Informações globais--*/
        // Campo Nome Completo
        cy.get('input[name="name"]').type('Nascimento')
        //Campo CPF
        cy.get('input[name="cpf"]').type('0009999999')
        //Campo E-mail
        cy.get('input[name="email"]').type('nascimento@gmail.com')
        //Campo Whatsapp
        cy.get('input[name="whatsapp"]').type('(88)99999-9999')
        //Campo CEP
        //cy.get('input[name="postalcode"]').type('63900-217{enter}')
        cy.get('input[name="postalcode"]').type('63900-217')
        //Buscar endereço pelo CEP
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        //Campo Número do endereço
        cy.get('input[name="address-number"]').type('999')
        //Campo Complemento
        cy.get('input[name="address-details"]').type('Apartamento')

        //Validação dos campos preenchidos automaticamente
        cy.get('input[name="address"]').should('have.value', 'Rua Doutor Eudásio Barroso')
        cy.get('input[name="district"]').should('have.value', 'Centro')
        cy.get('input[name="city-uf"]').should('have.value', 'Quixadá/CE')

        cy.contains('.delivery-method li', "Moto").click()
        //Anexando o arquivo CNH
        cy.get('input[type="file"]').
            selectFile('cypress/fixtures/cnh-digital.jpg', { force: true })

    }

    cpfExcedendoNum() {
        /*--Preenchimento da aba Informações globais--*/
        // Campo Nome Completo
        cy.get('input[name="name"]').type('Nascimento')
        //Campo CPF
        cy.get('input[name="cpf"]').type('000999999999')
        //Campo E-mail
        cy.get('input[name="email"]').type('nascimento@gmail.com')
        //Campo Whatsapp
        cy.get('input[name="whatsapp"]').type('(88)99999-9999')
        //Campo CEP
        //cy.get('input[name="postalcode"]').type('63900-217{enter}')
        cy.get('input[name="postalcode"]').type('63900-217')
        //Buscar endereço pelo CEP
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        //Campo Número do endereço
        cy.get('input[name="address-number"]').type('999')
        //Campo Complemento
        cy.get('input[name="address-details"]').type('Apartamento')

        //Validação dos campos preenchidos automaticamente
        cy.get('input[name="address"]').should('have.value', 'Rua Doutor Eudásio Barroso')
        cy.get('input[name="district"]').should('have.value', 'Centro')
        cy.get('input[name="city-uf"]').should('have.value', 'Quixadá/CE')

        cy.contains('.delivery-method li', "Moto").click()
        //Anexando o arquivo CNH
        cy.get('input[type="file"]').
            selectFile('cypress/fixtures/cnh-digital.jpg', { force: true })

    }

    submit() {
        //Clicar no botão cadastrar
        cy.contains('button[type="submit"]',
            "Cadastre-se para fazer entregas").click()
    }

    alertMessageShouldBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage)
    }

    clicButton(){
        cy.get('.swal2-container button').contains('Fechar').click()
    }

}

export default CadastroPage;