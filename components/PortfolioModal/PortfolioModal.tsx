import React from 'react';
import {Modal, Box, Typography, Button} from '@mui/material';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90vh',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'var(--primary-color)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type PortfolioModalProps = {
  open: boolean;
  handleClose: () => void;
  currentPortfolio: {
    icon: string;
    image: string;
    title: string;
    stack: string;
    text: string;
  };
};

const PortfolioModal = ({
  open,
  handleClose,
  currentPortfolio,
}: PortfolioModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={{
          ...style,
          position: 'relative',
          scrollbarWidth: '4px',
          scrollbarColor: 'var(--primary-color) var(--primary-color)',
          '&::-webkit-scrollbar': {
            width: '4px',
            backgroundColor: 'var(--primary-color)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--primary-color)',
            borderRadius: '80px',
          },
        }}
        className={'scrollable-content'}>
        <Button
          onClick={handleClose}
          style={{position: 'fixed', top: 10, right: 10}}>
          &times;
        </Button>
        <div className="scrollable-content grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div>
            <Image
              className="p-0 md:p-12"
              src={currentPortfolio.image}
              height={851}
              width={857}
              priority={true}
              loading="eager"
              alt=""
            />
          </div>
          <div>
            <Image
              className="mb-2 rounded-lg w-4 h-4 sm:w-8 sm:h-8 md:w-24 md:h-w-24 lg:w-24 lg:h-24"
              src={currentPortfolio.icon}
              height={100}
              width={100}
              priority={true}
              loading="eager"
              alt=""
            />
            <h2 className="text-white">{currentPortfolio.title}</h2>
            <p className="text-[--accent-color]">
              <span className="font-bold text-white">Stack:</span> (
              {currentPortfolio.stack})
            </p>
            <p className="text-white">{currentPortfolio.text}</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PortfolioModal;
