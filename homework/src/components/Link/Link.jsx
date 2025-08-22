import './link.css'
export default function Link({text, image:ImageComponent,href })
{
    return (
        <div className="link-group">
            <a className={'link-text'} href={href}>{text}</a>
            {ImageComponent &&
                <ImageComponent
                className={'link-icon'}
                />
            }

        </div>

    )
}