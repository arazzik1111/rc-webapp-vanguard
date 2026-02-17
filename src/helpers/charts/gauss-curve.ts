/**
 * RoundValue
 */
function roundValue(number: number): number {
  return Math.round(number * 1000) / 1000;
}

/**
 * Config
 * ---------------------------------------------------------------------------------------------------------------------
 */
const variance = 0;
const amplitude = 2.8;

const yAxisOffset = 1.2;

const minX = 0;
let maxX = 5 + 1;
let midX = (maxX - minX) / 2 + minX;
let curvePeakX = 4.0;

const getInitialPoints = () => {
  const points = [
    { x: minX, y: minX },
    { x: curvePeakX, y: midX },
    { x: maxX, y: maxX },
  ];

  if (curvePeakX > midX) {
    points.push({ x: minX + maxX / 50, y: minX + 0.01 });
  } else {
    points.push({
      x: maxX - 1 / 50,
      y: maxX,
    });
  }
  return points;
};

const initialize = (curvePeak: number, virtualizeFn: (x: number) => number) => {
  curvePeakX = virtualizeFn(curvePeak);
  maxX = virtualizeFn(5) + 1;
  midX = (maxX - minX) / 2 + minX;
  points = getInitialPoints();
  gaussianFn = makeGaussian(amplitude, midX, 0, 1, 1);
};

let points = getInitialPoints();

/**
 * Gauss
 */
function makeGaussian(amplitude: number, x0: number, y0: number, sigmaX: number, sigmaY: number) {
  return function (amplitude: number, x0: number, y0: number, sigmaX: number, sigmaY: number, x: number, y: number) {
    const exponent = -(
      Math.pow(x - x0, 2) / (2 * Math.pow(sigmaX, 2)) +
      Math.pow(y - y0, 2) / (2 * Math.pow(sigmaY, 2))
    );
    return amplitude * Math.pow(Math.E, exponent);
  }.bind(null, amplitude, x0, y0, sigmaX, sigmaY);
}

let gaussianFn = makeGaussian(amplitude, midX, 0, 1, 1);

/**
 * Lagrange
 */
function lagrangeN(x: number, min: number, max: number, ...points: { x: number; y: number }[]) {
  let y = 0;
  for (let j = 0; j < points.length; j++) {
    let lagrange_j = points[j].y;
    for (let m = 0; m < points.length; m++) {
      if (m == j) continue;
      lagrange_j *= (x - points[m].x) / (points[j].x - points[m].x);
    }
    y += lagrange_j;
  }
  return y;
}

/**
 * Get Gauss Y value on point X
 * ---------------------------------------------------------------------------------------------------------------------
 */
export const getGaussY = (x: number, curvePeak: number, virtualizeFn: (x: number) => number) => {
  initialize(curvePeak, virtualizeFn);

  const lagrangeResult = lagrangeN(virtualizeFn(x), 0, maxX, ...points);
  const gaussianResult = gaussianFn(lagrangeResult, variance);

  return roundValue(gaussianResult + yAxisOffset);
};

/**
 * Generate {x,y}[] coords of a chart (used on CompetitorsChart)
 * ---------------------------------------------------------------------------------------------------------------------
 */
export const generateGaussCurve = (
  curvePeak: number,
  virtualizeFn: (x: number) => number,
  stepSize: number = 0.1,
): [number, number][] => {
  initialize(curvePeak, virtualizeFn);

  const coords: [number, number][] = [];
  let lastXValue: number = 0;
  let lastYValue: number = yAxisOffset;

  for (let i = 1; i <= virtualizeFn(5); i += stepSize) {
    const lagrangeResult = lagrangeN(i, 0, maxX, ...points);
    const gaussianResult = gaussianFn(lagrangeResult, variance);

    const xValue = roundValue(i);
    const yValue = roundValue(gaussianResult + yAxisOffset);

    if (xValue !== lastXValue) {
      coords.push([xValue, yValue]);
    }

    lastXValue = xValue;
    lastYValue = yValue;
  }

  if (lastXValue < virtualizeFn(5)) {
    // Because of 'stepSize', sometimes we may not reach the virtualizeFn(5),
    // that's why we should store last values, and add them to coords as last value.
    coords.push([virtualizeFn(5), lastYValue]);
  }

  // console.log("gaussData coords", coords);
  return coords;
};

/**
 * Mobile version (inverted)
 * ---------------------------------------------------------------------------------------------------------------------
 */
export const generateGaussCurveMobile = (medianY: number, virtualizeFn: (x: number) => number): [number, number][] => {
  const data = generateGaussCurve(medianY, virtualizeFn, 0.1)
    .map((item) => {
      const x: [number, number] = [virtualizeFn(5) + 1 - item[0], item[1]];
      return x;
    })
    .reverse();

  // console.log("gaussData coords mobile", data, medianY);
  return data;
};
