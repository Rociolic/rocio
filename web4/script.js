const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const whatsappNumber = "34600000000";
const whatsappLinks = ["headerWhatsapp", "mainWhatsapp", "contactWhatsapp", "contactWhatsappText"];

const translations = {
  en: {
    "Inicio": "Home",
    "Sobre mí": "About me",
    "Servicios": "Services",
    "Tarifas": "Fees",
    "Contacto": "Contact",
    "Reservar cita": "Book appointment",
    "Psicóloga online": "Online psychologist",
    "Un espacio para volver a estar bien con vos": "A space to feel well again",
    "Te ayudo a comprender lo que sientes, recuperar tu equilibrio emocional y construir una vida más tranquila y consciente.": "I help you understand what you feel, restore emotional balance and build a calmer, more conscious life.",
    "Pide cita": "Book a session",
    "Acompañamiento personalizado": "Personalized support",
    "Adaptado a tus necesidades y a tu momento vital.": "Adapted to your needs and your current life stage.",
    "Confidencialidad y seguridad": "Confidentiality and safety",
    "Tu bienestar y privacidad son la prioridad.": "Your wellbeing and privacy are the priority.",
    "Enfoque cercano y humano": "A warm, human approach",
    "Escucha, empatía y respeto sin juicios.": "Listening, empathy and respect without judgement.",
    "Foto profesional de Rocio": "Professional photo of Rocio",
    "Hola, soy Rocio Blanco": "Hello, I'm Rocio Blanco",
    "Soy psicóloga y acompaño a personas que quieren comprender mejor lo que sienten, mejorar su bienestar emocional y recuperar calma en su día a día.": "I am a psychologist and support people who want to better understand what they feel, improve their emotional wellbeing and regain calm in everyday life.",
    "Mi forma de trabajar se basa en crear un espacio seguro, cercano y profesional, donde puedas expresarte con libertad y avanzar a tu ritmo.": "My way of working is based on creating a safe, warm and professional space where you can express yourself freely and move at your own pace.",
    "Conocer mi historia": "Learn my story",
    "Áreas de acompañamiento": "Areas of support",
    "Sesiones online con un enfoque personalizado.": "Online sessions with a personalized approach.",
    "Ansiedad y estrés": "Anxiety and stress",
    "Herramientas para comprender y gestionar la ansiedad.": "Tools to understand and manage anxiety.",
    "Autoestima": "Self-esteem",
    "Trabajo personal para mejorar la relación contigo misma/o.": "Personal work to improve your relationship with yourself.",
    "Gestión emocional": "Emotional regulation",
    "Aprender a reconocer y regular emociones difíciles.": "Learning to recognize and regulate difficult emotions.",
    "Relaciones personales": "Personal relationships",
    "Límites, comunicación y vínculos más sanos.": "Boundaries, communication and healthier bonds.",
    "Crecimiento personal": "Personal growth",
    "Acompañamiento en momentos de cambio o bloqueo.": "Support during periods of change or feeling stuck.",
    "Terapia online": "Online therapy",
    "Atención psicológica desde casa con comodidad y privacidad.": "Psychological care from home, with comfort and privacy.",
    "Por qué elegirme": "Why choose me",
    "Una forma de trabajar centrada en ti": "A way of working centered on you",
    "La terapia es un espacio para entender lo que te pasa, poner palabras a lo que sientes y construir recursos que puedas llevar a tu día a día.": "Therapy is a space to understand what is happening, put words to what you feel and build tools you can use in daily life.",
    "Escucha profesional y acompañamiento sin juicios": "Professional listening and non-judgmental support",
    "Proceso personalizado según tus necesidades": "A personalized process based on your needs",
    "Herramientas para mejorar tu bienestar emocional": "Tools to improve your emotional wellbeing",
    "Primera valoración para orientar el camino terapéutico": "Initial assessment to guide the therapeutic path",
    "Proceso": "Process",
    "Reserva tu primera cita": "Book your first session",
    "Un primer contacto sencillo para entender qué necesitas y valorar juntas cómo puedo acompañarte.": "A simple first contact to understand what you need and assess together how I can support you.",
    "Primer contacto": "First contact",
    "Escríbeme por WhatsApp o completa el formulario. Te responderé para resolver dudas y confirmar disponibilidad.": "Message me on WhatsApp or complete the form. I will reply to answer questions and confirm availability.",
    "Agendamos la sesión": "We schedule the session",
    "Buscamos un horario que encaje contigo y te explico cómo será la primera consulta online.": "We find a time that works for you and I explain what the first online consultation will be like.",
    "Empezamos el proceso": "We begin the process",
    "En la primera sesión hablamos de tu situación actual, tus objetivos y los siguientes pasos.": "In the first session we talk about your current situation, your goals and the next steps.",
    "Nombre": "Name",
    "Teléfono": "Phone",
    "Servicio de interés": "Service of interest",
    "Selecciona una opción": "Select an option",
    "Primera consulta": "First consultation",
    "Asunto": "Subject",
    "Mensaje": "Message",
    "He leído y acepto la política de privacidad.": "I have read and accept the privacy policy.",
    "Enviar": "Send",
    "Exportar CSV": "Export CSV",
    "Información sobre protección de datos": "Data protection information",
    "Finalidad:": "Purpose:",
    "responder a tu solicitud y gestionar la cita.": "to respond to your request and manage the appointment.",
    "Legitimación:": "Legal basis:",
    "consentimiento de la persona interesada.": "consent of the interested person.",
    "Destinatarios:": "Recipients:",
    "no están previstas cesiones salvo obligación legal.": "no data transfers are planned except where legally required.",
    "Derechos:": "Rights:",
    "acceso, rectificación, supresión y demás derechos reconocidos por la normativa vigente.": "access, rectification, erasure and other rights recognized by current regulations.",
    "Tarifas": "Fees",
    "Sesiones claras y sencillas": "Clear and simple sessions",
    "Tarifas orientativas pendientes de confirmar antes de la publicación.": "Indicative fees pending confirmation before publication.",
    "Primera sesión": "First session",
    "Evaluación inicial.": "Initial assessment.",
    "Sesión online": "Online session",
    "Acompañamiento individual.": "Individual support.",
    "Bono 4 sesiones": "4-session package",
    "Seguimiento continuo.": "Ongoing follow-up.",
    "Preguntas frecuentes": "Frequently asked questions",
    "¿La terapia online es igual de válida?": "Is online therapy just as valid?",
    "Sí. Permite trabajar con comodidad, privacidad y continuidad, manteniendo un espacio seguro para el proceso terapéutico.": "Yes. It allows us to work with comfort, privacy and continuity while maintaining a safe therapeutic space.",
    "¿Qué ocurre en la primera sesión?": "What happens in the first session?",
    "La primera sesión sirve para conocernos, entender tu situación actual y definir juntas los primeros objetivos.": "The first session helps us get to know each other, understand your current situation and define initial goals together.",
    "¿Cuánto dura una sesión?": "How long does a session last?",
    "Normalmente las sesiones tienen una duración aproximada de 50 a 60 minutos.": "Sessions usually last approximately 50 to 60 minutes.",
    "¿Mis datos son confidenciales?": "Is my information confidential?",
    "Sí. La información se trata con confidencialidad y de acuerdo con la normativa de protección de datos.": "Yes. Information is treated confidentially and in accordance with data protection regulations.",
    "Blog": "Blog",
    "Recursos para tu bienestar": "Resources for your wellbeing",
    "¿Cómo saber si tengo ansiedad?": "How do I know if I have anxiety?",
    "Señales frecuentes y cuándo pedir ayuda.": "Common signs and when to ask for help.",
    "Autoestima y autocrítica": "Self-esteem and self-criticism",
    "Cómo empezar a hablarte con más amabilidad.": "How to start speaking to yourself more kindly.",
    "Regular emociones": "Regulating emotions",
    "Primeros pasos cuando una emoción te desborda.": "First steps when an emotion overwhelms you.",
    "Estoy aquí para acompañarte": "I am here to support you",
    "Si sientes que ha llegado el momento de pedir ayuda, puedes escribirme y vemos juntas cuál es el primer paso.": "If you feel it is time to ask for help, you can write to me and we will look together at the first step.",
    "Escribir por WhatsApp": "Message on WhatsApp",
    "Rellenar formulario": "Fill in the form",
    "Modalidad": "Format",
    "Psicología online · Bienestar emocional": "Online psychology · Emotional wellbeing",
    "© 2026 Rocio Blanco Psicóloga. Todos los derechos reservados.": "© 2026 Rocio Blanco Psychologist. All rights reserved.",
    "Privacidad": "Privacy",
    "Reservar": "Book"
  },
  ca: {
    "Inicio": "Inici",
    "Sobre mí": "Sobre mi",
    "Servicios": "Serveis",
    "Tarifas": "Tarifes",
    "Contacto": "Contacte",
    "Reservar cita": "Reservar cita",
    "Psicóloga online": "Psicòloga online",
    "Un espacio para volver a estar bien con vos": "Un espai per tornar a estar bé amb tu",
    "Te ayudo a comprender lo que sientes, recuperar tu equilibrio emocional y construir una vida más tranquila y consciente.": "T'ajudo a comprendre el que sents, recuperar l'equilibri emocional i construir una vida més tranquil·la i conscient.",
    "Pide cita": "Demana cita",
    "Acompañamiento personalizado": "Acompanyament personalitzat",
    "Adaptado a tus necesidades y a tu momento vital.": "Adaptat a les teves necessitats i al teu moment vital.",
    "Confidencialidad y seguridad": "Confidencialitat i seguretat",
    "Tu bienestar y privacidad son la prioridad.": "El teu benestar i la teva privacitat són la prioritat.",
    "Enfoque cercano y humano": "Enfocament proper i humà",
    "Escucha, empatía y respeto sin juicios.": "Escolta, empatia i respecte sense judicis.",
    "Foto profesional de Rocio": "Foto professional de Rocio",
    "Hola, soy Rocio Blanco": "Hola, soc Rocio Blanco",
    "Soy psicóloga y acompaño a personas que quieren comprender mejor lo que sienten, mejorar su bienestar emocional y recuperar calma en su día a día.": "Soc psicòloga i acompanyo persones que volen comprendre millor el que senten, millorar el seu benestar emocional i recuperar calma en el seu dia a dia.",
    "Mi forma de trabajar se basa en crear un espacio seguro, cercano y profesional, donde puedas expresarte con libertad y avanzar a tu ritmo.": "La meva manera de treballar es basa en crear un espai segur, proper i professional, on puguis expressar-te amb llibertat i avançar al teu ritme.",
    "Conocer mi historia": "Conèixer la meva història",
    "Áreas de acompañamiento": "Àrees d'acompanyament",
    "Sesiones online con un enfoque personalizado.": "Sessions online amb un enfocament personalitzat.",
    "Ansiedad y estrés": "Ansietat i estrès",
    "Herramientas para comprender y gestionar la ansiedad.": "Eines per comprendre i gestionar l'ansietat.",
    "Autoestima": "Autoestima",
    "Trabajo personal para mejorar la relación contigo misma/o.": "Treball personal per millorar la relació amb tu mateixa o mateix.",
    "Gestión emocional": "Gestió emocional",
    "Aprender a reconocer y regular emociones difíciles.": "Aprendre a reconèixer i regular emocions difícils.",
    "Relaciones personales": "Relacions personals",
    "Límites, comunicación y vínculos más sanos.": "Límits, comunicació i vincles més sans.",
    "Crecimiento personal": "Creixement personal",
    "Acompañamiento en momentos de cambio o bloqueo.": "Acompanyament en moments de canvi o bloqueig.",
    "Terapia online": "Teràpia online",
    "Atención psicológica desde casa con comodidad y privacidad.": "Atenció psicològica des de casa amb comoditat i privacitat.",
    "Por qué elegirme": "Per què triar-me",
    "Una forma de trabajar centrada en ti": "Una manera de treballar centrada en tu",
    "La terapia es un espacio para entender lo que te pasa, poner palabras a lo que sientes y construir recursos que puedas llevar a tu día a día.": "La teràpia és un espai per entendre què et passa, posar paraules al que sents i construir recursos per al teu dia a dia.",
    "Escucha profesional y acompañamiento sin juicios": "Escolta professional i acompanyament sense judicis",
    "Proceso personalizado según tus necesidades": "Procés personalitzat segons les teves necessitats",
    "Herramientas para mejorar tu bienestar emocional": "Eines per millorar el teu benestar emocional",
    "Primera valoración para orientar el camino terapéutico": "Primera valoració per orientar el camí terapèutic",
    "Proceso": "Procés",
    "Reserva tu primera cita": "Reserva la teva primera cita",
    "Un primer contacto sencillo para entender qué necesitas y valorar juntas cómo puedo acompañarte.": "Un primer contacte senzill per entendre què necessites i valorar juntes com puc acompanyar-te.",
    "Primer contacto": "Primer contacte",
    "Escríbeme por WhatsApp o completa el formulario. Te responderé para resolver dudas y confirmar disponibilidad.": "Escriu-me per WhatsApp o completa el formulari. Et respondré per resoldre dubtes i confirmar disponibilitat.",
    "Agendamos la sesión": "Agendem la sessió",
    "Buscamos un horario que encaje contigo y te explico cómo será la primera consulta online.": "Busquem un horari que encaixi amb tu i t'explico com serà la primera consulta online.",
    "Empezamos el proceso": "Comencem el procés",
    "En la primera sesión hablamos de tu situación actual, tus objetivos y los siguientes pasos.": "A la primera sessió parlem de la teva situació actual, els teus objectius i els passos següents.",
    "Nombre": "Nom",
    "Teléfono": "Telèfon",
    "Servicio de interés": "Servei d'interès",
    "Selecciona una opción": "Selecciona una opció",
    "Primera consulta": "Primera consulta",
    "Asunto": "Assumpte",
    "Mensaje": "Missatge",
    "He leído y acepto la política de privacidad.": "He llegit i accepto la política de privacitat.",
    "Enviar": "Enviar",
    "Exportar CSV": "Exportar CSV",
    "Información sobre protección de datos": "Informació sobre protecció de dades",
    "Finalidad:": "Finalitat:",
    "responder a tu solicitud y gestionar la cita.": "respondre a la teva sol·licitud i gestionar la cita.",
    "Legitimación:": "Legitimació:",
    "consentimiento de la persona interesada.": "consentiment de la persona interessada.",
    "Destinatarios:": "Destinataris:",
    "no están previstas cesiones salvo obligación legal.": "no es preveuen cessions excepte obligació legal.",
    "Derechos:": "Drets:",
    "acceso, rectificación, supresión y demás derechos reconocidos por la normativa vigente.": "accés, rectificació, supressió i altres drets reconeguts per la normativa vigent.",
    "Sesiones claras y sencillas": "Sessions clares i senzilles",
    "Tarifas orientativas pendientes de confirmar antes de la publicación.": "Tarifes orientatives pendents de confirmar abans de la publicació.",
    "Primera sesión": "Primera sessió",
    "Evaluación inicial.": "Avaluació inicial.",
    "Sesión online": "Sessió online",
    "Acompañamiento individual.": "Acompanyament individual.",
    "Bono 4 sesiones": "Bo de 4 sessions",
    "Seguimiento continuo.": "Seguiment continu.",
    "Preguntas frecuentes": "Preguntes freqüents",
    "¿La terapia online es igual de válida?": "La teràpia online és igual de vàlida?",
    "Sí. Permite trabajar con comodidad, privacidad y continuidad, manteniendo un espacio seguro para el proceso terapéutico.": "Sí. Permet treballar amb comoditat, privacitat i continuïtat, mantenint un espai segur per al procés terapèutic.",
    "¿Qué ocurre en la primera sesión?": "Què passa a la primera sessió?",
    "La primera sesión sirve para conocernos, entender tu situación actual y definir juntas los primeros objetivos.": "La primera sessió serveix per conèixer-nos, entendre la teva situació actual i definir juntes els primers objectius.",
    "¿Cuánto dura una sesión?": "Quant dura una sessió?",
    "Normalmente las sesiones tienen una duración aproximada de 50 a 60 minutos.": "Normalment les sessions tenen una durada aproximada de 50 a 60 minuts.",
    "¿Mis datos son confidenciales?": "Les meves dades són confidencials?",
    "Sí. La información se trata con confidencialidad y de acuerdo con la normativa de protección de datos.": "Sí. La informació es tracta amb confidencialitat i d'acord amb la normativa de protecció de dades.",
    "Blog": "Blog",
    "Recursos para tu bienestar": "Recursos per al teu benestar",
    "¿Cómo saber si tengo ansiedad?": "Com saber si tinc ansietat?",
    "Señales frecuentes y cuándo pedir ayuda.": "Senyals freqüents i quan demanar ajuda.",
    "Autoestima y autocrítica": "Autoestima i autocrítica",
    "Cómo empezar a hablarte con más amabilidad.": "Com començar a parlar-te amb més amabilitat.",
    "Regular emociones": "Regular emocions",
    "Primeros pasos cuando una emoción te desborda.": "Primers passos quan una emoció et desborda.",
    "Estoy aquí para acompañarte": "Soc aquí per acompanyar-te",
    "Si sientes que ha llegado el momento de pedir ayuda, puedes escribirme y vemos juntas cuál es el primer paso.": "Si sents que ha arribat el moment de demanar ajuda, pots escriure'm i veiem juntes quin és el primer pas.",
    "Escribir por WhatsApp": "Escriure per WhatsApp",
    "Rellenar formulario": "Omplir formulari",
    "Modalidad": "Modalitat",
    "Psicología online · Bienestar emocional": "Psicologia online · Benestar emocional",
    "© 2026 Rocio Blanco Psicóloga. Todos los derechos reservados.": "© 2026 Rocio Blanco Psicòloga. Tots els drets reservats.",
    "Privacidad": "Privacitat",
    "Reservar": "Reservar"
  },
  ar: {
    "Un espacio para volver a estar bien con vos": "Un espacio para volver a estar bien con vos",
    "Te ayudo a comprender lo que sientes, recuperar tu equilibrio emocional y construir una vida más tranquila y consciente.": "Te ayudo a comprender lo que sentís, recuperar tu equilibrio emocional y construir una vida más tranquila y consciente.",
    "Pide cita": "Pedí cita",
    "Adaptado a tus necesidades y a tu momento vital.": "Adaptado a tus necesidades y a tu momento vital.",
    "Escucha, empatía y respeto sin juicios.": "Escucha, empatía y respeto sin juicios.",
    "Soy psicóloga y acompaño a personas que quieren comprender mejor lo que sienten, mejorar su bienestar emocional y recuperar calma en su día a día.": "Soy psicóloga y acompaño a personas que quieren comprender mejor lo que sienten, mejorar su bienestar emocional y recuperar calma en su día a día.",
    "Mi forma de trabajar se basa en crear un espacio seguro, cercano y profesional, donde puedas expresarte con libertad y avanzar a tu ritmo.": "Mi forma de trabajar se basa en crear un espacio seguro, cercano y profesional, donde puedas expresarte con libertad y avanzar a tu ritmo.",
    "Conocer mi historia": "Conocé mi historia",
    "Trabajo personal para mejorar la relación contigo misma/o.": "Trabajo personal para mejorar la relación con vos misma/o.",
    "Aprender a reconocer y regular emociones difíciles.": "Aprender a reconocer y regular emociones difíciles.",
    "Por qué elegirme": "Por qué elegirme",
    "Una forma de trabajar centrada en ti": "Una forma de trabajar centrada en vos",
    "La terapia es un espacio para entender lo que te pasa, poner palabras a lo que sientes y construir recursos que puedas llevar a tu día a día.": "La terapia es un espacio para entender lo que te pasa, poner palabras a lo que sentís y construir recursos que puedas llevar a tu día a día.",
    "Proceso personalizado según tus necesidades": "Proceso personalizado según tus necesidades",
    "Reserva tu primera cita": "Reservá tu primera cita",
    "Un primer contacto sencillo para entender qué necesitas y valorar juntas cómo puedo acompañarte.": "Un primer contacto sencillo para entender qué necesitás y valorar juntas cómo puedo acompañarte.",
    "Escríbeme por WhatsApp o completa el formulario. Te responderé para resolver dudas y confirmar disponibilidad.": "Escribime por WhatsApp o completá el formulario. Te responderé para resolver dudas y confirmar disponibilidad.",
    "Buscamos un horario que encaje contigo y te explico cómo será la primera consulta online.": "Buscamos un horario que encaje con vos y te explico cómo será la primera consulta online.",
    "He leído y acepto la política de privacidad.": "Leí y acepto la política de privacidad.",
    "Enviar": "Enviar",
    "Selecciona una opción": "Seleccioná una opción",
    "Sesiones claras y sencillas": "Sesiones claras y sencillas",
    "¿La terapia online es igual de válida?": "¿La terapia online es igual de válida?",
    "¿Qué ocurre en la primera sesión?": "¿Qué pasa en la primera sesión?",
    "La primera sesión sirve para conocernos, entender tu situación actual y definir juntas los primeros objetivos.": "La primera sesión sirve para conocernos, entender tu situación actual y definir juntas los primeros objetivos.",
    "¿Cuánto dura una sesión?": "¿Cuánto dura una sesión?",
    "¿Mis datos son confidenciales?": "¿Mis datos son confidenciales?",
    "¿Cómo saber si tengo ansiedad?": "¿Cómo saber si tengo ansiedad?",
    "Cómo empezar a hablarte con más amabilidad.": "Cómo empezar a hablarte con más amabilidad.",
    "Primeros pasos cuando una emoción te desborda.": "Primeros pasos cuando una emoción te desborda.",
    "Estoy aquí para acompañarte": "Estoy acá para acompañarte",
    "Si sientes que ha llegado el momento de pedir ayuda, puedes escribirme y vemos juntas cuál es el primer paso.": "Si sentís que llegó el momento de pedir ayuda, podés escribirme y vemos juntas cuál es el primer paso.",
    "Escribir por WhatsApp": "Escribir por WhatsApp",
    "Rellenar formulario": "Completar formulario",
    "Psicología online · Bienestar emocional": "Psicología online · Bienestar emocional",
    "Privacidad": "Privacidad",
    "Reservar": "Reservar"
  }
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const text = node.nodeValue.trim();
    const parent = node.parentElement;
    if (!text || !parent || ["SCRIPT", "STYLE", "SVG"].includes(parent.tagName)) {
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  node.baseText = node.nodeValue.trim();
  textNodes.push(node);
}

function translate(text, lang) {
  return lang === "es" ? text : translations[lang]?.[text] || text;
}

function updateWhatsapp(lang) {
  const messages = {
    es: "Hola Rocio, me gustaría solicitar información para una primera cita.",
    en: "Hello Rocio, I would like to request information for a first appointment.",
    ca: "Hola Rocio, m'agradaria demanar informació per a una primera cita.",
    ar: "Hola Rocio, me gustaría pedir información para una primera cita."
  };
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[lang] || messages.es)}`;
  whatsappLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappUrl;
  });
}

function applyLanguage(lang) {
  const activeLang = translations[lang] || lang === "es" ? lang : "es";
  document.documentElement.lang = activeLang;
  document.documentElement.dir = "ltr";
  document.body.classList.remove("is-rtl");

  textNodes.forEach(node => {
    const leading = node.nodeValue.match(/^\s*/)[0];
    const trailing = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = `${leading}${translate(node.baseText, activeLang)}${trailing}`;
  });

  document.title = {
    es: "Rocio Blanco Psicóloga | Terapia online y bienestar emocional",
    en: "Rocio Blanco Psychologist | Online therapy and emotional wellbeing",
    ca: "Rocio Blanco Psicòloga | Teràpia online i benestar emocional",
    ar: "Rocio Blanco Psicóloga | Terapia online y bienestar emocional"
  }[activeLang];

  document.querySelectorAll(".language-switcher button").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === activeLang);
  });

  updateWhatsapp(activeLang);
  localStorage.setItem("rocioBlancoLang", activeLang);
}

document.querySelectorAll(".language-switcher button").forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("rocioBlancoLang") || "es");

const form = document.getElementById("leadForm");
const message = document.getElementById("formMessage");

function getLeads(){
  return JSON.parse(localStorage.getItem("rocioBlancoLeads") || "[]");
}

function saveLead(lead){
  const leads = getLeads();
  leads.push(lead);
  localStorage.setItem("rocioBlancoLeads", JSON.stringify(leads));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  saveLead({
    fecha:new Date().toLocaleString("es-ES"),
    nombre:data.get("nombre"),
    email:data.get("email"),
    telefono:data.get("telefono"),
    servicio:data.get("servicio"),
    asunto:data.get("asunto"),
    mensaje:data.get("mensaje")
  });
  form.reset();
  const lang = localStorage.getItem("rocioBlancoLang") || "es";
  message.textContent = {
    es: "Solicitud guardada correctamente.",
    en: "Request saved successfully.",
    ca: "Sol·licitud guardada correctament.",
    ar: "Solicitud guardada correctamente."
  }[lang];
});

document.getElementById("downloadCsv").addEventListener("click", () => {
  const leads = getLeads();
  const lang = localStorage.getItem("rocioBlancoLang") || "es";
  if(!leads.length){
    alert({
      es: "Todavía no hay contactos guardados.",
      en: "There are no saved contacts yet.",
      ca: "Encara no hi ha contactes guardats.",
      ar: "Todavía no hay contactos guardados."
    }[lang]);
    return;
  }
  const headers = ["Fecha","Nombre","Email","Teléfono","Servicio","Asunto","Mensaje"];
  const rows = leads.map(l => [l.fecha,l.nombre,l.email,l.telefono,l.servicio,l.asunto,l.mensaje]);
  const csv = [headers,...rows].map(row => row.map(v => `"${String(v || "").replace(/"/g,'""')}"`).join(";")).join("\n");
  const blob=new Blob(["\ufeff" + csv], {type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download="contactos-rocio-blanco.csv";
  a.click();
  URL.revokeObjectURL(url);
});

document.querySelectorAll(".accordion-item button").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
  });
});

