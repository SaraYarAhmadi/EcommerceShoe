import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";

export default function ArticleInfo() {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 mb-12 md:mb-36 pt-6 lg:pt-24">

      <Breadcrumb links={[
        { id: 1, title: "خانه", to: "" },
        { id: 1, title: "مقالات", to: "Category-info/products" },
      ]} />


      <section className="col-span-1 mt-20 mb-10">
        <div className="p-10 md:p-16 dark:border border-gray-700 shadow-light dark:shadow-none bg-white dark:bg-gray-800 rounded-2xl">
          <div className="pb-6 mb-5 border-b border-b-gray-200 dark:border-b-gray-700">
            <h1 className="text-zinc-700 dark:text-white font-morabba text-2xl/9 lg:text-4xl/[48px]">معرفی انواع واکس کفش </h1>
          </div>
          <div>
            <div className=" flex mb-8 items-center justify-center mx-auto">
              <div className="w-[700px] h-[300px]">
                <img src="/img/shoe/blog1.jpg" className="w-full  h-full block rounded-3xl object-cover object-center" alt="معرفی انواع واکس کفش " />
              </div>
            </div>
            {/* <!-- Course Full Description --> */}
            <div className="w-full text-justify font-DanaMedium text-sm md:text-base">
              <div className="text-zinc-700 dark:text-white font-danaLight leading-7 lg:leading-9">
                <p> داشتن کفش‌های چرم زیبا، جذاب و صیقلی نقش زیادی در منحصربه‌فرد شدن استایلتان ایفا می‌کند؛ اما انتخاب واکس کفش مناسب امکان دارد برای شما به یک چالش تبدیل شده باشد. واکس کفش می‌تواند در درخشش، ضدآب بودن یا حتی بازسازی و اصلاح چرم خشک و ترک‌خورده کاربرد داشته باشد. این خمیر مومی، کرم یا مایع به منظور صیقل دادن، افزایش درخشش به کفش یا چکمه چرمی همچنین بالا بردن طول عمر و بازیابی ظاهر آن‌ها استفاده می‌شود. </p>
                <p> واکس‌ها دارای بافت‌ و ویژگی‌های مختلفی از مایع گرفته تا جامد تولید می‌شوند؛ این محصولات شامل حلال‌ها، رنگ‌دهنده‌ها و مواد تشکیل‌دهنده واکس هستند. احتمالاً همه‌ ما کفش و کاپشن چرمی داریم که نمی‌خواهیم با ترک‌خورده شدن آن‌ها روبه‌رو شویم. همان‌طور که می‌دانید هیچ چیزی سریع‌تر از ظاهر نامرتب نمی‌تواند از شکوه و شیکی ظاهر  شما کم کند؛ اما خوشبختانه با استفاده از یک واکس مرغوب و متناسب با چرم کفش می‌توان دوباره کفش را به حالت اولش برگرداند.
                </p>
                <p> انتخاب واکس مناسب برای کفش بسیار مهم است. انواع گوناگونی از مدل‌های واکس کفش در بازار عرضه می‌شوند. در ادامه انواع واکس را مورد بررسی قرار می‌دهیم همچنین مزایا و معایب هر کدام را درک کرده و یاد می‌گیریم کدام واکس برای کفش مناسب است.

                </p>
                <h2><strong>واکس مومی&nbsp;چیست؟ </strong> </h2>
                <p>نسبت به دیگر گزینه‌های واکس، واکس مومی به عنوان یک ابزارعالی و چند منظوره برای استفاده، مطرح است. در ساخت این نوع واکس از مواد مومی استفاده شده و تنها حاوی مقدار کمی رنگدانه است که به ترکیب اضافه می‌شود. واکس مومی به عنوان یکی از گران‌قیمت‌ترین انواع واکس برای محصولات چرمی شناخته می‌شود. این نوع واکس، بخاطر برخورداری از حلال‌های فرار با ارزش بالا، پس از استفاده، حالت جامد به خود می‌گیرد و براقیتش را حفظ می‌کند.</p>
                <p>مواد اصلی در ترکیب واکس‌های مومی معمولاً شامل حلال‌های آلی، موم و رنگ‌دهنده‌ها هستند. بسیاری از واکس‌های گیاهی از موم نخل، موم زنبورعسل و موم زغال قهوه‌ای به دست می‌آیند که از جمله معروف‌ترین نوع موم‌ها هستند.</p>
                <p> یکی از بزرگترین مزایای استفاده از واکس کفش مومی، ویژگی آب‌گریزی آن است. استفاده از این نوع واکس بر روی کفش می‌تواند یک لایه ضدآب بر روی کفش ایجاد و از آن در برابر هر شرایط آب و هوایی محافظت کند. لازم به ذکر است استفاده از واکس مومی در افزایش طول عمر کفش چرم نیز نقش دارد. </p>

                <h2><strong> واکس مایع </strong></h2>
                <p>واکس‌ها به اشکال مختلفی از حالت جامد گرفته تا مایع تولید می‌شوند. واکس‌های مایع، در مقایسه با واکس‌های جامد، دارای حالت لعابی هستند. این نوع واکس معمولاً حاوی مقدار کمی موم است. واکس کفش مایع یک ترکیب پیچیده دارد. اگرچه ممکن است واکس مایع باعث درخشش سریع کفش‌ها شود، اما بسیاری از کارشناسان هشدار می‌دهند که بهتر است از آن برای مدت زمان طولانی استفاده نشود؛ زیرا باعث خشک شدن و ترک خوردن چرم می‌شود.</p>
                <h2><strong> واکس  کرمی </strong></h2>
                <p> یک راه‌حل مناسب و مؤثر برای افزایش زیبایی کفش‌های چرمی شما، استفاده از واکس کرمی است. این نوع خاص از واکس کفش با واکس‌های مومی تفاوت دارد. واکس کرمی کفش معمولاً از پایه کرم تشکیل شده و حاوی مقدار زیادی رنگدانه است. </p>
                <p> برخلاف انواع دیگر واکس کفش، جذابیت اصلی واکس کرمی در بازیابی رنگ اصلی کفش است. این واکس به عنوان یک براق کننده رنگ عمل می‌کند که برای بازگرداندن رنگ کمرنگ یا پر کردن ناهمواری‌های موجود بر روی کفش‌ها استفاده می‌شود. هرچند واکس کرمی برای اکثر کفش‌های چرمی صاف گزینه‌ای عالی است، اما در برخی از موارد امکان دارد به برخی از انواع چرم‌ آسیب برساند. </p>
                <h2><strong> واکس  سنتی </strong></h2>
                <p> واکس‌های سنتی عمدتاً از موم‌های طبیعی به دست می‌آیند. این نوع واکس‌ها به تعمیر و پرکردن جاهای خالی در چرم کفش کمک می‌کنند. به عبارت دیگر موم موجود در واکس به طور کامل سوراخ‌های کوچک و شکاف‌های چرمی را پر کرده و به کفش شما درخشش و سطحی صاف می‌بخشد. واکس مومی سنتی از ترکیبات نفتی یا چربی حیوانی تشکیل شده است به همین دلیل امکان دارد نیاز به چندین لایه داشته باشد. </p>
                <p> واکس کارناوبا یکی از معروف‌ترین واکس‌های سنتی در امریکا به شمار می‌رود که از روغن برگ درخت خرما در برزیل استخراج می‌شود. هر ساله، تنها حدود 30٪ از برگ‌ها را برای تولید موم برداشت می‌کنند؛ درختان باقی‌مانده برای جذب کربن باقی می‌مانند و به خوبی در آینده رشد می‌کنند. استفاده از این موم کاملاً طبیعی، پایدار و متناسب با محیط زیست است. </p>
                <div className=" flex mb-8 items-center justify-center mx-auto">
                  <div className="w-[700px] h-[300px]">
                    <img src="/img/shoe/blog2.jpg" className="w-full  h-full block rounded-3xl object-cover object-center" alt="معرفی انواع واکس کفش " />
                  </div>
                </div>
                <h2><strong> چه وسایلی برای واکس زدن مورد نیاز است؟ </strong></h2>
                <h2><strong> فرچه واکس چرم</strong></h2>
                <p> فرچه واکس، وسیله‌ای ساده برای پخش کردن واکس روی کفش چرم به شمار می‌رود. استفاده از فرچه‌های پلاستیکی توصیه نمی‌شود؛ زیرا نه ‌تنها واکس به خوبی روی چرم پخش نمی‌شود بلکه امکان دارد به چرم آسیب برساند. حتماً اطمینان حاصل کنید که فرچه واکس تمیز باشد. </p>
                <h2><strong> فرچه پولیش چرم </strong></h2>
                <p> پس از واکس زدن با فرچه واکس، نوبت استفاده از فرچه پولیش است. این فرچه اضافی واکس روی کفش را برمی‌دارد و رنگ کفش را در تمام قسمت‌ها یک‌دست می‌کند. </p>


                <h2><strong> فرچه پولیش چرم </strong></h2>
                <p> پس از واکس زدن با فرچه واکس، نوبت استفاده از فرچه پولیش است. این فرچه اضافی واکس روی کفش را برمی‌دارد و رنگ کفش را در تمام قسمت‌ها یک‌دست می‌کند. </p>

                <h2><strong> روش درست واکس زدن به چه صورت است؟  </strong></h2>
                <p> برای آن‌که بتوانیم به درستی واکسن بزنیم باید به یک سری نکات توجه کنیم که در ادامه آن‌ها را مورد بررسی قرار می‌دهیم. </p>
                <ul>
                  <li> استفاده از قالب یا روزنامه </li>
                  <li> تمیز کردن سطح کفش </li>
                  <li> واکس زدن </li>
                  <li> پولیش کردن </li>
                </ul>
              </div>

            </div>

          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-t-gray-200 dark:border-t-gray-700 mt-6">
            <div className="text-xs font-danaMedium text-zinc-700 dark:text-white">
              <svg className="w-5 h-5 ml-0.5">
                <use href="#user"></use>
              </svg>
              <span>نوشته از سایت چرم مشهد  </span>
            </div>
            <div className="text-xs font-danaMedium text-zinc-700 dark:text-white">
              <svg className="w-5 h-5 ml-0.5">
                <use href="#calendar-days"></use>
              </svg>
              <span>1402/09/18</span>
            </div>
          </div>
        </div>

      </section>
      <div className="bg-white dark:bg-gray-800 px-3.5 md:px-5 pt-5 md:pt-7 pb-3.5 md:pb-6 shadow-light dark:shadow-none rounded-2xl mt-4 sm:mt-5" id="course-comments">
        {/* <!-- Comment Section Head --> */}
        <div className="flex-layout flex-wrap mb-5">
          <div className="flex items-center gap-x-3.5">
            <span className="block w-2.5 h-10 bg-pink-500 dark:bg-rose-500 rounded-sm"></span>
            <h3 className="text-zinc-700 dark:text-white font-morabba text-2xl md:text-3xl">
              نظرات
            </h3>
          </div>
          {/* <!-- New Comment Button --> */}
          <button className="flex items-center justify-center w-[144px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white" type="button" id="comment-create-btn">
            ایجاد نظر جدید
          </button>
        </div>
        {/* <!-- Comment Form --> */}
        <div id="comment-form">
          <input type="hidden" value="" id="comment-id" />
          <input type="hidden" value="" id="comment-is-reply" />
          <textarea id="comment-textarea" className="block w-full p-3 md:p-5 text-sm md:text-base text-slate-500 dark:text-gray-500 focus:text-zinc-700 dark:focus:text-white bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-gray-200 dark:focus:border-slate rounded-2xl placeholder:font-danaLight transition-colors" placeholder="نظر خود را بنویسید ..."></textarea>
          <div className="flex gap-x-2 justify-end mt-2.5">
            <button className="flex items-center justify-center w-[144px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white" id="comment-cancel-btn">لغو</button>
            <button className="flex items-center justify-center w-[144px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white" id="comment-submit-btn">ثبت</button>
          </div>
        </div>
        {/* <!-- Comment List --> */}
        <div className="space-y-3.5 sm:space-y-5 comments_wrap">
          {/* <!-- Comments --> */}
          <p className="text-zinc-700 dark:text-white font-danaLight leading-7 mt-3.5">این مطلب هنوز هیچ نظری نداره، تو اولیش رو بنویس</p>
        </div>
      </div>
    </div>

  )
}
