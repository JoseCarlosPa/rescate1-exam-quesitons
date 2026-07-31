import {describe, expect, it} from 'vitest';
import {mailtoHref, sanitizePhone, telHref, toWhatsAppNumber, whatsAppHref} from './contact';

describe('sanitizePhone', () => {
    it('elimina espacios y símbolos', () => {
        expect(sanitizePhone('55 1234 5678')).toBe('5512345678');
        expect(sanitizePhone('+52 (55) 1234-5678')).toBe('525512345678');
    });

    it('maneja null/undefined', () => {
        expect(sanitizePhone(null)).toBe('');
        expect(sanitizePhone(undefined)).toBe('');
    });
});

describe('toWhatsAppNumber', () => {
    it('antepone 52 a números mexicanos de 10 dígitos', () => {
        expect(toWhatsAppNumber('55 1234 5678')).toBe('525512345678');
    });

    it('respeta números que ya traen código de país', () => {
        expect(toWhatsAppNumber('+52 55 1234 5678')).toBe('525512345678');
    });

    it('devuelve vacío si no hay teléfono', () => {
        expect(toWhatsAppNumber('')).toBe('');
    });
});

describe('telHref', () => {
    it('genera tel: con dígitos', () => {
        expect(telHref('55 1234 5678')).toBe('tel:5512345678');
    });
    it('devuelve null sin teléfono', () => {
        expect(telHref('')).toBeNull();
    });
});

describe('whatsAppHref', () => {
    it('genera enlace wa.me', () => {
        expect(whatsAppHref('5512345678')).toBe('https://wa.me/525512345678');
    });
    it('incluye mensaje codificado', () => {
        expect(whatsAppHref('5512345678', 'Hola guardia')).toBe('https://wa.me/525512345678?text=Hola%20guardia');
    });
    it('devuelve null sin teléfono', () => {
        expect(whatsAppHref(null)).toBeNull();
    });
});

describe('mailtoHref', () => {
    it('genera mailto:', () => {
        expect(mailtoHref('a@b.com')).toBe('mailto:a@b.com');
    });
    it('devuelve null sin correo', () => {
        expect(mailtoHref('  ')).toBeNull();
    });
});
