import * as Yup from "yup"
const loginSchema = Yup.object().shape({
  
    phone: Yup.string().matches(/^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'شماره تلفن معتبر نیست').required('شماره موبایل الزامی است'),
 
})

export default loginSchema