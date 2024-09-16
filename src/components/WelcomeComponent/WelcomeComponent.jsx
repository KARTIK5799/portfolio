import { useEffect, useRef, useState } from 'react';
import './WelcomeComponent.css';
import Typed from 'typed.js';

const WelcomeComponent = () => {
    const languages = [
        { language: 'English', message: 'Hello, Welcome!', font: 'Unbounded, sans-serif' }, 
        { language: 'Mandarin Chinese', message: '你好，欢迎！', font: 'Noto Serif Traditional Chinese, sans-serif' },
        { language: 'Hindi', message: 'नमस्ते, स्वागत है!', font: 'Noto Sans Devanagari, sans-serif' }, 
        { language: 'Spanish', message: 'Hola, ¡Bienvenido!', font: 'Lora, serif' },
        { language: 'French', message: 'Bonjour, Bienvenue!', font: 'Lora, serif' },
        { language: 'Arabic', message: 'مرحباً، أهلاً وسهلاً!', font: 'Amiri, serif' }, 
        { language: 'Bengali', message: 'হ্যালো, স্বাগতম!', font: 'Noto Sans Bengali, sans-serif' }, 
        { language: 'Portuguese', message: 'Olá, Bem-vindo!', font: 'Lora, serif' },
        { language: 'Japanese', message: 'こんにちは、ようこそ！', font: 'Noto Sans JP, sans-serif' }, 
        { language: 'Telugu', message: 'హలో, స్వాగతం!', font: 'Noto Sans Telugu, sans-serif' }, 
        { language: 'Marathi', message: 'नमस्कार, स्वागत आहे!', font: 'Noto Sans Devanagari, sans-serif' }, 
        { language: 'Tamil', message: 'ஹலோ, வரவேற்கிறேன்!', font: 'Noto Sans Tamil, sans-serif' }, 
        { language: 'Urdu', message: 'خوش آمدید!', font: 'Noto Nastaliq Urdu, serif' }, 
        { language: 'Gujarati', message: 'હેલો, સ્વાગત છે!', font: 'Noto Sans Gujarati, sans-serif' },
        { language: 'Malayalam', message: 'ഹലോ, സ്വാഗതം!', font: 'Noto Sans Malayalam, sans-serif' }, 
        { language: 'Odia', message: 'ନମସ୍କାର, ସ୍ବାଗତ!', font: 'Noto Sans Oriya, sans-serif' }, 
        { language: 'Punjabi', message: 'ਹੈਲੋ, ਸਵਾਗਤ ਹੈ!', font: 'Noto Sans Gurmukhi, sans-serif' } 
      ];
      

  const [currentFont, setCurrentFont] = useState(languages[0].font);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: languages.map(lang => lang.message),
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      preStringTyped: (index) => {
        setCurrentFont(languages[index].font);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className=" absolute top-20 ">
      
      <div className='z-50'>
        <h1 className="gradient-text" style={{ fontFamily: currentFont , lineHeight: '2.7em', padding: '0 10px'}}>
          <span ref={el} />
        </h1>
        <p className='text-white text-2xl'>“कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
        मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥”</p>
      </div> 
   
    </div>
  );
};

export default WelcomeComponent;
