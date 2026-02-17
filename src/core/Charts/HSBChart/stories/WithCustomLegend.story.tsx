import React from "react";
import { Story, defaultProps } from "./_HSBChart.default";
import { BigLegendItem, BigLegendItemProps } from "@vanguard/Charts/BigLegend/BigLegendItem/BigLegendItem";
import { BigLegend } from "@vanguard/Charts/BigLegend/BigLegend";
import { HSBChartSeries } from "../HSBChart";
import { classNames } from "@helpers/classNames";
import { alignItemsCenter, dFlex, flexWrap, gap3 } from "@globalStyles";
import { within, expect } from "storybook/test";

export const WithCustomLegend: Story = {
  args: {
    ...defaultProps,
    renderBigLegendFn: (hsbChartProps) => {
      const getBigLegendData = (series: HSBChartSeries[]): BigLegendItemProps[] => {
        const bigLegendData: BigLegendItemProps[] = [];
        series.forEach((value, index) => {
          bigLegendData.push({
            topTitle: series[index].name,
            currentNumber: series[index].data[0] as number,
            previousNumber: series[index].data[1] as number,
            showBadge: true,
            showPreviousNumber: false,
            previousNumberText: "(vs your competitors)",
          });
        });
        return bigLegendData;
      };

      const getTotalOwner = (series: HSBChartSeries[]): number => {
        let total: number = 0;
        series.forEach((item) => {
          if (typeof item.data[0] === "object") {
            item.data.map((el) => {
              const elAsObject = el as { x: string; y: number };
              total += elAsObject.y as number;
            });
          } else {
            total += item.data[0];
          }
        });
        return total;
      };

      const getTotalPrevious = (series: HSBChartSeries[]): number => {
        let total: number = 0;
        series.forEach((item) => {
          if (typeof item.data[0] === "object") {
            item.data.map((el) => {
              const elAsObject = el as { x: string; y: number };
              total += elAsObject.y as number;
            });
          } else {
            total += item.data[1] as number;
          }
        });
        return total;
      };

      return (
        <div className={classNames(dFlex, alignItemsCenter)}>
          <div className={classNames(dFlex, gap3, flexWrap)}>
            <BigLegendItem
              currentNumber={getTotalOwner(hsbChartProps.series)}
              topTitle={"Total photos in your profile"}
              showPreviousNumber={false}
              previousNumber={getTotalPrevious(hsbChartProps.series)}
              showBadge={true}
              previousNumberText={"(vs your competitors)"}
            />
            <BigLegend bigLegendData={getBigLegendData(hsbChartProps.series)} showBadge={true} />
          </div>
        </div>
      );
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the chart container is rendered
    const chartContainer = canvas.getByTestId("HSBChart_TestId");
    expect(chartContainer).toBeInTheDocument();

    // Check that custom legend content is rendered
    const totalPhotosText = canvas.getByText("Total photos in your profile");
    expect(totalPhotosText).toBeInTheDocument();
  },
};