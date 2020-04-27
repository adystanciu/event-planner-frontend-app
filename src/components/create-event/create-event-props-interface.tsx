interface EventProps {
    
    title: string
    description: string,
    startDate: Date,
    endDate: Date,
    url: string,
    location: string,

    handleChange: any,
    sendData: any
}

export default EventProps;
