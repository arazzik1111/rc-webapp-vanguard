import { convertToODataQuery } from '@services/odata.service';

describe('test odata service', () => {
  it('should format easy models', () => {
    const state = {
      a: true,
      b: true,
    };
    const converted = convertToODataQuery(state);
    expect(converted).toBe('a eq true and b eq true');
  });

  it('should convert nested simple example', () => {
    const state = {
      a: {
        aa: true,
        ab: true,
      },
    };

    const converted = convertToODataQuery(state);
    expect(converted).toBe("(a eq 'aa' or a eq 'ab')");
  });

  it('should convert nested', () => {
    const state = {
      a: {
        aa: true,
        ab: true,
      },
      b: true,
      c: {
        ca: true,
        cb: true,
      },
    };

    const converted = convertToODataQuery(state);
    expect(converted).toBe("(a eq 'aa' or a eq 'ab') and b eq true and (c eq 'ca' or c eq 'cb')");
  });

  it('should map with keywords', () => {
    const state = {
      a: {
        and: {
          aa: true,
          ab: true,
        },
      },
      b: true,
      c: {
        or: {
          ca: true,
          cb: true,
        },
      },
    };
    const converted = convertToODataQuery(state);
    expect(converted).toBe("(a eq 'aa' and a eq 'ab') and b eq true and (c eq 'ca' or c eq 'cb')");
  });

  it('should map with values and keywords', () => {
    const state = {
      a: {
        and: {
          ge: 'value',
          le: 'value2',
        },
      },
      b: true,
      c: {
        or: {
          ca: true,
          cb: true,
        },
      },
    };
    const converted = convertToODataQuery(state);
    expect(converted).toBe("(a ge 'value' and a le 'value2') and b eq true and (c eq 'ca' or c eq 'cb')");
  });

  it('should ignore _ in parent key easy models', () => {
    // Example input structure adjusted for demonstration
    const input = {
      _reviewTextStatus: { withText: true, withoutText: true },
      sentiment: { neutral: true },
    };

    // Call the function with the example input
    const result = convertToODataQuery(input);
    expect(result).toBe("(withText eq true or withoutText eq true) and sentiment eq 'neutral'");
  });

  it('should ignore _ in parent key easy models with only _', () => {
    // Example input structure adjusted for demonstration
    const input = {
      created: { and: {} },
      reviewDirectories: {},
      reviewRating: {},
      reviewReplies: {},
      _reviewTextStatus: { withText: 'custom_text' },
    };

    // Call the function with the example input
    const result = convertToODataQuery(input);
    expect(result).toBe("withText eq 'custom_text'");
  });
});
