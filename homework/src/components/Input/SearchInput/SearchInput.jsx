import './SearchInput.css'
import {useState} from "react";
export default function SearchInput({placeholder,onChange,textValue, image:ImageComponent, ...props}) {

    return (
        <div className="search-group">
            {ImageComponent &&
                <ImageComponent
                    className={'link-icon'}
                />
            }
            <input onChange={onChange} type='text' value={textValue} className={'search-input'} placeholder={placeholder} {...props} />
        </div>
    )
}