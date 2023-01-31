import React from "react";
import ToDo from "./ToDo/ToDo";
import QuoteGenerator from "./QuoteGenerator/QuoteGenerator";
import { useNavigate, useParams } from "react-router-dom";
import "./Projects.css";

export const QUOTE_GENERATOR = "quote-generator";
export const TO_DO = "to-do";

function Projects() {
  const navigate = useNavigate();

  const { project } = useParams();

  const handleTabClick = (project) => {
    navigate(`/${project}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-0 px-5 w-full max-w-xl">
        <div className="text-sm font-medium text-center text-slate-800 border-b text-slate-500 self-start">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                onClick={() => handleTabClick(QUOTE_GENERATOR)}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 ${
                  project === QUOTE_GENERATOR ? "active" : ""
                }`}
              >
                Quote Generator
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => handleTabClick(TO_DO)}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 ${
                  project === TO_DO ? "active" : ""
                }`}
              >
                To Do
              </button>
            </li>
          </ul>
        </div>
        {project === QUOTE_GENERATOR && <QuoteGenerator />}
        {project === TO_DO && <ToDo />}
      </div>
    </div>
  );
}
export default Projects;
