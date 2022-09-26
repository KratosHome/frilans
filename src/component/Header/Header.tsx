import React, {useState} from 'react';
import "./Header.scss"
import logoImg from "../../img/logo.svg"
import avatarDefault from "../../img/avatar-default.svg"
import {ReactModal} from "../UI";
import {HeaderModal} from "../modal";
import { NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import pageIdStore from "../../store/pageIdStore";

export const Header = observer(() => {
    const [isModalHeaderOpen, setIsModalHeaderOpen] = useState<boolean>(false);
    const [leftCoordsModal, setLeftCoordsModal] = useState<number>(0);

    const openModalHeader = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsModalHeaderOpen(!isModalHeaderOpen)
        let rect = (e.target as Element).getBoundingClientRect();
        setLeftCoordsModal(rect.left - 100)
    }

    return (
        <>
            <header className="containerHeader"  >
                <div className="rom logoHeader">
                    <img src={logoImg} alt="logoImg"/>
                    <div>HTML5 Video Editor</div>
                </div>
                <div className="inputHeader">
                    <div>
                        <span className="input" contentEditable suppressContentEditableWarning={true}>proj name</span>
                    </div>
                    <div
                        className="dropdownMenuChevronBox"
                        onClick={openModalHeader}
                    >
                        <div className="dropdownMenuChevron"
                             style={{width: "8px", height: "8px", marginTop: "-3.2px"}}></div>
                    </div>
                </div>

                <div className="rom rightBlockHeader">
                    <NavLink  to={`/project/${pageIdStore.state}`} className={({isActive}) => isActive ? "pageSelection" : "" }>
                        <div

                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M4 5.75006C3.99997 4.23125 5.2312 3 6.75 3H13.2502C14.769 3 16.0002 4.23122 16.0002 5.75V6.29098L17.9907 4.76884C18.8132 4.13986 20 4.72634 20 5.76179V12.2382C20 13.2736 18.8132 13.8601 17.9907 13.2311L16.0002 11.709V12.25C16.0002 13.7688 14.769 15 13.2502 15H6.75014C5.23138 15 4.00018 13.7688 4.00014 12.2501L4 5.75006ZM6.75 4.5C6.05964 4.5 5.49998 5.05966 5.5 5.75003L5.50014 12.25C5.50016 12.9404 6.0598 13.5 6.75014 13.5H13.2502C13.9406 13.5 14.5002 12.9404 14.5002 12.25V5.75C14.5002 5.05964 13.9406 4.5 13.2502 4.5H6.75ZM16.0002 9.82069L18.5 11.7323V6.26768L16.0002 8.1793V9.82069Z"
                                    fill="white"></path>
                                <path
                                    d="M18.3635 16.1377C17.4128 15.9064 16.2331 15.7249 14.9053 15.6156C15.5227 15.3113 16.0443 14.8421 16.4125 14.2656C17.2603 14.3746 18.0369 14.5145 18.718 14.6802C19.5858 14.8912 20.3408 15.1541 20.897 15.474C21.397 15.7615 22 16.2502 22 16.9999C22 17.4695 21.7549 17.8388 21.483 18.0987C21.2119 18.3578 20.8545 18.5691 20.4657 18.7454C19.6837 19.0998 18.6121 19.3844 17.3738 19.5924C16.9653 19.661 16.5785 19.3854 16.5099 18.9769C16.4413 18.5685 16.7168 18.1817 17.1253 18.1131C18.3038 17.9151 19.2324 17.6575 19.8464 17.3792C20.1556 17.239 20.3452 17.1112 20.4466 17.0143L20.4552 17.006L20.4616 16.9995C20.4154 16.9519 20.3243 16.875 20.1492 16.7743C19.7693 16.5558 19.1696 16.3338 18.3635 16.1377ZM20.5093 16.9423C20.5106 16.94 20.511 16.9389 20.511 16.9389L20.5093 16.9423Z"
                                    fill="white"></path>
                                <path
                                    d="M3.10301 15.4741C3.41077 15.2971 3.77939 15.1375 4.19428 14.9946C4.77479 15.5353 5.52704 15.8941 6.36022 15.98C6.10651 16.0295 5.86491 16.0822 5.63653 16.1378C4.83035 16.3339 4.23073 16.5559 3.85081 16.7744C3.67525 16.8753 3.58418 16.9524 3.53803 17C3.58418 17.0477 3.67525 17.1247 3.85081 17.2257C4.23073 17.4441 4.83035 17.6662 5.63653 17.8622C7.22464 18.2485 9.45221 18.4961 11.9412 18.5L11.2222 17.7799C10.9295 17.4868 10.9299 17.012 11.223 16.7193C11.5161 16.4266 11.991 16.427 12.2836 16.7201L14.2807 18.7201C14.5732 19.013 14.5731 19.4876 14.2803 19.7803L12.2833 21.7774C11.9904 22.0703 11.5155 22.0703 11.2226 21.7774C10.9297 21.4845 10.9297 21.0096 11.2226 20.7167L11.9394 20C9.36709 19.996 7.01562 19.7414 5.282 19.3197C4.41425 19.1087 3.65924 18.8458 3.10301 18.526C2.603 18.2384 2 17.7497 2 17C2 16.2503 2.603 15.7616 3.10301 15.4741Z"
                                    fill="white"></path>
                            </svg>
                            <span>Editor</span>
                        </div>
                    </NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive ? "pageSelection" : "" }>
                        <div
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <rect x="0.5" y="0.5" width="6.08333" height="6.08333" stroke="white"></rect>
                                <rect x="10.4165" y="0.5" width="6.08333" height="6.08333" stroke="white"></rect>
                                <rect x="0.5" y="10.4165" width="6.08333" height="6.08333" stroke="white"></rect>
                                <rect x="10.5" y="10.5" width="6.08333" height="6.08333" stroke="white"></rect>
                            </svg>
                            <span>Projects</span>
                        </div>
                    </NavLink>
                    <div>
                        <img src={avatarDefault} alt={"avatarDefault"}/>
                        <span>1661775933699</span>
                    </div>
                </div>
            </header>
            <ReactModal
                isModalOpen={isModalHeaderOpen}
                onClose={() => setIsModalHeaderOpen(!isModalHeaderOpen)}
                modalPosition={"header-media-position"}
                leftCords={leftCoordsModal}
            >
                <HeaderModal/>
            </ReactModal>
        </>
    );
});


