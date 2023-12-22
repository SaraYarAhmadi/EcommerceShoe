import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { GiSonicShoes } from 'react-icons/gi'
import { MdOutlinePhone } from 'react-icons/md'
import Input from '../../component/Form/Input'
import Button from '../../component/CustomButton/CustomButton'
import { useFormik } from 'formik'
import registerSchema from '../../validaitons/registerForm'

export default function Login() {

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


    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="w-full xs:w-[500px] px-5 xs:p-0 border border-gray-300 shadow-light dark:shadow-none bg-white dark:bg-gray-800 rounded-2xl ">
                {/* <!-- SabzLearn Logo --> */}
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
                            <h2 className="font-morabbaMedium text-zinc-700 dark:text-white text-3xl mb-2 sm:mb-5">ورود</h2>
                            <span className="help-alert font-danaLight text-lg text-slate-500 dark:text-gray-500">
                                حساب کاربری ندارید؟
                                <a href="#" className="text-sky-400 font-dana hover:text-sky-500 transition-colors">ثبت نام</a>
                            </span>
                        </div>
                        <form className="rounded-2xl" onSubmit={form.handleSubmit}>
                            {/* <input type="hidden" id="after_url" value="https://sabzlearn.ir/" /> */}
                            {/* <!-- Inputs --> */}
                            <div className="space-y-2.5 sm:space-y-3.5  w-full">
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
                            </div>
                            <Button type="submit"
                                className={`${form.isSubmitting ? " bg-green-400" : "bg-green-300"} user-data__submit button-md h-12 sm:button-lg bg-green-400 tracking-tighter hover:bg-green-500 rounded-xl text-white text-xl mt-2.5 sm:mt-4 w-full`}
                                disabled={form.isSubmitting}>تایید</Button>
                        </form>
                        <div className="flex justify-between mt-5 text-sm text-slate-500 dark:text-slate-400 tracking-tight">
                            <a href="#">ورود با ایمیل</a>
                            <a href="#">حریم خصوصی</a>				</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
