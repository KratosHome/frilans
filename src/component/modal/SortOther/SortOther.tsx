import React from 'react';
import {BandMediaImportModal, ChoiceSort} from '../../UI';
import "./SortOther.scss"

const SortOtherOrder = [
    {
        id: 1,
        name: "Order",
        disabled: true,
    },
    {
        id: 2,
        name: "Ascending",
        disabled: false,
    },
    {
        id: 3,
        name: "Descending",
        disabled: false,
    },
]
const SortOtherBy = [
    {
        id: 1,
        name: "Sort by",
        disabled: true,
    },
    {
        id: 2,
        name: "Name",
        disabled: false,
        check: true
    },
    {
        id: 3,
        name: "Size",
        disabled: false,
    },
    {
        id: 4,
        name: "Data",
        disabled: false,
    },
    {
        id: 5,
        name: "Duration",
        disabled: false,
    },
]


export const SortOther = () => {

    const [activeCheckboxOrder, setActiveCheckboxOrder] = React.useState<any>(1);
    const [activeCheckboxBy, setActiveCheckboxBy] = React.useState<any>(1);

    return (
        <div className="containerSortOther">
            {SortOtherOrder.map((i, idx) =>
                <ChoiceSort
                    activeCheckbox={activeCheckboxOrder}
                    setActiveCheckbox={setActiveCheckboxOrder}
                    idx={idx}
                    key={i.id}
                    itemText={i.name}
                    isDisable={i.disabled}
                />
            )}
            <BandMediaImportModal/>
            {SortOtherBy.map((i, idx) =>
                <ChoiceSort
                    activeCheckbox={activeCheckboxBy}
                    setActiveCheckbox={setActiveCheckboxBy}
                    idx={idx}
                    key={i.id}
                    itemText={i.name}
                    isDisable={i.disabled}
                />
            )}
        </div>
    );
};
