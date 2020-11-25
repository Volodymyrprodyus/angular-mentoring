import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('should create an instance', () => {
    const pipeInstance = new DurationPipe();
    expect(pipeInstance).toBeTruthy();
  });

  it('should show only minutes if duration less than 1h', () => {
    const resMockTime = pipe.transform(20);
    expect(resMockTime).toEqual('20 min');
  });

  it('should show duration in format "hh h mm min"', () => {
    const resMockTime = pipe.transform(320);
    expect(resMockTime).toEqual('05 h 20 min');
  });

  it('should return "not specified" if duration is undefined', () => {
    const resMockTime = pipe.transform(undefined);
    expect(resMockTime).toEqual('not specified');
  });

  it('should return "not specified" if duration is null', () => {
    const resMockTime = pipe.transform(null);
    expect(resMockTime).toEqual('not specified');
  });

  it('should return "not specified" if duration is 0', () => {
    const resMockTime = pipe.transform(0);
    expect(resMockTime).toEqual('not specified');
  });
});
