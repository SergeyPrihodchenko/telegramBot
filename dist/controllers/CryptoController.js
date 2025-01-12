import crypto from 'crypto';
class CryptoController {
    value;
    algorithm;
    static MD5 = 1;
    static SHA1 = 2;
    static SHA256 = 3;
    constructor(value, algorithm = 'MD5') {
        this.value = value;
        this.algorithm = algorithm;
    }
    hash() {
        return crypto.createHash(this.algorithm).update(this.value).digest('hex');
    }
    setAlgoritm(algorithm) {
        switch (algorithm) {
            case 1:
                this.algorithm = 'MD5';
                return true;
            case 2:
                this.algorithm = 'SHA-1';
                return true;
            case 3:
                this.algorithm = 'SHA-256';
                return true;
            default:
                return false;
        }
    }
}
export default CryptoController;
