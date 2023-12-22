import React, { ReactNode } from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { GiSonicShoes } from 'react-icons/gi'
import { MdOutlinePhone } from 'react-icons/md'
import { IoLockClosedOutline } from "react-icons/io5"
import Input from '../../component/Form/Input'
import Button from '../../component/CustomButton/CustomButton'
import { useFormik } from "formik"
import registerSchema from "../../validaitons/registerForm"

export default function Register() {


    const form = useFormik({
        initialValues: { name: "", email: "", password: "", phone: "" },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(values);

            setTimeout(() => {
                setSubmitting(false)
                resetForm()
            }, 3000);

        },

        validationSchema: registerSchema
    });

    const showErrorMessage = (form: any, name: string): ReactNode => {
        const result = (form.errors[name] && form.touched[name]) ? <h2>{form.errors[name]}</h2> : <></>

        return result;
    }

    return (
        <div className="flex items-center justify-center md:mt-36 md:mb-24">
            <div className="w-full xs:w-[500px] px-5 xs:p-0 border border-gray-300 shadow-light dark:shadow-none bg-white dark:bg-gray-800 rounded-2xl ">
                {/* <!-- SabzLearn Logo --> */}
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
                            <h2 className="font-morabbaMedium text-zinc-700 dark:text-white text-3xl mb-2 sm:mb-5">عضویت</h2>
                            <span className="help-alert font-danaLight text-lg text-slate-500 dark:text-gray-500">
                                قبلا ثبت نام کرده‌اید؟
                                <a href="#" className="text-sky-400 hover:text-sky-500 transition-colors">وارد شوید</a>
                            </span>
                        </div>
                        <form className="rounded-2xl" onSubmit={form.handleSubmit}>
                            <div className="space-y-2.5 sm:space-y-3.5 w-full">
                                <div className="relative overflow-hidden">
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="نام کاربری"
                                        className="w-full text-right py-3 pl-9 sm:pl-12 rounded-xl"
                                        value={form.values.name}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
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
                                        value={form.values.phone}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur} />

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
                                        value={form.values.email}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
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
                                        value={form.values.password}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <span className="absolute sm:text-2xl left-3 sm:left-4 sm:top-4">
                                        <IoLockClosedOutline />
                                    </span>
                                </div>
                                {showErrorMessage(form, 'password')}


                            </div>

                            <Button type="submit"
                                className={`${form.isSubmitting ? " bg-green-400" : "bg-green-300"} user-data__submit button-md h-12 sm:button-lg bg-green-400 tracking-tighter hover:bg-green-500 rounded-xl text-white text-xl mt-2.5 sm:mt-4 w-full`}
                                disabled={form.isSubmitting}>
                                ثبت نام
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
