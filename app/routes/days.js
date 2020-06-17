import Route from '@ember/routing/route';
// usually data should be retrieved from database/json files, but here we will just hard-coded in.
var groups_topics_mapping = {
    1: [
            {"group": 2, "topic": "React"},
            {"group": 17, "topic": "Express.js"},
            {"group": 18, "topic": "Django"},
            {"group": 3, "topic": "Vue.js"},
            {"group": 20, "topic": "Java Spring"},
            {"group": 16, "topic": "Angular"},
            {"group": 14, "topic": "Flask"}
    ],
    2: [
            {"group": 4, "topic": "Bootstrap"},
            {"group": 9, "topic": "Ruby on Rails"},
            {"group": 5, "topic": "Redux.js"},
            {"group": 15, "topic": "Ember.js"},
            {"group": 13, "topic": "jQuery and jQueryUI"},
            {"group": 1, "topic": "ASP.NET MVC"},
            {"group": 8, "topic": "Meteor"}
    ],
    3: [
            {"group": 10, "topic": "Web2py"},
            {"group": 19, "topic": "Apache Struts"},
            {"group": 12, "topic": "GraphQL"},
            {"group": 6, "topic": "Pylons"},
            {"group": 7, "topic": "Backbone.js"},
            {"group": 11, "topic": "Preact"}
    ]
};

function dayToDate(day) {
    var dayToDateMap = {
        1: "June 17th",
        2: "June 24th",
        3: "July 8th"
    }
    return dayToDateMap[day];
}

export default class DaysRoute extends Route {
    model (params) {
        var day = params.day;
        return {
            "groups_and_topics": groups_topics_mapping[day],
            "date": dayToDate(day)
        };
    }
}
