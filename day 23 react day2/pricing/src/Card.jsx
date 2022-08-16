import React from "react";
  import ReactDOM from 'react-dom'
  import { FaCheck, FaCheckCircle } from "react-icons/fa";
  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
  

export default function Card({data}) {
  console.log(data)
  return (
    <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{data.name}</h5>
        <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">

          <li className={data.textmuted1?"text-muted":""}><span className="fa-li"><i className={!data.textmuted1?"fa fa-check":"fas fa-times"}></i></span>{data.name=="plus"||data.name=="pro"?<b>{data.line1}</b>:<>{data.line1}</>}</li>

          <li className={data.textmuted2?"text-muted":""}><span className="fa-li"><i className={!data.textmuted2?"fa fa-check":"fas fa-times"}></i></span>{data.line2}</li>

          <li className={data.textmuted3?"text-muted":""}><span className="fa-li"><i className={!data.textmuted3?"fa fa-check":"fas fa-times"}></i></span>{data.line3}</li>

          <li className={data.textmuted4?"text-muted":""}><span className="fa-li"><i className={!data.textmuted4?"fa fa-check":"fas fa-times"}></i></span>{data.line4}</li>
          
          <li className={data.textmuted5?"text-muted":""} ><span className="fa-li"><i className={!data.textmuted5?"fa fa-check":"fas fa-times"}></i></span>{data.line5}</li>

          <li className={data.textmuted6?"text-muted":""} ><span className="fa-li"><i className={!data.textmuted6?"fa fa-check":"fas fa-times"}></i></span>{data.line6}</li>

          <li className={data.textmuted7?"text-muted":""} ><span className="fa-li"><i className={!data.textmuted7?"fa fa-check":"fas fa-times"}></i></span>{data.name=="pro"?<><b>Unlimited </b>{data.line7}</>:<>{data.line7}</>}</li>

          <li className={data.textmuted8?"text-muted":""}><span className="fa-li"><i className={!data.textmuted8?"fa fa-check":"fas fa-times"}></i></span>{data.line8}</li>

        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  );
}
