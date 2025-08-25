import './SearchInput.css'
export default function SearchInput({text, image:ImageComponent, onChange}) {
    return (
        <div className="link-group">
            {ImageComponent &&
                <ImageComponent
                    className={'link-icon'}
                />
            }
            <input type='text' className={'link-input'} placeholder={text} onChange={onChange}/>
        </div>
    )
}