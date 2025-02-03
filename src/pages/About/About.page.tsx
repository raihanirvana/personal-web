/* eslint-disable max-lines-per-function */
import { Helmet } from "react-helmet-async";

import { NavigationBar, ContactsList, GeneralText } from "../../components";

const aboutText = 
`Full Stack Engineer with deep expertise in the JavaScript ecosystem and over three years of experience in full-stack web and mobile development. Specializing in building scalable, high-performance applications using React, React Native, Next.js, and Node.js.`;
const aboutText2 = 'Passionate about problem-solving and modern web architecture, with a strong background in Agile methodologies and collaborative team environments. Always eager to explore new technologies and push the boundaries of web and mobile development.'

const About = (): JSX.Element => (
  <div className="bg-black h-screen">
    <Helmet>
      <meta name="description" content="About Page" />
      <title>About Me</title>
    </Helmet>
    <div className="flex h-full">
      <div className="flex-1 pl-60 pt-60">
        <GeneralText text="ABOUT" customStyle="border-b-2 border-blue-600 text-3xl font-bold text-center w-fit" />
        <GeneralText text="raihanirvana13@gmail.com" customStyle="font-light pt-2" />
        <GeneralText text={aboutText} customStyle="pt-10 text-xl overflow-hidden" />
        <GeneralText text={aboutText2} customStyle="text-xl overflow-hidden" />
      </div>
      <div className="flex-1 flex items-end">
        <img
          src="assets/raihan.jpg"
          alt="user-picture"
          className="w-full h-[90vh] object-cover object-top rounded-md"
        />
      </div>
    </div>
    <div className="fixed top-10 left-60">
      <NavigationBar activeBar={2} />
    </div>
    <div className="fixed bottom-0 left-60 pb-10">
      <ContactsList />
    </div>
  </div>
);

export default About;