interface IPostSigninProps {
  email: any;
  password: any;
}

interface IPostSigninResultsData {
  email: string;
  name: string;
  token: string;
}

interface IPostSigninResults {
  data: IPostSigninResultsData;
  message: string;
  success: boolean;
}

export interface IPostSignin {
  (props: IPostSigninProps): Promise<IPostSigninResults>;
}
