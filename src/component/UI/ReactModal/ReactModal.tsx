import React, {memo, useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';
import './ReactModal.scss';
import {ModalType} from './ReactModalType';

const modalRootElement: HTMLElement | null = document.querySelector('#modal');

export const ReactModal: React.FC<ModalType> = memo(({
                                                         children,
                                                         isModalOpen,
                                                         onClose,
                                                         modalPosition,
                                                         topCoords,
                                                         leftCords,
                                                         onBlur,
                                                     }) => {
    const element = useMemo<HTMLDivElement>(
        () => document.createElement('div'),
        [],
    );

    useEffect(() => {
        if (isModalOpen) {
            modalRootElement?.appendChild(element);

            return () => {
                modalRootElement?.removeChild(element);
            };
        }
    });
    if (isModalOpen) {
        return createPortal(
            <div className={onBlur ? 'onBlur' : ''}>
                <div className='modal' onClick={onClose}>
                    <div
                        className={`modal__content ${modalPosition}`}
                        style={{
                            top: `${topCoords}px`,
                            left: `${leftCords}px`,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>,
            element,
        );
    }

    return null;
});
