import React from 'react'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Form() {
  const [saftey, setSaftey] = React.useState<number | null>(0);
  const [comm, setComm] = React.useState<number | null>(0);
  const [thumb, setThumb] = React.useState<number | null>(0);
  return (
    <div className='max-w-[400px] bg-[#ffff] rounded-lg text-center'>
      <div className='font-bold italic text-3xl'>Leave a review </div>
      <div>
        <div className='font-bold text-xl mt-8'>safety</div>
        <div className='text-sm'>Lorem ipsum dolor sit amet consectetur.</div>
        <div>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating
        name="simple-controlled"
        value={saftey}
        onChange={(event, newValue) => {
          setSaftey(newValue);
        }}
        size='large'
      />
      
    </Box>
        </div>
      </div>
      <div>
        <div className='font-bold text-xl mt-8'>Communication</div>
        <div className='text-sm'>Lorem ipsum dolor sit amet consectetur.</div>
        <div>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating
        name="simple-controlled"
        value={comm}
        onChange={(event, newValue) => {
          setComm(newValue);
        }}
        size='large'
      />
      
    </Box>
        </div>
      </div>

      <div>
        <div className='font-bold text-xl mt-8 '>Would you recommend Trausti?</div>
        <div className='text-sm'>Lorem ipsum dolor sit amet consectetur.</div>
        <div className='flex gap-10 mt-2 justify-center'>
          <div className='flex gap-2 items-center cursor-pointer '>{thumb ===1?<img width="40" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/thumb-up--v1.png" alt="thumb-up--v1"/>:<img onClick={()=>setThumb(1)} width="40" height="30" src="https://img.icons8.com/wired/64/737373/thumb-up.png" alt="thumb-up"/>}<div>Yes</div></div>
          <div className='flex gap-2 items-center cursor-pointer'>{ thumb ===2?<img width="40" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/thumbs-down.png" alt="thumbs-down"/>: <img onClick={()=>setThumb(2)} width="40" height="30" src="https://img.icons8.com/wired/64/737373/thumbs-down.png" alt="thumbs-down"/>}<div>No</div></div>
        </div>
      </div>
      
    </div>
  )
}
