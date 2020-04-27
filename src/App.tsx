import React from 'react';
import './App.css';
import CreateEventContainer from "./components/create-event/create-event-container.component";
import { EVENT_OBJECT } from './components/create-event/event-object.data';
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";

class App extends React.Component<any, any> {
  op: any;
  constructor(props: any) {
    super(props);
    this.state = {
      evObj: EVENT_OBJECT
    }
  }
  // const [state, setstate] = useState(initialState)
  

  handleChange = (e: any, propertyName: string) => {
    if (this.state.evObj.hasOwnProperty(propertyName)) {
      this.setState({
        evObj: { ...this.state.evObj, [propertyName]: e.target.value }
      })
    } else {
      console.log(propertyName + " does not exist! ");
    }
  }

  sendData = () => {
    fetch('/event', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.evObj),
    })
    // .catch((e) => console.log(e));
    console.log(JSON.stringify(this.state.evObj));
  }

  render() {
    const { description, title, location, url, startDate, endDate } = this.state.evObj;

    return (
      <div>
        <h1>{'CreateEvent Commponent'} </h1>

        <Button
          type="button" label="Create Event Panel"
          className="p-button-raised p-button-rounded"
          icon="pi pi-check" iconPos="left"
          onClick={(e) => this.op.toggle(e)}
        />
        <div>
            <OverlayPanel dismissable={false} showCloseIcon={true}
                style={{ width: "calc(100% - 60px)", maxWidth: "700px", marginLeft: "30px" }}
                ref={(el) => (this.op = el)}
            >
                <div>
                  <CreateEventContainer
                    title={title}
                    description={description}
                    location={location}
                    url={url}
                    startDate={startDate}
                    endDate={endDate}

                    handleChange={this.handleChange}
                    sendData = {this.sendData}
                  />
                </div>
            </OverlayPanel>

        </div>

      </div>
    )
  }
}

export default App;



 // handleChangeForTitle = (e: any, ) => {
  //   this.setState({
  //     evObj: { ...this.state.evObj, title: e.target.value }
  //   })
  // }