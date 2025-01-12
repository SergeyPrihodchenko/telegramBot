import crypto from 'crypto';
class CryptoController {
    private value: string;
    private algoritm: string;

    constructor(value: string, algoritm: string = 'md5') {
        this.value = value;
        this.algoritm = algoritm;
    }

    public hash(): string {
        return crypto.createHash(this.algoritm).update(this.value).digest('hex');
    }
}

export default CryptoController;