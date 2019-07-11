import {UPDATE_STEP,STEP_TWO_UPDATE_VALUE,STEP_TWO_SWITCH_ALL,STEP_TWO_CHANGE_OTHER,
        STEP_THREE_CHANGE_OTHER,STEP_THREE_SWITCH_ALL,STEP_THREE_UPDATE_VALUE,STEP_THREE_CHANGE_RADIO_VALUE,
        STEP_ONE_LANGUAGE_SWITCH_ALL,STEP_ONE_LANGUAGE_UPDATE_VALUE,STEP_ONE_CHANGE_TIME_ZONE,STEP_ONE_CHANGE_DAY,STEP_ONE_CHANGE_HOURS} from '../actions/types'

import {AFILIATION_SECTION,SERVICES_SECTION,HOUR_SECTION} from '../../utilities/constants'


const initialState={
    currentStep:1,
    fullCover:false,
    stepOne:{
       'language':{
                    items: [
                        {id:1,text:'Arabic',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:2,text:'Chinese',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:3,text:'English',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:4,text:'French',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:5,text:'German',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:6,text:'Vietnamese',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:7,text:'Tagalog',half:1,section:HOUR_SECTION.language,checked:false},
                        {id:8,text:'Korean',half:1,section:HOUR_SECTION.language,checked:false},

                        {id:9,text:'Hindi-Urdu',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:10,text:'Japanese',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:11,text:'Portuguese',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:12,text:'Russian',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:13,text:'Spanish',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:14,text:'Hmong',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:15,text:'Italian',half:2,section:HOUR_SECTION.language,checked:false},
                        {id:16,text:'Somalian',half:2,section:HOUR_SECTION.language,checked:false},
                       
                    ]
                    ,other:''
       },
       "timeZone":[
                    {text:'Eastern',id:1,selected:false},
                    {text:'Central',id:2,selected:false},
                    {text:'Mountain',id:3,selected:false},
                    {text:'Pacific',id:4,selected:false}    
       ],
       "week":[
                {id:1,text:"Monday",open:"8:00 AM",close:"05:00 PM",checked:false},
                {id:2,text:"Tuesday",open:"8:00 AM",close:"05:00 PM",checked:false},
                {id:3,text:"Wednesday",open:"8:00 AM",close:"05:00 PM",checked:false},
                {id:4,text:"Thursday",open:"8:00 AM",close:"05:00 PM",checked:false},
                {id:5,text:"Friday",open:"8:00 AM",close:"05:00 PM",checked:false},
                {id:6,text:"Saturday",open:"8:00 AM",close:"05:00 PM",checked:false},
                {id:7,text:"Sunday",open:"8:00 AM",close:"05:00 PM",checked:false}
       ]
   
    },
    stepTwo:{
        "certifications":{  items: [
                                    {id:1,text:'AAA',half:1,section:AFILIATION_SECTION.certifications,checked:false},
                                    {id:2,text:'ASE Certificated',half:1,section:AFILIATION_SECTION.certifications,checked:false},
                                    {id:3,text:'ASE Master Technician',half:1,section:AFILIATION_SECTION.certifications,checked:false}
                                ]
                            ,other:''
                        },
        "other":{   items:[
                            {id:4,text:'Loaner Vehicle',half:1,section:AFILIATION_SECTION.other,checked:false},
                            {id:5,text:'Towing / Wrecker Service',half:1,section:AFILIATION_SECTION.other,checked:false},
                            {id:6,text:'Waiting Area',half:1,section:AFILIATION_SECTION.other,checked:false},
                            {id:7,text:'Wifi Available',half:2,section:AFILIATION_SECTION.other,checked:false}
                        ]
                    ,other:''
                },
        "member":{items:[
                            {id:8,text:'AASP',half:1,section:AFILIATION_SECTION.member,checked:false},
                            {id:9,text:'ASA',half:1,section:AFILIATION_SECTION.member,checked:false},
                            {id:10,text:'ASC',half:1,section:AFILIATION_SECTION.member,checked:false},
                            {id:11,text:'ATN',half:1,section:AFILIATION_SECTION.member,checked:false}
                        ]
                 ,other:''
                },
        "state":{   items:[
                            {id:12,text:'Approved Vehicle Repair',half:1,section:AFILIATION_SECTION.state,checked:false},
                            {id:13,text:'Emission Inspection',half:1,section:AFILIATION_SECTION.state,checked:false},
                            {id:14,text:'Emission Repair',half:1,section:AFILIATION_SECTION.state,checked:false},
                            {id:15,text:'License Inspection',half:1,section:AFILIATION_SECTION.state,checked:false},
                            {id:16,text:'State Inspection',half:2,section:AFILIATION_SECTION.state,checked:false},
                            {id:17,text:'Safety Inspection',half:2,section:AFILIATION_SECTION.state,checked:false} 
                        ]
                    ,other:''
                }
    },
    stepThree:{
        'shopType':{
                    items:[
                        {id:1,text:'Collision',half:1,section:SERVICES_SECTION.shopType,checked:true},
                        {id:2,text:'General Repair',half:1,section:SERVICES_SECTION.shopType,checked:false},
                        {id:3,text:'New Car Dealer',half:1,section:SERVICES_SECTION.shopType,checked:false},
                        {id:4,text:'Tire Dealer',half:1,section:SERVICES_SECTION.shopType,checked:false},
                        {id:5,text:'User Car Dealer',half:1,section:SERVICES_SECTION.shopType,checked:false}
                    ],
                    other:''
        },
        "servicesPerformed":  {  items: [
                        {id:1,text:'Air Conditioning & Heating',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:2,text:'Alignment',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:3,text:'Battery',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:4,text:'Brake',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:5,text:'Collision Repair',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:6,text:'Cooling Systems',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:7,text:'Engine Repair',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:8,text:'Exhaust',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:9,text:'Fuel System',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:10,text:'Glass Repair',half:1,section:SERVICES_SECTION.servicesPerformed,checked:false},

                        {id:11,text:'Maintenance Services',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:12,text:'Oil Change',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:13,text:'Rediator Repair',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:14,text:'Steering & Suspension / Strut Repair',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:15,text:'Starting & Charging System',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:16,text:'Tire Sales',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:17,text:'Transmission Repair',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:18,text:'Tune-Up',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false},
                        {id:19,text:'Vehicle Inspection',half:2,section:SERVICES_SECTION.servicesPerformed,checked:false}
                    ]
                ,other:''
        },
        "vehicleServiced":  {  items: [
            {id:1,text:'Asian',half:1,section:SERVICES_SECTION.vehicleServiced,checked:false},
            {id:2,text:'Domestic',half:1,section:SERVICES_SECTION.vehicleServiced,checked:false},
            {id:3,text:'European',half:1,section:SERVICES_SECTION.vehicleServiced,checked:false},
            {id:4,text:'Electric',half:1,section:SERVICES_SECTION.vehicleServiced,checked:false},
            {id:5,text:'Hybrid',half:1,section:SERVICES_SECTION.vehicleServiced,checked:false}
        ]
            ,other:''
        }
    }
}

export default function(state=initialState,action){
    
    let copy = JSON.parse(JSON.stringify(state))

    switch(action.type){

        case UPDATE_STEP:
            return{
                ...state,currentStep: action.payload
            }

        case STEP_TWO_UPDATE_VALUE:

            copy.stepTwo[action.payload.section].items.forEach(c=>{
                if(c.id === action.payload.id){
                    c.checked = !c.checked
                }
                    
            })

        return copy;

        case STEP_TWO_SWITCH_ALL:

            copy.stepTwo[action.payload.section].items.forEach(c=>{
                    c.checked = action.payload.value
            })

        return copy;

        case STEP_TWO_CHANGE_OTHER:

            return{
                ...state,stepTwo:{
                                    ...state.stepTwo,[action.payload.section]:{
                                        ...state.stepTwo[action.payload.section],other:action.payload.value
                                    }
                }
            }

        case STEP_THREE_UPDATE_VALUE:

            copy.stepThree[action.payload.section].items.forEach(c=>{
                    if(c.id === action.payload.id){
                        c.checked = !c.checked
                    }
                        
                })
    
            return copy;
    
        case STEP_THREE_SWITCH_ALL:

            copy.stepThree[action.payload.section].items.forEach(c=>{
                    c.checked = action.payload.value
            })

        return copy;

        case STEP_THREE_CHANGE_RADIO_VALUE:

                copy.stepThree['shopType'].items.forEach(c=>{
                        c.checked = action.payload !== c.id ? false:true
                })
    
        return copy;

        case STEP_THREE_CHANGE_OTHER:

            return{
                ...state,stepThree:{
                                    ...state.stepThree,[action.payload.section]:{
                                        ...state.stepThree[action.payload.section],other:action.payload.value
                                    }
                }
            }


        case STEP_ONE_LANGUAGE_UPDATE_VALUE:

            copy.stepOne[action.payload.section].items.forEach(c=>{
                    if(c.id === action.payload.id){
                        c.checked = !c.checked
                    }
                        
                })
    
            return copy;
    
        case STEP_ONE_LANGUAGE_SWITCH_ALL:

            copy.stepOne[action.payload.section].items.forEach(c=>{
                    c.checked = action.payload.value
            })

        return copy;

        case STEP_ONE_CHANGE_TIME_ZONE:

            copy.stepOne[HOUR_SECTION.timeZone].forEach(c=>{
                    if(c.id===action.payload)
                       c.selected = true
                    else
                        c.selected = false
            })

        return copy;

        case STEP_ONE_CHANGE_DAY:

            copy.stepOne[HOUR_SECTION.week].forEach(c=>{
                    if(c.id===action.payload.id)
                       c.checked = !c.checked
            })

        return copy;


        case STEP_ONE_CHANGE_HOURS:

            copy.stepOne[HOUR_SECTION.week].forEach(c=>{
                    if(c.id===action.payload.id)
                        if(action.payload.open)
                            c.open = action.payload.text
                        else
                            c.close = action.payload.text 
            })

        return copy;
        


        default: return state;

    }

}