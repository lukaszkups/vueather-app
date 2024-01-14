import { describe, it, expect } from 'vitest';
import { getNiceTime, degreesToWorldDirection, capitalizeFirstLetter } from '@/helpers/converters';

describe('getNiceTime converter', () => {
  it('converts "Date Sun Jan 14 2024 16:12:14 GMT+0100 (Central European Standard Time)" date property', () => {
    const ct = new Date(1705245134427);
    const d = getNiceTime(ct);
    expect(d).toBe('16:12');
  });

  it('converts "Date Sun Jan 14 2024 07:55:28 GMT+0100 (Central European Standard Time)" date property', () => {
    const ct = new Date(1705215328930);
    const d = getNiceTime(ct);
    expect(d).toBe('07:55');
  });
});

describe('degreesToWorldDirection converter', () => {
  it('converts 90deg to proper world direction', () => {
    const dir = degreesToWorldDirection(90);
    expect(dir).toBe('NE');
  });

  it('converts 120deg to proper world direction', () => {
    const dir = degreesToWorldDirection(120);
    expect(dir).toBe('E');
  });

  it('converts 250deg to proper world direction', () => {
    const dir = degreesToWorldDirection(250);
    expect(dir).toBe('SW');
  });

  it('converts 290deg to proper world direction', () => {
    const dir = degreesToWorldDirection(290);
    expect(dir).toBe('SW');
  });

  it('converts 360deg to proper world direction', () => {
    const dir = degreesToWorldDirection(360);
    expect(dir).toBe('NW');
  });
});

describe('capitalizeFirstLetter converter', () => {
  it('converts first letter to capital one from given text string (1)', () => {
    const capTxt = capitalizeFirstLetter('this is lowercase test');
    expect(capTxt).toBe('This is lowercase test');
  });

  it('converts first letter to capital one from given text string (2)', () => {
    const capTxt = capitalizeFirstLetter('tTT');
    expect(capTxt).toBe('TTT');
  });

  it('converts first letter to capital one from given text string (3)', () => {
    const capTxt = capitalizeFirstLetter('TTT');
    expect(capTxt).toBe('TTT');
  });

  it('converts first letter to capital one from given text string (4)', () => {
    const capTxt = capitalizeFirstLetter('');
    expect(capTxt).toBe('');
  });
});
