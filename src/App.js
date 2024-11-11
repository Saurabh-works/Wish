import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import birthdaySong from './assets/birthdaySong.mp3';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [yesHovered, setYesHovered] = useState(false);
  const [openNoDialog, setOpenNoDialog] = useState(false);
  const [audio] = useState(new Audio(birthdaySong));

  // Auto-play song at low volume
  useEffect(() => {
    audio.volume = 0.7;
    audio.play().catch((e) => console.log("Autoplay blocked:", e));
  }, [audio]);

  // Navigate to the next paragraph
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
  };

  // Navigate to the previous paragraph
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + paragraphs.length) % paragraphs.length);
  };

  return (
    <Box
      sx={{
        bgcolor: '#a93c49',
        color: '#feeec5',
        minHeight: '100vh',
        p: 2,
        textAlign: 'center',
        fontFamily: '"Cursive", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h3" sx={{ mb: 2 }} gutterBottom>
        Happy Birthday, Vaishnavi 🎉🎂  
      </Typography>

      {/* Paragraph Slider */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 700,
          minHeight: 300,
          bgcolor: '#feeec5',
          color: '#a93c49',
          borderRadius: 2,
          p: 2,
          mb: 3,
          position: 'relative',
        }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{ position: 'absolute', left: 0, color: '#a93c49' }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="body1" sx={{ px: 2, textAlign: 'left' }}>
          {paragraphs[currentIndex]}
        </Typography>
        <IconButton
          onClick={handleNext}
          sx={{ position: 'absolute', right: 0, color: '#a93c49' }}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      {/* Question Button */}
      <Button
        variant="contained"
        onClick={() => setShowQuestion(true)}
        sx={{
          bgcolor: '#feeec5',
          color: '#a93c49',
          mb: 3,
          '&:hover': { bgcolor: '#feeec5' },
        }}
      >
        I have one question for you...
      </Button>

      {/* Question Section */}
      {showQuestion && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Can I get a girl like you in the future again?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              onMouseEnter={() => setYesHovered(true)}
              disabled={yesHovered}
              sx={{
                bgcolor: yesHovered ? 'gray' : '#feeec5',
                color: '#a93c49',
                mr: 2,
              }}
            >
              {yesHovered ? "Already selected" : "Yes"}
            </Button>
            <Button
              variant="contained"
              onClick={() => setOpenNoDialog(true)}
              sx={{
                bgcolor: '#feeec5',
                color: '#a93c49',
                ml: 2,
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      )}

      {/* No Dialog */}
      <Dialog
        open={openNoDialog}
        onClose={() => setOpenNoDialog(false)}
      >
        <DialogTitle>You’re truly irreplaceable. Thank you, Vaishnavi!</DialogTitle>
        <Button
          onClick={() => setOpenNoDialog(false)}
          sx={{ m: 2 }}
          variant="contained"
          color="primary"
        >
          Close
        </Button>
      </Dialog>
    </Box>
  );
}

// Paragraphs array
const paragraphs = [
  `Happy Birthday, Vaishnavi! 🎉 It feels like just yesterday that destiny had its way, bringing two little kids together in 3rd grade—me, fresh from B division, and you, newly settled from A division. We didn’t need much back then, just each other’s company. But you know me, with my "awesome" short-term memory, most of those golden moments have slipped my mind. I’m sure I’ve forgotten so much, it’s probably comedy material by now!`,
  `Then came that twist, where you moved to Wagholi and I went to Koregaon. For years, I missed having you around and longed for those simple, carefree days. Just when I thought our paths might never cross again, we somehow found ourselves in the same class in 9th grade! Life gave us a second chance, and although it wasn’t quite the same, we made memories that I'll always cherish.`,
  `High school rumors and all those awkward moments became a real hurdle, though. I hated that some people misinterpreted our bond, and I tried to keep my distance to protect your image. We ended up in the same college, but I thought that maybe, just maybe, our story was done. Little did I know that fate had other plans for us, and our connection wasn’t over yet.`,
  `In college, you brought humor back into my life with just a simple question: “Are you getting married?” I was so shocked—married? Me? And in the first year? 😂 But that message reopened our friendship, and soon, our chats became my favorite part of every day. We might’ve been miles apart, but it felt like you were right there with me.`,
  `Over the years, we’ve had our ups and downs, silly fights, and the inevitable “I’m sorry” messages afterward. It’s amazing how our bond survived without needing a label. Maybe that’s why it’s so special—it’s something beyond definitions and boundaries. You’ve been a constant in my life, a friend who’s always there when I needed someone the most.`,
  `You’ve always believed in me, even during my worst days. While I may not have always been there when you needed support, you never let that change your caring for me. Every time I’ve felt low, you've managed to lift my spirits. You see the real me, not defined by looks, reputation, or status, and that means more than you’ll ever know.`,
  `I know I might not fully understand my own feelings, whether it’s love, deep friendship, or just a fierce protective instinct. But one thing I do know is that you’re irreplaceable. We’re like “Kashmir and Kanyakumari,” miles apart in so many ways, yet closer than anyone could imagine. I’ve come to accept that we may never “end up together” in the way stories usually go, but our bond is unique and that’s all that matters.`,
  `You’ve made me a better person, Vaishnavi, and I can’t thank you enough for everything. No one else could have been the friend that you are to me. Even if I’m not always perfect, I hope you know that I’m grateful for every moment we’ve shared.`,
  `So, on this special day, I want you to know just how much you mean to me. Here’s to many more late-night chats, laughter, and unforgettable memories. May your life be filled with the same happiness, love, and positivity that you’ve brought into mine. Happy Birthday, Vaishnavi! 🎂💫`,
];

export default App;
