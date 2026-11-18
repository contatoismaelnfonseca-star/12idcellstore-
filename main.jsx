import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, Smartphone, BatteryCharging, Cable, ShieldCheck, Wrench, Search, ArrowUpRight, ChevronDown, MapPin, Clock, MessageCircle, Zap, CheckCircle2, Star } from 'lucide-react';
import './styles.css';

const WHATSAPP = '5585992902681'; // WhatsApp oficial da assistência
const wa = (msg='Olá! Gostaria de solicitar um orçamento para meu celular.') => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const services = [
  {icon: Smartphone, title:'Troca de tela', text:'Tela trincada, manchas, linhas ou toque que não responde? Avaliamos e indicamos a solução.'},
  {icon: BatteryCharging, title:'Troca de bateria', text:'Bateria descarregando rápido, aquecimento ou desligamentos inesperados.'},
  {icon: Cable, title:'Conector de carga', text:'Problemas para carregar, conexão instável ou cabo que não encaixa corretamente.'},
  {icon: Search, title:'Diagnóstico técnico', text:'Análise cuidadosa para identificar a causa do defeito e orientar o reparo.'},
  {icon: Wrench, title:'Reparos em geral', text:'Atendimento especializado para diferentes falhas em celulares iPhone e Android.'},
  {icon: ShieldCheck, title:'Avaliação e orientação', text:'Explicação clara sobre o problema, opções de reparo e cuidados com seu aparelho.'}
];
const brands = ['Apple · iPhone','Samsung','Motorola','Xiaomi · Redmi','Realme','Outras marcas Android'];
const faqs = [
  ['Quais aparelhos vocês consertam?','Atendemos iPhone e Android, incluindo Samsung, Motorola, Xiaomi, Redmi, Realme e outras marcas. Consulte a disponibilidade para o seu modelo.'],
  ['Como faço para saber o preço?','O valor depende do modelo do aparelho e do defeito. Envie o modelo e uma descrição do problema pelo WhatsApp para receber uma avaliação inicial.'],
  ['O orçamento é feito antes do reparo?','Sim. A avaliação e a aprovação do orçamento acontecem antes de iniciar o serviço.'],
  ['Quanto tempo demora o conserto?','O prazo depende do tipo de reparo, disponibilidade da peça e diagnóstico. Confirmamos o prazo após avaliar seu aparelho.'],
  ['Os serviços têm garantia?','As condições e o prazo de garantia são informados de acordo com o serviço realizado e a peça utilizada.']
];

function App(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [faqOpen,setFaqOpen]=useState(0);
 const closeMenu=()=>setMenuOpen(false);
 return <>
  <header className="header">
   <div className="container nav">
    <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark"><Smartphone size={23}/></span><span>12ID <b>CELL STORE</b><small>ASSISTÊNCIA TÉCNICA</small></span></a>
    <nav className={menuOpen?'nav-links open':'nav-links'}>
     <a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#marcas" onClick={closeMenu}>Marcas</a><a href="#faq" onClick={closeMenu}>Dúvidas</a>
     <a className="nav-cta" href={wa('Olá! Quero fazer um orçamento.')} target="_blank" rel="noreferrer" onClick={closeMenu}>Orçamento <ArrowUpRight size={16}/></a>
    </nav>
    <button className="menu-btn" aria-label="Abrir menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
   </div>
  </header>
  <main>
   <section className="hero" id="inicio">
    <div className="hero-grid"></div>
    <div className="container hero-content">
     <div className="hero-copy">
      <div className="eyebrow"><span className="pulse"></span> REPARO ESPECIALIZADO · FORTALEZA, CE</div>
      <h1>Seu celular.<br/><span>Em boas mãos.</span></h1>
      <p className="hero-lead">Tecnologia, cuidado e serviço especializado para devolver a confiança ao seu iPhone ou Android.</p>
      <div className="hero-actions"><a className="btn-primary" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Solicitar orçamento</a><a className="btn-secondary" href="#servicos">Conhecer serviços <ArrowUpRight size={17}/></a></div>
      <div className="hero-trust"><div><ShieldCheck/><span><b>Atendimento transparente</b><small>Orçamento antes do reparo</small></span></div><div><Zap/><span><b>Especialista Android</b><small>Também atendemos iPhone</small></span></div></div>
     </div>
     <div className="hero-visual" aria-label="Ilustração tecnológica de smartphone">
      <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="device-glow"></div>
      <div className="phone"><div className="phone-frame"><div className="dynamic-island"></div><div className="screen"><div className="screen-time">12:ID</div><div className="screen-icon"><Wrench size={42}/></div><div className="screen-label">REPAIR<br/><strong>CARE</strong></div><div className="screen-bottom"><span>12ID</span><span>TECH SERVICE</span></div></div></div></div>
      <div className="floating-chip chip-top"><span className="chip-dot"></span> Diagnóstico preciso</div><div className="floating-chip chip-bottom"><ShieldCheck size={17}/> Cuidado em cada detalhe</div>
     </div>
    </div>
    <div className="hero-bottom container"><span>REPAROS PARA</span><div className="brand-list"><span>iPhone</span><span>Samsung</span><span>Motorola</span><span>Xiaomi</span><span>Android</span></div></div>
   </section>
   <section className="services section" id="servicos">
    <div className="container"><div className="section-head"><div><span className="eyebrow">SOLUÇÕES PARA O SEU APARELHO</span><h2>O que podemos <span>resolver?</span></h2></div><p>Serviços técnicos com avaliação clara, cuidado com seu aparelho e atenção em cada etapa.</p></div>
     <div className="service-grid">{services.map(({icon:Icon,title,text},i)=><article className="service-card" key={title}><div className="service-icon"><Icon size={23}/></div><span className="service-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href={wa(`Olá! Preciso de ajuda com: ${title}. Meu aparelho é: `)} target="_blank" rel="noreferrer">Consultar serviço <ArrowUpRight size={16}/></a></article>)}</div>
    </div>
   </section>
   <section className="about section" id="sobre"><div className="container about-layout"><div className="about-visual"><div className="about-panel"><div className="panel-top"><span className="panel-light"></span><span className="panel-light"></span><span className="panel-light"></span><span>12ID / TECH</span></div><div className="panel-art"><Smartphone size={72}/><div className="scan-line"></div></div><div className="panel-caption"><span>PRECISION<br/>REPAIR</span><span className="panel-code">12ID—001</span></div></div><div className="about-stamp"><Star size={15} fill="currentColor"/> <span>TECNOLOGIA<br/>COM CONFIANÇA</span></div></div>
    <div className="about-copy"><span className="eyebrow">QUEM SOMOS</span><h2>Mais que consertar.<br/><span>É cuidar do que conecta você.</span></h2><p>Na 12ID Cell Store, cada aparelho é tratado com atenção. Nosso compromisso é entender o problema, explicar as opções e buscar um reparo seguro e eficiente.</p><ul className="check-list"><li><CheckCircle2/> Atendimento direto e transparente</li><li><CheckCircle2/> Especialização em Android e iPhone</li><li><CheckCircle2/> Avaliação antes de executar o serviço</li><li><CheckCircle2/> Orientação para cuidar melhor do aparelho</li></ul><a className="btn-primary" href={wa('Olá! Gostaria de conversar com a 12ID Cell Store.')} target="_blank" rel="noreferrer">Fale com um técnico <ArrowUpRight size={17}/></a></div>
   </div></section>
   <section className="brands section" id="marcas"><div className="container"><div className="section-head centered"><div><span className="eyebrow">MULTIMARCAS</span><h2>Seu aparelho é <span>bem-vindo.</span></h2></div><p>Trabalhamos com diversas marcas e modelos. Consulte o seu aparelho.</p></div><div className="brand-cards">{brands.map((b,i)=><div className="brand-card" key={b}><span className="brand-num">0{i+1}</span><strong>{b}</strong><ArrowUpRight size={16}/></div>)}</div></div></section>
   <section className="process section"><div className="container"><div className="section-head"><div><span className="eyebrow">SIMPLES E SEM COMPLICAÇÃO</span><h2>Como funciona?</h2></div></div><div className="steps"><div className="step"><span>01</span><h3>Você chama</h3><p>Envie seu modelo e conte o que aconteceu com o aparelho.</p></div><div className="step"><span>02</span><h3>Avaliamos</h3><p>Entendemos o defeito e explicamos as opções disponíveis.</p></div><div className="step"><span>03</span><h3>Você aprova</h3><p>Com orçamento e prazo informados, você decide se deseja realizar.</p></div><div className="step"><span>04</span><h3>Pronto para voltar</h3><p>Após o reparo, você recebe orientações e informações da garantia.</p></div></div></div></section>
   <section className="faq section" id="faq"><div className="container faq-layout"><div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Quer saber<br/><span>antes de chamar?</span></h2><p>Se sua dúvida não estiver aqui, fale diretamente com a gente.</p><a className="btn-secondary" href={wa('Olá! Tenho uma dúvida sobre um reparo.')} target="_blank" rel="noreferrer">Perguntar no WhatsApp <ArrowUpRight size={16}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faqOpen===i?'active':''}`} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span>{q}</span><ChevronDown size={19}/></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></div></section>
   <section className="contact section" id="contato"><div className="container contact-box"><div className="contact-content"><span className="eyebrow">VAMOS RESOLVER?</span><h2>Seu aparelho precisa<br/>de <span>atenção técnica?</span></h2><p>Chame a 12ID Cell Store e conte o que está acontecendo. Vamos orientar você.</p><a className="btn-primary" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Chamar no WhatsApp</a></div><div className="contact-details"><div><MapPin/><span><b>Rua Artur Bacelar, 1304 · Messejana, Fortaleza · CE</b><small><a href="https://www.google.com/maps/search/?api=1&query=Rua+Artur+Bacelar+1304+Messejana+Fortaleza+CE" target="_blank" rel="noreferrer">Abrir localização no Google Maps ↗</a></small></span></div><div><Clock/><span><b>Atendimento</b><small>Consulte horários pelo WhatsApp</small></span></div><div><Smartphone/><span><b>iPhone e Android</b><small>Assistência técnica multimarcas</small></span></div></div></div></section>
  </main>
  <footer><div className="container footer-row"><a className="brand" href="#inicio"><span className="brand-mark"><Smartphone size={22}/></span><span>12ID <b>CELL STORE</b><small>ASSISTÊNCIA TÉCNICA</small></span></a><p>© {new Date().getFullYear()} 12ID Cell Store. Todos os direitos reservados.</p><a href={wa()} target="_blank" rel="noreferrer" className="footer-wa"><MessageCircle size={16}/> WhatsApp</a></div></footer>
  <a className="whatsapp-float" href={wa()} target="_blank" rel="noreferrer" aria-label="Fale pelo WhatsApp"><MessageCircle size={24}/></a>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);