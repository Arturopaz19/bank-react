export const validateWord = (word) => {
    const regex = /^[a-zA-Z áéíóúñüÁÉÍÓÚÑÜ]*$/
    return !!regex.test(word)
}