import Image from 'next/image';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import { Button } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TitleIcon from '@mui/icons-material/Title';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <div className="footer bg-[rgb(54,54,54)] h-[500px] flex px-[100px] items-center gap-10">
        <div className="left-foot flex flex-col gap-3 text-[#a4a4a4]">
          <Image src="/assets/images/asset 2.png" width={180} height={50} alt='footer-img' />
          <p className='w-[320px]'>
            At vero eos et accusam et justo duo dolo res et ea rebum. Stet clita kasd guber gren. Aenean sollici tudin lorem quis biben dum auci elit clita.
          </p>
          <div className="number flex gap-2">
            <HomeIcon className='text-white' />
            +387643932728
          </div>
          <div className="location flex gap-2">
            <PlaceIcon className='text-white' />
            Eighth Avenue 487, New York
          </div>
        </div>

        <div className="middle-foot flex flex-col gap-3">
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="name" className="w-[200px] h-[40px]" type="text" placeholder='Name' />
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" className="w-[200px] h-[40px]" type="text" placeholder='Email' />
          <label htmlFor="comment" className="sr-only">Comment</label>
          <input id="comment" className="w-[200px] h-[80px]" type="text" placeholder='Comment' />
          <div className="foot-btn">
            <Button className="w-[160px] h-[40px] text-white" variant="info">
              Submit
            </Button>
          </div>
        </div>

        <div className="right-foot h-[250px] flex flex-col gap-3">
          <div className="twitter font-bold text-white">
            Twitter feed
          </div>
          <div className="desc text-[#a4a4a4]">
            Couldn't connect with Twitter
          </div>
          <div className="icons flex gap-3 text-[#a4a4a4]">
            <InstagramIcon className='icons-social' aria-label="Instagram" />
            <TwitterIcon className='icons-social' aria-label="Twitter" />
            <FacebookIcon className='icons-social' aria-label="Facebook" />
            <TitleIcon className='icons-social' aria-label="Title" />
            <VerifiedIcon className='icons-social' aria-label="Verified" />
            <LinkedInIcon className='icons-social' aria-label="LinkedIn" />
          </div>
        </div>
      </div>

      <div className="subfooter bg-[rgb(43,43,43)] h-[80px] text-white flex items-center justify-center">
        <p>@2017 Qode Interactive, All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
