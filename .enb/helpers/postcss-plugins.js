module.exports = [
    require('postcss-custom-properties'),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-url')({
        url: 'rebase'
    }),
    require('autoprefixer')({
        browsers: [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'android 4',
            'ios >= 5'
        ]
    })
];
