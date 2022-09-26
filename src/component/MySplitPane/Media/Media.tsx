import React, {ChangeEvent, FC, useState} from 'react';
import {ReactModal} from '../../UI';
import "./Media.scss"
import {MediaImportModal, SortFormat, SortOther} from "../../modal";
import {MediaContent} from "./MediaContent";
import {MediaType} from "./MediaType";

export const Media: FC<MediaType> = ({topCoords}) => {

    const [search, setSearch] = useState<string>("")

    const searchMedia = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const [isModalImportOpen, setIsModalImportOpen] = useState<boolean>(false);
    const [isModalSortFormatOpen, setIsModalSortFormatOpen] = useState<boolean>(false);
    const [isModalSortOtherOpen, setIsModalSortOtherOpen] = useState<boolean>(false);
    const [leftCoordsModal, setLeftCoordsModal] = useState<number>(0);
    const [leftCoordsModalSortFormat, setLeftCoordsModalSortFormat] = useState<number>(0);
    const [leftCoordsModalSortOther, setLeftCoordsModalSortOther] = useState<number>(0);


    const openModalImport = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsModalImportOpen(!isModalImportOpen)
        let rect = (e.target as Element).getBoundingClientRect();
        setLeftCoordsModal(rect.left - 10)
    }
    const openModalImportSVG = (e: React.MouseEvent<HTMLOrSVGElement>) => {
        setIsModalImportOpen(!isModalImportOpen)
        let rect = (e.target as Element).getBoundingClientRect();
        setLeftCoordsModal(rect.left - 90)
        e.stopPropagation()
    }
    const openModalSortFormat = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsModalSortFormatOpen(!isModalSortFormatOpen)
        let rect = (e.target as Element).getBoundingClientRect();
        setLeftCoordsModalSortFormat(rect.left - 10)
    }
    const openModalSortOther = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsModalSortOtherOpen(!isModalSortOtherOpen)
        let rect = (e.target as Element).getBoundingClientRect();
        setLeftCoordsModalSortOther(rect.left - 10)
    }

    return (
        <>
            <div className="containerMedia">
                <div>
                    <div className="titleMedia">Media</div>
                    <div className="buttonsMediaContainer">
                        <div className="selectMedia" onClick={openModalImport}>
                            <span>import</span>
                            <svg onClick={openModalImportSVG} width="20" height="25" viewBox="0 0 25 25">
                                <path
                                    d="M17.281 8.64L12.5 13.412l-4.781-4.77-1.469 1.468 6.25 6.25 6.25-6.25-1.469-1.468z"></path>
                            </svg>
                        </div>
                        <div className="searchMedia">
                            <svg width="12" height="12" fill="none" viewBox="0 0 12 12"
                                 className="search-input__search-icon">
                                <g stroke="#F2F2F2" clipPath="url(#prefix__clip0)">
                                    <rect width="4.237" height="0.432" x="8.698" y="8.392" fill="#EDEFF2"
                                          strokeWidth="0.432"
                                          rx="0.216" transform="rotate(45 8.698 8.392)"></rect>
                                    <circle cx="5.189" cy="5.189" r="4.689"></circle>
                                </g>
                                <defs>
                                    <clipPath id="prefix__clip0">
                                        <path fill="#fff" d="M0 0H12V11.999H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <input placeholder="search" type="text" onChange={searchMedia} value={search}/>
                            {
                                search.length >= 1 &&
                                <svg onClick={() => setSearch("")} width="12" height="12" viewBox="0 0 12 12"
                                     className="search-input__search-clear">
                                    <path
                                        d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6 9.5 3.205z"></path>
                                </svg>
                            }
                        </div>
                        <button className="raw-button" type="button" onClick={openModalSortFormat}>
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M3.076 4.463C3.21 4.181 3.5 4 3.818 4h16.364c.318 0 .608.18.742.463.134.283.088.616-.117.854l-6.352 7.344V19.2c0 .277-.147.535-.389.68-.24.146-.542.16-.796.036l-3.272-1.6c-.277-.136-.453-.413-.453-.716v-4.94L3.193 5.318c-.205-.238-.251-.571-.117-.854zM5.582 5.6l5.406 6.251c.125.145.194.328.194.517v4.738l1.636.8v-5.538c0-.19.069-.372.194-.517L18.418 5.6H5.582z"
                                ></path>
                            </svg>
                        </button>
                        <button className="raw-button" type="button" onClick={openModalSortOther}>
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 6v2h18V6H3zm0 12h6v-2H3v2zm12-5H3v-2h12v2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <MediaContent topCoords={topCoords}/>
            </div>
            <ReactModal
                isModalOpen={isModalImportOpen}
                onClose={() => setIsModalImportOpen(!isModalImportOpen)}
                modalPosition={"import-media-position"}
                leftCords={leftCoordsModal}
            >
                <MediaImportModal/>
            </ReactModal>
            <ReactModal
                isModalOpen={isModalSortFormatOpen}
                onClose={() => setIsModalSortFormatOpen(!isModalSortFormatOpen)}
                modalPosition={"import-media-position"}
                leftCords={leftCoordsModalSortFormat}
            >
                <SortFormat/>
            </ReactModal>
            <ReactModal
                isModalOpen={isModalSortOtherOpen}
                onClose={() => setIsModalSortOtherOpen(!isModalSortOtherOpen)}
                modalPosition={"import-media-position"}
                leftCords={leftCoordsModalSortOther}
            >
                <SortOther/>
            </ReactModal>
        </>
    );
};
