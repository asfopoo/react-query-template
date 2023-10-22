import * as Yup from 'yup';

const yupValidations = {
  email: Yup.string()
    .email('Please Enter a Valid Email Address')
    .required('Please Enter An Email Address'),
  password: Yup.string()
    .min(10, 'Password must contain at least 10 characters')
    .matches(/([0-9])/, 'Must Contain One Number')
    .matches(/([A-Z])/, 'Must Contain One Uppercase Letter')
    .matches(/([a-z])/, 'Must Contain One Lowercase Letter')
    .matches(/[^a-zA-Z0-9]/, 'Must contain One Special Character')
    .required('Please enter a password'),
  confirmPassword: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
  newPassword: (pass: string) =>
    Yup.string()
      .min(10, 'Password must contain at least 10 characters')
      .matches(/([0-9])/, 'Must Contain One Number')
      .matches(/([A-Z])/, 'Must Contain One Uppercase Letter')
      .matches(/([a-z])/, 'Must Contain One Lowercase Letter')
      .matches(/[^a-zA-Z0-9]/, 'Must contain One Special Character')
      .notOneOf([pass], 'New password must be different from old password')
      .required('Please enter a password'),
  username: Yup.string()
    .matches(/^(?!\s+$).*/, 'Must contain at least 1 character')
    .matches(
      /^[A-Za-z0-9_-]*$/,
      'Usernames can only contain alphanumerics, underscores, or dashes',
    )
    .required('Required'),
  phone: Yup.string()
    .matches(
      /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/,
      'Please Enter a Valid Phone Number',
    )
    .nullable(),
};

export default yupValidations;
