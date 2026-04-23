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
  link?: string;
  description?: string;
  speakerDetails?: SpeakerInfo[];
  highlight?: boolean;
  banner?: { desktop: string; mobile: string };
};

const speakerPhotos: Record<string, SpeakerInfo> = {
  'Shaili Chopra': {
    name: 'Shaili Chopra',
    role: 'Founder',
    company: 'Gytree & SheThePeople',
    img: '/assets/members/SHAILI CHOPRA.png',
  },
  'Dr. Prabodh Halde': {
    name: 'Dr. Prabodh Halde',
    role: 'Head Global Regulatory, Public Policy and Advocacy',
    company: 'Marico Limited',
    img: '/assets/members/FT. PRABODH HALDE (PHD).png',
  },
  'Varun Kapur': {
    name: 'Varun Kapur',
    role: 'Founder',
    company: 'YU Foods',
    img: '/assets/members/VARUN KAPUR.png',
  },
  'Vinay Maheshwari': {
    name: 'Vinay Maheshwari',
    role: 'Founder & CEO',
    company: 'The Health Factory',
    img: '/assets/members/VINAY MAHESHWARI.png',
  },
  'Ravi Ramachandran': {
    name: 'Ravi Ramachandran',
    role: 'Co-Founder & CEO',
    company: 'Nua',
    img: '/assets/members/RAVI RAMACHANDRAN.png',
  },
  'Pranav Saraf': {
    name: 'Pranav Saraf',
    role: 'Founder',
    company: 'Carbamide Forte',
    img: '/assets/members/PRANAV SARAF.png',
  },
  'Neha K Kanabar': {
    name: 'Neha K Kanabar',
    role: 'Founder',
    company: 'UNIMO & INDIA FOUNDING MEMBER - NU SKIN',
    img: '/assets/members/NEHA K KANABAR.png',
  },
  'Carina Chopra': {
    name: 'Carina Chopra',
    role: 'Founder (Stealth)',
    company: 'Ex Hindustan Unilever | Lightspeed India',
    img: '/assets/members/CARINA CHOPRA.png',
  },
  'Siddha Jain': {
    name: 'Siddha Jain',
    role: 'Co-Founder & CBO',
    company: 'Bombae by Bombay Shaving Company',
    img: '/assets/members/SIDDHA JAIN.png',
  },
  'Neelam Lal': {
    name: 'Neelam Lal',
    role: 'Head of Operations and Strategy',
    company: 'Blustream',
    img: '/assets/members/NEELAM LAL.png',
  },
  'Saumyadeep Mukherjee': {
    name: 'Saumyadeep Mukherjee',
    role: 'Founder & CEO',
    company: 'Spice Story',
    img: '/assets/members/SAUMYADEEP MUKHERJEE.png',
  },
  'Astha Jain': {
    name: 'Astha Jain',
    role: 'Co-Founder & CEO',
    company: 'Imfresh and Ayuvya Ayurveda',
    img: '/assets/members/ASTHA JAIN.png',
  },
  'Nilesh Lele': {
    name: 'Nilesh Lele',
    role: 'President',
    company: 'CASMB',
    img: '/assets/members/NILESH LELE.png',
  },
  'Yash Rajani': {
    name: 'Yash Rajani',
    role: 'CEO',
    company: 'Karma Logistical Services',
    img: '/assets/members/YASH RAJANI.png',
  },
  'Varun Sheth': {
    name: 'Varun Sheth',
    role: 'Director',
    company: 'Noto - Healthy Ice Cream',
    img: '/assets/members/VARUN SHETH.png',
  },
  'Sunny Leone': {
    name: 'Sunny Leone',
    role: 'Actress & Founder',
    company: 'Star Struck by Sunny Leone',
    img: '/assets/members/SUNNY LEONE.png',
  },
  'Naiyya Saggi': {
    name: 'Naiyya Saggi',
    role: 'Founder',
    company: 'EDT',
    img: '/assets/members/NAIYYA SAGGI.png',
  },
  'Swati Mehra': {
    name: 'Swati Mehra',
    role: 'Founding Partner',
    company: 'Sixth Sense Ventures',
    img: '/assets/members/SWATI MEHRA.png',
  },
  'Vivek Chadha': {
    name: 'Vivek Chadha',
    role: 'Author of Startupology & Founder',
    company: 'AccelerateX Ventures',
    img: '/assets/members/VIVEK CHADHA.png',
  },
  'Harini Sivakumar': {
    name: 'Harini Sivakumar',
    role: 'Founder & CEO',
    company: 'Earth Rhythm',
    img: '/assets/members/HARINI SIVAKUMAR.png',
  },
  'Karishma Kewalramani': {
    name: 'Karishma Kewalramani',
    role: 'Founder',
    company: 'Fae Beauty',
    img: '/assets/members/KARISHMA KEWALRAMANI .png',
  },
  'Pearl Shah': {
    name: 'Pearl Shah',
    role: 'VP Marketing, Owned Brands',
    company: 'Nykaa',
    img: '/assets/members/PEARL SHAH.png',
  },
  'Nikita Kukreja': {
    name: 'Nikita Kukreja',
    role: 'Managing Director',
    company: 'Cimera Care Pvt. Ltd.',
    img: '/assets/members/NIKITA KUKREJA.png',
  },
  'Jaspreet Singh H Gulati': {
    name: 'Jaspreet Singh H Gulati',
    role: 'Co-Founder',
    company: 'Hitech Formulations Pvt. Ltd.',
    img: '/assets/members/JASPREET SINGH GULATI.png',
  },
  'Sarvangi Shah': {
    name: 'Sarvangi Shah',
    role: 'Founder',
    company: 'Noya Beautyworks',
    img: 'https://workshops.cmplexpo.com/assets/images/banawat/SARVANGI.png',
  },
  'Dr. Mohit Lalvani': {
    name: 'Dr. Mohit Lalvani',
    role: 'Managing Director',
    company: 'Mascot Group',
    img: 'https://workshops.cmplexpo.com/assets/images/banawat/MOHIT.png',
  },
  'Ritesh Mathur': {
    name: 'Ritesh Mathur',
    role: 'Founder',
    company: 'F2F Food & Beverage Consultants',
    img: 'https://workshops.cmplexpo.com/assets/images/savore/Ritesh-circle.png',
  },
  'FT Subhaprada Nishtala': {
    name: 'FT Subhaprada Nishtala',
    role: 'Founder',
    company: 'Food Adroit',
    img: 'https://workshops.cmplexpo.com/assets/images/savore/Subhaprada%20Nishtala-circle.png',
  },
  'Swarn Singh': {
    name: 'Swarn Singh',
    role: 'Director R&D (South Asia)',
    company: 'Kellanova',
    img: '/assets/members/SWARN SINGH.png',
  },
  'Dr. Reena Bibals': {
    name: 'Dr. Reena Bibals',
    role: 'Vice President – R&D',
    company: 'Godrej Consumer Products',
    img: '/assets/members/DR. REENA BIBALS.png',
  },
  'Rinka Banerjee': {
    name: 'Rinka Banerjee',
    role: 'Founder & Director',
    company: 'Thinking Forks Consulting',
    img: '/assets/members/RINKA BANERJEE.png',
  },
  'Raaj Chakravarti': {
    name: 'Raaj Chakravarti',
    role: 'Founder',
    company: 'The Bazaar',
    img: '/assets/members/RAAJ CHAKRAVARTI.png',
  },
  'Mansi Baranwal': {
    name: 'Mansi Baranwal',
    role: 'Founder',
    company: 'Troovy',
    img: '/assets/members/MANSI BARANWAL.png',
  },
  'Akash Valia': {
    name: 'Akash Valia',
    role: 'Co-Founder',
    company: 'Secret Alchemist',
    img: '/assets/members/AKASH VALIA.png',
  },
  'Harpreet Vir Singh': {
    name: 'Harpreet Vir Singh',
    role: 'Founder',
    company: 'YourHappyLife',
    img: '/assets/members/HARPREET VIR SINGH.png',
  },
  'Anurag Kedia': {
    name: 'Anurag Kedia',
    role: 'Co-Founder',
    company: 'Pilgrim & PHD',
    img: '/assets/members/ANURAG KEDIA.png',
  },
  'Saurabh Singhal': {
    name: 'Saurabh Singhal',
    role: 'Co-Founder & Chief Supply Officer',
    company: 'mCaffeine & Hyphen',
    img: '/assets/members/SAURABH SINGHAL.png',
  },
  'Binamra Dash': {
    name: 'Binamra Dash',
    role: 'Head of Marketing',
    company: 'Alibaba.com India',
    img: 'https://workshops.cmplexpo.com/assets/images/launchpad/BINAMRA%20DASH-circle.png',
  },
  'Surbhi Bafna': {
    name: 'Surbhi Bafna',
    role: 'Founder & CEO',
    company: 'Allter',
    img: '/assets/members/SURBHI BAFNA.png',
  },
  'Ketan Munoth': {
    name: 'Ketan Munoth',
    role: 'Co-Founder',
    company: 'Plush',
    img: '/assets/members/KETAN MUNOTH .png',
  },
  'Udit (Alok) Birla': {
    name: 'Udit (Alok) Birla',
    role: 'Promoter',
    company: 'Swara Baby Products Pvt Ltd',
    img: '/assets/members/UDIT (ALOK) BIRLA.png',
  },
  'Kaushik Johari': {
    name: 'Kaushik Johari',
    role: 'DGM – Operations',
    company: 'Nobel Hygiene Pvt. Ltd.',
    img: '/assets/members/KAUSHIK JOHARI.png',
  },
  'Sunil Lewis': {
    name: 'Sunil Lewis',
    role: 'Sr. Chief Manager-NPDS',
    company: 'Piramal Group',
    img: '/assets/members/SUNIL LEWIS.png',
  },
  'Ashwin Bhadri': {
    name: 'Ashwin Bhadri',
    role: 'Founder & CEO',
    company: 'Equinox Labs',
    img: '/assets/members/ASHWIN BHADRI.png',
  },
  'Kinnari Gosrani Shah': {
    name: 'Kinnari Gosrani Shah',
    role: 'Founder',
    company: 'Organico Agro Foods',
    img: '/assets/members/KINNARI GOSRANI SHAH.png',
  },
  'Subhra Sankha Nandi': {
    name: 'Subhra Sankha Nandi',
    role: 'Head of Packaging (R&D)',
    company: 'Wipro Consumer Care',
    img: '/assets/members/SUBHRA SANKHA NANDI.png',
  },
  'Navin Stuart': {
    name: 'Navin Stuart',
    role: 'Head of Packaging India',
    company: 'Marico Limited',
    img: '/assets/members/NAVIN STUART.png',
  },
  'Deepanker Agarwal': {
    name: 'Deepanker Agarwal',
    role: 'Director',
    company: 'Ajanta Bottle Pvt Ltd',
    img: '/assets/members/DEEPANKER AGARWAL.png',
  },
  'Raju Kalgutkar': {
    name: 'Raju Kalgutkar',
    role: 'Head of Packaging – DGM',
    company: 'Piramal Consumer Healthcare',
    img: '/assets/members/RAJU KALGUTKAR.png',
  },
  'Sridhar J': {
    name: 'Sridhar J',
    role: 'Head – Packaging',
    company: 'Pureplay Skin Sciences',
    img: 'https://workshops.cmplexpo.com/assets/images/upack/SHRIDHAR.png',
  },
  'Vaibhav Dixit': {
    name: 'Vaibhav Dixit',
    role: 'Director',
    company: 'Alpla Group India',
    img: 'https://workshops.cmplexpo.com/assets/images/upack/VAIBHAV.png',
  },
  'Kshitij Ladia': {
    name: 'Kshitij Ladia',
    role: 'Partner',
    company: 'Think9 Founders Fund',
    img: '/assets/members/KSHITIJ LADIA.png',
  },
  'Ankita Balotia': {
    name: 'Ankita Balotia',
    role: 'Principal',
    company: 'Fireside Ventures',
    img: '/assets/members/ANKITA BALOTIA.png',
  },
  'Vivek Kumar': {
    name: 'Vivek Kumar',
    role: 'CEO',
    company: 'Venture Garage',
    img: '/assets/members/VIVEK KUMAR.png',
  },
  'Abhiram Bhalerao': {
    name: 'Abhiram Bhalerao',
    role: 'Partner',
    company: 'V3 Ventures (Verlinvest)',
    img: '/assets/members/ABHIRAM BHALERAO.png',
  },
  'Saptarishi Sen': {
    name: 'Saptarishi Sen',
    role: 'Vice President',
    company: 'Prath Ventures',
    img: '/assets/members/SAPTARISHI SEN.png',
  },
  'Ashim Jolly': {
    name: 'Ashim Jolly',
    role: 'Managing Partner',
    company: 'Aperio Partners',
    img: '/assets/members/ASHIM JOLLY.png',
  },
};

const agenda: Record<string, { date: string; sessions: Session[] }> = {
  'DAY 1': {
    date: 'Monday, 04 May 2026',
    sessions: [
      {
        time: '10:30 AM – 11:30 AM',
        type: 'event',
        title: 'Inauguration and Keynote',
        description:
          "The official opening of CMPL Expo 2026 - Asia's largest Contract Manufacturing & Private Label platform. Join us for a landmark inauguration ceremony.",
        highlight: true,
        speakerDetails: [speakerPhotos['Sunny Leone']],
      },
      {
        time: '12:00 PM – 1:00 PM',
        type: 'session',
        track: 'Women Founders Panel Discussion',
        title: 'Owning the Narrative: Building Brands, Becoming the Brand',
        description:
          'Attention can launch a brand. Authority builds an enterprise. This session examines how founders turn visibility into a scalable business - whether they started with an audience or built one along the way.',
        speakerDetails: [
          speakerPhotos['Carina Chopra'],
          speakerPhotos['Sunny Leone'],
          speakerPhotos['Naiyya Saggi'],
          speakerPhotos['Swati Mehra'],
          speakerPhotos['Siddha Jain'],
          speakerPhotos['Shaili Chopra'],
        ],
      },
      {
        time: '12:00 PM – 2:00 PM',
        type: 'workshop',
        track: 'BPC Workshop',
        title: 'Banawat - BPC Workshop',
        link: 'https://workshops.cmplexpo.com/banawat-workshop',
        description:
          'A hands-on masterclass for founders and formulators building the next generation of Indian Beauty & Personal Care products. Explore cutting-edge formulation strategies, ingredient innovation, and manufacturing partnerships.',
        speakerDetails: [speakerPhotos['Sarvangi Shah'], speakerPhotos['Dr. Mohit Lalvani']],
      },
      {
        time: '1:15 PM – 2:00 PM',
        type: 'session',
        track: 'Trend Talks ',
        title: 'Trend Talks ',
        description:
          'A masterclass for founders, operators, and brand builders who are moving fast and want to scale right.',
        speakerDetails: [speakerPhotos['Vivek Chadha']],
      },
      {
        time: '2:45 PM – 3:30 PM',
        type: 'session',
        track: 'Beauty & Personal Care',
        title: 'From Ashwagandha to Exosomes: The New Language of Indian BPC',
        description:
          "India has long understood what works. The challenge now is proving it, protecting it, and positioning it for a global consumer who expects both clinical rigour and cultural authenticity. This session explores how founders can combine India's formulation heritage with advanced biotech actives while maintaining scientific credibility.",
        speakerDetails: [
          speakerPhotos['Harini Sivakumar'],
          speakerPhotos['Karishma Kewalramani'],
          speakerPhotos['Pearl Shah'],
          speakerPhotos['Nikita Kukreja'],
          speakerPhotos['Jaspreet Singh H Gulati'],
        ],
      },
      {
        time: '2:45 PM – 4:15 PM',
        type: 'workshop',
        track: 'F&B Workshop',
        title: 'Savore - F&B Workshop',
        link: 'https://workshops.cmplexpo.com/savore-workshop',
        description:
          'A deep-dive workshop into the future of Indian food and beverage formulation. Explore emerging ingredients, consumer nutrition trends, and how to build products that resonate with the evolving Indian palate in 2026–27.',
        speakerDetails: [speakerPhotos['Ritesh Mathur'], speakerPhotos['FT Subhaprada Nishtala']],
      },
      {
        time: '3:45 PM – 4:30 PM',
        type: 'session',
        track: 'R&D',
        title: 'Reformulate or Be Replaced: The Science, Pressure & Strategy Behind Modern FMCG',
        description:
          "Reformulation is no longer damage control - it's a core R&D strategy. As regulators tighten scrutiny and pressures from ingredient bans, commodity volatility, and clean label demands grow, brands must rebuild formulations without compromising efficacy or trust. This session explores how R&D leaders are turning reformulation into a competitive advantage.",
        speakerDetails: [
          speakerPhotos['Dr. Prabodh Halde'],
          speakerPhotos['Dr. Reena Bibals'],
          speakerPhotos['Rinka Banerjee'],
        ],
      },
      {
        time: '4:30 PM – 6:30 PM',
        type: 'event',
        track: 'Exclusive',
        title: 'An Exclusive Food Founders Meetup - Mumbai',
        description:
          "Exclusively for F&B founders happening in collaboration with Equinox Lab. An exclusive, invite-only gathering for F&B founders to connect, share insights, and build meaningful partnerships. Curated conversations in a relaxed setting - no pitches, just real talk between people building India's food future.",
      },
      {
        time: '6:30 PM Onwards',
        type: 'event',
        title: 'CMPL Disruptors Awards 2026',
        description: '',
        highlight: true,
        banner: {
          desktop: '/assets/event/CMPL-SUNNY-BANNERS-M26-H08.webp',
          mobile: '/assets/event/CMPL-SUNNY-BANNERS-M26-V08.webp',
        },
      },
    ],
  },
  'DAY 2': {
    date: 'Tuesday, 05 May 2026',
    sessions: [
      {
        time: '11:30 AM – 12:15 PM',
        type: 'session',
        track: 'Founders Roundtable',
        title: 'Scars & Scale: What Building an FMCG Brand in India Really Costs',
        description:
          "Every brand has an origin story - few have an honest one. This roundtable brings together leading FMCG founders to reflect on what nearly went wrong, what they'd do differently, and what scaling a brand truly demands. For early-stage founders and product builders, this is where the real playbook gets shared.",
        speakerDetails: [
          speakerPhotos['Raaj Chakravarti'],
          speakerPhotos['Akash Valia'],
          speakerPhotos['Mansi Baranwal'],
          speakerPhotos['Saurabh Singhal'],
          speakerPhotos['Harpreet Vir Singh'],
          speakerPhotos['Anurag Kedia'],
        ],
      },
      {
        time: '11:00 AM – 12:00 PM',
        type: 'event',
        track: 'CASMB',
        title: 'Driving Growth of Food Startups and MSMEs',
        description:
          'A focused session on accelerating growth for food startups and MSMEs, presented by the Chamber for Advancement of Small and Medium Businesses.',
        speakerDetails: [speakerPhotos['Nilesh Lele'], speakerPhotos['Yash Rajani']],
      },
      {
        time: '12:30 PM – 1:30 PM',
        type: 'session',
        track: 'Hygiene',
        title: "Dirty Secret: Why Hygiene Still Can't Crack the Indian Mass Market",
        description:
          'Post-COVID growth has been strong, but mass-market habit formation remains weak. Beyond price, behaviour, culture, and relevance limit adoption - even when distribution reaches the last mile. With innovation focused on urban premium consumers, the key challenge is turning one-time trials into repeat usage at scale.',
        speakerDetails: [
          speakerPhotos['Surbhi Bafna'],
          speakerPhotos['Ketan Munoth'],
          speakerPhotos['Udit (Alok) Birla'],
          speakerPhotos['Kaushik Johari'],
          speakerPhotos['Sunil Lewis'],
        ],
      },
      {
        time: '12:15 PM – 2:15 PM',
        type: 'workshop',
        track: 'Packaging Workshop',
        title: 'Unpack - Packaging Workshop',
        link: 'https://workshops.cmplexpo.com/unpack-workshop',
        description:
          'Where real FMCG packs get tested. Bring your packaging brief or existing pack and get live feedback from industry experts on shelf impact, material choices, sustainability credentials, and retail viability.',
        speakerDetails: [speakerPhotos['Vaibhav Dixit'], speakerPhotos['Sridhar J']],
      },
      {
        time: '1:45 PM – 2:30 PM',
        type: 'session',
        track: 'Food & Beverages',
        title: 'The Contradiction Economy: Building F&B for a Consumer Who Wants Everything',
        description:
          'Creating a successful product now requires balancing function, clean label expectations, premium appeal, and affordability. This session examines how brands can develop smarter product briefs, assess which emerging ingredients are truly market-ready, and scale premium innovation beyond metros without compromising quality or price.',
        speakerDetails: [speakerPhotos['Ashwin Bhadri'], speakerPhotos['Varun Sheth'], speakerPhotos['Kinnari Gosrani Shah'], speakerPhotos['Varun Kapur'], speakerPhotos['Vinay Maheshwari']],
      },
      {
        time: '2:00 PM – 3:00 PM',
        type: 'event',
        title: 'The Mompreneurs Walkthrough',
        description:
          'An initiative in collaboration with UNIMO - Universe of Moms, this walkthrough is designed to support and empower women building brands alongside motherhood. It offers a focused platform to explore the CMPL ecosystem, discover the right partners, gain actionable insights, and accelerate their entrepreneurial journey - while connecting with a community that truly understands and champions their path.',
        highlight: true,
        speakerDetails: [{ name: 'UNIMO', role: 'Universe of Moms', company: 'In collaboration with', img: '/assets/logo/MUMO_Logo.ai.png' }],
      },
      {
        time: '2:45 PM – 3:30 PM',
        type: 'session',
        track: 'Packaging',
        title: 'The Last Layer: The Push and Pull of Packaging Decisions',
        description:
          "Every packaging decision is a negotiation - between brand ambition, retail realities, and what manufacturing can truly deliver. This session brings the manufacturer's perspective to the centre: what's viable, what's greenwashing, and where briefs meet reality - across sustainable materials, lightweighting, regulations, and shelf presence at Indian scale.",
        speakerDetails: [
          speakerPhotos['Subhra Sankha Nandi'],
          speakerPhotos['Navin Stuart'],
          speakerPhotos['Deepanker Agarwal'],
          speakerPhotos['Raju Kalgutkar'],
        ],
      },
      {
        time: '3:00 PM – 4:30 PM',
        type: 'workshop',
        track: 'Workshop',
        title: 'Launch Pad Workshop',
        link: 'https://workshops.cmplexpo.com/launchpad-workshop',
        description:
          "You've built the product. Now put it on shelves the world over. This workshop covers omnichannel distribution strategy, export readiness, and how to scale your brand across modern trade, e-commerce, and international markets.",
        speakerDetails: [speakerPhotos['Binamra Dash']],
      },
      {
        time: '3:45 PM – 4:30 PM',
        type: 'session',
        track: 'Winning the Consumer',
        title:
          'Trust is the New CAC - Why the Brands Winning in 2026 Stopped Buying Attention and Started Earning It',
        description:
          'As CAC rises and attention becomes costlier, brands must look beyond paid growth to build sustainably. In an omnichannel world, true differentiation comes from meaningful engagement. Turning first-time buyers into loyal consumers depends on strong positioning, consistent experiences, and a sharp focus on retention.',
        speakerDetails: [
          speakerPhotos['Neelam Lal'],
          speakerPhotos['Saumyadeep Mukherjee'],
          speakerPhotos['Astha Jain'],
          speakerPhotos['Ravi Ramachandran'],
          speakerPhotos['Pranav Saraf'],
          speakerPhotos['Neha K Kanabar'],
        ],
      },
    ],
  },
  'DAY 3': {
    date: 'Wednesday, 06 May 2026',
    sessions: [
      {
        time: '11:00 AM – 5:00 PM',
        type: 'event',
        title: 'PITCH DAY',
        description:
          'The dedicated pitch stage where high-potential FMCG brands present to an invited panel of investors. Beyond pitching, founders can discover manufacturing, packaging and ingredient partners across CMPL to strengthen their growth journey. A full day of high-stakes presentations, investor Q&A, and deal-making.',
        highlight: true,
        speakerDetails: [
          speakerPhotos['Kshitij Ladia'],
          speakerPhotos['Ankita Balotia'],
          speakerPhotos['Vivek Kumar'],
          speakerPhotos['Abhiram Bhalerao'],
          speakerPhotos['Saptarishi Sen'],
          speakerPhotos['Ashim Jolly'],
        ],
      },
    ],
  },
};

const typeColors: Record<string, string> = {
  session: '#B8860B',
  workshop: 'rgb(124, 58, 237)',
  break: '#9A8E7A',
  event: '#C94E4E',
};

const typeLabels: Record<string, string> = {
  session: 'SPEAQ',
  workshop: 'Special Event Area',
  break: 'Break',
  event: 'Special Event Area',
};

const workshopColors: Record<string, string> = {
  Banawat: 'rgb(124, 58, 237)',
  Savore: 'rgb(22, 163, 74)',
  Unpack: 'rgb(146, 64, 14)',
  'Launch Pad': 'rgb(37, 99, 235)',
};

function getWorkshopColor(title: string): string | null {
  for (const key of Object.keys(workshopColors)) {
    if (title.toLowerCase().includes(key.toLowerCase())) return workshopColors[key];
  }
  return null;
}

function SessionSpeakers({ speakers, isWorkshop }: { speakers: SpeakerInfo[]; isWorkshop?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
      {speakers.map((spk, i) => (
        <div
          key={i}
          className="flex items-center gap-2 sm:gap-2.5 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2"
          style={isWorkshop ? { background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)' } : { background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}
        >
          <div className="rounded-full overflow-hidden flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
            <AppImage
              src={spk.img}
              alt={`${spk.name}, ${spk.role} at ${spk.company}`}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-expo-fg text-[11px] sm:text-xs font-semibold leading-tight  max-w-[100px] sm:max-w-[140px]">
              {spk.name}
            </p>
            <p
              className="text-[10px] sm:text-xs leading-tight  max-w-[100px] sm:max-w-[140px]"
              style={{ color: '#7A6040' }}
            >
              {spk.role}
            </p>
            <p
              className="text-[9px] sm:text-[10px] leading-tight  max-w-[100px] sm:max-w-[140px]"
              style={{ color: '#B8860B' }}
            >
              {spk.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AgendaSection() {
  const [activeDay, setActiveDay] = useState('DAY 1');
  const days = Object.keys(agenda);

  return (
    <section
      id="agenda"
      className="relative z-10 py-10 sm:py-14 md:py-20 border-b"
      style={{ background: '#FAFAF8', borderColor: 'rgba(184,134,11,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">03 / Agenda</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Three Days of
              <br />
              <span className="text-gold-gradient">Pure Industry</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 scroll-reveal">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`relative py-3 sm:py-4 text-sm sm:text-base font-bold tracking-widest uppercase rounded-lg transition-all duration-300 ${
                activeDay === day
                  ? 'text-white shadow-lg'
                  : 'text-expo-muted border hover:border-gold/50'
              }`}
              style={
                activeDay === day
                  ? {
                      background: 'linear-gradient(135deg, #D4A017 0%, #B8860B 50%, #8B6508 100%)',
                      border: '1px solid #B8860B',
                      boxShadow: '0 4px 20px rgba(184,134,11,0.3)',
                    }
                  : {
                      background: 'rgba(184,134,11,0.05)',
                      borderColor: 'rgba(184,134,11,0.2)',
                    }
              }
            >
              {activeDay === day && (
                <span
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ boxShadow: '0 0 20px rgba(184,134,11,0.3)' }}
                />
              )}
              <span className="relative z-10">{day}</span>
            </button>
          ))}
        </div>

        {/* Date */}
        <p className="text-expo-muted text-sm mb-6 font-medium">{agenda[activeDay].date}</p>

        {/* Sessions */}
        <div className="space-y-2">
          {agenda[activeDay].sessions.map((session, i) => (
            session.banner ? (
              <div key={i} className="rounded-lg overflow-hidden">
                <AppImage
                  src={session.banner.desktop}
                  alt={session.title}
                  width={1200}
                  height={300}
                  className="w-full h-auto hidden sm:block rounded-lg"
                />
                <AppImage
                  src={session.banner.mobile}
                  alt={session.title}
                  width={600}
                  height={600}
                  className="w-full h-auto block sm:hidden rounded-lg"
                />
              </div>
            ) :
            <div
              key={i}
              className={`session-card rounded-lg p-3 sm:p-5 md:p-6`}
              style={(() => {
                const wc = session.type === 'workshop' ? getWorkshopColor(session.title) : null;
                const wcBg = wc ? wc.replace('rgb(', 'rgba(').replace(')', ', 0.05)') : null;
                const wcBorder = wc ? wc.replace('rgb(', 'rgba(').replace(')', ', 0.15)') : null;
                return {
                  background: session.highlight
                    ? 'rgba(184,134,11,0.06)'
                    : wcBg || (session.type === 'workshop' ? '#fafaf826' : '#FFFFFF'),
                  border: session.highlight
                    ? '1px solid rgba(184,134,11,0.25)'
                    : wcBorder
                      ? `1px solid ${wcBorder}`
                      : session.type === 'workshop'
                        ? '1px solid rgba(107,95,189,0.2)'
                        : '1px solid rgba(184,134,11,0.1)',
                };
              })()}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                {/* Time */}
                <div className="sm:min-w-[160px]">
                  <span
                    className="text-[11px] font-bold tracking-wider uppercase"
                    style={{ color: '#9A7B20' }}
                  >
                    {session.time}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {(() => {
                    const badgeColor = (session.type === 'workshop' && getWorkshopColor(session.title)) || typeColors[session.type];
                    const badgeColorBg = session.type === 'workshop' && getWorkshopColor(session.title)
                      ? getWorkshopColor(session.title)!.replace('rgb(', 'rgba(').replace(')', ', 0.1)')
                      : `${typeColors[session.type]}15`;
                    const badgeColorBorder = session.type === 'workshop' && getWorkshopColor(session.title)
                      ? getWorkshopColor(session.title)!.replace('rgb(', 'rgba(').replace(')', ', 0.25)')
                      : `${typeColors[session.type]}30`;
                    return (
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {session.track && (
                      <span
                        className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                        style={{
                          background: badgeColorBg,
                          color: badgeColor,
                          border: `1px solid ${badgeColorBorder}`,
                        }}
                      >
                        {session.track}
                      </span>
                    )}
                    <span
                      className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                      style={{
                        background: badgeColorBg,
                        color: badgeColor,
                      }}
                    >
                      {typeLabels[session.type]}
                    </span>
                  </div>
                    );
                  })()}

                  <h3
                    className={`font-display font-semibold leading-snug mb-2 ${
                      session.highlight ? 'text-xl' : 'text-base md:text-lg'
                    }`}
                    style={{ color: session.highlight ? '#B8860B' : '#1A1612' }}
                  >
                    {session.link ? (
                      <a
                        href={session.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gold/40 hover:decoration-gold transition-colors"
                      >
                        {session.title}
                      </a>
                    ) : (
                      session.title
                    )}
                  </h3>

                  {session.description && session.type !== 'break' && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#7A6040' }}>
                      {session.description}
                    </p>
                  )}

                  {session.speakerDetails && session.speakerDetails.length > 0 && (
                    <SessionSpeakers speakers={session.speakerDetails} isWorkshop={session.type === 'workshop'} />
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
