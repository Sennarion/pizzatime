import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required field'),
  password: yup
    .string()
    .min(6, 'Too short')
    .max(12, 'Too long')
    .matches(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))/, 'Too simple')
    .required('Required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required field'),
});

export const signinSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('Required field'),
  password: yup.string().required('Required field'),
});

export const orderSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too short')
    .max(16, 'Too long')
    .required('Required field'),
  tel: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number is not valid')
    .required('Required field'),
});
