var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '60150900',
                street: 'Avenida Santos Dumont',
                number: '3665',
                details: 'Ap 99',
                district: 'Aldeota',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}