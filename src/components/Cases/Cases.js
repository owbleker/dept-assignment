import React from 'react';
import Case from './Case/Case';
import Filter from './Filter/Filter';
import Quote from '../Quote/Quote';

const Cases = (props) => {
  let normalCases = [];
  let smallCases = [];
  let bigCases = [];

  props.cases.forEach((c, index) => {
    if (c.type === 'normal') {
      normalCases.push(
        <Case 
            key={index}
            title={c.title}
            client={c.client}
            image={c.image}
            type={c.type} />
      )
    } else if (c.type === 'big') {
      bigCases.push(
        <Case 
            key={index}
            title={c.title}
            client={c.client}
            image={c.image}
            type={c.type} />
      )
    } else {
      smallCases.push(
        <Case 
            key={index}
            title={c.title}
            client={c.client}
            image={c.image}
            type={c.type} />
      )
    }
  });

  return (
    <div className="cases-list__container container">

      <Filter />

      <section className="cases-list__grid normal-grid grid-1">
        <div className="col-12 col-6--md">
          {normalCases[0]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[1]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[2]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[3]}
        </div>

        
      </section>

      <section className="cases-list__grid big-small-grid grid-2">
        <div className="col-12 col-8--md">
          {bigCases[0]}
        </div>
        <div className="col-12 col-4--md small-cases">
          {smallCases[0]}
          {smallCases[1]}
        </div>
      </section>

      <section className="cases-list__grid normal-grid grid-3">
        <div className="col-12 col-6--md">
          {normalCases[4]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[5]}
        </div>
      </section>

      <section className="cases-list__grid big-small-grid grid-4">
        <div className="col-12 col-4--md small-cases">
          {smallCases[2]}
          {smallCases[3]}
        </div>
        <div className="col-12 col-8--md hidden-sm-down">
          {bigCases[1]}
        </div>
      </section>

      <section className="cases-list__grid normal-grid grid-5">
        <div className="col-12 col-6--md">
          {normalCases[6]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[7]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[8]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[9]}
        </div>
      </section>

      <section className="cases-list__grid normal-grid grid-1">
        <Quote text={props.quote.text} name={props.quote.name} position={props.quote.position}/>
      </section>

      <section className="cases-list__grid normal-grid grid-6">
        <div className="col-12 col-6--md">
          {normalCases[10]}
        </div>
        <div className="col-12 col-6--md">
          {normalCases[11]}
        </div>
      </section>
    </div>
  );
}

export default Cases;