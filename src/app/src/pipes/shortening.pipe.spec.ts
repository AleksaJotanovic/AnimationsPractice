import { ShorteningPipe } from './shortening.pipe';

describe('ShorteningPipe', () => {
  it('create an instance', () => {
    const pipe = new ShorteningPipe();
    expect(pipe).toBeTruthy();
  });
});
