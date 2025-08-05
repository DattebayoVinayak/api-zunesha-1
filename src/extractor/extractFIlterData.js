import { load } from 'cheerio';

export const extractFilterData = (html) => {
    const $ = load(html);

    const response = [];

    $("#filter-form select").each((i, el) => {
        const obj = {
            filterName: $(el).attr("name"),
            values: []
        }

        const _values = []

        $(el).children().each((j, vl) => {
            const _value = {
                name: String($(vl).text()).trim(),
                value: Number($(vl).attr("value")) || j
            }

            _values.push(_value);
        })

        obj.values = _values;

        response.push(obj)
    })

    const genres = {
        filterName: $("#f-genre-ids").attr("name"),
        values: []
    }

    const _values = []
    $(".ni-list").children(".f-genre-item ").each((i, el) => {

        const _value = {
            name: String($(el).text()).trim(),
            value: Number($(el).attr("data-id")) || j
        }

        _values.push(_value);

    })

    genres.values = _values

    response.push(genres)

    return response;
};
