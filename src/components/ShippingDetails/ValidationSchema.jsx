import * as Yup from 'yup';

const validationDeliveryFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(15, 'The name should not consist of more 15 symbols')
    .min(2, 'The name should consist of minimum 2 symbols')
    .required('Required'),
  surname: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid surname')
    .max(15, 'The surname should not consist of more 15 symbols')
    .min(2, 'The surname should consist of minimum 2 symbols')
    .required('Required'),
  address: Yup.string()
    .matches([], 'Please enter a valid address')
    .min(3, 'The address should consist of minimum 3 symbols')
    .max(30, 'The address should not consist of more than 30 symbols')
    .required('Required'),
  secondAddress: Yup.string()
    .matches([], 'Please enter a valid address')
    .min(3, 'The address should consist of minimum 3 symbols')
    .max(30, 'The address should not consist of more than 30 symbols'),
  country: Yup.string().required('Required'),
  city: Yup.string()
    .matches(/[A-Za-z]/g, 'Please select a city')
    .min(3, 'The address should consist of minimum 3 symbols')
    .max(20, 'The address should not consist of more than 20 symbols')
    .required('Required'),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(3, 'Zip code should consist of minimum 3 symbols')
    .max(5, 'Zip code should not consist of more than 5 symbols')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .min(12, 'Prone number require 13 symbols')
    .max(12, 'Prone number require 13 symbols')
    .required('Required '),
  Delivery: Yup.string().required('Required'),
});

export default validationDeliveryFormSchema;
