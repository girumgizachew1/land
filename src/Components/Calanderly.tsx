import React from 'react'

function Calanderly() {
    const calendlyEmbedHtml = '<div class="calendly-inline-widget" data-url="https://calendly.com/girumegizachew/30min" style="min-width:320px;height:630px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>';

    return (
        <div className='h-96 w-full' >
            <div dangerouslySetInnerHTML={{ __html: calendlyEmbedHtml }} />
        </div>);
}


export default Calanderly