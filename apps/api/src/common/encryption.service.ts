import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class EncryptionService {
  private getKey(): Buffer {
    const raw = process.env.ENCRYPTION_KEY || '';
    const key = raw.length === 44 ? Buffer.from(raw, 'base64') : Buffer.from(raw);
    if (key.length !== 32) {
      throw new Error('ENCRYPTION_KEY must be 32 bytes or base64-encoded 32 bytes.');
    }
    return key;
  }

  encrypt(value: string) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', this.getKey(), iv);
    const encrypted = Buffer.concat([cipher.update(value, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([iv, tag, encrypted]).toString('base64');
  }

  decrypt(value: string) {
    const data = Buffer.from(value, 'base64');
    const iv = data.subarray(0, 12);
    const tag = data.subarray(12, 28);
    const encrypted = data.subarray(28);
    const decipher = crypto.createDecipheriv('aes-256-gcm', this.getKey(), iv);
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString('utf8');
  }
}
