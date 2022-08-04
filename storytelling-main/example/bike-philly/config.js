var config = {
    style: 'mapbox://styles/aishichandra/cl6a5iyb3001m15pbs128askw',
    accessToken: 'pk.eyJ1IjoiYWlzaGljaGFuZHJhIiwiYSI6ImNsNXRzNmQxMzBjNmgzanMyM2Zzc2c0bTAifQ.H2qRJesc5qOSIVxch_8cKQ',
    showMarkers: false,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'The Bike Trail',
            image: '',
            description: 'Hi HI by',
            location: {
                center: [-74.008, 40.755],
                zoom: 12.14,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .60
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'phi2',
            alignment: 'right',
            title: 'The Bike Trail',
            image: '',
            description: 'Hi HI by',
            location: {
                center: [-73.986, 40.782],
                zoom: 15.10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .60
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'Bike Lanes',
            image: '',
            description: 'Philadelphia has XX miles of bike lanes, XX miles of which are protected. Drivers are getting more used to sharing the road, but ride defensively.',
            location: {
                center: [-73.982, 40.789],
                zoom: 18.78,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'Indego Bike Share',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                center: [-73.999, 40.761],
                zoom: 15.61,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [-74.007, 40.744],
                zoom: 15.75,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        }    ]
};
