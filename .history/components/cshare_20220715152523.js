import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import gt from "../pic/greentick.svg"
import tc from "../pic/whitetick.svg"
const cshare = () => {
  return (
       <div className={consumerStyles.tnk}>
           <div className={consumerStyles.tick} style={{'position': 'relative','background-color':'pink'}}>
           <Image src={gt} style={{'background-color':"yellow",'position': 'absolute','top':'0','left':'0'}}></Image>
           </div>
           <Image src={tc} ></Image>
           
           
        </div>  
    
  );
};

export default cshare;