let post = [
    {
        title: 'Ciambellone',
        content:'lorem ipsnum dolor amet',
        image: '/images/ciambellone.jpeg',
        tags:[
            'lorem',
            'ipsum',
            'dolor'
        ]
    },
    {
        title: 'Cracker barbabietola',
        content:'lorem ipsnum dolor amet',
        image: '/images/cracker_barbabietola.jpeg',
        tags:[
            'lorem',
            'ipsum',
            'dolor'
        ]
    },
    {
        title: 'Pane fritto dolce',
        content:'lorem ipsnum dolor amet',
        image: '/images/pane_fritto_dolce.jpeg',
        tags:[
            'lorem',
            'ipsum',
            'dolor'
        ]
    },
    {
        title: 'Pasta barbabietola',
        content:'lorem ipsnum dolor amet',
        image: '/images/pasta_barbabietola.jpeg',
        tags:[
            'lorem',
            'ipsum',
            'dolor'
        ]
    },
    {
        title: 'Torta paesana',
        content:'lorem ipsnum dolor amet',
        image: '/images/torta_paesana.jpeg',
        tags:[
            'lorem',
            'ipsum',
            'dolor'
        ]
    }
]

post.forEach((el, index) => {
    el.id = index + 1
})

// console.log(post);


module.exports = post