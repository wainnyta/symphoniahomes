import { motion } from 'framer-motion';
import { useState } from 'react';
import { background, Box, Button, Center, Stack } from '@chakra-ui/react';

const variants = {
  open: { x: -20, y: -20, opacity: 1 },
  closed: { x: 0, y: 0, opacity: 0 },
};
const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ margin: 'auto', textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={closeSpring}
      >
        <Box
          style={{
            width: '100px',
            height: '100px',
            background: 'red',
            margin: 'auto',
          }}
        >
          Hello?
        </Box>
      </motion.div>
    </div>
  );
};
export default Test;
