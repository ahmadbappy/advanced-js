/* 
 -> falsy values
    0,
    "",
    undefined,
    null,
    NaN,
    false,
 -> truthy values
    '0',
    ' ',
    [],
    {},
    'false',
 */

const name = ' ';
if (name)
    console.log('true');
else
    console.log('false');