import React, { Component } from "react";
import { CountConsumer } from "./Count";
// Consumer 嵌套
import { Consumer as ShowConsumer } from "./ShowContext";
export class ChildHood extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {({ count, increment, decrement }) => {
            return (
              <>
                <ShowConsumer>
                  {(value) => {
                    return (
                      <div>
                        {count}/{value.show}
                      </div>
                    );
                  }}
                </ShowConsumer>
                <button
                  onClick={() => {
                    increment(3);
                  }}
                >
                  增加
                </button>
                <button
                  onClick={() => {
                    decrement(2);
                  }}
                >
                  减少
                </button>
              </>
            );
          }}
        </CountConsumer>
      </div>
    );
  }
}

export default ChildHood;
