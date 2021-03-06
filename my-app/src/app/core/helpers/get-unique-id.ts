export function getUuid(): string {
    const len = 36;
    let s = [];
    const hexDigits: string = '0123456789abcdef';
    for (let i = 0; i < len; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
}
