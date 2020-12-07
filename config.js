var config = {
    style: 'mapbox://styles/ayamashita24/cki9g6s3y4i1319rwxek2kyoq',
    accessToken: 'pk.eyJ1IjoiYXlhbWFzaGl0YTI0IiwiYSI6ImNraTlvd3N1NTBhNHMydW14c3V2Y242NGkifQ.Ej7QL5RXwMlo9fAAtqwZUg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The COVID Pandemic through the Lens of Vulnerable Youth in NYC',
    subtitle: 'Was NYC prepared for this unprecedented social disaster?',
    byline: 'Final Project for 11.154/11.454 Big Data, Visualization, and Society / By Naroa Coretti Sanchez, Ayaka Yamashita, Hyun-Chae Chad Loh',
    //footer: '',
    chapters: [
        {
            id: 'preview',
            title: 'Elements of Youth Wellness; EAT, PLAY, and LEARN',
              //image: './path/to/image/source.png',
            description: 'When the stay-at-home order and school closures went into effect, youth in NYC were subjected to the triple burden of not being able to access school meals, school playgrounds, and in-person classes. By analyzing census data, we are able to display where the city may need to focus in the future.',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 10.50,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'food_access',
            title: 'How about Food Access?',
            description: 'Less yellow areas have to be continuously given attention for food insecurity, however, in general, the City has been doing good job in terms of this issue.',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0.8
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0.4
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'upper_east_side',
            title: 'Situation in Upper East Side?',
            //image: './path/to/image/source.png',
            description: 'Upper East Side seems not having any issues in terms of food insecurity. This neighborhood has been dominated by wealthy White Anglo-Saxon Protestant families. The neighborhood contains the greatest concentration of individual wealth in Manhattan. As of 2011, the median household income for the Upper East Side was $131,492.' ,
            location: {
              center: { lon: -73.956555, lat: 40.773565 },
              zoom: 12.85,
              pitch: 53.00,
              bearing: 28.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0.8
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
                    ],
                    onChapterExit: [

                       {
                             layer: 'eat',
                             opacity: 0.4
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'brownsville',
            title: 'Situation in Brownsville?',
            //image: './path/to/image/source.png',
            description: 'Brownsville has slight issue with food insecurity. Brownsville had been the poorest neighborhood for several years. It is high concentration of empty lots and burned-out buildings. Brownsville contained a concentrated, multigenerational black residents that caused its development to remain static. ?',
            location: {
              center: { lon:  -73.9065, lat: 40.6564 },
              zoom: 12.85,
              pitch: 53.00,
              bearing: 8.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0.8
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
                    ],
                    onChapterExit: [

                       {
                             layer: 'eat',
                             opacity: 0.4
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'openspace_access',
            title: 'The 2nd element: Access to Playground',
            //image: './path/to/image/source.png',
            description: 'Covid-19 deprived access to school playgrounds from youth and parks became alternatives. The place with less green indicates less budget, which means less maintained. In general, NYC needs to work on more for increasing the numbers of well-maintained parks.',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0.8
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0.4
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'upper_east_side2',
            title: 'Upper East Side',
            //image: './path/to/image/source.png',
            description: 'Upper east side has well-maintained parks where youth can play.' ,
            location: {
              center: { lon: -73.956555, lat: 40.773565 },
              zoom: 12.85,
              pitch: 53.00,
              bearing: 28.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0.8
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
                    ],
                    onChapterExit: [

                       {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0.4
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'brownsville2',
            title: 'Brownsville',
            //image: './path/to/image/source.png',
            description: 'Parks at Brownsville needs to be more maintained.' ,
            location: {
              center: { lon:  -73.9065, lat: 40.6564 },
              zoom: 12.85,
              pitch: 53.00,
              bearing: 8.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0.8
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
                    ],
                    onChapterExit: [

                       {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0.4
                         },
                        {
                             layer: 'learn',
                             opacity: 0
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'internet_access',
            title: 'The 3rd element: Access to the Internet',
            //image: './path/to/image/source.png',
            description: 'Internet became essential infrastructure for Online education during the pandemic. Less color places need more internet acecss. Overall NYC has been doing good job.',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0.8
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0.4
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },

        {
            id: 'upper_east_side3',
            title: 'Upper East Side',
            //image: './path/to/image/source.png',
            description: 'Upper East Side has no problem in internet access.' ,
            location: {
              center: { lon: -73.956555, lat: 40.773565 },
              zoom: 12.85,
              pitch: 53.00,
              bearing: 28.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0.8
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
                    ],
                    onChapterExit: [

                       {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0.4
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'brownsville3',
            title: 'Brownsville',
            //image: './path/to/image/source.png',
            description: 'Internet at Brownsbille do not have much problems, either.' ,
            location: {
              center: { lon:  -73.9065, lat: 40.6564 },
              zoom: 12.85,
              pitch: 53.00,
              bearing: 8.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0.85
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
                    ],
                    onChapterExit: [

                       {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0
                         },
                        {
                             layer: 'learn',
                             opacity: 0.4
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'svi',
            title: 'How does Social Vulnerability relate to 3 elements of Youth Wellness?',
            //image: './path/to/image/source.png',
            description: 'The map shows the place with high social vulnerability with stronger color.',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
              pitch: 0,
              bearing: 0
            },
          onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.8
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.4
                 }
            ]
        },

    ]
};
