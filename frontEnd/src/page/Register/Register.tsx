import React, { ReactNode, memo, useContext, useMemo, useState } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { GiSonicShoes } from 'react-icons/gi';
import { MdOutlinePhone } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import Button from '../../component/CustomButton/CustomButton';
import { useFormik } from 'formik';
import registerSchema from '../../validaitons/registerFormValidaitor';
import UserContext from '../../context/userContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Register = memo(() => {
    const userContext = useContext(UserContext);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate()
    const swal = withReactContent(Swal)


    const form = useFormik({
        initialValues: { userName: '', email: '', password: '', phone: '' },
        onSubmit: (formValues, { setSubmitting, resetForm }) => {
            const { userName, phone, email, password } = formValues;
            const newUserInfos = {
                userName,
                phone,
                email,
                password,
            };
            fetch('http://localhost:4000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserInfos),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log('resulttttttttttttTokenRegister', result);

                    if (result?._id) {
                        userContext.login(result);
                        swal.fire({
                            title: "ثبت نام با موفقیت انجام شد",
                            icon: "success",
                            confirmButtonText: "ورود به پنل کاربری",
                            timer: 3000,
                            timerProgressBar: true,
                        }).then((value) => {
                            navigate("/")
                        })
                    } else {
                        alert(result?.message);
                        swal.fire({
                            title: result?.message,
                            text: "اطلاعات کاربری را به درستی وارد نمایید",
                            icon: "error",
                            confirmButtonText: "تلاش دوباره",
                        })
                    }
                });

            setTimeout(() => {
                setSubmitting(false);
                setFormSubmitted(true);
                // resetForm();
            }, 3000);
        },
        validationSchema: registerSchema,
    });

    const showErrorMessage = (form: any, name: string): ReactNode => {
        const result = form.errors[name] && form.touched[name] ? <h2>{form.errors[name]}</h2> : <></>;
        return result;
    };

    const { handleSubmit, values, handleChange, handleBlur, isSubmitting } = form;
    const { userName, phone, email, password } = values;
    return (
        <div className="flex items-center justify-center md:mt-36 md:mb-24">
            <div className="w-full xs:w-[500px] px-5 xs:p-0 border border-gray-300 shadow-light dark:shadow-none bg-white dark:bg-gray-800 rounded-2xl ">
                {/* <!--  Logo --> */}
                <div className="flex items-center justify-center gap-x-2.5 mb-3 sm:mb-4 pt-7 border-b border-b-gray-200 dark:border-b-gray-700">
                    <div className='flex items-center text-sky-500 text-8xl shrink-0'>
                        <GiSonicShoes />
                    </div>
                </div>
                {/* <!-- Page Body --> */}
                <div className="relative p-7 sm:px-8 sm:py-9 bg-white dark:bg-gray-800 shadow-light dark:shadow-none rounded-xl">
                    {/* <!-- Step 1 - Student Data Inputs --> */}
                    <div className="user-data">
                        <div className="text-center mb-7 sm:mb-9">
                            <h2 className="font-morabbaMedium text-zinc-700 dark:text-white text-3xl mb-2 sm:mb-5"> عضویت </h2>
                            <span className="help-alert font-danaLight text-lg text-slate-500 dark:text-gray-500">
                                قبلا ثبت نام کرده‌اید؟
                                <Link to="/login" className="text-sky-400 hover:text-sky-500 transition-colors"> وارد شوید </Link>
                            </span>
                        </div>
                        <form className="rounded-2xl" onSubmit={handleSubmit}>
                            <div className="space-y-2.5 sm:space-y-3.5 w-full">
                                <div className="relative overflow-hidden">
                                    <input
                                        type="text"
                                        name='userName'
                                        placeholder="نام کاربری"
                                        className="w-full text-right py-3 pl-9 sm:pl-12 rounded-xl"
                                        value={userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className='absolute left-3 sm:left-4 sm:top-3 sm:text-2xl'>
                                        <CiUser />
                                    </span>
                                </div>
                                {/* {form.errors.name && form.touched.name && <h2>{form.errors.name}</h2>} */}
                                {showErrorMessage(form, 'name')}

                                <div className="relative overflow-hidden">
                                    <input
                                        type="text"
                                        name='phone'
                                        className="w-full text-right py-3 pl-9 sm:pl-12 rounded-xl"
                                        placeholder="شماره موبایل"
                                        value={phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />

                                    <span className="absolute sm:text-2xl left-3 sm:left-4 sm:top-4">
                                        <MdOutlinePhone />
                                    </span>
                                </div>
                                {showErrorMessage(form, 'phone')}

                                <div className="relative overflow-hidden">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full text-right py-3 pl-9 sm:pl-12 rounded-xl"
                                        placeholder="آدرس ایمیل"
                                        value={email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className="absolute sm:text-2xl left-3 sm:left-4 sm:top-4">
                                        <BsEnvelope />
                                    </span>
                                </div>
                                {showErrorMessage(form, 'email')}
                                <div className="relative overflow-hidden">
                                    <input
                                        type="password"
                                        name="password"
                                        className="w-full text-right py-3 pl-9 sm:pl-12 rounded-xl"
                                        placeholder="رمز عبور"
                                        value={password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className="absolute sm:text-2xl left-3 sm:left-4 sm:top-4">
                                        <IoLockClosedOutline />
                                    </span>
                                </div>
                                {showErrorMessage(form, 'password')}
                            </div>
                            <Button type="submit"
                                className={`${isSubmitting ? "bg-red-500" : "bg-green-400"} user-data__submit button-md h-12 sm:button-lg bg-green-400 tracking-tighter hover:bg-green-500 rounded-xl text-white text-xl mt-2.5 sm:mt-4 w-full`}
                                disabled={isSubmitting}>
                                ثبت نام
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Register