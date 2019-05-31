const simpleArray = [
    {label: "one", isSelected: false},
    {label: "two", isSelected: false},
    {label: "three", isSelected: false},
    {label: "four", isSelected: true},
    {label: "five", isSelected: false}
];

const nestedArray = [
    {label: "one", isSelected: false},
    {label: "two", isSelected: false, sub: [
        {label: "one", isSelected: false},
        {label: "two", isSelected: false}
    ]},
    {label: "three", isSelected: false},
    {label: "four", isSelected: true, sub: [
        {label: "one", isSelected: false},
        {label: "two", isSelected: false},
        {label: "three", isSelected: true, sub: [
                {label: "one", isSelected: false},
                {label: "two", isSelected: false},
        ]},
        {label: "four", isSelected: false},
        {label: "five", isSelected: false},
    ]},
    {label: "five", isSelected: false}
];
