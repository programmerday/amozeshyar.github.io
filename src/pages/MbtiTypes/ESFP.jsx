import React from 'react';
import esfp from '../../images/esfp.svg';
import esfpSvg from '../../images/esfpSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import adele from '../../images/adele.svg';
import john1 from '../../images/john1.svg';
import monroe from '../../images/monroe.svg';
import oliver from '../../images/oliver.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ESFP() {
  return (
    <main>
      <HeaderType
        typeName={' سرگرم‌کننده'}
        type={'ESFP-A / ESFP-T'}
        typeImg={esfp}
        color=""
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-3xl text-[#51596A] pb-5">
          شخصیت سرگرم‌کننده
        </h1>
        <GreatTalk
          text="خودخواه، بی‌حوصله و کمی متزلزل
            هستم. من مرتکب اشتباه می‌شوم، کنترل
            خود را از دست می‌دهم و گاهی اوقات
            نمی‌شود تحملم کرد. اما اگر نتوانید
            وقتی در بدترین حالت هستم مرا تحمل
            کنید، قطعاً شایستگی وقتی در بهترین
            حالت خود هستم را ندارید."
          author="MARILYN MONROE"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            اگر کسی را بتوان یافت که خود به خود به
            رقص و آواز بپردازد، گونه شخصیتی وی
            سرگرم‌کننده است. سرگرم‌کنندگان در
            هیجان لحظه گرفتار می‌شوند و می‌خواهند
            بقیه نیز چنین احساسی داشته باشند. وقتی
            مسئله تشویق دیگران به میان می‌آید هیچ
            گونه شخصیتی دیگر به اندازه
            سرگرم‌کنندگان در بخشیدن زمان و انرژی
            خود سخاوتمند نیست، و هیچ گونه شخصیتی
            دیگری چنین سبک وسوسه‌انگیزی ندارد.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            ما همگی ستاره هستیم ...
          </h2>
          <p className="text-md">
            سرگرم‌کنندگان که ذاتاً سرگرم‌کننده به
            دنیا آمده‌اند عاشق این هستند که در
            کانون توجه باشند، اما جهان به تمامی
            صحنه است. بسیاری از افراد مشهور دارای
            گونه شخصیتی سرگرم‌کننده در واقع بازیگر
            هستند، اما این افراد دوست دارند برای
            دوستان خود نیز نمایش بدهند، با شوخ
            طبعی منحصر به فرد و فروتنانه گپ بزنند،
            توجه دیگران را جلب کنند و هر بار بیرون
            رفتن را تبدیل به نوعی مهمانی کنند.
            سرگرم‌کنندگان که افرادی کاملاً اجتماعی
            هستند و از ساده‌ترین چیزها لذت می‌برند
            و هیچ چیزی برای آنها لذت‌بخش‌تر از خوش
            گذراندن با گروهی از دوستان خوب نیست.
          </p>
        </div>
        <figure className="m-10">
          <img src={esfpSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            سرگرم‌کنندگان می‌دانند که احساسات
            دیگران همیشه نسبت به آنها مثبت نیست و
            ممکن است از این امر خوششان نیاید - اما
            در هر حال نسبت به احساسات دیگران بسیار
            حساس هستند. افراد دارای این گونه
            شخصیتی اغلب اولین کسانی هستند که به
            شخصی که مشکل دشوار خود را مطرح کرده
            باشد کمک می‌کند و با خوشحالی حمایت
            عاطفی و توصیه‌های عملی ارائه می‌کنند.
            با این حال، اگر مشکل مربوط به خود
            سرگرم‌کنندگان باشد، به احتمال زیاد
            بجای پرداختن به آن، از درگیر شدن با آن
            خودداری می‌کنند. شخصیت‌های سرگرم‌کننده
            معمولاً عاشق درامی کوچک و پرشور هستند،
            اما وقتی انتقادات از آنها مطرح شود
            چندان علاقه‌ای به آن ندارند.
          </p>
        </div>
        <div class="description-pullout-y">
          برای شخصی با گونه شخصیتی سرگرم‌کننده هیچ
          چیزی ناراحت‌کننده‌تر از این نیست که
          متوجه بشود به خاطر شرایط گیر افتاده است
          و نمی‌تواند به دوستان خود ملحق شود.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            هر جا که نیاز به خنده، بازیگوشی و فرد
            داوطلب امتحان کردن چیزی تازه و
            سرگرم‌کننده وجود داشته باشد از
            سرگرم‌کنندگان استقبال می‌شود - و برای
            شخصیت‌های سرگرم‌کننده هیچ شادی بیشتر
            از این وجود ندارد که دیگران را با خود
            به سواری ببرند. سرگرم‌کنندگان
            می‌توانند ساعت‌ها حرف بزنند، گاهی
            اوقات در مورد هر چیزی بجز موضوع اصلی
            بحث مورد نظر، و با احساسات عزیزان خود
            در هنگام خوشی و ناخوشی همدلی کنند. اگر
            بتوانند کارهایشان را سر و سامان بدهند،
            همیشه آماده هستند چیزهای تازه و
            هیجان‌انگیزی که جهان عرضه کرده است را
            با دوستان خود امتحان کنند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={adele}
        name1={'Adele'}
        img2={oliver}
        name2={'Jamie Oliver'}
        img3={monroe}
        name3={'Marilyn Monroe'}
        img4={john1}
        name4={'Elton John'}
      />
    </main>
  );
}

export default ESFP;
