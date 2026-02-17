import React from 'react';
import { SearchableSelect } from '../SearchableSelect';
import { SelectOptionProp } from '@vanguard/Select/Select';
import { Story } from './_SearchableSelect.default';

interface CustomOption extends SelectOptionProp {
    category: string;
    productId: number;
    metadata: {
        tags: string[];
    };
}

const customOptions: CustomOption[] = [
    {
        key: '1',
        value: 'apple',
        title: 'Apple',
        description: 'Red fruit',
        category: 'Fruit',
        productId: 23498623958,
        metadata: { tags: ['fresh', 'sweet'] },
    },
    {
        key: '2',
        value: 'banana',
        title: 'Banana',
        description: 'Yellow fruit',
        category: 'Fruit',
        productId: 2346987234069,
        metadata: { tags: ['tropical', 'long'] },
    },
    {
        key: '3',
        value: 'carrot',
        title: 'Carrot',
        description: 'Orange vegetable',
        category: 'Vegetable',
        productId: 31234812347,
        metadata: { tags: ['crunchy', 'root'] },
    },
    {
        key: '4',
        value: 'broccoli',
        title: 'Broccoli',
        description: 'Green vegetable',
        category: 'Vegetable',
        productId: 643262346,
        metadata: { tags: ['green', 'healthy'] },
    },
    {
        key: '5',
        value: 'cherry',
        title: 'Cherry',
        description: 'Small red fruit',
        category: 'Fruit',
        productId: 2347743568,
        metadata: { tags: ['red', 'stone-fruit'] },
    },
    {
        key: '6',
        value: 'date',
        title: 'Date',
        description: 'Brown sweet fruit',
        category: 'Fruit',
        productId: 645684568,
        metadata: { tags: ['sweet', 'dried'] },
    },
    {
        key: '7',
        value: 'eggplant',
        title: 'Eggplant',
        description: 'Purple vegetable',
        category: 'Vegetable',
        productId: 75449745678,
        metadata: { tags: ['purple', 'moussaka'] },
    },
    {
        key: '8',
        value: 'fig',
        title: 'Fig',
        description: 'Purple sweet fruit',
        category: 'Fruit',
        productId: 5675675,
        metadata: { tags: ['purple', 'fig-newton'] },
    },
    {
        key: '9',
        value: 'garlic',
        title: 'Garlic',
        description: 'Pungent bulb',
        category: 'Vegetable',
        productId: 987654321,
        metadata: { tags: ['pungent', 'seasoning'] },
    },
    {
        key: '10',
        value: 'honeydew',
        title: 'Honeydew',
        description: 'Green melon',
        category: 'Fruit',
        productId: 123123123,
        metadata: { tags: ['melon', 'green'] },
    },
    {
        key: '11',
        value: 'iceberg',
        title: 'Iceberg Lettuce',
        description: 'Crunchy salad',
        category: 'Vegetable',
        productId: 456456456,
        metadata: { tags: ['salad', 'crunchy'] },
    },
    {
        key: '12',
        value: 'jalapeno',
        title: 'Jalapeno',
        description: 'Spicy pepper',
        category: 'Vegetable',
        productId: 789789789,
        metadata: { tags: ['spicy', 'pepper'] },
    },
    {
        key: '13',
        value: 'kiwi',
        title: 'Kiwi',
        description: 'Fuzzy brown fruit',
        category: 'Fruit',
        productId: 159159159,
        metadata: { tags: ['fuzzy', 'vitamin-c'] },
    },
    {
        key: '14',
        value: 'lemon',
        title: 'Lemon',
        description: 'Sour citrus',
        category: 'Fruit',
        productId: 357357357,
        metadata: { tags: ['sour', 'citrus'] },
    },
    {
        key: '15',
        value: 'mushroom',
        title: 'Mushroom',
        description: 'Earthy fungi',
        category: 'Vegetable',
        productId: 951951951,
        metadata: { tags: ['fungi', 'earthy'] },
    },
];

export const FuzzySearch: Story = {
    render: () => (
        <SearchableSelect<string, CustomOption>
            options={customOptions}
            searchableProps={['title', 'description', 'category', 'productId', 'metadata']}
            onSelection={(val) => console.log(`Selected: ${val}`)}
            elementName="Item"
        />
    ),
};
