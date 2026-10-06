import { useState } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { siteConfig } from "@/lib/site-config";

export function ToothMark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 10c-5-4-13-4-15 4-2 7 3 13 4 19 1 5 3 8 5 6 2-2 2-11 6-11s4 9 6 11c2 2 4-1 5-6 1-6 6-12 4-19-2-8-10-8-15-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M19 9c2 3 5 5 9 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}

export function Brand() {
  return <a href="#inicio" className="brand" aria-label="Dra. Ana Carolina — início"><ToothMark className="brand-mark"/><span><span className="brand-name">Dra. Ana Carolina</span><span className="brand-specialty">ODONTOPEDIATRIA</span></span></a>;
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z" stroke="currentColor" strokeWidth="1.6"/><path d="m8.2 7.8.9-.3 1.2 2-1 .9c.7 1.5 1.7 2.5 3.2 3.1l.9-1 2.1 1.1-.3 1c-.2.8-1.2 1.2-2 1-3.1-.8-5.5-3.1-6.2-6.1-.2-.7.3-1.5 1.2-1.7Z" fill="currentColor"/></svg>;
}

export function ContactButton({ className = "", compact = false, floating = false }: { className?: string; compact?: boolean; floating?: boolean }) {
  const [open, setOpen] = useState(false);
  const contact = () => {
    if (siteConfig.whatsappNumber) {
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá Dra. Ana Carolina, vim pelo seu site e gostaria de agendar uma consulta.")}`, "_blank", "noopener,noreferrer");
    } else setOpen(true);
  };
  return <><Button variant="whatsapp" size="lg" className={`${floating ? "floating-contact" : "contact-button"} ${className}`} onClick={contact} aria-label="Agendar pelo WhatsApp"><WhatsAppIcon/><span>{compact ? "Agendar consulta" : "Agendar pelo WhatsApp"}</span>{!floating && <ArrowUpRight/>}</Button><Dialog open={open} onOpenChange={setOpen}><DialogContent className="contact-dialog"><div className="dialog-symbol"><WhatsAppIcon/></div><DialogTitle>Vamos conversar?</DialogTitle><DialogDescription>Esta é uma demonstração. O agendamento pelo WhatsApp estará disponível assim que o número oficial da Dra. Ana Carolina for informado.</DialogDescription><Button asChild variant="outline" size="lg"><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram/>Visitar @adentistacarolina<ArrowUpRight/></a></Button></DialogContent></Dialog></>;
}