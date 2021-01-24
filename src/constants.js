// Make sure to double-backslash all the special chars
export const SECTIONS = [
    {
        name: '8 color',
        items: {
            black: '\\u001b[30m',
            red: '\\u001b[31m',
            green: '\\\u001b[32m',
            yellow: '\\u001b[33m',
            blue: '\\u001b[34m',
            magenta: '\\u001b[35m',
            cyan: '\\u001b[36m',
            white: '\\u001b[37m',
            reset: '\\u001b[0m',
        },
        itemStyles: {
            black: 'text-black bg-white',
            red: 'text-red-500',
            green: 'text-green-500',
            yellow: 'text-yellow-300',
            blue: 'text-blue-500',
            magenta: 'text-pink-500',
            cyan: 'text-blue-500',
            white: 'text-white',
            reset: 'text-gray-400',
        }
    },
    {
        name: '16 color',
        items: {
            'bright black': '\\u001b[30;1m',
            'bright red': '\\u001b[31;1m',
            'bright green': '\\u001b[32;1m',
            'bright yellow': '\\u001b[33;1m',
            'bright blue': '\\u001b[34;1m',
            'bright magenta': '\\u001b[35;1m',
            'bright cyan': '\\u001b[36;1m',
            'bright white': '\\u001b[37;1m',
        }
    }
]