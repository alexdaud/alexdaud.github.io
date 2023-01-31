import React, { useEffect } from "react";
import ToDo from "./ToDo/ToDo";
import QuoteGenerator from "./QuoteGenerator/QuoteGenerator";
import { useLocation, useNavigate } from "react-router-dom";
import "./Projects.css";

export const QUOTE_GENERATOR = "quote-generator";
export const TO_DO = "to-do";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Projects() {
  const navigate = useNavigate();
  const project = useQuery().get("project");

  const handleTabClick = (project) => {
    navigate(`?project=${project}`);
  };

  useEffect(() => {
    if (!project) {
      navigate(`?project=${QUOTE_GENERATOR}`);
    }
  });

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
