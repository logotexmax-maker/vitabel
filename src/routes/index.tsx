import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Heart, Leaf, Sparkles, HandHeart, Flower2, ShieldCheck, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { appointmentUrl, treatments, treatmentUrl } from '@/lib/clinic';
import hero from '@/assets/vital-bel-hero.jpg';
import heroMobile from '@/assets/vital-bel-hero-mobile.webp';
import clinic from '@/assets/vital-bel-clinic.jpg';
import facial from '@/assets/vital-bel-facial.jpg';
import body from '@/assets/vital-bel-body.jpg';
import skincare from '@/assets/vital-bel-skincare.jpg';
import consultation from '@/assets/vital-bel-consultation.jpg';
import estheticFacial from '@/assets/vital-bel-estetica-facial.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Vital Bel | Clínica de Estética Avançada · Marcia Bandeira' },
    { name: 'description', content: 'Beleza, cuidado e autoestima. Conheça a Vital Bel, com a dedicação de Marcia Bandeira, e agende seu momento de autocuidado pelo WhatsApp.' },
    { property: 'og:title', content: 'Vital Bel | Beleza, cuidado e autoestima' },
    { property: 'og:description', content: 'Uma experiência acolhedora de estética avançada que valoriza sua beleza natural. Conheça a Vital Bel e converse com Marcia Bandeira.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const navigation = [['Início','inicio'],['Sobre Nós','sobre'],['Tratamentos','tratamentos'],['Diferenciais','diferenciais'],['Dúvidas','duvidas'],['Contato','contato']];
const images = { hero, facial, body, skincare, consultation, estheticFacial };
const differences = [
  { icon: HandHeart, title: 'Atendimento acolhedor', text: 'Uma experiência pautada no respeito e na atenção às suas necessidades.' },
  { icon: ShieldCheck, title: 'Cuidado individualizado', text: 'Cada pessoa possui características e objetivos que merecem ser considerados.' },
  { icon: Flower2, title: 'Ambiente confortável', text: 'Um espaço pensado para oferecer tranquilidade e bem-estar.' },
  { icon: Leaf, title: 'Valorização da beleza natural', text: 'Uma abordagem que respeita sua individualidade.' },
];
const faqs = [
  ['Como posso agendar uma consulta?', 'Você pode agendar pelo WhatsApp. Converse com a clínica para conhecer os horários disponíveis e combinar seu atendimento.'],
  ['Como escolher o cuidado ideal para mim?', 'A avaliação personalizada é um momento para conversar sobre suas necessidades, objetivos e expectativas. As opções de cuidado devem ser definidas individualmente com a profissional.'],
  ['Quais tratamentos estão disponíveis?', 'Entre em contato com a clínica para confirmar os tratamentos disponíveis e conhecer as opções adequadas para você.'],
  ['Como me preparar para o atendimento?', 'As orientações variam conforme o cuidado escolhido. Ao agendar, converse com a clínica para receber as recomendações específicas para seu atendimento.'],
];

function Brand() {
  return <a href="#inicio" className="brand" aria-label="Vital Bel — Início"><span className="brand-name">Vital <em>Bel</em></span><span className="brand-caption">Marcia Bandeira · Estética Avançada</span></a>;
}
function Book({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <Button asChild variant="clinic" className={className}><a href={appointmentUrl} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight /></a></Button>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="site-header">
      <div className="page-width header-inner">
        <Brand />
        <nav aria-label="Menu principal" className="nav-desktop">{navigation.map(([label, id], i) => <a className={i === 0 ? 'active' : ''} key={id} href={`#${id}`}>{label}</a>)}</nav>
        <Book className="header-cta">Agendar Consulta</Book>
        <Button className="mobile-toggle" variant="ghost" size="icon" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-nav" aria-label="Menu no celular" className="mobile-nav">{navigation.map(([label,id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}<Book>Agendar Consulta</Book></nav>}
    </header>
    <main>
      <section className="hero" id="inicio">
        <picture className="hero-photo"><source media="(max-width: 800px)" srcSet={heroMobile} /><img src={hero} width={1536} height={1024} alt="Mulher com beleza natural em um ambiente acolhedor de estética — imagem ilustrativa" fetchPriority="high" /></picture>
        <div className="page-width hero-content">
          <span className="eyebrow">Vital Bel · Clínica de Estética Avançada</span>
          <h1>Sua beleza merece<br />um cuidado<br /><em>extraordinário.</em></h1>
          <p className="hero-description">Na Vital Bel, acreditamos que a verdadeira beleza está em sentir-se bem consigo mesma. Descubra uma experiência de estética avançada que valoriza sua beleza natural e seu bem-estar.</p>
          <div className="hero-actions"><Book>Quero agendar minha consulta</Book><Button asChild variant="editorial"><a href="#sobre">Conhecer a clínica <ArrowRight /></a></Button></div>
          <span className="hero-signature"><Sparkles size={14} /> Vital Bel | Beleza, cuidado e autoestima</span>
        </div>
      </section>
      <div className="values-strip"><div className="page-width values-inner"><div className="value"><HandHeart />Atendimento personalizado</div><div className="value"><Flower2 />Beleza e autoestima</div><div className="value"><Heart />Cuidado em cada detalhe</div></div></div>
      <section id="sobre" className="section page-width about-grid">
        <div className="about-photo"><img src={clinic} width={1024} height={1024} loading="lazy" alt="Ambiente sofisticado de estética com equipamentos e decoração verde — imagem ilustrativa" /></div>
        <div className="about-copy"><span className="eyebrow">Bem-vinda à Vital Bel</span><h2>Um espaço dedicado à sua beleza e ao seu bem-estar.</h2><p className="body-copy">Na Vital Bel – Clínica de Estética Avançada, cada detalhe é pensado para proporcionar uma experiência especial de cuidado e valorização da beleza. Com a identidade e dedicação de Marcia Bandeira, buscamos oferecer um atendimento acolhedor e personalizado, respeitando a individualidade, os objetivos e as necessidades de cada cliente.</p><div className="about-note"><Leaf size={26} /><span>Sua individualidade. Nosso cuidado.</span></div><a className="text-action" href="#marcia">Conheça quem cuida de você <ArrowUpRight size={15} /></a></div>
      </section>
      <section id="marcia" className="section marcia-section"><div className="page-width marcia-inner"><div className="marcia-title"><span className="eyebrow">Conheça quem cuida de você</span><h2>Marcia Bandeira</h2><p className="marcia-subtitle">Estética com dedicação, cuidado e atenção a cada detalhe.</p></div><div className="marcia-quote"><blockquote>“Meu propósito é ajudar você a dedicar mais tempo ao seu autocuidado, valorizando sua beleza e fazendo de cada atendimento uma experiência especial. Acredito em um acompanhamento individualizado, com atenção às suas necessidades e expectativas.”</blockquote><Book>Conversar com Marcia pelo WhatsApp</Book></div></div></section>
      <section id="tratamentos" className="section page-width"><div className="section-heading"><span className="eyebrow">Cuidado que valoriza você</span><h2>Descubra nossos cuidados estéticos</h2><p>Conheça possibilidades de cuidado para valorizar sua beleza e sua autoestima.</p></div><div className="treatment-grid">{treatments.map(treatment => <article className="treatment-card" key={treatment.name}><img src={images[treatment.image]} className={treatment.image === 'hero' ? 'portrait' : ''} width={1024} height={1024} loading="lazy" alt={`${treatment.name} — imagem ilustrativa`} /><div className="treatment-card-body"><h3>{treatment.name}</h3><p>{treatment.description}</p><Button asChild variant="treatment"><a href={treatmentUrl(treatment.name)} target="_blank" rel="noopener noreferrer">Saiba mais e agende <ArrowUpRight /></a></Button></div></article>)}</div></section>
      <section id="diferenciais" className="section difference-section"><div className="page-width"><div className="section-heading"><span className="eyebrow">A essência do nosso cuidado</span><h2>Por que escolher a Vital Bel?</h2></div><div className="difference-grid">{differences.map(({ icon: Icon, title, text }) => <div className="difference" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
      <section className="experience"><img src={facial} width={1024} height={1024} loading="lazy" alt="Momento relaxante de cuidado facial — imagem ilustrativa" /><div className="experience-content"><span className="eyebrow">Experiência Vital Bel</span><h2>Seu momento de cuidar de você começa aqui.</h2><p>Em meio à rotina, reservar um tempo para si mesma faz toda a diferença. Na Vital Bel, queremos que seu momento de autocuidado seja especial, do primeiro contato ao atendimento.</p><Book>Quero agendar minha consulta</Book></div></section>
      <section id="duvidas" className="section page-width faq-grid"><div><span className="eyebrow">Vamos conversar?</span><h2>Um cuidado que começa com confiança.</h2><p className="body-copy">Tire suas dúvidas e sinta-se à vontade para falar com a gente.</p><a className="text-action" href={appointmentUrl} target="_blank" rel="noopener noreferrer">Falar com a Vital Bel <ArrowUpRight size={15} /></a></div><Accordion type="single" collapsible className="faq-list">{faqs.map(([question,answer],i) => <AccordionItem key={question} value={`question-${i}`}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent><p>{answer}</p></AccordionContent></AccordionItem>)}</Accordion></section>
      <section id="contato" className="contact-section"><div className="page-width"><span className="eyebrow">Seu próximo momento de autocuidado</span><h2>Vamos cuidar de você?</h2><p>Converse com a Vital Bel e agende sua consulta.</p><Book>Agendar consulta pelo WhatsApp</Book><a className="contact-number" href={appointmentUrl} target="_blank" rel="noopener noreferrer">(11) 98510-9481</a></div></section>
    </main>
    <footer className="footer"><div className="page-width footer-inner"><Brand /><p>Vital Bel · Marcia Bandeira Estética<br />Beleza, cuidado e autoestima.</p><p>© {new Date().getFullYear()} Vital Bel. Todos os direitos reservados.</p></div></footer>
    <Button variant="clinic" size="icon" asChild className="floating-whatsapp"><a href={appointmentUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp" title="Conversar pelo WhatsApp"><MessageCircle /></a></Button>
  </>;
}
