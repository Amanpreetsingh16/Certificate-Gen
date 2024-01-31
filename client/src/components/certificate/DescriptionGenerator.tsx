// import React, { useState } from "react";
// import { useCertificate } from "@/context/CertificateContext";
// // import axios from "axios";

// interface Props {}

// const DescriptionGenerator: React.FC<Props> = () => {

//   const { desc, setDesc } = useCertificate();

// //   const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
// //   const [suggestedDescription, setSuggestedDescription] = useState<string>("");

// //   const apiKey = import.meta.env.VITE_APP_CHATGPT_APIKEY as string; // Replace with your actual API key
// //   const apiUrl = "https://api.openai.com/v1/chat/completions";

// //   const handleTopicChange = (topic: string) => {
// //     setSelectedTopics((prevTopics) => (prevTopics.includes(topic) ? prevTopics.filter((t) => t !== topic) : [...prevTopics, topic]));
// //   };

// //   const generateDescription = async () => {
// //     const topicsText = selectedTopics.map((topic) => `#${topic}`).join(" ");
// //     const userMessage = `Generate a description for a product about ${topicsText}.`;

// //     try {
// //       const response = await axios.post(
// //         apiUrl,
// //         {
// //           model: "gpt-3.5-turbo",
// //           messages: [{ role: "user", content: userMessage }],
// //         },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${apiKey}`,
// //           },
// //         }
// //       );
// //       console.log(response);
// //       setSuggestedDescription(response.data.choices[0].message.content);
// //     } catch (error) {
// //       console.error("Error making API request:", error);
// //     }
// //   };


/// main


//   return (

// <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                 Certificate Description
//               </label>
//               <div className="mt-2">
//                 <textarea id="about" name="about" rows={3} value={desc.text} onChange={(e) => setDesc({ ...desc, text: e.target.value })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
//                 <div className="grid grid-cols-1 gap-2 mt-2">
//                   <div className="col-span-1">
//                     <div className="grid grid-cols-3 gap-2">
//                       <div className="col-span-1">
//                         <label htmlFor="MW" className="form-label">
//                           Font
//                         </label>
//                         <select id="FM" name="FM" className="input-field" value={desc.FM} onChange={(e) => setDesc({ ...desc, FM: e.target.value })}>
//                           <option>Inter</option>
//                           <option>Work Sans</option>
//                         </select>
//                       </div>
//                       <div className="col-span-1">
//                         <label htmlFor="MW" className="form-label">
//                           Align
//                         </label>
//                         <select id="FD" name="FD" className="input-field" value={desc.FD} onChange={(e) => setDesc({ ...desc, FD: e.target.value })}>
//                           <option>center</option>
//                           <option>left</option>
//                           <option>right</option>
//                         </select>
//                       </div>
//                       <div className="col-span-1">
//                         <label htmlFor="MW" className="form-label">
//                           Line Height
//                         </label>
//                         <input type="number" id="LH" name="LH" placeholder="LH" className="input-field" value={desc.LH} onChange={(e) => setDesc({ ...desc, LH: Number(e.target.value) })} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-2">
//                     <div className="grid grid-cols-4 gap-1">
//                       <div className="col-span-1">
//                         <label htmlFor="FS" className="form-label">
//                           Font Size
//                         </label>
//                         <input type="number" id="FS" name="FS" placeholder="FS" className="input-field" value={desc.FS} onChange={(e) => setDesc({ ...desc, FS: Number(e.target.value) })} />
//                       </div>
//                       <div className="col-span-1">
//                         <label htmlFor="L" className="form-label">
//                           Left
//                         </label>
//                         <input type="number" id="L" name="L" placeholder="L" className="input-field" value={desc.L} onChange={(e) => setDesc({ ...desc, L: Number(e.target.value) })} />
//                       </div>
//                       <div className="col-span-1">
//                         <label htmlFor="T" className="form-label">
//                           Top
//                         </label>
//                         <input type="number" id="T" name="T" placeholder="T" className="input-field" value={desc.T} onChange={(e) => setDesc({ ...desc, T: Number(e.target.value) })} />
//                       </div>
//                       <div className="col-span-1">
//                         <label htmlFor="MW" className="form-label">
//                           Max Width
//                         </label>
//                         <input type="number" id="MW" name="MW" placeholder="MW" className="input-field" value={desc.MW} onChange={(e) => setDesc({ ...desc, MW: Number(e.target.value) })} />
//                       </div>
//                       <div className="col-span-1">
//                         <label htmlFor="MW" className="form-label">
//                           Color
//                         </label>
//                         <input type="color" id="color" name="color" placeholder="color" className="p-0 h-25 w-100" value={desc.color} onChange={(e) => setDesc({ ...desc, color: e.target.value })} />
//                       </div>
//                       <div className="col-span-2">
//                         <label htmlFor="FW" className="form-label">
//                           Font Weight
//                         </label>
//                         <select className="select-field" name="FW" id="FW" value={desc.FW} onChange={(e) => setDesc({ ...desc, FW: e.target.value })}>
//                           <option value={100}>thin</option>
//                           <option value={400}>light</option>
//                           <option value={400}>semibold</option>
//                           <option value={500}>bold</option>
//                           <option value={700}>extrabold</option>
//                           <option value={900}>black</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
// //     <div>

// main end


// //       <h1>Description Generator</h1>
// //       <div>
// //         <label>
// //           Select Topics:
// //           <input type="checkbox" onChange={() => handleTopicChange("technology")} />
// //           Technology
// //           <input type="checkbox" onChange={() => handleTopicChange("fashion")} />
// //           Fashion
// //           {/* Add more topics */}
// //         </label>
// //       </div>
// //       <button type="button" onClick={generateDescription}>Generate Description</button>
// //       <div>
// //         <p>Suggested Description:</p>
// //         <p>{suggestedDescription}</p>
// //       </div>
// //     </div>
//   );
// };

// export default DescriptionGenerator;
