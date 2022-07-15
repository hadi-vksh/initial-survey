import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import gt from "../pic/greentick.svg"
import tc from "../pic/whitetick.svg"
import {CopyToClipboard} from "react-copy-to-clipboard"
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,

    } from 'next-share';
    
const cshare = ({cnam}) => {
  
    const text=`I have sent a legal notice to ${cnam} for the inconvenient services provided by the company. Thanks to getyourrefunds.com -GetYourRefunds for helping me take legal action for no extra cost.`;
    
  const fallbackCopyTextToClipboard = async()=> {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied Successfully' : 'unsuccessful';
      alert(msg)
    } catch (err) {
      alert('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  const copy = async () =>{
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    await navigator.clipboard.writeText(text).then(function() {
      alert('Copied Successfully');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }


  return (
       <div className={consumerStyles.tnk}>
           <div style={{textAlign:"center"}}>
           <Image src={tc}  width={40} height={40}></Image>
           </div>
           <div className={consumerStyles.ms}>
           Your legal notice has been sent successfully! A copy of the same has been sent you via email.
           You will get notified when the company replies.
           </div>
           <div className={consumerStyles.msr}>Share the below message on your favourite social media by tagging the alleged company to create better impact.</div>
           <div className={consumerStyles.nt}>
            <div>
           I have sent a legal notice to {cnam} for the inconvenient services provided by the company. Thanks to <a href="https://getyourrefunds.com/" className={consumerStyles.web}>getyourrefunds.com</a>-GetYourRefunds for helping me take legal action for no extra cost.</div>
           <div className={consumerStyles.cpt} onClick={copy}>Copy Message</div>
           </div>
    <div className={consumerStyles.shr}>
	<div>Share</div>
	<FacebookShareButton
        url={'https://insidr.vercel.app/'}
        quote={'next-share is a social share qwertyhgdssxcvgtredsx buttons for your next React apps.'}
        hashtag={'#nextshare'}
        >
        <FacebookIcon size={32} round />
    </FacebookShareButton>
	<WhatsappShareButton
		// {/* Url you want to share */}
        quote={`I have sent a legal notice to ${cnam} for the inconvenient services provided by the company. Thanks to getyourrefunds.com -GetYourRefunds for helping me take legal action for no extra cost.`}
        title={`I have sent a legal notice to ${cnam} for the inconvenient services provided by the company. Thanks to getyourrefunds.com -GetYourRefunds for helping me take legal action for no extra cost.`}
		url={'getyourrefunds.com'} >
		<WhatsappIcon size={32} round />
	</WhatsappShareButton>
	<LinkedinShareButton
		// {/* Url you want to share */}
        summary='ewsrtyuikjhgfdsdfxghj'
        title='dtyuikjl,mnbvct'
		url={'https://insidr.vercel.app/'} >
		<LinkedinIcon size={32} round />
	</LinkedinShareButton>
    <TwitterShareButton
		// {/* Url you want to share */}
       
        title='dtyuikjl,mnbvct'
		url={'https://insidr.vercel.app/'} >
		<TwitterIcon size={32} round />
	</TwitterShareButton>
	</div>
        </div>  
    
  );
};

export default cshare;
{/* <div className={consumerStyles.thank}>Thank you for
signing up with us.
We will soon
reach out to you.</div> */}