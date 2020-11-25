export interface SearchQuery {
    limit : number ;
    launch_success : boolean;
    land_success : boolean;
    launch_year : number
}

export const SearchFilters = [
    {
        "key":"launch_year",
        "values":[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
        "selected": null
    },
    {
        "key":"launch_success",
        "values" : [true,false],
        "selected" : null
    },
    {
        "key": "land_success",
        "values":[true,false],
        "selected" : null
    }
]

export const defaultLimit = 100;