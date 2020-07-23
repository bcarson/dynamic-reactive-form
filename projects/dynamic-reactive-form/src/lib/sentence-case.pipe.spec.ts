import { SentenceCasePipe } from './sentence-case.pipe';

describe('SentenceCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SentenceCasePipe();
    expect(pipe).toBeTruthy();
  });
});
