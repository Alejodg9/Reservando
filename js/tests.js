var expect = chai.expect

describe('restaurant-reservarHorario', () => {
  it('al reservar un horario el largo array de horarios disminuye en uno', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    restaurant.reservarHorario('15:30')
    expect(restaurant.horarios.length).to.be.eql(2)
  })
  it('al reservar un horario se borra el horario correspondiente', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    restaurant.reservarHorario('15:30')
    expect(restaurant.horarios).to.not.include('15:30')
  })
  it('al reservar un horario que el restaurante no posee el arreglo se mantiene igual', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    var restoSinReserva = restaurant
    restaurant.reservarHorario('17:30')
    expect(restaurant).to.be.equal(restoSinReserva)
  })
  it('al ejecutar la funcion reservarHorario sin pasarle parametro el arreglo se mantiene igual', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    var restoSinReserva = restaurant
    restaurant.reservarHorario()
    expect(restaurant).to.be.equal(restoSinReserva)
  })
})

describe('restaurant-obtenerPuntuación', () => {
  it('el promedio de la calificaciones se calcula de manera correcta', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [9, 9, 9, 9, 9]
    )
    expect(restaurant.obtenerPuntuacion()).to.be.equal(9)
  })
  it('cuando el restaurant no tiene calificaciones la puntuacion es igual a 0', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      []
    )
    restaurant.obtenerPuntuacion()
    expect(restaurant.obtenerPuntuacion()).to.be.equal(0)
  })
})

describe('restaurant-calificar', () => {
  it('al pasar una letra como parametro de calificar  el array calificaciones se mantiene igual', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    var calificacionesAntesDeCalificar = restaurant.calificaciones
    restaurant.calificar('a')
    expect(restaurant.calificaciones.length).to.be.equal(
      calificacionesAntesDeCalificar.length
    )
  })
  it('al pasar un numero menor a 0 como parametro de calificar  el array calificaciones se mantiene igual', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    const calificacionesAntesDeCalificar = restaurant.calificaciones
    restaurant.calificar(-5)
    expect(restaurant.calificaciones.length).to.be.equal(
      calificacionesAntesDeCalificar.length
    )
  })

  it('al pasar un numero mayor a 10 como parametro de calificar  el array calificaciones se mantiene igual', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    const calificacionesAntesDeCalificar = restaurant.calificaciones

    restaurant.calificar(17)

    expect(restaurant.calificaciones).to.be.equal(
      calificacionesAntesDeCalificar
    )
  })
  it('al calificar el array de calificaciones aumenta su cantidad en uno', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    restaurant.calificar(9)
    expect(restaurant.calificaciones.length).to.be.equal(6)
  })
  it('al calificar el array de calificaciones pasa a contener la calificacion pasada por parametro', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    restaurant.calificar(8)
    expect(restaurant.calificaciones).to.include(8)
  })
})
describe('listado-buscarRestaurant(id)', () => {
  it('pasado un ID correcto por parametro la funcion devuelve el restaurant indicado', () => {
    var restaurant = new Restaurant(
      1,
      'TAO Uptown',
      'Asiática',
      'Nueva York',
      ['13:00', '15:30', '18:00'],
      '../img/asiatica1.jpg',
      [6, 7, 9, 10, 5]
    )
    expect(listado.buscarRestaurante(1)).to.be.eql(restaurant)
  })

  it('pasado un ID inexistente por parametro la funcion devuelve undefined', () => {
    expect(listado.buscarRestaurante(57)).to.be.an('undefined')
  })
})
describe('listado-obtenerRestaurante()', () => {
  it('al buscar un rubro existente la funcion devuelve los resultados correctos', () => {
    const busquedaRubro = listado.obtenerRestaurantes('Asiática', null, null)
    expect(busquedaRubro.length).to.be.equal(3)
    expect(busquedaRubro.map(restaurant => restaurant.id)).to.include.members([
      1,
      2,
      5
    ])
  })
  it('al buscar una ciudad existente la funcion devuelve los resultados correctos', () => {
    const busquedaRubro = listado.obtenerRestaurantes(null, 'Nueva York', null)
    expect(busquedaRubro.length).to.equal(7)
    expect(busquedaRubro.map(restaurant => restaurant.id)).to.include.members([
      1,
      4,
      12,
      13,
      14,
      15,
      24
    ])
  })
  it('al buscar un rubro existente la funcion devuelve los resultados correctos', () => {
    const busquedaRubro = listado.obtenerRestaurantes(null, null, '17:00')
    expect(busquedaRubro.length).to.equal(4)
    expect(busquedaRubro.map(restaurant => restaurant.id)).to.include.members([
      6,
      13,
      14,
      19
    ])
  })
})

describe('reserva-Constructor', () => {
  it('Orden de los parametros', () => {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1')
    expect(reservaTest.date.toString()).to.equal('Fri Aug 24 2018 11:00:00 GMT-0300 (Argentina Standard Time)')
    expect(reservaTest.cantidadDePersonas).to.equal(8)
    expect(reservaTest.precioPorPersona).to.equal(350)
    expect(reservaTest.codigoDeDescuento).to.equal('DES1')
  })
})

describe('reserva-baseReserva', () => {
  it('El precio base de la reserva se calcula correctamente', () => {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1')
    expect(reservaTest.baseReserva()).to.equal(2800)
  })
})
describe('reserva-totalReserva', () => {
  it('El precio total de la reserva se calcula correctamente', () => {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1')
    expect(reservaTest.totalReserva()).to.equal(2450)
  })
})
