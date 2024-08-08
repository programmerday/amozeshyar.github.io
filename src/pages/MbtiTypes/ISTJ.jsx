import React from 'react';
import istj from '../../images/istj.svg';
import istjSvg from '../../images/istjSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import merkel from '../../images/merkel.svg';
import sting from '../../images/sting.svg';
import portman from '../../images/portman.svg';
import washington from '../../images/washington.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ISTJ() {
  return (
    <main>
      <HeaderType
        typeName={' تدارکاتچی'}
        type={'ISTJ-A / ISTJ-T'}
        typeImg={istj}
        color={'#4298B4'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-4xl text-[#51596A] pb-5">
          شخصیت تدارکاتچی
        </h1>
        <GreatTalk
          text="به نظر من هر وقت مشخص شود یک نفر برای انجام یک وظیفه کفایت می‌کند ... آن کار توسط دو نفر بدتر انجام می‌شود، و اگر سه نفر یا بیشتر به کار گرفته شوند، اساساً انجام نخواهد شد."
          author="GEORGE WASHINGTON"
        />
        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            تصور می‌شود که گونه شخصیتی تدارکچی
            فراوان‌ترین گونه بوده و حدود 13% از
            جمعیت را تشکیل دهد. ویژگی‌های معرف
            تدارکچیان یعنی صداقت، منطق عملی و
            تلاش‌های خستگی‌ناپذیر برای انجام وظیفه
            آنها را به هسته اصلی بسیاری از
            خانواده‌ها و همچنین سازمان‌هایی تبدیل
            می‌کند که حامی سنت‌ها، قوانین و
            استانداردها هستند، مانند سازمان‌های
            قضایی، نهادهای نظارتی و ارتش. افراد
            دارای گونه شخصیتی تدارکچی از برعهده
            گرفتن مسئولیت اعمال خود لذت می‌برند و
            به کاری که انجام می‌دهند افتخار
            می‌کنند - تدارکچیان در هنگام تلاش برای
            رسیدن به هدف از وقت و انرژی خود برای
            تمام کردن کار مربوط با دقت و صبر دریغ
            نمی‌کنند.
          </p>
        </div>
        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            تدارکچیان فرضیات زیادی ندارند و ترجیح
            می‌دهند بجای تجزیه و تحلیل محیط اطراف
            خود، حقایق را بررسی کرده و به کارهای
            عملی مشغول شوند. شخصیت تدارکچی‌ها به
            هیچ عنوان بی‌معنا نیست و وقتی تصمیمی
            بگیرند حقایق لازم برای رسیدن به هدف
            خود را به دیگران منتقل می‌کنند و از
            دیگران انتظار دارند بلافاصله وضعیت را
            درک کرده و دست به اقدام بزنند.
            تدارکچیان تحمل کمی نسبت به عدم
            تصمیم‌گیری دارند، اما چنانچه روش
            انتخاب شده با نظریه‌های غیرعملی به
            چالش کشیده شود با سرعت بیشتری تحمل خود
            را از دست می‌دهند، به خصوص اگر جزئیات
            کلیدی نادیده گرفته شود - اگر چالش‌ها
            به بحث‌هایی وقتگیر تبدیل شوند افراد
            دارای گونه شخصیتی تدارکچی با نزدیک شدن
            مهلت به طرز محسوسی عصبانی‌تر می‌شوند.
          </p>
        </div>
        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            اگر برای شهرت خود ارزش قائل هستی با
            افراد خوب همنشین باش...
          </h2>
          <p className="text-md">
            هنگامی که تدارکچیان می‌گویند قصد دارند
            کاری را به انجام برسانند، این کار را
            انجام می‌دهند و تعهدات خود را بدون
            توجه به هزینه‌های شخصی برآورده می‌کنند
            و از رفتار کسانی که به همان ترتیب به
            وعده خود عمل نمی‌کنند گیج می‌شوند.
            ترکیب تنبلی و عدم صداقت سریع‌ترین راه
            برای عصبانی کردن تدارکچیان است. در
            نتیجه، مردم دارای گونه شخصیتی تدارکچی
            اغلب ترجیح می‌دهند به تنهایی کار کنند،
            یا حداقل سلسله مراتب قدرت مشخصی داشته
            باشند، تا بدون بحث یا نگرانی در مورد
            قابل اعتماد بودن دیگران اهدافشان را
            تعیین کرده و به آنها دست یابند.
            شخصیت‌های تدارکچی دارای ذهن تیز و
            مبتنی بر واقعیت هستند و استقلال و
            خودکفایی را به وابستگی به کسی یا چیزی
            ترجیح می‌دهند. وابستگی به دیگران اغلب
            به نظر تدارکچیان نوعی نقطه ضعف تلقی
            می‌شود، و اشتیاق آنها به انجام وظیفه،
            قابلیت اعتماد و صداقت شخصی تمام و کمال
            از افتادن آنها در چنین دامی جلوگیری
            می‌کند.
          </p>
        </div>
        <figure className="m-10">
          <img src={istjSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            پارادوکس آنها از دید اکثر ناظران این
            است که معماران می‌توانند با تناقض‌هایی
            آشکار به زندگی بپردازند - حداقل از
            دیدگاه صرفاً منطقی. به‌عنوان مثال،
            معماران همزمان هم رؤیاپردازترین
            آرمانگرایان و هم بدبین‌ترین بدبینان
            هستند، تعارضی که به ظاهر غیرممکن است.
            اما دلیل این امر آن است که افراد دارای
            گونه شخصیتی معمار باور دارند که با
            تلاش، هوش و ملاحظه، هیچ چیز غیرممکن
            است، در عین حال که معتقدند مردم خیلی
            تنبل، کوته‌بین یا خودخواه هستند و
            نمی‌توانند به این نتایج فوق‌العاده دست
            یابند. در عین حال چنین دیدگاه
            بدبینانه‌ای نسبت به واقعیت، مانع از آن
            نخواهد شد که معمار علاقه‌مند از
            دستیابی به نتیجه‌ای که به آن باور دارد
            دست بکشد.
          </p>
        </div>
        <div class="description-pullout-b">
          قوانین، محدودیت‌ها و سنت‌ها مورد نفرت
          گونه شخصیتی معمار هستند - همه چیز باید
          در معرض پرسش و ارزیابی مجدد قرار گیرد و
          اگر معماران راهی پیدا کنند، اغلب
          یک‌جانبه دست به کار می‌شوند و ایده‌ها و
          روش‌های خود را که از لحاظ فنی برتر،
          غیرمعمول و گاهی اوقات بی‌رحمانه و
          تقریباً همیشه غیرسنتی هستند را به اجرا
          می‌گذارند.
        </div>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            تدارکچیان باید به یاد داشته باشند که
            از خود مراقبت کنند - تعهد سرسختانه
            آنها به ثبات و کارآمدی می‌تواند در
            دراز مدت به این اهداف ضربه بزند زیرا
            دیگران همیشه بیش از پیش به آنها اتکا
            می‌کنند، موجب ایجاد فشار احساسی
            می‌شوند که ممکن است سال‌های سال ابراز
            نشود، و در نهایت وقتی گفته شود که
            برطرف کردن آن خیی دیر باشد. اگر
            شخصیت‌های تدارکچی بتوانند همکاران و
            همسرانی پیدا کنند که واقعاً قدردان و
            مکمل ویژگی‌های آنها باشند و از وضوح،
            شفافیت و اعتمادی که آنها ارائه می‌کنند
            بهره‌مند شوند، در این صورت متوجه
            خواهند شد که نقش ثبات‌آور آنها
            فوق‌العاده رضایت‌بخش است زیرا می‌دانند
            بخشی از سیستمی هستند که در آن کار
            می‌کنند.
          </p>
        </div>
        <div></div>
      </section>
      <PersonTypes
        img1={portman}
        name1={'Natalie Portman'}
        img2={merkel}
        name2={'Angela Merkel'}
        img3={washington}
        name3={'Denzel Washington'}
        img4={sting}
        name4={'sting'}
      />
    </main>
  );
}

export default ISTJ;
