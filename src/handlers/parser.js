'use strict';



let handleAction = function (idx, cb) {

    cb("1005");
    if (idx == 1) {
        let stationJson = `  {"station_id":"72","num_bikes_available":4,"num_bikes_disabled":0,"num_docks_available":35,"num_docks_disabled":0,"is_installed":1,"is_renting":1,"is_returning":1,"last_reported":1476898995,"_id":"5807b4d643700d000ec624d1"},{"station_id":"79","num_bikes_available":25,"num_bikes_disabled":5,"num_docks_available":3,"num_docks_disabled":0,"is_installed":1,"is_renting":1,"is_returning":1,"last_reported":1476899821,"_id":"5807b4d643700d000ec624d0"},{"station_id":"82","num_bikes_available":19,"num_bikes_disabled":0,"num_docks_available":8,"num_docks_disabled":0,"is_installed":1,"is_renting":1,"is_returning":1,"last_reported":1476899289,"_id":"5807b4d643700d000ec624cf"},{"station_id":"83","num_bikes_available":27,"num_bikes_disabled":1,"num_docks_available":34,"num_docks_disabled":0,"is_installed":1,"is_renting":1,"is_returning":1,"last_reported":1476899229,"_id":"5807b4d643700d000ec624ce"},{"station_id":"116","num_bikes_available":33,"num_bikes_disabled":0,"num_docks_available":6,"num_docks_disabled":0,"is_installed":1,"is_renting":1,"is_returning":1,"last_reported":1476899725,"_id":"5807b4d643700d000ec624cd"}
    }`


        // let add = {
        //     "attachment": {
        //         "type": "template",
        //         "payload": {
        //             "template_type": "button",
        //             "text": "What do you want to do next?",
        //             "buttons": [{
        //                 "type": "web_url",
        //                 "url": "https://petersapparel.parseapp.com",
        //                 "title": "Show Website"
        //             }, {
        //                 "type": "postback",
        //                 "title": "Start Chatting",
        //                 "payload": "USER_DEFINED_PAYLOAD"
        //             }]
        //         }
        //     }
        // }



        // bot.sendMessage("994195690708817", add, function (params) {
        //     console.log("ok")
        // });

    }
}






const pattText = [{
    t: `show me bikes near { home }`,
    action: handleAction
}, {
    t: `show me bikes near { work }`,
    action: handleAction
}, {
    t: `show me my favourite stations `,
    action: handleAction
}, {
    t: `show me my notifications`,
    action: handleAction
}];

let parser = {
    parse: function (chatMessage, cb) {
        var idx = 0;
        var matchFound = false;
        for (let p of pattText) {
            idx++;
            let patt = new RegExp(p.t, 'ig');
            if (patt.test(chatMessage)) {
                p.action(idx, cb);
                matchFound = true;
                log.info("match text found " + p.t);
                break;
            }
        }
        if (!matchFound) cb(chatMessage);

    }


}

// let res = parser.parse("Show me bikes near { home } ", function (outPutMsg) {
//     console.log(outPutMsg);
// })


module.exports = parser;