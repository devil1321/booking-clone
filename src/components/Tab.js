import React from 'react'

const Tab = ({isWide,title,subtitle,passagers,bags}) => {
    return (
        <div className="tab" style={isWide ? {minWidth:"45%"} : {minWidth:"28%"}}>
            <h2 className="tab__title">{title}</h2>
            <p className="tab__subtitle">{subtitle}</p>
            <div className="tab__content">
                <div className="tab__row">
                    <svg width="13px" viewBox="0 0 72 80" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16,20 C16,8.954305 24.954305,0 36,0 C47.045695,0 56,8.954305 56,20 C56,31.045695 47.045695,40 36,40 C24.954305,40 16,31.045695 16,20 Z M72,60.4 L72,72 C72,76.418278 68.418278,80 64,80 L8,80 C3.581722,80 0,76.418278 0,72 L0,60.4 C21.1453984,43.8457935 50.8546016,43.8457935 72,60.4 Z" id="Shape"></path></svg>
                    <p>{passagers} passagers</p>
                </div>
                <div className="tab__row">
                    <svg class="bk-icon -iconset-suitcase" data-height="18" data-width="24" height="18" width="24" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M112 32H80v-4a12 12 0 0 0-12-12h-8a12 12 0 0 0-12 12v4H16a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zm-56-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4H56zm-32 72a4 4 0 0 1-8 0V52a4 4 0 0 1 8 0zm88 0a4 4 0 0 1-8 0V52a4 4 0 0 1 8 0z"></path></svg>
                    <p>{bags} standard bags</p>
                </div>
                <div className="tab__row">
                    <svg class="bk-icon -iconset-checkmark_unselected" data-height="18" data-width="24" fill="#0071C2" height="18" width="24" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M94.8 41.2a4 4 0 0 1 0 5.6l-40 40a4 4 0 0 1-5.6 0l-16-16a4 4 0 0 1 5.6-5.6L52 78.3l37.2-37.1a4 4 0 0 1 5.6 0zM120 64A56 56 0 1 1 64 8a56 56 0 0 1 56 56zm-8 0a48 48 0 1 0-48 48 48 48 0 0 0 48-48z"></path></svg>
                    <p className="tabs__blue">Meet & Greet included</p>
                </div>
                <div className="tab__row">
                    <svg class="bk-icon -iconset-checkmark_bold" data-height="18" data-width="24" fill="#006607" height="18" width="24" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M52 102a8 8 0 0 1-5.7-2.3l-28-28a8 8 0 0 1 11.4-11.4L52 82.7l46.3-46.4a8 8 0 0 1 11.4 11.4l-52 52A8 8 0 0 1 52 102z"></path></svg>
                    <p className="tabs__green">Free cancellation</p>
                </div>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Tab
