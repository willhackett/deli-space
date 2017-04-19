t deliSpace = (filler, divider, ...rest) => rest.map(f => Array(parseInt(f, 0)).fill(filler).join('')).join(divider);

export default deliSpace;
