"use client";

import parse from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MaterialInner = () => {
  const POST_HTML = `
  <div>
    <!-- Sarlavha -->
    <h1>Next.js Darslik</h1>

    <!-- Taglar -->
    <h3>#NextJs</h3>
    <h3>#React</h3>
    <h3>#Frontend</h3>
    <h3>#Frontend</h3>
    <h3>#Frontend</h3>

    <!-- Asosiy rasm -->
    <img src="/Frame (2).svg" alt="Asosiy rasm" />

    <!-- Batafsil yozuv -->
    <header>
    <p>
      <strong>Batafsil:</strong> Next.js — bu React framework’laridan eng mashhurlaridan biri 
      bo‘lib, u server-side rendering (SSR) va static site generation (SSG) imkoniyatlarini 
      taqdim etadi. Bu sizga tezkor va SEO uchun qulay veb-ilovalar yaratishga yordam beradi. 
      <br /><br />
     Shuningdek, Next.js routing tizimi juda oddiy: har bir sahifa <code>pages</code> papkasida 
joylashgan bo‘lib, avtomatik ravishda URL orqali chaqiriladi. Bundan tashqari, 
<code>Image Optimization</code>,  va 
<code>import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
</code> kabi qulay funksiyalarga ega.

      <br /><br />
      Agar siz zamonaviy, barqaror va kengaytiriladigan veb-dastur yaratmoqchi bo‘lsangiz, 
      Next.js eng yaxshi tanlovlardan biri hisoblanadi.
    </p>

    <!-- Sub rasm -->
    <img src="https://ik.imagekit.io/vtroph5l9/default-image.jpg?updatedAt=1735063208277" alt="Sub rasm" />

    <!-- Iqtibos -->
    <blockquote>
      "Kod yozish – bu san’at, unga muhabbat bilan yondashish kerak. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    </blockquote>

    <!-- Kod -->
    <h2>Kod namunasi</h2>
    <pre><code class="language-js">
const greeting = "Hello Abubakir!";
function sayHello(name) {
  return \`\${greeting} Welcome, \${name}\`;
}
console.log(sayHello("BigBossDev"));
    </code></pre>

    <!-- Oddiy matn -->
    <p>
      Bu yerda oddiy paragraf bor. <br />
      Bu yerda esa yangi qatordan davom etadi.
    </p>
    

  <div class="comment-box">
  <div class="comment-user">
    <img src="/Avatar.svg" alt="avatar" class="avatar" />
    <div class="comment-info">
      <h4 class="username">Vermillion White</h4>
      <span class="date">2025.02.10 15:30</span>
    </div>
  </div>

  <div class="social-link">
    social link
  </div>
</div>

</div>

   



  
    </header>
  </div>
`;

  return (
    <div className="inner-page container">
      {parse(POST_HTML, {
        replace: (domNode: any) => {
          if (domNode.name === "code") {
            const code = domNode.children[0]?.data || "";
            if (domNode.name === "h3") {
              return (
                <h3 className="inner-page">{domNode.children[0]?.data}</h3>
              );
            }
            return (
              <SyntaxHighlighter language="javascript" style={oneDark}>
                {code}
              </SyntaxHighlighter>
            );
          }
          <h1>Salom</h1>;
          return undefined;
        },
      })}
    </div>
  );
};

export default MaterialInner;
