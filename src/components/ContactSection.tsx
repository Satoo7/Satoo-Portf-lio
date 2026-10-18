import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Mail, MessageCircle, Send, CheckCircle2, Instagram, Twitter, Youtube } from 'lucide-react';
import { GeassLogo } from './GeassLogo';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [niche, setNiche] = useState<string>('');
  const [style, setStyle] = useState<string>('Short Videos (Shorts, TikTok, Reels)');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      // FormSubmit integration or fallback mailto
      await fetch(`https://formsubmit.co/ajax/${portfolioConfig.contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Satoo Video Project Request from ${name}`,
          Name: name,
          Email: email,
          Niche: niche,
          Style: style,
          Message: message,
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('Form submit network attempt handled:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReopen = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setNiche('');
    setMessage('');
  };

  const directMailtoUrl = `mailto:${portfolioConfig.contactEmail}?subject=Project Request - ${encodeURIComponent(
    name || 'Video Production'
  )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
    email
  )}%0ANiche: ${encodeURIComponent(niche)}%0AStyle: ${encodeURIComponent(
    style
  )}%0ANote: ${encodeURIComponent(message)}`;

  const whatsappUrl = `https://wa.me/${portfolioConfig.whatsappNumber}?text=${encodeURIComponent(
    `Olá Satoo! Sou ${name || 'um cliente'}. Gostaria de discutir um projeto (${style}) no nicho de ${niche || 'conteúdo'}.`
  )}`;

  return (
    <section
      id="contact"
      className="space-y-16 scroll-mt-28 text-center flex flex-col items-center max-w-6xl mx-auto px-6 md:px-12 w-full pt-16 pb-24"
    >
      {/* Header (Falk Studios style) */}
      <div className="border-b border-[#241536]/40 pb-8 space-y-2 w-full max-w-2xl mx-auto">
        <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-[#F2EFF8] tracking-tight">
          CONTACT
        </h3>
        <p className="text-xs font-mono uppercase tracking-widest text-[#BBA7F5]/80">
          DIRECT CHANNEL:{' '}
          <a
            href={`mailto:${portfolioConfig.contactEmail}`}
            className="hover:underline text-[#BBA7F5] font-bold"
          >
            {portfolioConfig.contactEmail.toUpperCase()}
          </a>
        </p>
      </div>

      {/* Form or Transmitted Confirmation */}
      {isSubmitted ? (
        <div className="space-y-8 max-w-2xl py-4 text-left w-full mx-auto bg-[#100D1A]/60 border border-[#241536] p-6 sm:p-8 rounded-xl shadow-[0_10px_35px_rgba(117,70,200,0.15)] animate-[fadeIn_0.3s_ease-out]">
          <div className="flex items-center gap-3 text-[#BBA7F5]">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="font-bold text-xs uppercase tracking-[0.25em]">
              // TRANSMITTED TO {portfolioConfig.contactEmail.toUpperCase()}
            </span>
          </div>

          <div className="space-y-4 text-xs text-[#F2EFF8]/80 leading-relaxed uppercase tracking-wider font-mono">
            <p>
              OPERATOR <strong className="text-[#F2EFF8]">{name}</strong>. YOUR REQUEST HAS BEEN REGISTERED.
            </p>
            <p>
              REQUEST NICHE: <strong className="text-[#BBA7F5]">{niche || 'GENERAL'}</strong> | GUIDELINE: <strong className="text-[#BBA7F5]">{style}</strong>
            </p>

            <div className="border-t border-b border-[#241536] py-5 my-4 space-y-2">
              <p className="font-bold text-[#BBA7F5] tracking-widest">
                ◆ TECHNICAL RESPONSE SLA: 24-48 HOURS
              </p>
              <p className="text-[#F2EFF8]/50 lowercase leading-relaxed">
                Response will be dispatched directly to <strong className="text-[#F2EFF8]">{email}</strong> or via direct channel.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-2 text-xs font-bold uppercase tracking-[0.2em] font-mono">
            <a
              href={directMailtoUrl}
              className="text-[#BBA7F5] hover:text-white border-b border-[#7546C8] pb-1 transition-colors inline-block"
            >
              [ SEND VIA DIRECT EMAIL APP ]
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 border-b border-emerald-500/40 pb-1 transition-colors inline-block"
            >
              [ OPEN WHATSAPP CHAT ☞ ]
            </a>
            <a
              href={portfolioConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#BBA7F5] hover:text-white border-b border-[#7546C8] pb-1 transition-colors inline-block"
            >
              [ INSTAGRAM (@RODRIGOSATO7) ☞ ]
            </a>
            <button
              type="button"
              onClick={handleReopen}
              className="text-[#F2EFF8]/40 hover:text-[#F2EFF8] transition-colors cursor-pointer text-left sm:text-right sm:ml-auto"
            >
              [ REOPEN FORM ]
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl w-full text-left mx-auto">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#BBA7F5] uppercase tracking-[0.2em] block font-mono">
                  Operator or Producer Name:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="YOUR NAME"
                  className="w-full bg-transparent border-b border-[#241536] focus:border-[#7546C8] py-3 text-xs text-[#F2EFF8] focus:outline-none placeholder-[#F2EFF8]/20 uppercase tracking-widest rounded-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#BBA7F5] uppercase tracking-[0.2em] block font-mono">
                  Transmission Channel (Your Email):
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR.EMAIL@GMAIL.COM"
                  className="w-full bg-transparent border-b border-[#241536] focus:border-[#7546C8] py-3 text-xs text-[#F2EFF8] focus:outline-none placeholder-[#F2EFF8]/20 uppercase tracking-widest rounded-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Audience Niche */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#BBA7F5] uppercase tracking-[0.2em] block font-mono">
                Audience Niche / Topic:
              </label>
              <input
                type="text"
                required
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="E.G. PODCAST, PHILOSOPHY, FINANCE, GAMING, TECH"
                className="w-full bg-transparent border-b border-[#241536] focus:border-[#7546C8] py-3 text-xs text-[#F2EFF8] focus:outline-none placeholder-[#F2EFF8]/20 uppercase tracking-widest rounded-none transition-colors"
              />
            </div>

            {/* Row 3: Requested Operational Guideline */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#BBA7F5] uppercase tracking-[0.2em] block font-mono">
                Requested Operational Guideline:
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-transparent border-b border-[#241536] focus:border-[#7546C8] py-3 text-xs text-[#F2EFF8] focus:outline-none uppercase tracking-wider rounded-none cursor-pointer transition-colors"
              >
                <option value="Short Videos (Shorts, TikTok, Reels)" className="bg-[#090810] text-[#F2EFF8]">
                  Short Videos (Shorts, TikTok, Reels)
                </option>
                <option value="Long-form videos (YouTube, Vlogs, Podcasts)" className="bg-[#090810] text-[#F2EFF8]">
                  Long-form videos (YouTube, Vlogs, Podcasts)
                </option>
                <option value="Both Categories / Monthly Partnership" className="bg-[#090810] text-[#F2EFF8]">
                  Both Categories / Monthly Partnership
                </option>
                <option value="Commercial / Advertisements" className="bg-[#090810] text-[#F2EFF8]">
                  Commercial / Advertisements
                </option>
              </select>
            </div>

            {/* Row 4: Additional Technical Note */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#BBA7F5] uppercase tracking-[0.2em] block font-mono">
                Additional Technical Note:
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ENTER PARTICULAR REQUIREMENTS, DEADLINE, REFERENCES..."
                className="w-full bg-transparent border-b border-[#241536] focus:border-[#7546C8] py-3 text-xs text-[#F2EFF8] focus:outline-none placeholder-[#F2EFF8]/20 uppercase tracking-widest rounded-none resize-none transition-colors"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-xs font-bold uppercase tracking-[0.25em] font-mono text-[#BBA7F5] hover:text-white border-b-2 border-[#7546C8] hover:border-white pb-1 transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting
                  ? `[ TRANSMITTING TO ${portfolioConfig.contactEmail.toUpperCase()}... ]`
                  : `[ SUBMIT ORDER TO ${portfolioConfig.contactEmail.toUpperCase()} ☞ ]`}
              </button>

              {/* Direct Channels (WhatsApp & Instagram) */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>

                <a
                  href={portfolioConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-[#BBA7F5] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@rodrigosato7</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Footer (Falk Studios style with Satoo branding) */}
      <footer className="bg-[#05040a] border-t border-[#241536]/40 py-16 px-6 md:px-12 text-xs text-[#F2EFF8]/50 mt-24 z-10 relative w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand & Socials */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <GeassLogo size={20} />
              <span className="font-brand font-bold text-[#F2EFF8] tracking-tight text-xl block">
                {portfolioConfig.brandName}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href={portfolioConfig.instagramUrl || 'https://www.instagram.com/rodrigosato7/'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2EFF8]/40 hover:text-[#BBA7F5] transition-colors flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono"
              >
                <Instagram className="w-3.5 h-3.5" /> Instagram (@rodrigosato7)
              </a>
              <a
                href={portfolioConfig.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2EFF8]/40 hover:text-[#BBA7F5] transition-colors flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono"
              >
                <Twitter className="w-3.5 h-3.5" /> X (@DSatoo_777)
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2EFF8]/40 hover:text-[#BBA7F5] transition-colors flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono"
              >
                <Youtube className="w-3.5 h-3.5" /> YouTube
              </a>
              <a
                href={`mailto:${portfolioConfig.contactEmail}`}
                className="text-[#F2EFF8]/40 hover:text-[#BBA7F5] transition-colors flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>

          {/* Support Channel */}
          <div className="space-y-2 md:text-right text-left">
            <span className="text-[10px] text-[#F2EFF8]/30 uppercase tracking-widest block font-bold font-mono">
              // SUPPORT CHANNEL
            </span>
            <a
              href={`mailto:${portfolioConfig.contactEmail}`}
              className="text-[#BBA7F5] hover:text-white transition-colors uppercase font-bold tracking-widest border-b border-[#7546C8]/40 pb-1 block text-xs sm:text-sm font-mono"
            >
              {portfolioConfig.contactEmail}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-[#241536]/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#F2EFF8]/30 tracking-widest uppercase font-mono">
          <span>© {new Date().getFullYear()} {portfolioConfig.brandName.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          <span className="text-[#BBA7F5]/80">VISUALS THAT SPEAK · EDITS THAT STAND OUT</span>
        </div>
      </footer>
    </section>
  );
};
