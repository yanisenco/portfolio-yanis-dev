import React from 'react';
import './timeline.css';
import School from '../school/School';
import useWidth from '../../hooks/useWidth';


const Date = ({style, date}) => {
  return(
    <div style={style} className='sideItem dateMargin'>
      <div className="time">
        <h2 className="dateH2">{date}</h2>
      </div>
    </div>
    )
};

const Timeline = () => {
const {width}= useWidth();

const content =[
  {date:'2023',
  exp:[
    {
      title : "Capgemini",
      description:"stage - developpeur front end reactJS"
    },
    {
      title : "CESI",
      description:"projets : developpement C#,traitement de données (big data), gestion d'un S.I "
    },
    {
      title : "Capgemini",
      description:"alternance - developpeur front end reactJS"
    },
  ]
  },
  {date:'2022',
  exp:[
    {
      title : "CESI",
      description:"projets : : developpement C arduino, developpement en C ++,architecture d'un réseau& developpement web"
    }
  ]
  },
  {date:'2021',
  exp:[
    {
      title : "CESI",
      description:"projets : traitement du signal & gestion de base de données (SQL)"
    },
    {
      title : "Estuaire et sillon",
      description:"saisonnier - ripeur"
    }
  ]
  },
  {date:'2017',
  exp:[
    {
      title : "La Banque Postale",
      description:"stage - conception d'interface"
    }
  ]
  },
];

const flexEnd={
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-end',
}

const timeline = content.map((item, index)=>{
  const experience = item.exp.map((item,index)=>{
    return  <School title={item.title} description={item.description} key={index}/>
  })

  if (index % 2 === 1 && width> 900) {
    return (
        <li className='experience'>
          <div className='sideItem' style={flexEnd}>
             {experience}
          </div>
          <div className="timeline centerItem"><div className='cercle'></div></div>
          <Date date={item.date}/>
        </li>
        )  
  }else if (index % 2 === 0 && width> 900){
    return (
      <li className='experience'>
        <Date date={item.date} style={flexEnd}/>
        <div className="timeline centerItem"><div className='cercle'></div></div>
        <div className='sideItem'>
          {experience}
        </div>
      </li>
      )  
  }else{

    return (
      <li className='experience'>
        <div className="timeline centerItem"><div className='cercle'></div></div>
        <div>
          <Date date={item.date} style={{marginLeft:'2vw'}}/>
          {experience}
        </div>
      </li>
      )  
  }
})

    return (

<div className='containerTimeline'>
    <ul className='centerTimeline'>
      {timeline}
    </ul>
</div>

    );
};

export default Timeline;