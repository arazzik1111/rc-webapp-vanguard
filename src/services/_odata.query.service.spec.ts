import { OQS, QbCallback } from '@services/odata.query.service';
import { describe, it } from 'vitest';

describe('OdataQueryService', () => {
  it('should create a basic and query', () => {
    const initial: QbCallback = (qb) => qb.eq('startDate', '2');
    const result = new OQS(initial).queryBuilder.build();
    // expect(result).toBe("startDate eq 2");
  });

  it('should create a basic and query', () => {
    const initial: QbCallback = (qb) => qb.and(qb.eq('startDate', 2), qb.eq('endDate', 3));
    const result = new OQS(initial).queryBuilder.build();
    // expect(result).toBe("startDate eq 2 and endDate eq 3");
  });
});
