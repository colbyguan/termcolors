import React, { useState } from 'react';
import clsx from 'clsx'
import CopyIcon from './CopyIcon'

const CopyableItem = (props) => {

    return (
        <div
            className={clsx(
                "group relative cursor-pointer bg-black w-24 h-auto p-6 m-2 text-center border border-black rounded",
                !!props.itemStyles && props.itemStyles[props.label])}
            onClick={() => props.handleItemClick(props.code)}>
            {props.label}
            <div className="hidden group-hover:block p-1 text-white rounded border-l border-b border-white absolute top-0 right-0"><CopyIcon /></div>
        </div>
    )
}

export default CopyableItem