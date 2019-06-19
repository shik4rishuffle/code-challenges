document.addEventListener('DOMContentLoaded', () => {
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

function addList(array, parent) {
    const createdUl = document.createElement('ul');

    array.forEach(el => {
        const createdLi = document.createElement('li');
        createdLi.innerText = el.label;
        createdLi.style.color = 'black';
        createdLi.style.fontWeight = '400';

        if (el.isSelected) {
            createdLi.style.color = 'red';
            createdLi.style.fontWeight = '800';
            if (el.sub) {
                addList(el.sub, createdLi);
            }
        }

        createdUl.append(createdLi);
    });

    parent.append(createdUl);
}

addList(simpleArray, document.body);
addList(nestedArray, document.body);
});




