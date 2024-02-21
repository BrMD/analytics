export type prompTypes = 'emailVerifier' | 'emailSearch' | 'domainVerifier';

export type prompt = { type: prompTypes; value: string };

export enum promptTypesEnum {
  emailVerifier = 'emailVerifier',
  emailSearch = 'emailSearch',
  domainVerifier = 'domainVerifier',
}
