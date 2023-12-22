import * as Yup from "yup"


const registerSchema = Yup.object().shape({
    name: Yup.string().min(3, "نام کاربری حداقل سه کارکتر باشد").max(16, "نام کاربری از 16 کارکتر بیشتر نباشد").required("نام کاربری را وارد نمایید"),
    email: Yup.string().email().max(30, "ایمیل از 30 کارکتر بیشتر نباشد").required("ایمیل را وارد نمایید"),
    phone: Yup.string().matches(/^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'شماره تلفن معتبر نیست'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'رمزعبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک کاراکتر ویژه با حداقل ۸ کاراکتر باشد'),
})

export default registerSchema