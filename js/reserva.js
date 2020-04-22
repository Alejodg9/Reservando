var Reserva = function (
  date,
  cantidadDePersonas,
  precioPorPersona,
  codigoDeDescuento
) {
  this.date = date
  this.cantidadDePersonas = cantidadDePersonas
  this.precioPorPersona = precioPorPersona
  this.codigoDeDescuento = codigoDeDescuento
}

Reserva.prototype.baseReserva = function () {
  return this.cantidadDePersonas * this.precioPorPersona
}

Reserva.prototype.totalReserva = function () {
  const precioBruto = this.baseReserva()
  const adicional =
    this.calcularAdicionalFinde(precioBruto) +
    this.calcularAdicionalHorario(precioBruto)
  const descuento =
    this.calcularDescuentoGrupos(precioBruto) +
    this.calcularDescuentoCodigo(precioBruto)
  const precioTotal = precioBruto - descuento + adicional
  return precioTotal
}

Reserva.prototype.calcularAdicionalFinde = function (base) {
  let dia = this.date.getDay()
  let adicionalFinde = 0

  if (dia == 0 || dia == 5 || dia == 6) {
    adicionalFinde = (base * 10) / 100
  } else {
    adicionalFinde = 0
  }
  return adicionalFinde
}

Reserva.prototype.calcularAdicionalHorario = function (base) {
  let horario = this.date.getHours()
  let adicionalHora = 0

  if (horario == 13 || horario == 20) {
    adicionalHora = (base * 5) / 100
  } else {
    adicionalHora = 0
  }
  return adicionalHora
}

Reserva.prototype.calcularDescuentoGrupos = function (base) {
  const numeroDePersonas = this.cantidadDePersonas
  let descuento = 0

  if (numeroDePersonas >= 4 && numeroDePersonas <= 6) {
    descuento = (base * 5) / 100
  } else if (numeroDePersonas == 7 || numeroDePersonas == 8) {
    descuento = (base * 10) / 100
  } else if (numeroDePersonas > 8) {
    descuento = (base * 15) / 100
  } else {
    descuento = 0
  }
  return descuento
}

Reserva.prototype.calcularDescuentoCodigo = function (base) {
  const codigoDES = this.codigoDeDescuento
  let descuento = 0
  let precioPorPersona = this.precioPorPersona

  if (codigoDES == 'DES15') {
    descuento = (base * 15) / 100
  } else if (codigoDES == 'DES200') {
    descuento = 200
  } else if (codigoDES == 'DES1') {
    descuento = precioPorPersona
  } else {
    descuento = 0
  }
  return descuento
}