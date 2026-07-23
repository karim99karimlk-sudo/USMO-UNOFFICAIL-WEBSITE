const schedules = {

"25-26":{


matches:[

["الدورة 1","15:00 - 25/09/28","✈️","JSM","1-<strong>0</strong>","#"],

["الدورة 2","15:00 - 25/10/05","🏠","SCCM","<strong>1</strong>-1","#"],

["الدورة 3","15:00 - 25/10/12","✈️","RBM","0-<strong>0</strong>","#"],

["الدورة 4","15:00 - 25/10/18","🏠","KAC","<strong>1</strong>-1","#"],
["الدورة 5","15:00 - 25/10/25","✈️","USAT","2-<strong>0</strong>","#"],
["الدورة 6","20:00 - 25/11/01","✈️","CJBG","1-<strong>2</strong>","#"],
["الدورة 7","16:00 - 25/11/09","🏠","SM","<strong>0</strong>-1","#"],
["الدورة 8","15:00 - 25/11/15","✈️","WAF","2-<strong>0</strong>","#"],
["الدورة 9","16:00 - 25/11/23","🏠","MAT","<strong>3</strong>-0","#"],
["الدورة 10","15:00 - 25/11/30","✈️","RAC","0-<strong>3</strong>","#"],
["الدورة 11","16:00 - 25/12/06","🏠","MCO","<strong>0</strong>-3","#"],
["الدورة 12","16:00 - 26/01/25","✈️","USB","2-<strong>2</strong>","#"],
["الدورة 13","16:00 - 26/01/31","🏠","JSS","<strong>3</strong>-2","#"],
["الدورة 14","15:00 - 26/02/07","✈️","CAK","1-<strong>2</strong>","#"],
["الدورة 15","15:00 - 26/02/14","🏠","WST","<strong>0</strong>-0","#"],
["الدورة 16","15:00 - 26/02/21","🏠","JSM","<strong>1</strong>-1","#"],
["الدورة 17","22:00 - 26/03/01","✈️","SCCM","1-<strong>0</strong>","#"],
["الدورة 18","15:00 - 26/03/08","🏠","RBM","<strong>3</strong>-0","#"],
["الدورة 19","15:00 - 26/03/14","✈️","KAC","0-<strong>0</strong>","#"],
["الدورة 20","15:00 - 26/03/29","🏠","USAT","<strong>0</strong>-0","#"],
["الدورة 21","15:00 - 26/04/05","🏠","CJBG","<strong>1</strong>-1","#"],
["الدورة 22","16:00 - 26/04/26","✈️","SM","1-<strong>0</strong>","#"],
["الدورة 23","16:00 - 26/05/02","🏠","WAF","<strong>1</strong>-0","#"],
["الدورة 24","16:00 - 26/05/10","✈️","MAT","2-<strong>0</strong>","https://www.youtube.com/watch?v=cU6iGN5rxL8"],
["الدورة 25","16:00 - 26/05/24","🏠","RAC","<strong>3</strong>-1","https://www.youtube.com/watch?v=H4Emwwroln0&t=164s"],
["الدورة 26","16:00 - 26/06/06","✈️","MCO","2-<strong>1</strong>","video.html?v=H4Emwwroln0&t=16s"],
["الدورة 27","16:00 - 26/06/13","🏠","USB","<strong>1</strong>-0","video.html?v=H4Emwwroln0&t=164s"],
["الدورة 28","16:00 - 26/06/20","✈️","JSS","2-<strong>0</strong>","#"],
["الدورة 29","16:00 - 26/06/27","🏠","CAK","<strong>1</strong>-1","#"],
["الدورة 30","16:00 - 26/07/05","✈️","WST","0-<strong>1</strong>","#"],
// Continue until الجولة 30

]

},

"24-25":{


matches:[

["الدورة 1","15:00 - 24/09/28","✈️","SM","1-1","#"],

["الدورة 2","15:00 - 24/10/04","🏠","KAC","2-1","#"],

["الدورة 2","15:00 - 24/10/04","","KAC","2-1","#"],

["الدورة 2","15:00 - 24/10/04","🏠","KAC","2-1","#"]

// Add all 30 matches

]

}

};



const body = document.getElementById("scheduleBody");

function loadSeason(season){

    body.innerHTML = "";

    schedules[season].matches.forEach((match,index)=>{

        // Our score is always inside <strong>
        const us = Number(match[4].match(/<strong>(\d+)<\/strong>/)[1]);

        // Opponent's score is what's left after removing the <strong> tags
        const them = Number(
            match[4]
                .replace(/<strong>\d+<\/strong>/, "")
                .replace("-", "")
        );

        let resultClass = "draw";

        if (us > them) {
            resultClass = "win";
        } else if (us < them) {
            resultClass = "loss";
        }

        body.innerHTML += `
        <tr class="${index % 2 ? 'alt-row' : ''}">
            <td>${match[0]}</td>
            <td>${match[1]}</td>
            <td>${match[2]}</td>
            <td>${match[3]}</td>
            <td>
                <span class="score ${resultClass}">
                    ${match[4]}
                </span>
            </td>
            <td>
                <a href="${match[5]}" target="_blank" class="info-btn">
                    <i class="fa-solid fa-play"></i>
                </a>
            </td>
        </tr>`;
    });

}

loadSeason("25-26");

document.getElementById("seasonSelect").addEventListener("change",e=>{

    loadSeason(e.target.value);

});