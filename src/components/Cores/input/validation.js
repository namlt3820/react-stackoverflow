import validator from 'validator'

const isRequired = message => value => validator.isEmpty(value) ? message : ''
const isEmail = message => value => validator.isEmail(value) ? '' : message

const combineValidations = arr => value => {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    result = arr[i](value)
    if (result !== '') break
  }
  return result
}

export { isRequired, isEmail, combineValidations }