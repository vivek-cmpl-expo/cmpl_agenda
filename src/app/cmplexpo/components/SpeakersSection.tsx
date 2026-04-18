import React from 'react';
import AppImage from '@/components/ui/AppImage';

type Speaker = {
  name: string;
  role: string;
  company: string;
  category: string;
  img: string;
};

const investors: Speaker[] = [
{ name: 'Kshitij Ladia', role: 'Partner', company: 'Think9 Founders Fund', category: 'Investor', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
{ name: 'Ankita Balotia', role: 'Principal', company: 'Fireside Ventures', category: 'Investor', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
{ name: 'Vivek Kumar', role: 'CEO', company: 'Venture Garage', category: 'Investor', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
{ name: 'Abhiram Bhalerao', role: 'Partner', company: 'V3 Ventures (Verlinvest)', category: 'Investor', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
{ name: 'Saptarishi Sen', role: 'Vice President', company: 'Prath Ventures', category: 'Investor', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
{ name: 'Ashim Jolly', role: 'Managing Partner', company: 'Aperio Partners', category: 'Investor', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }];


const speakers: Speaker[] = [
{ name: 'Sunny Leone', role: 'Actress & Founder', company: 'Star Struck by Sunny Leone', category: 'Inauguration', img: "https://images.unsplash.com/photo-1602062995046-2ef0c165a15d" },
{ name: 'Naiyya Saggi', role: 'Founder', company: 'EDT', category: 'Women Panel', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80' },
{ name: 'Swati Mehra', role: 'Founding Partner', company: 'Sixth Sense Ventures', category: 'Women Panel', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=200&q=80' },
{ name: 'Vivek Chadha', role: 'Founder', company: 'AccelerateX Ventures', category: 'Trend Talk', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80' },
{ name: 'Harini Sivakumar', role: 'Founder & CEO', company: 'Earth Rhythm', category: 'Beauty & PC', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80' },
{ name: 'Karishma Kewalramani', role: 'Founder', company: 'Fae Beauty', category: 'Beauty & PC', img: "https://img.rocket.new/generatedImages/rocket_gen_img_13bbedc72-1767545405008.png" },
{ name: 'Pearl Shah', role: 'VP Marketing, Owned Brands', company: 'Nykaa', category: 'Beauty & PC', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8b376fa-1763295222933.png" },
{ name: 'Nikita Kukreja', role: 'Managing Director', company: 'Cimera Care Pvt. Ltd.', category: 'Beauty & PC', img: 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&w=200&q=80' },
{ name: 'Swarn Singh', role: 'Director R&D (South Asia)', company: 'Kellanova', category: 'R&D', img: "https://img.rocket.new/generatedImages/rocket_gen_img_17a991d13-1763295980173.png" },
{ name: 'Dr. Reena Bibals', role: 'Vice President – R&D', company: 'Godrej Consumer Products', category: 'R&D', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
{ name: 'Rinka Banerjee', role: 'Founder & Director', company: 'Thinking Forks Consulting', category: 'R&D', img: "https://img.rocket.new/generatedImages/rocket_gen_img_13bbedc72-1767545405008.png" },
{ name: 'Raaj Chakravarti', role: 'Founder', company: 'The Bazaar', category: 'Founders RT', img: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=200&q=80' },
{ name: 'Anurag Kedia', role: 'Co-Founder', company: 'Pilgrim & PHD', category: 'Founders RT', img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80' },
{ name: 'Saurabh Singhal', role: 'Co-Founder & Chief Supply Officer', company: 'mCaffeine & Hyphen', category: 'Founders RT', img: "https://img.rocket.new/generatedImages/rocket_gen_img_13e5d3897-1774339311307.png" },
{ name: 'Surbhi Bafna', role: 'Founder & CEO', company: 'Allter', category: 'Hygiene', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80' },
{ name: 'Kaushik Johari', role: 'DGM – Operations', company: 'Nobel Hygiene Pvt. Ltd.', category: 'Hygiene', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
{ name: 'Sunil Lewis', role: 'Sr. Chief Manager – NPDS', company: 'Piramal Group', category: 'Hygiene', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
{ name: 'Ashwin Bhadri', role: 'Founder & CEO', company: 'Equinox Labs', category: 'Food & Bev', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
{ name: 'Kinnari Gosrani Shah', role: 'Founder', company: 'Organico Agro Foods', category: 'Food & Bev', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=200&q=80' },
{ name: 'Subhra Sankha Nandi', role: 'Head of Packaging (R&D)', company: 'Wipro Consumer Care', category: 'Packaging', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
{ name: 'Navin Stuart', role: 'Head of Packaging India', company: 'Marico Limited', category: 'Packaging', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
{ name: 'Deepanker Agarwal', role: 'Director', company: 'Ajanta Bottle Pvt Ltd', category: 'Packaging', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80' }];


function SpeakerCard({ speaker, highlight = false }: {speaker: Speaker;highlight?: boolean;}) {
  return (
    <div className="speaker-card flex flex-col items-center text-center gap-3 h-full">
      <div className="relative flex-shrink-0">
        <div
          className="speaker-img-ring rounded-full overflow-hidden"
          style={{
            width: highlight ? '120px' : '100px',
            height: highlight ? '120px' : '100px',
            padding: '2px',
            background: highlight ?
            'linear-gradient(135deg, #D4A017, #B8860B, #8B6508)' :
            'rgba(184,134,11,0.2)'
          }}>
          <div className="w-full h-full rounded-full overflow-hidden">
            <AppImage
              src={speaker.img}
              alt={`${speaker.name}, ${speaker.role} at ${speaker.company}`}
              width={highlight ? 120 : 100}
              height={highlight ? 120 : 100}
              className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        {highlight &&
        <div
          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
          style={{ background: '#B8860B', color: '#FFFFFF' }}>
          ★
        </div>
        }
      </div>
      <div className="flex flex-col items-center flex-1">
        <span
          className="text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full block mb-1"
          style={{ background: 'rgba(184,134,11,0.1)', color: '#8B6508' }}>
          {speaker.category}
        </span>
        <p className="text-expo-fg font-semibold text-sm leading-tight">{speaker.name}</p>
        <p className="text-expo-muted text-xs mt-0.5">{speaker.role}</p>
        <p className="text-xs" style={{ color: '#9A8E7A' }}>{speaker.company}</p>
      </div>
    </div>);
}

export default function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="relative z-10 py-24 md:py-28 border-b"
      style={{ background: '#F5F3EE', borderColor: 'rgba(184,134,11,0.12)' }}>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">06 / Speakers & Investors</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
              The Minds
              <br />
              <span className="text-gold-gradient">Behind the Market</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-5 md:col-start-8 flex items-end scroll-reveal delay-1">
            <p className="text-expo-muted leading-relaxed">
              Founders, investors, and operators who have built, scaled, and exited India's most recognised consumer brands.
            </p>
          </div>
        </div>

        {/* Investor Circle */}
        <div className="mb-14 scroll-reveal">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8"
            style={{ borderColor: 'rgba(184,134,11,0.3)', background: 'rgba(184,134,11,0.07)' }}>
            <span className="text-sm">💰</span>
            <span className="section-label" style={{ color: '#8B6508' }}>The Investor Circle — Pitch Day Edition 2</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8" style={{ alignItems: 'stretch' }}>
            {investors.map((inv, i) =>
            <div key={inv.name} className={`scroll-reveal delay-${Math.min(i + 1, 5)} flex`}>
                <SpeakerCard speaker={inv} highlight />
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-12" />

        {/* Featured Speakers */}
        <div className="scroll-reveal">
          <p className="section-label mb-8">Featured Speakers</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8" style={{ alignItems: 'stretch' }}>
            {speakers.map((spk, i) =>
            <div key={`${spk.name}-${i}`} className={`scroll-reveal delay-${Math.min(i % 5 + 1, 5)} flex`}>
                <SpeakerCard speaker={spk} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);
}