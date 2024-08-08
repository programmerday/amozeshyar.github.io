import React from 'react';
import intp from '../../images/intp.svg';
import entjSvg from '../../images/entjSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import Margaret from '../../images/margaret.svg';
import Bill from '../../images/bill.svg';
import kristen from '../../images/kristen.svg';
import einstein from '../../images/einstein.svg';
import avicii from '../../images/avicii.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function INTP() {
  return (
    <main>
      <HeaderType
        typeName={'منطقدان'}
        type={'INTP-A / INTP-T'}
        typeImg={intp}
        color={'#88619A'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium ">
        <h1 className="text-4xl text-[#51596A] pb-5">
          شخصیت منطق دان
        </h1>
        <GreatTalk
          text="از دیروز بیاموز، برای امروز زندگی کن، به فردا امیدوار باش. مسئله مهم این است که دست از سؤال پرسیدن بر ندارید."
          author="ALBERT EINSTEIN"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            گونه شخصیتی منطق‌دان نسبتاً نادر است و
            تنها سه درصد از جمعیت را شامل می‌شود
            که قطعاً خبر خوبی برای آنها است چرا که
            هیچ چیزی به اندازه "رایج بودن" باعث
            نارضایتی آنها نمی‌شود. منطق‌دانان به
            نوآوری و خلاقیت، دیدگاه منحصر به فرد و
            عقل نیرومند خود مباهات می‌کنند.
            منطق‌دانان که معمولاً به‌عنوان فیلسوف،
            متفکر، یا استاد رؤیاپرداز شناخته
            می‌شوند، مسئول بسیاری از اکتشافات علمی
            در طول تاریخ بوده‌اند
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            {' '}
            زندگی آزموده نشده ارزش زیستن ندارد
          </h2>
          <p className="text-md">
            افراد دارای گونه شخصیتی منطق‌دان عاشق
            الگوها هستند و تعیین اختلافات بین
            عبارات تقریباً نوعی سرگرمی برایشان به
            حساب می‌آید که باعث می‌شود دروغ گفتن
            به منطق‌دانها فکر خوبی نباشد. این
            مسئله باعث می‌شود دیگران نتوانند
            عبارت‌های منطق‌دانان را به‌راحتی هضم
            کنند - مسئله این نیست که منطق‌دانان
            صادق نیستند، بلکه شخصیت آنها
            به‌گونه‌ای است که افکار کاملاً شکل
            نگرفته را در میان می‌گذارند و از
            دیگران به عنوان یک جایگاهی برای طرح
            ایده‌ها و نظریه‌ها در بحث علیه خودشان
            استفاده کنند، و نه به‌عنوان طرفهای
            مکالمه واقعی.
          </p>
        </div>
        <figure className="m-10">
          <img src={entjSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            ممکن است این مسئله باعث شود این گونه
            شخصیتی غیرقابل اعتماد به نظر برسد، اما
            در واقع هیچ کس به اندازه منطق‌دانان
            مشتاق و قادر به تشخیص مشکل، بررسی
            عوامل و جزئیات بی‌پایانی که موضوع آنها
            را شامل می‌شود و تدوین راه حلی منحصر
            به فرد و ماندگار نیست - فقط نباید
            انتظار داشت که گزارش‌های پیشرفت را به
            موقع تحویل بدهند! افرادی که دارای گونه
            شخصیتی منطق‌دان هستند به فعالیت‌ها و
            نگهداری‌های عملی و روزمره علاقه‌ای
            ندارند، اما وقتی منطق‌دانان محیطی را
            پیدا می‌کنند که نبوغ خلاق و
            توانایی‌های بالقوه‌شان می‌تواند در
            آنجا ابراز شود، هیچ محدودیتی از نظر
            صرف زمان و انرژی برای تدوین راه‌حل
            نکته‌سنجانه و بی‌طرفانه خود ندارد.
          </p>
        </div>
        <div class="description-pullout">
          منطق‌دانان به‌خاطر نظریه‌های درخشان و
          منطق نیرومند خود شناخته می‌شوند - در
          حقیقت، آن‌ها منطقی‌ترین گونه بین تمام
          گونه‌های شخصیتی در نظر گرفته می‌شوند.
        </div>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            علاوه بر این، بعید است منطق‌دانان
            اساساً شکایت‌های عاطفی را درک کنند، و
            دوستانشان حمایت عاطفی چندانی از آنها
            دریافت نمی‌کنند. افراد دارای گونه
            شخصیتی منطق‌دان ترجیح می‌دهند در عوض
            یک مجموعه پیشنهادهای منطقی را برای
            چگونگی حل و فصل موضوع‌های زیربنایی
            ارائه دهند، دیدگاهی که همنشینان
            حساس‌تر همیشه از آنها استقبال
            نمی‌کنند. این مسئله به احتمال زیاد در
            مورد بیشتر قراردادها و اهداف اجتماعی،
            مانند برنامه‌ریزی شام و ازدواج نیز
            تعمیم خواهد یافت زیرا منطق‌دانان به
            مراتب بیشتر نگران اصیل بودن و کارآمد
            بودن نتایج هستند. یکی از چیزهایی که
            واقعاً باعث می‌شود منطق‌دانان عقب
            بکشند ترس دائمی و فراگیر آنها از شکست
            است. شخصیت منطق‌دان آنقدر در پی
            ارزیابی مجدد افکار و نظریه‌های خود
            بوده و نگران است که مبادا قطعه مهمی از
            پازل را از قلم انداخته باشد، که ممکن
            است دچار خمودگی شود و در جهان نامشهودی
            که افکارش در آن هرگز واقعاً به‌کار
            بسته نمی‌شود از دست برود. غلبه بر این
            شک به خود بزرگترین چالشی است که
            منطق‌دانان به احتمال زیاد با آن مواجه
            هستند، اما هدیه معنوی - اعم از بزرگ و
            کوچک - که پس از اتمام کار به جهان
            ارزانی می‌دارند ارزش این مبارزه را
            دارد.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        categuryName={'منطقدان'}
        img1={Bill}
        name1={'bill'}
        img2={kristen}
        name2={'  Kristen Stewart'}
        img3={einstein}
        name3={'Albert Einstein'}
        img4={avicii}
        name4={'  Avicii'}
      />
    </main>
  );
}

export default INTP;
