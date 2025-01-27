import * as yup from 'yup'

const translation = {
  array: {
    max: '${path} deve ter no máximo ${max} itens.',
    min: '${path} deve ter no mínimo ${min} itens.'
  },
  date: {
    max: '${path} deve ser anterior a data ${max}.',
    min: '${path} deve ser posterior a data ${min}.'
  },
  mixed: {
    default: '${path} é inválido.',
    notOneOf:
      '${path} não deve ser um dos seguintes valores: ${values}.',
    oneOf: '${path} deve ser um dos seguintes valores: ${values}.',
    required: '${path} é um campo obrigatório.'
  },
  number: {
    integer: '${path} deve ser um número inteiro.',
    lessThan: '${path} deve ser menor que ${less}.',
    max: '${path} deve ser no máximo ${max}.',
    min: '${path} deve ser no mínimo ${min}.',
    moreThan: '${path} deve ser maior que ${more}.',
    negative: '${path} deve ser um número negativo.',
    notEqual: '${path} não pode ser igual à ${notEqual}.',
    positive: '${path} deve ser um número positivo.'
  },
  string: {
    email: '${path} tem o formato de e-mail inválido.',
    length: '${path} deve ter exatamente ${length} caracteres.',
    lowercase: '${path} deve estar em maiúsculo.',
    max: '${path} deve ter no máximo ${max} caracteres.',
    min: '${path} deve ter pelo menos ${min} caracteres.',
    trim: '${path} não deve conter espaços no início ou no fim.',
    uppercase: '${path} deve estar em minúsculo.',
    url: '${path} deve ter um formato de URL válida.'
  }
}

yup.setLocale(translation)

export { yup }
