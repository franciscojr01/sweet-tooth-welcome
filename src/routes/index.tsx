import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Baby, Heart, HeartHandshake, Instagram, Menu, Moon, Plus, Smile, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, ContactButton, ToothMark } from "@/components/clinic-brand";
import { siteConfig } from "@/lib/site-config";
import portrait from "@/assets/ana-carolina.png";
import care from "@/assets/atendimento.png";

const description = "Conheça a Dra. Ana Carolina: odontopediatria, pré-natal odontológico e cuidado acolhedor para crianças, adolescentes e pacientes especiais.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dra. Ana Carolina | Odontopediatria com acolhimento" },
    { name: "description", content: description },
    { property: "og:title", content: "Dra. Ana Carolina | Odontopediatria com acolhimento" },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const services = [
  { number: "01", title: "Odontopediatria", icon: Smile, text: "Cuidado com a saúde bucal de bebês, crianças e adolescentes, respeitando cada etapa do desenvolvimento." },
  { number: "02", title: "Pré-natal odontológico", icon: Baby, text: "Orientação sobre saúde bucal durante a gestação e sobre os primeiros cuidados com o sorriso do bebê." },
  { number: "03", title: "Atendimento de pacientes especiais", icon: HeartHandshake, text: "Atenção às necessidades individuais, com escuta, acolhimento e planejamento de um cuidado adaptado." },
  { number: "04", title: "Atendimento com sedação", icon: Moon, text: "Uma possibilidade que depende de avaliação individual, indicação profissional e condições de segurança." },
];
const faqs = [
  ["Quando meu filho deve ir ao odontopediatra?", "Em geral, recomenda-se a primeira visita quando nascer o primeiro dente ou até o primeiro aniversário. Essa consulta ajuda a orientar a família sobre higiene, alimentação e prevenção. A frequência das próximas visitas depende da avaliação individual."],
  ["Como funciona a primeira consulta?", "A primeira consulta costuma incluir uma conversa com os responsáveis, o conhecimento da rotina da criança e uma avaliação da saúde bucal. A abordagem deve considerar a idade, as necessidades e o tempo de adaptação de cada criança."],
  ["O atendimento é indicado para bebês?", "Sim. A odontopediatria também acompanha bebês, orientando a família sobre os primeiros dentes, a higiene bucal e hábitos relacionados à saúde da boca, de acordo com cada fase do desenvolvimento."],
  ["Como funciona o atendimento de pacientes especiais?", "O planejamento considera o histórico de saúde, as necessidades sensoriais, comportamentais e de comunicação de cada paciente. Adaptações e, quando necessário, a colaboração com outros profissionais são definidas após avaliação."],
  ["Quando a sedação pode ser utilizada?", "A sedação pode ser considerada em situações específicas, após avaliação do estado de saúde, do procedimento e das necessidades do paciente. A indicação, a técnica e os cuidados são discutidos com os responsáveis; nem toda criança necessita ou pode receber sedação."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const links = [["A doutora", "doutora"], ["Atendimentos", "atendimentos"], ["Nosso cuidado", "cuidado"], ["Dúvidas", "duvidas"]];
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header"><div className="container header-inner"><Brand/><nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><ContactButton compact className="header-contact"/><Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>{menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação mobile">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight/></a>)}</nav>}</header>
    <main id="conteudo">
      <section id="inicio" className="hero"><img className="hero-photo" src={portrait.url} alt="Dra. Ana Carolina sorrindo com um espelho odontológico" fetchPriority="high"/><div className="container hero-inner"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/>PEQUENOS SORRISOS. GRANDES CUIDADOS.</p><h1>Dra. Ana Carolina<span>Um cuidado especial<br className="desktop-break"/> para cada fase<br className="desktop-break"/> do <em>sorriso.</em></span></h1><p className="hero-description">Odontopediatria com acolhimento, segurança e atenção às necessidades de cada criança.</p><div className="hero-actions"><ContactButton/><Button variant="editorial" asChild className="discover-link"><a href="#atendimentos">Conheça o atendimento<ArrowDown/></a></Button></div><div className="hero-note"><Heart size={17}/><span>Para bebês, crianças, adolescentes e pacientes especiais.</span></div></div><div className="photo-signature"><span className="signature-icon"><ToothMark/></span><span><strong>Cuidado que acolhe.</strong><small>Respeito por cada sorriso.</small></span></div></div></section>
      <div className="care-strip"><div className="container strip-inner"><span>Um olhar atento para cada fase</span><span><Baby/>Bebês</span><span><Smile/>Crianças</span><span><Sparkles/>Adolescentes</span><span><HeartHandshake/>Pacientes especiais</span></div></div>
      <section id="doutora" className="section about-section"><div className="container about-grid"><div className="about-image"><img src={care.url} alt="Dra. Ana Carolina durante um atendimento, acompanhada por outra profissional" loading="lazy"/><div className="image-caption"><Heart/><span>Presença, atenção e acolhimento.</span></div></div><div className="about-copy"><p className="eyebrow">QUEM CUIDA DE CADA SORRISO</p><h2>Conheça a<br/>Dra. Ana Carolina<span className="heading-dot">.</span></h2><p className="lead">Um atendimento pensado para tornar a experiência odontológica mais tranquila, acolhedora e segura para crianças, adolescentes e suas famílias.</p><p>A saúde bucal faz parte do desenvolvimento. E cuidar dela também significa escutar, orientar e construir uma relação de confiança com toda a família.</p><div className="about-quote"><span>“</span><p>Mais do que cuidar dos dentes,<br/>acolher quem está por trás do sorriso.</p></div><Button asChild variant="editorial" className="social-link"><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram/>@adentistacarolina<ArrowUpRight/></a></Button></div></div></section>
      <section id="atendimentos" className="section services-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">ATENÇÃO EM CADA ETAPA</p><h2>Diferentes necessidades.<br/>O mesmo cuidado.</h2></div><p>Da espera pelo primeiro sorriso às novas fases da infância, um olhar para cada individualidade.</p></div><div className="services-grid">{services.map(({ number, title, icon: Icon, text }) => <article className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon strokeWidth={1.4}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{text}</p><a href="#contato" className="service-link" aria-label={`Conheça o atendimento: ${title}`}>Conheça o atendimento<ArrowUpRight size={17}/></a></article>)}</div></div></section>
      <section id="cuidado" className="section parents-section"><div className="container parents-grid"><div><p className="eyebrow">PARA QUEM CUIDA E PARA QUEM CRESCE</p><h2>Mais tranquilidade<br/>para os pais.<br/><span>Mais confiança<br/>para as crianças.</span></h2><p>Cada criança possui necessidades e características diferentes. Por isso, o atendimento deve respeitar seu tempo, sua individualidade e proporcionar uma experiência positiva desde os primeiros contatos com o dentista.</p><ContactButton/></div><div className="care-values"><p className="values-intro">Um cuidado que começa na escuta.</p>{["Atendimento individualizado", "Ambiente acolhedor", "Atenção às necessidades de cada criança", "Cuidado com pacientes especiais", "Orientação para pais e responsáveis"].map((text, i) => <div className="value-row" key={text}><span className="value-number">0{i + 1}</span><h3>{text}</h3><Heart strokeWidth={1.3}/></div>)}</div></div></section>
      <section id="duvidas" className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow">INFORMAÇÃO TAMBÉM É CUIDADO</p><h2>Pequenas dúvidas.<br/>Conversas importantes.</h2><p>Respostas para acompanhar sua família<br className="desktop-break"/> desde o primeiro sorriso.</p><span className="faq-decoration"><ToothMark/></span></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${activeFaq === i ? "faq-open" : ""}`} key={question}><Button variant="editorial" className="faq-trigger" onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`}><span>{question}</span><Plus/></Button><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={activeFaq !== i}><p className="faq-answer">{answer}</p></div></div>)}<p className="faq-disclaimer">Informações gerais. Cada orientação e indicação depende de avaliação profissional individual.</p></div></div></section>
      <section id="contato" className="final-cta"><div className="container"><span className="cta-mark"><ToothMark/></span><p className="eyebrow">O PRÓXIMO SORRISO COMEÇA COM UMA CONVERSA</p><h2>Vamos cuidar do<br/>sorriso do seu filho?</h2><p>Entre em contato para conhecer o atendimento e tirar suas dúvidas.</p><ContactButton/><span className="cta-note">Acolhimento para a criança. Atenção para toda a família.</span></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><Brand/><p>Cuidar de pequenos sorrisos.<br/>Acolher grandes histórias.</p><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="footer-instagram"><Instagram/><span>@adentistacarolina</span><ArrowUpRight/></a></div><div className="footer-bottom"><span>Dra. Ana Carolina · Odontopediatria</span><span>Demonstração comercial · Informações sujeitas à aprovação profissional.</span></div></div></footer>
    <ContactButton floating/>
  </>;
}
