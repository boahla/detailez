export interface IgetPresignedUrlResult {
  url: string;
  formInput: {
    key: string;
    acl: string;
    "X-Amz-Credential": string;
    "X-Amz-Algorithm": string;
    "X-Amz-Date": string;
    Policy: string;
    "X-Amz-Signature": string;
  };
}
