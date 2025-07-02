import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ContactButtonProps {
  className?: string;
}

export function ContactButton({ className = "" }: ContactButtonProps) {
  const handleContactClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfaqVaA-uJd0IhJe2tN4Dfh7i8A5m4KAa7B6F11Q9UBKT4Nzg/viewform?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.button
      onClick={handleContactClick}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} />
      문의하기
    </motion.button>
  );
}