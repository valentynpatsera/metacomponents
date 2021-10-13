import compiler from '/lib/compiler.js';

const li = ({text}) => ({
    tag: 'li',
    text: text,
});

export default ({_, domain}) => ({
    tag: 'div',
    attrs: {
        id: 'list',
    },
    hooks: {
        async init() {
            const data = await domain.loader.load();
            const schema = {
                tag: 'ul',
                children: data.list.map(li),
            };
            const html = await compiler.compile(schema);
            const listRoot = document.getElementById('list');
            listRoot.append(html);
        }
    },
})
