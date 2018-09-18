import { NmToasterModule } from './toaster.module';

describe('NmToasterModule', () => {
  let NmToasterModule: NmToasterModule;

  beforeEach(() => {
    NmToasterModule = new NmToasterModule();
  });

  it('should create an instance', () => {
    expect(NmToasterModule).toBeTruthy();
  });
});
