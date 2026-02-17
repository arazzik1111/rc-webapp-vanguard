import { act } from '@testing-library/react';

export const waitWithAct = (time = 0) => act(() => new Promise((r) => setTimeout(r, time)));
