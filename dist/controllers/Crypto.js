import crypto from 'crypto';
class CryptoController {
    value;
    algoritm;
    constructor(value, algoritm = 'md5') {
        this.value = value;
        this.algoritm = algoritm;
    }
    hash() {
        return crypto.createHash(this.algoritm).update(this.value).digest('hex');
    }
}
export default CryptoController;
