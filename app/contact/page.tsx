import { Metadata } from 'next';

import IntroShort from '@/sections/shared/introShort/IntroShort';
import Features from '@/sections/contact/features/Features';
import ContactForm from '@/sections/contact/contactForm/ContactForm';
import Offices from '@/sections/contact/offices/Offices';
import Explore from '@/sections/contact/explore/Explore';
import Start from '@/sections/shared/start/Start';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with our team to discuss your real estate needs. We are here to help you achieve your real estate goals.',
  keywords: ['contact', 'real estate', 'locus', 'expert guidance', 'tailored solutions'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <IntroShort
        title="Get in Touch with Locus"
        description="Welcome to Locus's contact page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
      />
      <Features />
      <ContactForm />
      <Offices />
      <Explore />
      <Start />
    </div>
  );
}
