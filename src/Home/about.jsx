import React, { useState } from 'react';
import { FaTelegramPlane, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaJsSquare, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "GitHub", icon: FaGithub },
];

function About() {
  const [lang, setLang] = useState("en");

  const texts = {
    en: `My name is Hasan and my surname is Gulomov. I live in Uzbekistan, in Tashkent region, Tashkent district, Beshterak neighborhood, on Mahtumquli street, house number 12.
There are 6 members in our family: my grandmother, my father, my mother, myself, my older sister, and my younger.
I was born in 2010, and I am currently 15 years old.
I study at the 1st General Secondary School of Tashkent district, in class 8-"V".
At the moment, I am studying in the IT field, specifically in the Frontend direction.
In the future, God willing, I plan to continue learning the Backend direction as well.`,

    uz: `Mening ismim Hasan, familiyam Gulomov. O‘zbekistonning Toshkent viloyati, Toshkent tumani, Beshterak mahallasida, Mahtumquli ko‘chasida, 12-uyda yashayman.
Oilamizda 6 kishi bor: buvim, otam, onam, men, opam va singlim.
Men 2010-yilda tug‘ilganman, hozirda 15 yoshdaman.
Toshkent tumani 1-sonli umumta’lim maktabining 8-"V" sinfida o‘qiyman.
Hozirda IT sohasida, xususan, Frontend yo‘nalishida o‘qiyapman.
Kelajakda, inshaAlloh, Backend yo‘nalishini ham o‘rganmoqchiman.`,

    ru: `Меня зовут Хасан, фамилия Гуломов. Я живу в Узбекистане, в Ташкентской области, Ташкентском районе, махалле Бештерах, на улице Махтумкули, дом №12.
В нашей семье 6 человек: бабушка, отец, мать, я, старшая сестра и младшая сестра.
Я родился в 2010 году, сейчас мне 15 лет.
Я учусь в 8-"В" классе 1-й общеобразовательной школы Ташкентского района.
На данный момент изучаю сферу IT, в частности, Frontend направление.
В будущем, иншаАллах, планирую изучить и Backend направление.`
  };

  return (
    <div className="container">
      <div className="about-site">
      {/* Language Switcher */}
      <div className="about-banner">
        {lang === 'en' ? "Welcome to My About Page" : lang === 'uz' ? "Men haqimda sahifaga xush kelibsiz" : "Добро пожаловать на мою страницу"}
      </div>
      <div className="lang-switcher">
        <button onClick={() => setLang('en')} data-lang="English">EN</button>
        <button onClick={() => setLang('uz')} data-lang="O‘zbekcha">UZ</button>
        <button onClick={() => setLang('ru')} data-lang="Русский">RU</button>
      </div>



      {/* About Section */}
      <div className="about-boy">
        <div className="about-img">
          <img src="/photo_2025-05-17_14-43-20.jpg" alt="Hasan's Photo" width={400} height={600} />
        </div>
        <p>{texts[lang]}</p>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#"><FaTelegramPlane /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaGithub /></a>
      </div>
    </div>
      {/* Skills Section */}
      <div className="skills-container">
        <h1>My Skills</h1>
        <div className="skills-header">
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon }, index) => (
              <div key={name} className="skill-item" style={{ animationDelay: `${0.4 + index * 0.1}s` }} title={name}>
                <Icon />
                <div className="skill-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>

        {/* Project 1 */}
        <div className="project-card">
          <div className="figma-link">
            <a
              href="https://www.figma.com/design/fI3sF836Zyl0r6fO8PTrYN/Arzon-Umra?node-id=203-696"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Figma
            </a>
          </div>

          <div className="project-content">
            <a
              href="http://localhost:5175/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <img
                src="/arzon-umra.jpg"
                alt="Arzon Umra"
                className="project-image"
              />
            </a>

            <div className="project-info">
              <h2>Arzon Umra</h2>
              <p>
                Arzon Umra — bu islomiy sayohat xizmatlari uchun maxsus platforma.
                Bu loyiha orqali foydalanuvchilar qulay narxlarda Umra ziyoratlarini bron qilishlari mumkin.
              </p>
              <p>
                Loyihada zamonaviy dizayn va responsiv web texnologiyalar qo‘llanilgan.
              </p>
              <a
                href="http://localhost:5175/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-visit-link"
              >
                Visit the site &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="figma-link">
            <a
              href="https://www.figma.com/design/UQLlxC6EphccfBuMExT7kS/GreenShop-Home--Copy---Copy-"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Figma
            </a>
          </div>

          <div className="project-content">
            <a
              href="http://localhost:5174/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <img
                src="/grren-shop.jpg"
                alt="Green Shop"
                className="project-image"
              />
            </a>

            <div className="project-info">
              <h2>Green Shop</h2>
              <p>
                Green Shop — bu ekologik mahsulotlar do‘koni uchun zamonaviy veb-sayt.
                Platforma foydalanuvchilarga onlayn xarid qilish imkonini beradi.
              </p>
              <p>
                Loyiha ekologik dizayn, responsiv tuzilma va intuitiv interfeys asosida yaratilgan.
              </p>
              <a
                href="http://localhost:5174/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-visit-link"
              >
                Visit the site &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
