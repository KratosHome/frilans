import React from 'react';
import {ChoiceSort} from "../../UI";

const SortFormatArray = [
    {
        id: 1,
        name: "All",
        disabled: false,
        band: true
    },
    {
        id: 2,
        name: "Videos",
        disabled: false,
    },
    {
        id: 3,
        name: "Images",
        disabled: false,
    },
    {
        id: 3,
        name: "Audio Files",
        disabled: false,
    },
]

export const SortFormat = () => {

    const [activeCheckboxBy, setActiveCheckboxBy] = React.useState<any>(0);

    return (
        <div className="containerSortFormat">
            {SortFormatArray.map((i, idx) =>
                <ChoiceSort
                    activeCheckbox={activeCheckboxBy}
                    setActiveCheckbox={setActiveCheckboxBy}
                    idx={idx}
                    key={i.id}
                    itemText={i.name}
                    isDisable={i.disabled}
                    band={i.band}
                />
            )}
        </div>
    );
};
