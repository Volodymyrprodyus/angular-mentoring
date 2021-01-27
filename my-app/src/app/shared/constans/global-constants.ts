export class GlobalConstants {
  public static userAuthKey = 'User_authKey';
  public static baseUrl = 'http://localhost:3004';
  public static messages = {
    title: {
      required: '*Enter correct title',
      maxlength: '***Max length 50 symbols***'
    },
    description: {
      required: '*Enter correct description',
      maxlength: '***Max length 500 symbols***'
    },
    date: {
      required: '*Enter correct date',
      pattern: '***The date need mutch dd/mm/yyyy***'
    },
    duration: {
      required: '*Enter correct duration',
      pattern: '***Use only digits***'
    },
    authors: {
      required: '***Enter correct authors***'
    }
  };
}
