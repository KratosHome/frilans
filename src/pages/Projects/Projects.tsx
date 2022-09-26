import React from 'react';
import "./Projects.scss"
import {projectsArray} from "../../API/projectsArray";
import {Link} from "react-router-dom";

export const Projects = () => {
    return (
        <div className="containerProjects"  >
            <div className="headerProject">
                <h1>Projects</h1>
                <div>
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12" className="search-input__search-icon">
                        <g stroke="#F2F2F2" clipPath="url(#prefix__clip0)">
                            <rect width="4.237" height="0.432" x="8.698" y="8.392" fill="#EDEFF2" strokeWidth="0.432"
                                  rx="0.216" transform="rotate(45 8.698 8.392)"></rect>
                            <circle cx="5.189" cy="5.189" r="4.689"></circle>
                        </g>
                        <defs>
                            <clipPath id="prefix__clip0">
                                <path fill="#fff" d="M0 0H12V11.999H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <input type="text" placeholder={"Search"}/>
                    <button>New project</button>
                </div>
            </div>
            {projectsArray.map((i: any) =>
                <Link to={`/project/${i.id}`} key={i.id} className="ProjectsItems">
                    <div className="purviewProjectsItems">
                        {i.purview.length ? <img src={i.purview} alt={i.name}/> :
                            <div className="nowImgProjectsItems"/>}
                        <div>{i.name}</div>
                    </div>
                    <div className="editedProjectsItems">
                        <div>Edited {i.edited}</div>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.7">
                                <title>Rename</title>
                                <g>
                                    <path
                                        d="M21.0301 2.96997C22.4276 4.36743 22.4276 6.63317 21.0301 8.03063L9.06186 19.999C8.78498 20.2758 8.44064 20.4757 8.06288 20.5787L2.94719 21.9739C2.38732 22.1266 1.87359 21.6128 2.02628 21.053L3.42147 15.9373C3.5245 15.5595 3.72432 15.2152 4.0012 14.9383L15.9695 2.96997C17.3669 1.57251 19.6327 1.57251 21.0301 2.96997ZM15 6.06088L5.06186 15.999C4.96957 16.0913 4.90296 16.206 4.86862 16.332L3.81877 20.1814L7.66821 19.1315C7.79413 19.0972 7.90891 19.0306 8.0012 18.9383L17.939 8.99988L15 6.06088ZM17.0301 4.03063L16.06 4.99988L18.999 7.93988L19.9695 6.96997C20.7811 6.1583 20.7811 4.84231 19.9695 4.03063C19.1578 3.21896 17.8418 3.21896 17.0301 4.03063Z"></path>
                                </g>
                            </svg>
                        </button>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.7">
                                <title>Delete</title>
                                <g>
                                    <path
                                        d="M12 1.75C13.733 1.75 15.1492 3.10645 15.2449 4.81558L15.25 5H20.5C20.9142 5 21.25 5.33579 21.25 5.75C21.25 6.1297 20.9678 6.44349 20.6018 6.49315L20.5 6.5H19.704L18.4239 19.5192C18.2912 20.8683 17.1984 21.91 15.8626 21.9945L15.6871 22H8.31293C6.95734 22 5.81365 21.0145 5.59883 19.6934L5.57614 19.5192L4.295 6.5H3.5C3.1203 6.5 2.80651 6.21785 2.75685 5.85177L2.75 5.75C2.75 5.3703 3.03215 5.05651 3.39823 5.00685L3.5 5H8.75C8.75 3.20507 10.2051 1.75 12 1.75ZM18.197 6.5H5.802L7.06893 19.3724C7.12768 19.9696 7.60033 20.4343 8.18585 20.4936L8.31293 20.5H15.6871C16.2872 20.5 16.7959 20.0751 16.9123 19.4982L16.9311 19.3724L18.197 6.5ZM13.75 9.25C14.1297 9.25 14.4435 9.53215 14.4932 9.89823L14.5 10V17C14.5 17.4142 14.1642 17.75 13.75 17.75C13.3703 17.75 13.0565 17.4678 13.0068 17.1018L13 17V10C13 9.58579 13.3358 9.25 13.75 9.25ZM10.25 9.25C10.6297 9.25 10.9435 9.53215 10.9932 9.89823L11 10V17C11 17.4142 10.6642 17.75 10.25 17.75C9.8703 17.75 9.55651 17.4678 9.50685 17.1018L9.5 17V10C9.5 9.58579 9.83579 9.25 10.25 9.25ZM12 3.25C11.0818 3.25 10.3288 3.95711 10.2558 4.85647L10.25 5H13.75C13.75 4.0335 12.9665 3.25 12 3.25Z"></path>
                                </g>
                            </svg>
                        </button>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><title>Copy</title>
                                <path
                                    d="M4 8H14C15.1046 8 16 8.89543 16 10V20C16 21.1046 15.1046 22 14 22H4C2.89543 22 2 21.1046 2 20V10C2 8.89543 2.89543 8 4 8ZM3.5 10C3.5 9.72386 3.72386 9.5 4 9.5H14C14.2761 9.5 14.5 9.72386 14.5 10V20C14.5 20.2761 14.2761 20.5 14 20.5H4C3.72386 20.5 3.5 20.2761 3.5 20V10Z"
                                    fill="#C4C4C4"></path>
                                <path
                                    d="M7 5C7 3.89543 7.89543 3 9 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H18.25C17.8358 17 17.5 16.6642 17.5 16.25C17.5 15.8358 17.8358 15.5 18.25 15.5H19C19.2761 15.5 19.5 15.2761 19.5 15V5C19.5 4.72386 19.2761 4.5 19 4.5H9C8.72386 4.5 8.5 4.72386 8.5 5V5.75C8.5 6.16421 8.16421 6.5 7.75 6.5C7.33579 6.5 7 6.16421 7 5.75V5Z"
                                    fill="#C4C4C4"></path>
                            </svg>
                        </button>
                    </div>
                </Link>
            )}
        </div>
    );
};
