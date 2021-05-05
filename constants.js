const provinces = [
    {short: 'ab', long: 'Alberta', slug: 'Alberta'},
    {short: 'bc', long: 'British Columbia', slug: 'BC'},
    {short: 'mb', long: 'Manitoba', slug: 'Manitoba'},
    {short: 'nb', long: 'New Brunswick', slug: 'New Brunswick'},
    {short: 'nl', long: 'Newfoundland & Labrador', slug: 'NL'},
    {short: 'nt', long: 'Northwest Territories', slug: 'NWT'},
    {short: 'ns', long: 'Nova Scotia', slug: 'Nova Scotia'},
    {short: 'nu', long: 'Nunavut', slug: 'Nunavut'},
    {short: 'on', long: 'Ontario', slug: 'Ontario'},
    {short: 'pe', long: 'Prince Edward Island', slug: 'PEI'},
    {short: 'rp', long: 'Repatriated', slug: 'Repatriated'},
    {short: 'sk', long: 'Saskatchewan', slug: 'Saskatchewan'},
    {short: 'qc', long: 'Quebec', slug: 'Quebec'},
    {short: 'yu', long: 'Yukon', slug: 'Yukon'}
]

const centerLatLng = {
    ab: [53.9333, -116.5765],
    bc: [53.7267, -127.6476],
    mb: [53.7609, -98.8139],
    nl: [53.1355, -57.6604],
    nt: [64.8255, -124.8457],
    ns: [44.6820, -63.7443],
    nu: [70.2998, -83.1076],
    pe: [46.5107, -63.4168],
    sk: [52.9399, -106.4509],
    qc: [46.8139, -71.2080],
    yu: [64.2823, -135.0000],
    on: [51.2538, -85.3232]
}

export const Constants = {
    provinces,
    centerLatLng
}