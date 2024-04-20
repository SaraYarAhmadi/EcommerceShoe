import react, { ReactNode, memo, useState } from 'react';
import { GiSonicShoes } from 'react-icons/gi';
import Button from '../../component/CustomButton/CustomButton';
import { useFormik } from 'formik';
import { CiUser } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';
import { useContext } from 'react';
import UserContext from '../../context/userContext';
import { Link, json, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Login = memo(() => {
    const userContext = useContext(UserContext)
    const navigate = useNavigate()
    const [formSubmitted, setFormSubmitted] = useState(false);
    const swal = withReactContent(Swal)

    const form = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: async (formValues, { setSubmitting, resetForm }) => {

            const { email, password } = formValues;
            const userData = {
                email,
                password,
            };

            try {
                const response = await fetch("http://localhost:3000/api/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(errorText);
                }
                const result = await response.json();
                console.log("tokenforlogin", result);
                userContext.login(result);
                swal.fire({
                    title: "لاگین با موفقیت انجام شد",
                    icon: "success",
                    confirmButtonText: "ورود به پنل کاربری",
                    timer: 3000,
                    timerProgressBar: true,
                }).then((value) => {
                    navigate("/")
                })
            } catch (err: any) {
                console.log(err);

                swal.fire({
                    title: "لاگین با موفقیت انجام نشد",
                    text: "ایمیل و پسورد را به درستی وارد نمایید",
                    icon: "error",
                    confirmButtonText: "تلاش دوباره",
                })
            }

            setTimeout(() => {
                setSubmitting(false);
                // resetForm()
            }, 3000);
        },
    });

    const showErrorMessage = (form: any, name: string): ReactNode => {
        const result = (form.errors[name] && form.touched[name]) ? <p>{form.errors[name]}</p> : <></>;
        return result;
    }

    const forgotPasswordHandler = () => {
        swal.fire({
            title: " این بخش در حال انجام است ",
            icon: "success",
            confirmButtonText: "ورود به پنل کاربری",
            timer: 3000,
            timerProgressBar: true,
        }).then((value) => {
            navigate("/")
        })
    }
    const { handleSubmit, values, handleChange, handleBlur, isSubmitting } = form;
    const { email, password } = values;
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="w-full xs:w-[500px] px-5 xs:p-0 border border-gray-300 shadow-light dark:shadow-none bg-white dark:bg-gray-800 rounded-2xl ">
                {/* <!--Logo --> */}
                <div className="flex items-center justify-center gap-x-2.5 mb-7 sm:mb-8 pt-7 border-b border-b-gray-200 dark:border-b-gray-700">
                    <div className='flex items-center text-sky-500 text-8xl shrink-0'>
                        <GiSonicShoes />
                    </div>
                </div>
                {/* <!-- Page Body --> */}
                <div className="relative p-7 sm:px-8 sm:py-9 bg-white dark:bg-gray-800 shadow-light dark:shadow-none rounded-xl">
                    {/* <!-- Step 1 - Phone Number Inputs --> */}
                    <div className="user-data">
                        <div className="text-center mb-7 sm:mb-9">
                            <h2 className="font-morabbaMedium text-zinc-700 dark:text-white text-3xl mb-2 sm:mb-5"> ورود </h2>
                            <span className="help-alert font-danaLight text-lg text-slate-500 dark:text-gray-500">
                                حساب کاربری ندارید؟
                                <Link to="/register" className="text-sky-400 font-dana hover:text-sky-500 transition-colors"> ثبت نام </Link>
                            </span>
                        </div>
                        <form className="rounded-2xl" onSubmit={handleSubmit}>
                            <div className="space-y-2.5 sm:space-y-3.5 w-full">

                                <div className="relative overflow-hidden">
                                    <input
                                        type="text"
                                        name='email'
                                        placeholder="ایمیل خود را وارد کنید"
                                        className="w-full text-right py-3 pl-9 sm:pl-12 rounded-xl"
                                        value={email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className='absolute left-3 sm:left-4 sm:top-3 sm:text-2xl'>
                                        <CiUser />
                                    </span>
                                </div>
                                {showErrorMessage(form, 'name')}

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
                                disabled={isSubmitting}
                            > ورود
                            </Button>
                        </form>
                        <div className="flex justify-between mt-5 text-sm text-slate-500 dark:text-slate-400 tracking-tight">
                            <a href="#" onClick={forgotPasswordHandler}> رمز را فراموش کردم </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Login;