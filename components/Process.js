import React, { Component } from 'react';
import PropTypes from 'prop-types';
import first from '../static/media/icons/first.svg';
import middle from '../static/media/icons/middle.svg';
import last from '../static/media/icons/last.svg';

class Process extends Component {

  static propTypes = {
    steps: PropTypes.array.isRequired
  }

  static defaultProps = {
    steps: undefined
  }

  render() {

    let stepsLength = this.props.steps.length;

    return (
      <span className="Process">
        <ul className="timeline">
          {(this.props.steps).map(function (step, index){

              return (
                <span key={"step" + index} className="step">
                  <div className="time">
                    <img
                      src={index === 0 ? first :
                        (index === stepsLength - 1 ? last
                        : middle)}
                      alt={index + " step"}
                    />
                  </div>
                  <li key={index} className="step-details">
                    <h5 className="step-header">{step.title}</h5>
                    <ul className="step-info">
                    {(step.processes).map(function (process, index){
                      return <li key={step.title + "desc" + index}>{process}</li>
                    })}
                    </ul>
                  </li>
                </span>
              )

          })}
        </ul>

<style jsx>{`
.Process ul, .Process li {
  list-style: none;
  padding: 0;
  position: relative;
}

.Process .timeline {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: 2.5em
}
@media only screen and (max-width: 45rem) {
  .Process .timeline {justify-content: space-between;}
}
.Process .timeline .step {
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.5em;

}

.Process .timeline .time {
  display: inline-block;
  margin-right: .5em;
}

.Process .timeline .step-header {
  margin-top: 0;
  margin-bottom: .5rem;
}

.Process .timeline .step-info li {
  margin: .4rem 0;
  font-size: .75em;
}

@media only screen and (min-width: 320px) and (max-width: 787px){
  .Process .timeline {
    -ms-flex-pack: start;
        justify-content: start;
  }

  .Process .timeline .step {
    min-width: 176px;
  }
}

@media only screen and (max-width: 431px) {
  .Process .timeline img {
    -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  
}

    `}</style>

      </span>
    );
  }
}

export default Process;
