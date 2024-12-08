import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  const hiddenAnimationState = { opacity: 0, y: -30 };
  return createPortal(
    <>
      <AnimatePresence>
        <motion.div
          className="backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.dialog
          variants={{
            hidden: { opacity: 0, y: 30 },
            visable: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visable"
          exit="hidden"
          open
          className="modal"
        >
          <h2>{title}</h2>
          {children}
        </motion.dialog>
      </AnimatePresence>
    </>,
    document.getElementById("modal")
  );
}
