import React from 'react'
import Title from './layouts/Title';
import Card from './Card';
import {FaNetworkWired} from "react-icons/fa"
import {DiCodeBadge} from "react-icons/di"
import {LiaNetworkWiredSolid} from "react-icons/lia"
import {MdSecurity} from "react-icons/md"
import { CiDatabase } from "react-icons/ci";
import { FaAws } from "react-icons/fa6";

const Features = () => {
  return (
    <section id='features' className="w-full py-20 border-b-[1px] border-b-black">
      <Title title = "Features" des={<a href="https://rumble.com/c/c-4053065" style= {{color:'green'}}>My Rumble Channel</a>} />
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title="Web Hosting"
          des= "Successfully self-hosted a dynamic website using pfSense, showcasing my expertise in networking and server management to deliver a seamless online experience."
          icon={<FaNetworkWired />}
        />
        <Card 
          title = "Programing" 
          des = "During my university journey, I honed my programming skills by working with a diverse set of languages including Python, C++, Java, and JavaScript,demonstrating my adaptability and proficiency across multiple programming paradigms."
          icon = {<DiCodeBadge />}
        />
        <Card 
          title = "Security"
          des = "I have effectively utilized Wireshark to simulate and showcase a Man-in-the-Middle attack, effectively capturing and analyzing packet traffic. This hands-on experience underscores my practical understanding of network security vulnerabilities and my ability to dissect complex network interactions." 
          icon = {<MdSecurity />}
        />

        <Card 
          title = "Networking"
          des = "I have extensively covered a wide array of networking topics in my studies, including in-depth exploration of Routing, VLAN configuration,OSPF routing protocol,(ACLs),(QoS) implementation,These comprehensive studies reflect my strong foundation in network design and administration"
          icon={<LiaNetworkWiredSolid />}
        />
         <Card 
          title = "Data Science"
          des = "I have experience working with relational databases, including MySQL and PostgreSQL, as well as serverless databases on AWS Cloud. Additionally, I have gained proficiency in data cleaning using Tableau Desktop and Tableau Prep."
          icon={<CiDatabase/>}
        />
         <Card 
          title = "Cloud computing"
          des = "I recently completed a cloud computing course where I built projects using both Infrastructure as a Service (IAAS) and Platform as a Service (PAAS) on AWS."
          icon={<FaAws />}
        />
    
        </div>
        </section>
  );
}

export default Features