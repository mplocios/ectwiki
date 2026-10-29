import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '../components/Icons';

const FAQS = [
  { q: 'How do I get started?', a: "You spawn in Town. Talk to the NPCs, explore the shops, and open /rankshop to buy your first rank (Peasant IV is free). Then head to Elysium to start safely, or jump into the Frontier for a challenge." },
  { q: 'How do I enter the Nether or End?', a: "Reach Adventurer I for Nether access and Knight I for End access. Use /dimcheck to see your current permissions. Portals won't work until you have the rank." },
  { q: 'What happens when I die?', a: 'If you have 1,000+ gold in your wallet, you lose a percentage on death. Deposit gold in the bank to keep it safe. The bank is never affected.' },
  { q: 'How do I protect my builds?', a: 'Use a golden shovel to create claims. Right-click two opposite corners to claim the area. Use /trust <player> to let friends build in your claim.' },
  { q: 'Can Bedrock players join?', a: 'Yes! Bedrock players connect through Geyser. Custom item models and most features work cross-platform.' },
  { q: 'What are Champion Quests?', a: 'Champion ranks each have unique quest requirements: Kill a Blue Axolotl (IV), Kill Villagers & Nitwits (III), Complete 14 Labor Tasks like mining and fishing (II), and Consume a Divine Fish (I).' },
  { q: 'How do I make money?', a: 'Join a job (/jobs), sell items to shops or the Auction House, fish for rare catches, and complete quests (/quests).' },
  { q: 'Is PvP enabled?', a: 'Frontier: Yes — PvP is on. Elysium & Town: No — PvP is disabled.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className={`faq-q ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        {q}
        <ChevronDownIcon />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', display: 'block' }}
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <h1>FAQ</h1>
      <p className="page-desc">Quick answers to common questions.</p>
      {FAQS.map((f, i) => (
        <FaqItem key={i} {...f} />
      ))}
    </>
  );
}
