const express = require('express');
const router = express.Router();

router.get('/fseries', (req, res) => {
    const listFreeSeries = [
        {
            id: 1098963864834639,
            name: 'Money Heist',
            description: 'This riveting crime series won Best Drama at the International Emmy',
            seasonAvailable: 4

        },
        {
            id: 1098968946277734639,
            name: 'Unsolved Mysteries',
            description: 'Real cases of perplexing disappearances, shocking murders and paranormal encounters fuel this gripping revival of the iconic documentary series.',
            seasonAvailable: 1

        },
        {
            id: 108888677089884639,
            name: 'Lost In Space',
            description: 'After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they are surrounded by hidden dangers',
            seasonAvailable: 2

        },
        {
            id: 1098963864834639,
            name: 'Designated Survivor',
            description: 'Americas fate rests in the hands of a low - level official after an attack on Washington decimates the government in this gripping political thriller.',
            seasonAvailable: 3

        },
        {
            id: 188888845763834639,
            name: 'House Of Cards',
            description: 'A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama.',
            seasonAvailable: 6

        },
        {
            id: 188887700863834639,
            name: 'Peaky Blinders',
            description: 'A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost',
            seasonAvailable: 5

        }
    ]
    res.status(200).send(listFreeSeries);
})

module.exports = router;