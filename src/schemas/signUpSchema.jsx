import * as Yup from "yup";
import  'yup-phone';

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  contact:Yup.string().matches(/^[0-9]{10}$/, "Invalid Phone Number").required("Plase enter 10 digit phone number"),
  weekday:Yup.array().of(Yup.string().oneOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])).required("Select the weekday"),
  gender:Yup.string().required('Selecting the gender field is required'),
  dob:Yup.date().required("Data of Birth is required "),
});