import crypto from 'crypto';
import { ICrypto } from '../interfaces/ICrypto';
class CryptoController implements ICrypto {
    private value: string;
    private algorithm: string;

    static MD5: number = 1;
    static SHA1: number = 2;
    static SHA256: number = 3;

    constructor(value: string, algorithm: string = 'MD5') {
        this.value = value;
        this.algorithm = algorithm;
    }

    public hash() {
        return crypto.createHash(this.algorithm).update(this.value).digest('hex');
    }

    public setAlgoritm<T = number>(algorithm: T) {
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