import React from 'react';
import style from './timeline.css';
import School from '../../pages/school/School';
import useWidth from '../../hooks/useWidth';


const Date = ({style}) => {
  return(
    <div style={style}>
      <div className="time">
        <h4 className="dateH4">January 2018</h4>
      </div>
    </div>
    )
};

const Timeline = () => {
const {width}= useWidth();

const content =[
  {
    title : "title",
    description:"description"
  },
  {
    title : "title1",
    description:"description1 description2 description2 description2 description2 description2 description2 description2 description2 "
  },
  {
    title : "title2",
    description:"description2 description2 description2 description2 description2 description2 description2 description2 "
  },
  {
    title : "title3",
    description:"description3"
  },
  {
    title : "title4",
    description:"description4"
  },
];

const rightItem = {
  width:'47%',
}

const leftItem={
  width:'47%',
  display: "flex",
  justifyContent: "flex-end",
}

const timeline = content.map((item, index)=>{

  if (index % 2 === 1 && width> 900) {
    return (
        <li className='experience'>
          <School title={item.title} description={item.description} style={leftItem}/>
            <div className="timeline centerItem"><div className='cercle'></div></div>
          <Date style={rightItem}/>
        </li>
        )  
  }else if (index % 2 === 0 && width> 900){
    return (
      <li className='experience'>
        <Date style={leftItem}/>
          <div className="timeline centerItem"><div className='cercle'></div></div>
        <School title={item.title} description={item.description} style={rightItem}/>
      </li>
      )  
  }else{
    return (
      <li className='experience'>
        <div className="timeline centerItem"><div className='cercle'></div></div>
        <div>
          <Date/>
          <School title={item.title} description={item.description}/>
        </div>
      </li>
      )  
  }
})

    return (


    <ul>
      {timeline}
    </ul>


    );
};

export default Timeline;