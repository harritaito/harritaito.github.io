import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryPolarAxis, VictoryArea } from 'victory';
import theme from './ChartTheme';


class PolarChart extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    caption: PropTypes.string,
    firstRow: PropTypes.bool,
  }

  static defaultProps = {
    data: null,
    caption: "",
    first: false
  }

  render() {

    let graphStyle = "col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3";
    this.props.first ? graphStyle += " col-lg-offset-1dot5 col-xl-offset-1dot5" : null;

    return (
      <span className={graphStyle + " PolarChart"}>
        <VictoryChart polar theme={theme} domain={{x: [0, 4], y: [0, 7]}}>
          <VictoryPolarAxis dependentAxis
                            style={{ axis: { stroke: "none" } }}
                            tickFormat={() => null}
          />
          <VictoryPolarAxis/>
          <VictoryArea
            data={this.props.data}
            style={{
              data: { fill: "#12a42d" },
            }}
          />

        </VictoryChart>

        <p className={"graph-label"}>
          {this.props.caption}
        </p>
        <style jsx>{`
          .PolarChart .graph-label {
            text-align: center;
            margin-top: -15px;
            font-weight: 500;
          }
        `}</style>
      </span>
    );
  }
}

export default PolarChart;
