import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import './create-event-container.styles.css';

import { EVENT_PROPERTIES } from './event-object.data';
import EventProps from './create-event-props-interface';


const CreateEventContainer = (props: EventProps) => {
    return (
        <div className='my-main-container'>
            <div className='my-left-container'>
                <div className='my-input'>
                    <span className="p-float-label">
                        <InputText value={props.title}
                            onChange={(e) => props.handleChange(e, EVENT_PROPERTIES.TITLE)} />
                        <label>Title</label>
                    </span>
                </div>

                <div className='my-input'>
                    <span className="p-float-label">
                        <InputText value={props.location}
                            onChange={(e) => props.handleChange(e, EVENT_PROPERTIES.LOCATION)} />
                        <label>Location</label>
                    </span>
                </div>

                <div className='my-input'>
                    <span className="p-float-label">
                        <InputText value={props.url}
                            onChange={(e) => props.handleChange(e, EVENT_PROPERTIES.URL)} />
                        <label>Url</label>
                    </span>
                </div>
                <div className='my-button '>
                    <Button label="Submit" className="p-button-raised" style={{width: '100px'}}
                    onClick={props.sendData}
                    />
                </div>
            </div>


            <div className='my-right-container'>
                <div>
                    <div className='my-input' >
                        <span className="p-float-label">
                            <InputTextarea className='my-text-area'
                                rows={5} cols={70} autoResize={true} value={props.description}
                                onChange={(e) => props.handleChange(e, EVENT_PROPERTIES.DESCRIPTION)}
                            />
                            <label >Description</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12 p-md-4">
                    <label className='my-label'>Start Date:</label>
                    <Calendar dateFormat="dd/mm/yy" showIcon={true} showTime={true} hourFormat="24"
                        value={props.startDate}
                        onChange={(e) => props.handleChange(e, EVENT_PROPERTIES.START_DATE)}
                    />
                </div>
                <div className="p-col-12 p-md-4">
                    <label className='my-label'>End Date:</label>
                    <Calendar dateFormat="dd/mm/yy" showIcon={true} showTime={true} hourFormat="24"
                        value={props.endDate}
                        onChange={(e) => props.handleChange(e, EVENT_PROPERTIES.END_DATE)}
                    />
                </div>
            </div>
        </div>
    )

}

export default CreateEventContainer
