import Route from '@ember/routing/route';
// usually data should be retrieved from database/json files, but here we will just hard-coded in.
var groups_topics_mapping = {
    1: [
            {"group": 2, "topic": "React", "link": "https://www.youtube.com/watch?v=1r8qxWFVhbw&t=2m25s"},
            {"group": 17, "topic": "Express.js", "link": "https://www.youtube.com/watch?v=1r8qxWFVhbw&t=22m7s"},
            {"group": 18, "topic": "Django", "link": "https://www.youtube.com/watch?v=1r8qxWFVhbw&t=41m15s"},
            {"group": 3, "topic": "Vue.js", "link": "https://www.youtube.com/watch?v=1r8qxWFVhbw&t=59m"},
            {"group": 20, "topic": "Java Spring", "link": "https://www.youtube.com/watch?v=oLQS2KhoqyY&t=0m30s"},
            {"group": 16, "topic": "Angular", "link": "https://www.youtube.com/watch?v=oLQS2KhoqyY&t=14m40s"},
            {"group": 14, "topic": "Flask", "link": "https://www.youtube.com/watch?v=oLQS2KhoqyY&t=34m26s"}
    ],
    2: [
            {"group": 4, "topic": "Bootstrap", "link": "https://www.youtube.com/watch?v=4Sq_Lal-4jY&t=0m53s"},
            {"group": 9, "topic": "Ruby on Rails", "link": "https://www.youtube.com/watch?v=4Sq_Lal-4jY&t=20m7s"},
            {"group": 5, "topic": "Redux.js", "link": "https://www.youtube.com/watch?v=4Sq_Lal-4jY&t=40m7s"},
            {"group": 15, "topic": "Ember.js", "link": "https://www.youtube.com/watch?v=4Sq_Lal-4jY&t=55m32s"},
            {"group": 13, "topic": "jQuery and jQueryUI", "link": "https://www.youtube.com/watch?v=si10nlXJQUo&t=0m38s"},
            {"group": 1, "topic": "ASP.NET MVC", "link": "https://www.youtube.com/watch?v=si10nlXJQUo&t=19m17s"},
            {"group": 8, "topic": "Meteor", "link": "https://www.youtube.com/watch?v=si10nlXJQUo&t=39m22s"}
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
            "day": day,
            "groups_and_topics": groups_topics_mapping[day],
            "date": dayToDate(day)
        };
    }
}
