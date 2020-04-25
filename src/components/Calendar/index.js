import React, { Component } from 'react';
import { ScheduleComponent,
     Inject, Day, Week, Month, Agenda, ViewDirective, ViewsDirective, DragAndDrop,Resize } from '@syncfusion/ej2-react-schedule';  

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const data = [{
    Id: 1,
    Subject: 'Medеtion time',
    StartTime: new Date(2020, 3, 7, 6,0),
    EndTime: new Date(2020, 3, 7, 6,0),
    Location: 'Yoga Center'  
},{
    Id: 2,
    Subject: 'Skating  Class',
    StartTime: new Date(2020, 3, 7, 6,0),
    EndTime: new Date(2020, 3, 7, 6,0),
    Location: 'Parf'  
}];

const url = 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData';

export class Calendar extends Component{
    state = {
        data: data
    }
     localData = { 
         dataSource: [{
                endTime: new Date(2020, 3, 10, 6, 30),
                startTime: new Date(2020, 3, 24, 4, 0),
            }],
    }

    removeData = new DataManager({
        url: url,
        // eslint-disable-next-line
        adaptor: new WebApiAdaptor,
        crossDomain: true,
    });

    eventTemplate = () => <div className="template-wrap"> {this.props.Subject}</div>

    minValidation = (args) => args['value'].length >= 5;

    onDragStart(args){
        (args.scroll).enable = false;
    }

    onResizeStart(args){
        (args.scroll).enable = false;
    }
    
    render(){
        
        return <ScheduleComponent 
                    height='100%'
                    currentView="Month" 
                    eventSettings={{ dataSource : this.localData.dataSource, fields: {} }}
                    selectedDate={new Date(2020, 2, 10)}
                    dragStart={(this.onDragStart.bind(this))}
                    resizeStart={(this.onResizeStart.bind(this))}
                >
                <ViewsDirective>
                        <ViewDirective  option="Day"></ViewDirective>
                        <ViewDirective option="Month"></ViewDirective>  
                        <ViewDirective option="Week"></ViewDirective>
                        <ViewDirective option="Agenda"></ViewDirective>
                </ViewsDirective>
                    <Inject services={[Month, Day, Week, Agenda, DragAndDrop, Resize]} />
                </ScheduleComponent>
        
    }
}
