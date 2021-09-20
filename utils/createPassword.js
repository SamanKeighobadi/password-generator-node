const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789';
const symbols = '!~@#$%^&*-=+?'

exports.createPassword = (length='9',hasNumbers=true,hasSymbols=true) => {
    let chars = alpha;
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return chars;
}