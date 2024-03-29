import { ContextProps, FieldsType, StateField, childrenProps } from "@/types";
import { v4 as uuid } from "uuid";
import React, { createContext, useContext, useState, useRef } from "react";
import signature from "@/components/certificate/templates/signature.png";

const CertificateContext = createContext<ContextProps | null>(null);
// let descriptionText = "Congratulations on achieving excellence in our React Course! This Certificate of Achievement recognizes your dedication, skill, and commitment to mastering React's concepts and techniques. May your accomplishments continue to pave the way for your successful journey in the world of web development.";

// {
//   type: "text",
//   text: "Add Name",
//   image: "",
//   color: "#000000",
//   FM: "inter",
//   FD: "center",
//   FW: "600",
//   FS: 19,
//   L: 447,
//   T: 297,
//   MW: 1500,
//   LH: 21,
// },
// {
//   type: "text",
//   text: "Start Date",
//   image: "",
//   color: "#000000",
//   FW: "400",
//   FM: "inter",
//   FD: "center",
//   FS: 16,
//   L: 555,
//   T: 326,
//   MW: 400,
//   LH: 24,
// },
// {
//   type: "text",
//   text: "End Date",
//   image: "",
//   color: "#000000",
//   FW: "400",
//   FM: "inter",
//   FD: "center",
//   FS: 16,
//   L: 688,
//   T: 326,
//   MW: 400,
//   LH: 24,
// },
// {
//   type: "text",
//   text: "Name of institute",
//   image: "",
//   color: "#000000",
//   FW: "500",
//   FM: "inter",
//   FD: "center",
//   FS: 13,
//   L: 257,
//   T: 354,
//   MW: 1500,
//   LH: 24,
// },
// {
//   type: "file",
//   text: "",
//   image: signature,
//   color: "#000000",
//   FW: "500",
//   FM: "inter",
//   FD: "center",
//   FS: 40,
//   L: 677,
//   T: 472,
//   MW: 80,
//   LH: 24,
// },
// {
//   type: "text",
//   text: "Course-ciriculam",
//   image: "",
//   color: "#000000",
//   FW: "500",
//   FM: "inter",
//   FD: "center",
//   FS: 16,
//   L: 479,
//   T: 416,
//   MW: 300,
//   LH: 25,
// },
// {
//   type: "text",
//   text: `${uuid().slice(0,8)}`,
//   image: "",
//   color: "#000000",
//   FW: "500",
//   FM: "inter",
//   FD: "center",
//   FS: 14,
//   L: 735,
//   T: 53,
//   MW: 80,
//   LH: 24,
// },
// {
//   type: "text",
//   text: `${Math.floor(Math.random()*100)}`,
//   image: "",
//   color: "#000000",
//   FW: "500",
//   FM: "inter",
//   FD: "center",
//   FS: 14,
//   L: 710,
//   T: 76,
//   MW: 100,
//   LH: 24,
// },
// {
//   type: "text",
//   text: `Marks`,
//   image: "",
//   color: "#000000",
//   FW: "600",
//   FM: "inter",
//   FD: "center",
//   FS: 16,
//   L: 532,
//   T: 354,
//   MW: 400,
//   LH: 24,
// },
// {
//   type: "text",
//   text: `Grade`,
//   image: "",
//   color: "#000000",
//   FW: "500",
//   FM: "inter",
//   FD: "center",
//   FS: 18,
//   L: 112,
//   T: 380,
//   MW: 80,
//   LH: 24,
// },


let defaultFields: FieldsType[] = [
  {
    type: "text",
    text: "Add Name",
    image: "",
    color: "#000000",
    FM: "inter",
    FD: "center",
    FW: "600",
    FS: 19,
    L: 447,
    T: 300,
    MW: 1500,
    LH: 21,
  },
  {
    type: "text",
    text: "Start Date",
    image: "",
    color: "#000000",
    FW: "400",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 555,
    T: 327,
    MW: 400,
    LH: 24,
  },
  {
    type: "text",
    text: "End Date",
    image: "",
    color: "#000000",
    FW: "400",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 688,
    T: 327,
    MW: 400,
    LH: 24,
  },
  {
    type: "text",
    text: "Name of institute",
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 13,
    L: 257,
    T: 354,
    MW: 1500,
    LH: 24,
  },
  {
    type: "file",
    text: "",
    image: signature,
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 40,
    L: 677,
    T: 472,
    MW: 80,
    LH: 24,
  },
  {
    type: "text",
    text: "Course-ciriculam",
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 479,
    T: 417,
    MW: 300,
    LH: 25,
  },
  {
    type: "text",
    text: `${uuid().slice(0,8)}`,
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 14,
    L: 735,
    T: 53,
    MW: 80,
    LH: 24,
  },
  {
    type: "text",
    text: `${Math.floor(Math.random()*100)}`,
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 14,
    L: 710,
    T: 76,
    MW: 100,
    LH: 24,
  },
  {
    type: "text",
    text: `Marks`,
    image: "",
    color: "#000000",
    FW: "600",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 532,
    T: 354,
    MW: 400,
    LH: 24,
  },
  {
    type: "text",
    text: `Grade`,
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 18,
    L: 112,
    T: 380,
    MW: 80,
    LH: 24,
  },

  
];


let defaultFields1: FieldsType[] = [
  {
    type: "text",
    text: "Add Name ",
    image: "",
    color: "#000000",
    FM: "inter",
    FD: "center",
    FW: "600",
    FS: 18,
    L: 690,
    T: 365,
    MW: 1000,
    LH: 21,
  },
  {
    type: "text",
    text: "Service No.",
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 284,
    T: 364,
    MW: 500,
    LH: 24,
  },
  {
    type: "file",
    text: "",
    image: signature,
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 40,
    L: 677,
    T: 502,
    MW: 80,
    LH: 24,
  },
  {
    type: "text",
    text: "Course-ciriculam",
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 411,
    T: 402,
    MW: 300,
    LH: 25,
  },
  {
    type: "text",
    text: `${uuid().slice(0,8)}`,
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 14,
    L: 204,
    T: 98,
    MW: 80,
    LH: 24,
  },
  {
    type: "text",
    text: "SI No.",
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 14,
    L: 202,
    T: 76,
    MW: 80,
    LH: 24,
  },
  {
    type: "text",
    text: `${Math.floor(Math.random()*100)}`,
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 14,
    L: 727,
    T: 76,
    MW: 100,
    LH: 24,
  },
  {
    type: "text",
    text: `Rank`,
    image: "",
    color: "#000000",
    FW: "600",
    FM: "inter",
    FD: "center",
    FS: 16,
    L: 440,
    T: 365,
    MW: 400,
    LH: 24,
  },
  {
    type: "text",
    text: `date`,
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 14,
    L: 727,
    T: 99,
    MW: 80,
    LH: 24,
  },
  {
    type: "text",
    text: "Start Date",
    image: "",
    color: "#000000",
    FW: "400",
    FM: "inter",
    FD: "center",
    FS: 18,
    L: 530,
    T: 440,
    MW: 400,
    LH: 24,
  },
  {
    type: "text",
    text: "End Date",
    image: "",
    color: "#000000",
    FW: "400",
    FM: "inter",
    FD: "center",
    FS: 18,
    L: 739,
    T: 440,
    MW: 400,
    LH: 24,
  },
];

const CERTIFICATE_TYPE = {
  LAYOUT_1 : { id : 0, name : "template-1" },
  LAYOUT_2 : { id : 1, name : "template-2" },
}


// const CertificateProvider: React.FC<{ template: number; children: React.ReactNode }> = ({
//   template,
//   children,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [fields, setFields] = useState<FieldsType[]>(getDefaultFields(template));

//   const contextValue: ContextProps = {
//     fields,
//     setFields,
//     canvasRef,
//   };

//   return <CertificateContext.Provider value={contextValue}>{children}</CertificateContext.Provider>;
// };

const CertificateProvider: React.FC<childrenProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fields, setFields] = useState<FieldsType[]>(defaultFields);
  //const [QRStatus, setQRStatus] = useState<boolean>(false);
  //const [desc, setDesc] = useState<StateField>({ text: descriptionText, color: "#000000", FM: "inter", FD: "center", FW: "400", FS: 19, L: 447, T: 295, MW: 1500, LH: 21 });
  const selectLayoutType = (type : number) => {
    if(type == CERTIFICATE_TYPE.LAYOUT_1.id) {
      setFields(defaultFields)
    } else if(type == CERTIFICATE_TYPE.LAYOUT_2.id) { 
      setFields(defaultFields1)
    }
  }
  const contextValue: ContextProps = {
    fields,
    setFields,
    // QRStatus,
    // setQRStatus,
    canvasRef,
    selectLayoutType,
    // desc,
    // setDesc
  };

  return <CertificateContext.Provider value={contextValue}>{children}</CertificateContext.Provider>;
};

export default CertificateProvider;

export const useCertificate = (): ContextProps => {
  const context = useContext(CertificateContext);
  if (!context) {
    throw new Error("useCertificate must be used within a CertificateProvider");
  }
  return context;
};
