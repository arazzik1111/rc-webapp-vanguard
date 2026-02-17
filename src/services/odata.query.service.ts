type BinaryQueryExpressionConfig = {
  left?: QbCallback | string;
  leftQb?: OdataExpressions; // Required when left is a QbCallback
  right?: QbCallback | AcceptedRightFormats;
  rightQb?: OdataExpressions; // Required when right is a QbCallback
} & { op: string };

type AcceptedRightFormats = string | number;
type OdataExpressions = BinaryQueryExpression;

export class BinaryQueryExpression {
  private left?: string | QbCallback;
  private leftQb?: OdataExpressions;
  private right?: AcceptedRightFormats | QbCallback;
  private rightQb?: OdataExpressions;
  private op: string;

  constructor(config: BinaryQueryExpressionConfig) {
    this.left = config.left;
    this.right = config.right;
    this.rightQb = config.rightQb;
    this.leftQb = config.leftQb;
    this.op = config.op;
  }

  _build(): string {
    let leftValue = '';
    let rightValue = '';

    if (typeof this.left !== 'function') {
      leftValue = this.left ?? 'undefined';
    } else if (this.leftQb) {
      leftValue = this.leftQb._build(); // Evaluate QbCallback
    }

    if (typeof this.right !== 'function') {
      rightValue = `${this.right}`;
    } else if (this.rightQb) {
      rightValue = this.rightQb?._build(); // Evaluate QbCallback
    }

    return `${leftValue} ${this.op} ${rightValue}`;
  }
}

export type QbCallback = (qb: OdataQueryBuilder) => void;

export class OdataQueryBuilder {
  constructor() {}

  children: OdataQueryBuilder[] = [];
  expressions: Array<OdataExpressions> = [];

  private getNewQueryBuilder() {
    const newQb = new OdataQueryBuilder();
    this.children.push(newQb);
    return newQb;
  }

  private getNewBinaryExpression(opts: BinaryQueryExpressionConfig) {
    const newQExp = new BinaryQueryExpression(opts);
    this.expressions.push(newQExp);
    return newQExp;
  }

  build(): string {
    let base = '';
    console.log(this);
    console.log('........');
    // for (const child of this.children) {
    //   base += child.build();
    // }
    for (const expr of this.expressions) {
      base += expr._build();
    }

    return base;
  }

  eq(left: string, right: AcceptedRightFormats): BinaryQueryExpression {
    // Create a new BinaryQueryExpression and return an OdataQueryBuilder
    const qb = this.getNewQueryBuilder();
    const expr = qb.getNewBinaryExpression({
      left: left,
      right: right,
      op: 'eq',
    });
    return expr;
  }

  and(left: OdataExpressions, right: OdataExpressions): any {
    // Create a new BinaryQueryExpression and return an OdataQueryBuilder

    this.getNewBinaryExpression({
      left: '',
      right: '',
      leftQb: left,
      rightQb: right,
      op: 'and',
    });

    return this;
  }

  filter: Exclude<OdataQueryBuilder, 'filter'>;
}

export class OQS {
  queryBuilder: OdataQueryBuilder;

  constructor(cb: QbCallback) {
    this.queryBuilder = new OdataQueryBuilder();
    cb(this.queryBuilder);
  }
}
