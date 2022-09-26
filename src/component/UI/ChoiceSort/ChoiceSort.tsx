import React, {FC} from 'react';
import "./ChoiceSort.scss"
import {ChoiceSortType} from "./ChoiceSortType";
import {BandMediaImportModal} from "../BandMediaImportModal";

export const ChoiceSort: FC<ChoiceSortType> = ({
                                                   idx,
                                                   itemText,
                                                   isDisable,
                                                   activeCheckbox,
                                                   setActiveCheckbox,
                                                   band
                                               }) => {
        return (
            <>
                <label key={idx} className={isDisable ? "containerChoiceSort disabledChoiceSort" : "containerChoiceSort"}>
                    <div
                        className={idx === activeCheckbox && isDisable === false ? "media-sort__radio-checked" : "media-sort__radio-checked-disabled"}/>
                    <input
                        type="checkbox"
                        checked={idx === activeCheckbox}
                        onClick={() => setActiveCheckbox(idx)}
                        value={itemText}
                        disabled={isDisable}
                    />
                    {itemText}
                </label>
                {band && <BandMediaImportModal/>}
            </>
        );
    }
;
