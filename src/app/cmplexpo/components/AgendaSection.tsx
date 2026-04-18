'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

type SpeakerInfo = {
  name: string;
  role: string;
  company: string;
  img: string;
};

type Session = {
  time: string;
  type: 'session' | 'workshop' | 'break' | 'event';
  track?: string;
  title: string;
  description?: string;
  speakerDetails?: SpeakerInfo[];
  highlight?: boolean;
};

const speakerPhotos: Record<string, SpeakerInfo> = {
  'Sunny Leone': {
    name: 'Sunny Leone',
    role: 'Actress & Founder',
    company: 'Star Struck by Sunny Leone',
    img: "https://images.unsplash.com/photo-1597192390356-04ec5c4cf7e9"
  },
  'Naiyya Saggi': {
    name: 'Naiyya Saggi',
    role: 'Founder',
    company: 'EDT',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80'
  },
  'Swati Mehra': {
    name: 'Swati Mehra',
    role: 'Founding Partner',
    company: 'Sixth Sense Ventures',
    img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=200&q=80'
  },
  'Vivek Chadha': {
    name: 'Vivek Chadha',
    role: 'Founder',
    company: 'AccelerateX Ventures',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80'
  },
  'Harini Sivakumar': {
    name: 'Harini Sivakumar',
    role: 'Founder & CEO',
    company: 'Earth Rhythm',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80'
  },
  'Karishma Kewalramani': {
    name: 'Karishma Kewalramani',
    role: 'Founder',
    company: 'Fae Beauty',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_13bbedc72-1767545405008.png'
  },
  'Pearl Shah': {
    name: 'Pearl Shah',
    role: 'VP Marketing, Owned Brands',
    company: 'Nykaa',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f8b376fa-1763295222933.png'
  },
  'Nikita Kukreja': {
    name: 'Nikita Kukreja',
    role: 'Managing Director',
    company: 'Cimera Care Pvt. Ltd.',
    img: 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&w=200&q=80'
  },
  'Jaspreet Singh H Gulati': {
    name: 'Jaspreet Singh H Gulati',
    role: 'Co-Founder',
    company: 'Hitech Formulations Pvt. Ltd.',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1abf56553-1774814030458.png"
  },
  'Sarvangi Shah': {
    name: 'Sarvangi Shah',
    role: 'Founder',
    company: 'Noya Beautyworks',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_13bbedc72-1767545405008.png"
  },
  'Dr. Mohit Lalvani': {
    name: 'Dr. Mohit Lalvani',
    role: 'Managing Director',
    company: 'Mascot Spincontrol Universal',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_12c645a98-1776141801963.png"
  },
  'Ritesh Mathur': {
    name: 'Ritesh Mathur',
    role: 'Founder',
    company: 'F2F Food & Beverage Consultants',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0c8c2d9-1770668163301.png"
  },
  'FT Subhaprada Nishtala': {
    name: 'FT Subhaprada Nishtala',
    role: 'Founder',
    company: 'Food Adroit',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  'Swarn Singh': {
    name: 'Swarn Singh',
    role: 'Director R&D (South Asia)',
    company: 'Kellanova',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_17a991d13-1763295980173.png'
  },
  'Dr. Reena Bibals': {
    name: 'Dr. Reena Bibals',
    role: 'Vice President – R&D',
    company: 'Godrej Consumer Products',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  'Rinka Banerjee': {
    name: 'Rinka Banerjee',
    role: 'Founder & Director',
    company: 'Thinking Forks Consulting',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_13bbedc72-1767545405008.png"
  },
  'Raaj Chakravarti': {
    name: 'Raaj Chakravarti',
    role: 'Founder',
    company: 'The Bazaar',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_188e4408b-1769342850396.png"
  },
  'Mansi Baranwal': {
    name: 'Mansi Baranwal',
    role: 'Founder',
    company: 'Troovy',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80'
  },
  'Akash Valia': {
    name: 'Akash Valia',
    role: 'Co-Founder',
    company: 'Secret Alchemist',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  'Harpreet Vir Singh': {
    name: 'Harpreet Vir Singh',
    role: 'Founder',
    company: 'YourHappyLife',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  'Anurag Kedia': {
    name: 'Anurag Kedia',
    role: 'Co-Founder',
    company: 'Pilgrim & PHD',
    img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80'
  },
  'Saurabh Singhal': {
    name: 'Saurabh Singhal',
    role: 'Co-Founder & Chief Supply Officer',
    company: 'mCaffeine & Hyphen',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_13e5d3897-1774339311307.png'
  },
  'Binamra Dash': {
    name: 'Binamra Dash',
    role: 'Head of Marketing',
    company: 'Alibaba.com India',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  'Surbhi Bafna': {
    name: 'Surbhi Bafna',
    role: 'Founder & CEO',
    company: 'Allter',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80'
  },
  'Ketan Munoth': {
    name: 'Ketan Munoth',
    role: 'Co-Founder',
    company: 'Plush',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
  },
  'Udit (Alok) Birla': {
    name: 'Udit (Alok) Birla',
    role: 'Promoter',
    company: 'Swara Baby Products Pvt Ltd',
    img: "https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4"
  },
  'Kaushik Johari': {
    name: 'Kaushik Johari',
    role: 'DGM – Operations',
    company: 'Nobel Hygiene Pvt. Ltd.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  },
  'Sunil Lewis': {
    name: 'Sunil Lewis',
    role: 'Sr. Chief Manager – NPDS',
    company: 'Piramal Group',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  'Ashwin Bhadri': {
    name: 'Ashwin Bhadri',
    role: 'Founder & CEO',
    company: 'Equinox Labs',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
  },
  'Kinnari Gosrani Shah': {
    name: 'Kinnari Gosrani Shah',
    role: 'Founder',
    company: 'Organico Agro Foods',
    img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=200&q=80'
  },
  'Subhra Sankha Nandi': {
    name: 'Subhra Sankha Nandi',
    role: 'Head of Packaging (R&D)',
    company: 'Wipro Consumer Care',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  'Navin Stuart': {
    name: 'Navin Stuart',
    role: 'Head of Packaging India',
    company: 'Marico Limited',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  'Deepanker Agarwal': {
    name: 'Deepanker Agarwal',
    role: 'Director',
    company: 'Ajanta Bottle Pvt Ltd',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80'
  },
  'Raju Kalgutkar': {
    name: 'Raju Kalgutkar',
    role: 'Head of Packaging – DGM',
    company: 'Piramal Consumer Healthcare',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_16cdc661a-1772111007190.png"
  },
  'Sridhar J': {
    name: 'Sridhar J',
    role: 'Head – Packaging',
    company: 'Pureplay Skin Sciences',
    img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80'
  },
  'Vaibhav Dixit': {
    name: 'Vaibhav Dixit',
    role: 'Director',
    company: 'Alpla Group India',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  'Kshitij Ladia': {
    name: 'Kshitij Ladia',
    role: 'Partner',
    company: 'Think9 Founders Fund',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
  },
  'Ankita Balotia': {
    name: 'Ankita Balotia',
    role: 'Principal',
    company: 'Fireside Ventures',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  'Vivek Kumar': {
    name: 'Vivek Kumar',
    role: 'CEO',
    company: 'Venture Garage',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  'Abhiram Bhalerao': {
    name: 'Abhiram Bhalerao',
    role: 'Partner',
    company: 'V3 Ventures (Verlinvest)',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  },
  'Saptarishi Sen': {
    name: 'Saptarishi Sen',
    role: 'Vice President',
    company: 'Prath Ventures',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  'Ashim Jolly': {
    name: 'Ashim Jolly',
    role: 'Managing Partner',
    company: 'Aperio Partners',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
};

const agenda: Record<string, {date: string;sessions: Session[];}> = {
  'DAY 1': {
    date: 'Monday, 04 May 2026',
    sessions: [
    {
      time: '10:30 AM – 11:30 AM',
      type: 'event',
      title: 'Inauguration & Welcome Address by Sunny Leone',
      description: "The official opening of CMPL Expo 2026 — Asia's largest Contract Manufacturing & Private Label platform. Join us for a landmark inauguration ceremony featuring celebrity entrepreneur Sunny Leone as the chief guest.",
      highlight: true,
      speakerDetails: [speakerPhotos['Sunny Leone']]
    },
    {
      time: '12:00 PM – 1:00 PM',
      type: 'session',
      track: "Women Entrepreneurs' Panel",
      title: 'Owning the Narrative: Building Brands, Becoming the Brand',
      description: 'Attention can launch a brand. Authority builds an enterprise. This session examines how founders turn visibility into a scalable business — whether they started with an audience or built one along the way.',
      speakerDetails: [speakerPhotos['Sunny Leone'], speakerPhotos['Naiyya Saggi'], speakerPhotos['Swati Mehra']]
    },
    {
      time: '12:00 PM – 2:00 PM',
      type: 'workshop',
      track: 'Paid Workshop',
      title: 'Banawat Formula X Edition 2 — Building the Next Generation Indian BPC Product',
      description: 'A hands-on masterclass for founders and formulators building the next generation of Indian Beauty & Personal Care products. Explore cutting-edge formulation strategies, ingredient innovation, and manufacturing partnerships.',
      speakerDetails: [speakerPhotos['Sarvangi Shah'], speakerPhotos['Dr. Mohit Lalvani']]
    },
    {
      time: '1:15 PM – 2:00 PM',
      type: 'session',
      track: 'Trend Talk Masterclass',
      title: "The Real Reason Your Brand Isn't Scaling — And How to Fix It",
      description: 'A masterclass for founders, operators, and brand builders who are moving fast and want to scale right. Vivek Chadha (Author of Startupology) breaks down the hidden blockers preventing FMCG brands from achieving their next growth milestone.',
      speakerDetails: [speakerPhotos['Vivek Chadha']]
    },
    {
      time: '2:00 PM – 2:30 PM',
      type: 'break',
      title: 'Lunch',
      description: 'Networking lunch break.'
    },
    {
      time: '2:45 PM – 3:30 PM',
      type: 'session',
      track: 'Beauty & Personal Care',
      title: 'From Ashwagandha to Exosomes: The New Language of Indian BPC',
      description: "India has long understood what works. The challenge now is proving it, protecting it, and positioning it for a global consumer who expects both clinical rigour and cultural authenticity. This session explores how founders can combine India's formulation heritage with advanced biotech actives while maintaining scientific credibility.",
      speakerDetails: [
      speakerPhotos['Harini Sivakumar'],
      speakerPhotos['Karishma Kewalramani'],
      speakerPhotos['Pearl Shah'],
      speakerPhotos['Nikita Kukreja'],
      speakerPhotos['Jaspreet Singh H Gulati']]
    },
    {
      time: '3:15 PM – 4:45 PM',
      type: 'workshop',
      track: 'Paid Workshop',
      title: 'Savoré Edition 2 — Body OS Building: For the Way India Will Eat in 2026–27',
      description: 'A deep-dive workshop into the future of Indian food and beverage formulation. Explore emerging ingredients, consumer nutrition trends, and how to build products that resonate with the evolving Indian palate in 2026–27.',
      speakerDetails: [speakerPhotos['Ritesh Mathur'], speakerPhotos['FT Subhaprada Nishtala']]
    },
    {
      time: '3:45 PM – 4:30 PM',
      type: 'session',
      track: 'R&D',
      title: 'Reformulate or Be Replaced: The Science, Pressure & Strategy Behind Modern FMCG',
      description: "Reformulation is no longer damage control — it's a core R&D strategy. As regulators tighten scrutiny and pressures from ingredient bans, commodity volatility, and clean label demands grow, brands must rebuild formulations without compromising efficacy or trust. This session explores how R&D leaders are turning reformulation into a competitive advantage.",
      speakerDetails: [speakerPhotos['Swarn Singh'], speakerPhotos['Dr. Reena Bibals'], speakerPhotos['Rinka Banerjee']]
    },
    {
      time: '4:30 PM – 6:30 PM',
      type: 'event',
      track: 'Exclusive',
      title: 'Food Founders Meetup — Mumbai (F&B Founders Only, in collaboration with Equinox Labs)',
      description: 'An exclusive, invite-only gathering for F&B founders to connect, share insights, and build meaningful partnerships. Curated conversations in a relaxed setting — no pitches, just real talk between people building India\'s food future.'
    },
    {
      time: '6:30 PM Onwards',
      type: 'event',
      title: 'CMD Disruptors Awards Night (Chief Guest: Sunny Leone)',
      description: "The most glamorous evening at CMPL Expo — celebrating the boldest disruptors in India's consumer goods industry. An awards ceremony recognising founders, brands, and innovators who have redefined their categories.",
      highlight: true,
      speakerDetails: [speakerPhotos['Sunny Leone']]
    }]
  },
  'DAY 2': {
    date: 'Tuesday, 05 May 2026',
    sessions: [
    {
      time: '11:00 AM – 12:00 PM',
      type: 'event',
      track: 'Networking',
      title: 'Networking Meet by Chamber for Advancement of Small and Medium Businesses',
      description: 'A structured networking session connecting SME founders, manufacturers, and industry stakeholders. Build meaningful business relationships with verified buyers, suppliers, and partners in a curated environment.'
    },
    {
      time: '11:30 AM – 12:15 PM',
      type: 'session',
      track: 'Founders Roundtable',
      title: 'Scars & Scale: What Building an FMCG Brand in India Really Costs',
      description: "Every brand has an origin story — few have an honest one. This roundtable brings together leading FMCG founders to reflect on what nearly went wrong, what they'd do differently, and what scaling a brand truly demands. For early-stage founders and product builders, this is where the real playbook gets shared.",
      speakerDetails: [
      speakerPhotos['Raaj Chakravarti'],
      speakerPhotos['Mansi Baranwal'],
      speakerPhotos['Akash Valia'],
      speakerPhotos['Harpreet Vir Singh'],
      speakerPhotos['Anurag Kedia'],
      speakerPhotos['Saurabh Singhal']]
    },
    {
      time: '12:15 PM – 2:15 PM',
      type: 'workshop',
      track: 'Paid Workshop',
      title: 'Launchpad Scale Across Channels Edition 2 — On the Shelf. Everywhere.',
      description: "You've built the product. Now put it on shelves the world over. This workshop covers omnichannel distribution strategy, export readiness, and how to scale your brand across modern trade, e-commerce, and international markets.",
      speakerDetails: [speakerPhotos['Binamra Dash']]
    },
    {
      time: '12:30 PM – 1:30 PM',
      type: 'session',
      track: 'Hygiene',
      title: "Dirty Secret: Why Hygiene Still Can't Crack the Indian Mass Market",
      description: 'Post-COVID growth has been strong, but mass-market habit formation remains weak. Beyond price, behaviour, culture, and relevance limit adoption — even when distribution reaches the last mile. With innovation focused on urban premium consumers, the key challenge is turning one-time trials into repeat usage at scale.',
      speakerDetails: [
      speakerPhotos['Surbhi Bafna'],
      speakerPhotos['Ketan Munoth'],
      speakerPhotos['Udit (Alok) Birla'],
      speakerPhotos['Kaushik Johari'],
      speakerPhotos['Sunil Lewis']]
    },
    {
      time: '1:30 PM – 2:00 PM',
      type: 'break',
      title: 'Lunch',
      description: 'Networking lunch break.'
    },
    {
      time: '2:00 PM – 2:45 PM',
      type: 'session',
      track: 'Food & Beverages',
      title: 'The Contradiction Economy: Building F&B for a Consumer Who Wants Everything',
      description: 'Creating a successful product now requires balancing function, clean label expectations, premium appeal, and affordability. This session examines how brands can develop smarter product briefs, assess which emerging ingredients are truly market-ready, and scale premium innovation beyond metros without compromising quality or price.',
      speakerDetails: [speakerPhotos['Ashwin Bhadri'], speakerPhotos['Kinnari Gosrani Shah']]
    },
    {
      time: '3:00 PM – 3:45 PM',
      type: 'session',
      track: 'Packaging',
      title: 'The Last Layer: The Push and Pull of Packaging Decisions',
      description: "Every packaging decision is a negotiation — between brand ambition, retail realities, and what manufacturing can truly deliver. This session brings the manufacturer's perspective to the centre: what's viable, what's greenwashing, and where briefs meet reality — across sustainable materials, lightweighting, regulations, and shelf presence at Indian scale.",
      speakerDetails: [
      speakerPhotos['Subhra Sankha Nandi'],
      speakerPhotos['Navin Stuart'],
      speakerPhotos['Deepanker Agarwal'],
      speakerPhotos['Raju Kalgutkar']]
    },
    {
      time: '3:00 PM – 5:00 PM',
      type: 'workshop',
      track: 'Paid Workshop',
      title: 'Unpack Edition 2 — Does Your Pack Make the Grade?',
      description: 'Where real FMCG packs get tested. Bring your packaging brief or existing pack and get live feedback from industry experts on shelf impact, material choices, sustainability credentials, and retail viability.',
      speakerDetails: [speakerPhotos['Sridhar J'], speakerPhotos['Vaibhav Dixit']]
    },
    {
      time: '4:00 PM – 4:45 PM',
      type: 'session',
      track: 'Winning the Consumer',
      title: 'Trust is the New CAC: Why Brands Winning in 2026 Stopped Buying Attention',
      description: 'As CAC rises and attention becomes costlier, brands must look beyond paid growth to build sustainably. In an omnichannel world, true differentiation comes from meaningful engagement. Turning first-time buyers into loyal consumers depends on strong positioning, consistent experiences, and a sharp focus on retention.'
    }]
  },
  'DAY 3': {
    date: 'Wednesday, 06 May 2026',
    sessions: [
    {
      time: '11:00 AM – 5:00 PM',
      type: 'event',
      title: 'PITCH DAY Edition 2 — High-potential FMCG brands pitch to an invited panel of investors',
      description: 'The dedicated pitch stage where high-potential FMCG brands present to an invited panel of investors. Beyond pitching, founders can discover manufacturing, packaging and ingredient partners across CMPL to strengthen their growth journey. A full day of high-stakes presentations, investor Q&A, and deal-making.',
      highlight: true,
      speakerDetails: [
      speakerPhotos['Kshitij Ladia'],
      speakerPhotos['Ankita Balotia'],
      speakerPhotos['Vivek Kumar'],
      speakerPhotos['Abhiram Bhalerao'],
      speakerPhotos['Saptarishi Sen'],
      speakerPhotos['Ashim Jolly']]
    }]
  }
};

const typeColors: Record<string, string> = {
  session: '#B8860B',
  workshop: '#6B5FBD',
  break: '#9A8E7A',
  event: '#C94E4E'
};

const typeLabels: Record<string, string> = {
  session: 'Session',
  workshop: 'Workshop',
  break: 'Break',
  event: 'Special Event'
};

function SessionSpeakers({ speakers }: {speakers: SpeakerInfo[];}) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {speakers.map((spk, i) =>
      <div key={i} className="flex items-center gap-2.5 rounded-lg px-3 py-2" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
          <div
          className="rounded-full overflow-hidden flex-shrink-0"
          style={{
            width: '72px',
            height: '72px',
            border: '1.5px solid rgba(184,134,11,0.3)'
          }}>
            <AppImage
            src={spk.img}
            alt={`${spk.name}, ${spk.role} at ${spk.company}`}
            width={72}
            height={72}
            className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-expo-fg text-xs font-semibold leading-tight truncate" style={{ maxWidth: '140px' }}>{spk.name}</p>
            <p className="text-xs leading-tight truncate" style={{ color: '#7A6040', maxWidth: '140px' }}>{spk.role}</p>
            <p className="text-[10px] leading-tight truncate" style={{ color: '#B8860B', maxWidth: '140px' }}>{spk.company}</p>
          </div>
        </div>
      )}
    </div>);
}

export default function AgendaSection() {
  const [activeDay, setActiveDay] = useState('DAY 1');
  const days = Object.keys(agenda);

  return (
    <section id="agenda" className="relative z-10 py-24 md:py-28 border-b" style={{ background: '#FAFAF8', borderColor: 'rgba(184,134,11,0.12)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">03 / Agenda</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
              Three Days of
              <br />
              <span className="text-gold-gradient">Pure Industry</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-10 scroll-reveal flex-wrap">
          {days.map((day) =>
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`relative px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-lg transition-all duration-300 ${
            activeDay === day ?
            'text-white shadow-lg' :
            'text-expo-muted border hover:border-gold/50'}`
            }
            style={
            activeDay === day ?
            {
              background: 'linear-gradient(135deg, #D4A017 0%, #B8860B 50%, #8B6508 100%)',
              border: '1px solid #B8860B',
              boxShadow: '0 4px 20px rgba(184,134,11,0.3)'
            } :
            {
              background: 'rgba(184,134,11,0.05)',
              borderColor: 'rgba(184,134,11,0.2)'
            }
            }>
            {activeDay === day &&
            <span
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{ boxShadow: '0 0 20px rgba(184,134,11,0.3)' }} />
            }
            <span className="relative z-10">{day}</span>
          </button>
          )}
        </div>

        {/* Date */}
        <p className="text-expo-muted text-sm mb-6 font-medium">{agenda[activeDay].date}</p>

        {/* Sessions */}
        <div className="space-y-2">
          {agenda[activeDay].sessions.map((session, i) =>
          <div
            key={i}
            className={`session-card rounded-lg p-5 md:p-6`}
            style={{
              background: session.highlight ?
              'rgba(184,134,11,0.06)' :
              '#FFFFFF',
              border: session.highlight ? '1px solid rgba(184,134,11,0.25)' : '1px solid rgba(184,134,11,0.1)'
            }}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              {/* Time */}
              <div className="min-w-[160px]">
                <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: '#9A7B20' }}>
                  {session.time}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {session.track &&
                  <span
                    className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                    style={{
                      background: `${typeColors[session.type]}15`,
                      color: typeColors[session.type],
                      border: `1px solid ${typeColors[session.type]}30`
                    }}>
                    {session.track}
                  </span>
                  }
                  <span
                    className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                    style={{
                      background: `${typeColors[session.type]}10`,
                      color: typeColors[session.type]
                    }}>
                    {typeLabels[session.type]}
                  </span>
                </div>

                <h3
                  className={`font-display font-semibold leading-snug mb-2 ${
                  session.highlight ? 'text-xl' : 'text-base md:text-lg'}`
                  }
                  style={{ color: session.highlight ? '#B8860B' : '#1A1612' }}>
                  {session.title}
                </h3>

                {session.description && session.type !== 'break' &&
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#7A6040' }}>
                  {session.description}
                </p>
                }

                {session.speakerDetails && session.speakerDetails.length > 0 &&
                <SessionSpeakers speakers={session.speakerDetails} />
                }
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>);
}