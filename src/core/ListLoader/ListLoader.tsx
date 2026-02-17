import './ListLoader.scss';

import React from 'react';

interface Props {
  loadersCount?: number;
}

export const ListLoader = (props: Props) => {
  const { loadersCount = 2 } = props;

  const loaderConfig = {
    height: 6,
    items: [
      {
        left: 50,
        width: 25,
        top: -33,
      },
      {
        left: 50,
        width: 30,
        top: -20,
      },
      {
        left: 0,
        width: 90,
        top: 15,
      },
      {
        left: 0,
        width: 65,
        top: 30,
      },
      {
        left: 0,
        width: 80,
        top: 45,
      },
      {
        left: 0,
        width: 50,
        top: 60,
      },

      {
        left: 0,
        width: 80,
        top: 75,
      },
    ],
  };

  return (
    <>
      {[...Array(loadersCount)].map((item, index) => {
        return (
          <div key={index} className="list-loader">
            <div className="animationLoading">
              <div className="avatar" />
              {loaderConfig.items.map((item, innerIndex) => {
                return (
                  <div
                    key={innerIndex}
                    style={{
                      left: item.left,
                      top: item.top,
                      width: `${item.width}%`,
                    }}
                    className="animated-line"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
