//@ts-nocheck
import { useFormConfig } from '@custom-hooks/useFormConfig';
import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { writeInAutocomplete } from '@test-utils/autocomplete-test-utils';
import { writeInInput } from '@test-utils/input-test-utils';
import { renderHook } from '@testing-library/react';
import { Autocomplete } from '@vanguard/Autocomplete/Autocomplete';
import { Form, FormStatus } from '@vanguard/Form/Form';
import { Input } from '@vanguard/Input/Input';
import React from 'react';

import { render } from '../../../test-utils/test-utils';
import { RenderRoot } from '../../load-component';

describe('Form component test suite ', () => {
  interface TestSlice {
    input1: string;
  }

  const createForm = async (onChange: (formStatus: FormStatus<any>) => void) => {
    const initialState: TestSlice = {
      input1: '',
    };
    const slice = createSlice({
      name: 'testSlice',
      initialState,
      reducers: {},
    });

    const rootReducer = combineReducers({
      root: slice.reducer,
    });

    const store = configureStore({
      reducer: rootReducer,
    });

    type RootState = ReturnType<typeof rootReducer>;

    // our root state does not allow testing states
    const selector: any = (state: RootState) => state.root;

    const hookRez = renderHook(
      () =>
        useFormConfig({
          slice: slice.actions,
          reducer: selector,
          inputs: {
            input1: {},
            autocomplete1: {},
          },
        }),
      {
        wrapper: ({ children }) => (
          <RenderRoot shouldPersist={true} customStore={store}>
            {children}
          </RenderRoot>
        ),
      },
    );

    console.log('hookRez,', hookRez);

    // // @ts-ignore
    //  = renderHook(() =>
    //
    // );
    const { formConfig, isValid, resetForm, getData } = hookRez.result.current ?? {};

    await render(
      <Form onChange={onChange} config={formConfig}>
        <Input testId={'form-input-1'} formconfig={formConfig.input1} label={'TEST'} />
        <Autocomplete
          options={['1', '2']}
          value={'1'}
          testId={'form-autocomplete-1'}
          formconfig={formConfig.autocomplete1}
          label={'autocomplete'}
        />
      </Form>,
      null as any,
      store,
    );

    return hookRez.result.current;
  };

  beforeEach(() => {});

  test('should detect changes', async () => {
    let hasChanges = false;

    const onChange = (formStatus: FormStatus<any>) => {
      hasChanges = formStatus.hasChanges;
    };
    await createForm(onChange);

    await writeInInput('form-input-1', 'this is written in input');

    expect(hasChanges).toBe(true);
  });

  test('should not trigger any change if no changes happen', async () => {
    let hasChanges = false;

    const onChange = (formStatus: FormStatus<any>) => {
      hasChanges = formStatus.hasChanges;
    };
    await createForm(onChange);

    expect(hasChanges).toBe(false);
  });

  test('should be able to write in autocomplete', async () => {
    let hasChanges = false;

    const onChange = (formStatus: FormStatus<any>) => {
      hasChanges = formStatus.hasChanges;
    };
    const { getData } = await createForm(onChange);
    await writeInAutocomplete('form-autocomplete-1', 'this is written in autocomplete');

    expect(hasChanges).toBe(true);
  });
});
