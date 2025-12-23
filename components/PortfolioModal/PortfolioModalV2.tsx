import React from 'react';
import {Modal, Box, Button} from '@mui/material';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '800px',
  height: 'auto',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'var(--primary-color)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type PortfolioModalV2Props = {
  open: boolean;
  handleClose: () => void;
  currentPortfolio: {
    frontImage: string;
    text: string;
  };
};

const PortfolioModalV2 = ({
  open,
  handleClose,
  currentPortfolio,
}: PortfolioModalV2Props) => {
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
          scrollbarColor: 'var(--accent-color) var(--primary-color)',
          '&::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: 'var(--primary-color)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--accent-color)',
            borderRadius: '80px',
          },
        }}
        className={'scrollable-content'}>
        <Button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            minWidth: '40px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            fontSize: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            transformOrigin: 'center center',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'rotate(90deg)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'rotate(0deg)';
          }}>
          &times;
        </Button>
        <div className="flex flex-col items-center">
          <div className="w-full mb-6">
            <Image
              className="w-full h-auto rounded-lg"
              src={currentPortfolio.frontImage}
              width={800}
              height={600}
              priority={true}
              loading="eager"
              alt="Portfolio item"
              style={{objectFit: 'contain'}}
            />
          </div>
          <div className="w-full">
            <p className="text-white text-base leading-relaxed">
              {currentPortfolio.text}
            </p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PortfolioModalV2;
