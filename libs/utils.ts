import util from 'util';

export function validatePassword (clientPassword: string, fixedPassword: string): boolean {
  return clientPassword === fixedPassword;
}

export function printDeep (data: any) {
  if (typeof data === 'object') {
    console.log(util.inspect(data, {
      showHidden: false,
      depth: null,
      colors: true
    }));
  } else {
    console.log(data);
  }
}

export function delay (time: any) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// export function createRandomUsername (prefix: string) {
//   const randomText = generateRandomCode(RandomCodeType.MIX)(3);
//   return `${ prefix }_${ Math.floor((new Date().getTime()) / 1000) }${ randomText }`;
// }

export function checkEmailFormat (email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


export function checkPasswordFormat (password: string) {
  return /^(?:(?=.*\d)(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])|(?=.*\d)(?=.*[.,@#$_-])|(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[.,@#$_-])|(?=.*[A-Z])(?=.*[.,@#$_-])).{6,20}$/.test(password);
}

export function checkTelNumberFormat (telNumber: string) {
  return /^[1][3-9][0-9]{9}$/.test(telNumber);
}

