
const RandomString = (length) => {
    let result           = '';
    let chars       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let r = chars.length;
    for ( let i = 0; i < length; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * r));
    }
    return result;
}
export default RandomString;
