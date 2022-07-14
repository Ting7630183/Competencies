
var original_1 = [1, 4, 4, 3, 2, 4, 2, 2, 2, 3, 2, 2]
var original_2 = [2, 1, 3, 2, 2, 4, 3, 2, 2, 4, 3, 1]
var original_3 = [4, 5, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4]
var original_4 = [1, 4, 0, 0, 2, 4, 0, 1, 3, 0, 1, 3]
var original_5 = [3, 4, 4, 3, 3, 5, 4, 4, 2, 3, 5, 5]
var original_6 = [4, 1, 2, 2, 3, 1, 2, 2, 2, 1, 2, 2]
var original_7 = [1, 4, 1, 2, 3, 2, 1, 2, 4, 2, 4, 2]
var original_8 = [4, 2, 2, 3, 3, 3, 3, 2, 3, 2, 2, 2]
var original_9 = [0, 4, 3, 2, 2, 4, 2, 2, 3, 4, 4, 4]
var original_10 = [2, 4, 1, 2, 3, 3, 0, 4, 3, 0, 5, 4]
var original_11 = [2, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2]
var original_12 = [4, 1, 3, 4, 2, 2, 3, 4, 3, 4, 2, 1]
var original_13 = [2, 2, 1, 1, 1, 3, 2, 1, 2, 0, 2, 0]
var original_14 = [3, 1, 3, 2, 4, 4, 3, 3, 3, 1, 2, 3]
var original_15 = [0, 0, 1, 1, 0, 1, 2, 2, 2, 2, 1, 1]
var original_16 = [4, 2, 1, 3, 4, 4, 2, 4, 3, 1, 3, 3]
var original_17 = [1, 1, 1, 1, 1, 3, 4, 0, 1, 0, 1, 1]
var original_18 = [2, 1, 3, 3, 1, 3, 2, 4, 4, 1, 1, 1]
var original_19 = [2, 4, 1, 1, 1, 3, 4, 4, 3, 3, 2, 2]
var original_20 = [1, 2, 2, 4, 3, 2, 3, 4, 3, 3, 1, 3]
var original_21 = [4, 3, 1, 1, 1, 3, 2, 1, 1, 3, 3, 3]


const school_neutral = [15.5, 19.63, 18.8, 18.8, 18.5, 17.83, 18.13, 18.35, 17.45, 19.25, 19.7, 17.6]
const school_low = [10.33, 13.08, 12.53, 12.53, 12.33, 11.88, 12.08, 12.23, 11.63, 12.83, 13.13, 11.73]
const school_high = [31, 39.25, 37.6, 37.6, 37, 35.65, 36.25, 36.7, 34.9, 38.5, 39.4, 35.2]

const meta_data = [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 12]
const character_data = [0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0]
const skill_data = [12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0]

function convert_original_score_to_opportunity(param){
    var result=[]

    for(var i = 0; i < param.length; i++) {
        result[i] =  0.95* Math.pow(param[i], 2) + 0.5 * param[i]
    }
    return result;
}

function calculate_final_opportunity(param1, param2) {
    var result = []
    for(var i = 0; i < param1.length; i++) {
        result[i] = param1[i] + param2[i]
    }
    console.log("the final opportunities are: ")
    console.log(result)
    
    return result;
}

function calculate_final_score(param) {
    var result=[]

    for(var i = 0; i < param.length; i++) {
        result[i] =  ((Math.sqrt(76 * param[i] + 5)) * 0.117688-0.263158).toFixed(1)
    }
    console.log("the final scores are: ")
    console.log(result)

    return result;

}


function calculate_output_score1() {
    var starting_opportunity_1 = convert_original_score_to_opportunity(original_1)
    var starting_opportunity_2 = convert_original_score_to_opportunity(original_2)
    var starting_opportunity_3 = convert_original_score_to_opportunity(original_3)
    var starting_opportunity_4 = convert_original_score_to_opportunity(original_4)
    var starting_opportunity_5 = convert_original_score_to_opportunity(original_5)
    var starting_opportunity_6 = convert_original_score_to_opportunity(original_6)
    var starting_opportunity_7 = convert_original_score_to_opportunity(original_7)
    var starting_opportunity_8 = convert_original_score_to_opportunity(original_8)
    var starting_opportunity_9 = convert_original_score_to_opportunity(original_9)
    var starting_opportunity_10 = convert_original_score_to_opportunity(original_10)
    var starting_opportunity_11 = convert_original_score_to_opportunity(original_11)
    var starting_opportunity_12 = convert_original_score_to_opportunity(original_12)
    var starting_opportunity_13 = convert_original_score_to_opportunity(original_13)
    var starting_opportunity_14 = convert_original_score_to_opportunity(original_14)
    var starting_opportunity_15 = convert_original_score_to_opportunity(original_15)
    var starting_opportunity_16 = convert_original_score_to_opportunity(original_16)
    var starting_opportunity_17 = convert_original_score_to_opportunity(original_17)
    var starting_opportunity_18 = convert_original_score_to_opportunity(original_18)
    var starting_opportunity_19 = convert_original_score_to_opportunity(original_19)
    var starting_opportunity_20 = convert_original_score_to_opportunity(original_20)
    var starting_opportunity_21 = convert_original_score_to_opportunity(original_21)

    let school_type1 = document.getElementById("school-type1").value
    console.log(school_type1)
    let intervention1 = document.getElementById("intervention1").value
    console.log(intervention1)
    var add_opportunity1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if (school_type1 === "neutral") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + school_neutral[idx]
        });   
    } else if (school_type1 === "good-school") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + school_high[idx]
        });
    } else if (school_type1 === "bad-school") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + school_low[idx]
        });
    }

    console.log("add opportunity after school type")
    console.log(add_opportunity1)

    if (intervention1 === "meta") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + meta_data[idx]
        });   
    } else if (intervention1 === "character") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + character_data[idx]
        });
    } else if (intervention1 === "skill") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + skill_data[idx]
        });
    }

    console.log("add opportunity after school type")
    console.log(add_opportunity1)

    let school_type2 = document.getElementById("school-type2").value
    console.log(school_type2)
    let intervention2 = document.getElementById("intervention2").value
    console.log(intervention2)
    var add_opportunity2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if (school_type2 === "neutral") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + school_neutral[idx]
        });   
    } else if (school_type2 === "good-school") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + school_high[idx]
        });
    } else if (school_type2 === "bad-school") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + school_low[idx]
        });
    }

    if (intervention2 === "meta") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + meta_data[idx]
        });   
    } else if (intervention2 === "character") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + character_data[idx]
        });
    } else if (intervention2 === "skill") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + skill_data[idx]
        });
    }


    
    var final_opportunity1 = calculate_final_opportunity(starting_opportunity_1, add_opportunity1)
    var final_opportunity2 = calculate_final_opportunity(starting_opportunity_2, add_opportunity1)
    var final_opportunity3 = calculate_final_opportunity(starting_opportunity_3, add_opportunity1)
    var final_opportunity4 = calculate_final_opportunity(starting_opportunity_4, add_opportunity1)
    var final_opportunity5 = calculate_final_opportunity(starting_opportunity_5, add_opportunity1)
    var final_opportunity6 = calculate_final_opportunity(starting_opportunity_6, add_opportunity1)
    var final_opportunity7 = calculate_final_opportunity(starting_opportunity_7, add_opportunity1)
    var final_opportunity8 = calculate_final_opportunity(starting_opportunity_8, add_opportunity1)
    var final_opportunity9 = calculate_final_opportunity(starting_opportunity_9, add_opportunity1)
    var final_opportunity10 = calculate_final_opportunity(starting_opportunity_10, add_opportunity1)
    var final_opportunity11 = calculate_final_opportunity(starting_opportunity_11, add_opportunity1)
    var final_opportunity12 = calculate_final_opportunity(starting_opportunity_12, add_opportunity1)
    var final_opportunity13 = calculate_final_opportunity(starting_opportunity_13, add_opportunity1)
    var final_opportunity14 = calculate_final_opportunity(starting_opportunity_14, add_opportunity1)
    var final_opportunity15 = calculate_final_opportunity(starting_opportunity_15, add_opportunity1)
    var final_opportunity16 = calculate_final_opportunity(starting_opportunity_16, add_opportunity1)
    var final_opportunity17 = calculate_final_opportunity(starting_opportunity_17, add_opportunity1)
    var final_opportunity18 = calculate_final_opportunity(starting_opportunity_18, add_opportunity1)
    var final_opportunity19 = calculate_final_opportunity(starting_opportunity_19, add_opportunity1)
    var final_opportunity20 = calculate_final_opportunity(starting_opportunity_20, add_opportunity1)
    var final_opportunity21 = calculate_final_opportunity(starting_opportunity_21, add_opportunity1)

    var f_opportunity1 = calculate_final_opportunity(starting_opportunity_1, add_opportunity2)
    var f_opportunity2 = calculate_final_opportunity(starting_opportunity_2, add_opportunity2)
    var f_opportunity3 = calculate_final_opportunity(starting_opportunity_3, add_opportunity2)
    var f_opportunity4 = calculate_final_opportunity(starting_opportunity_4, add_opportunity2)
    var f_opportunity5 = calculate_final_opportunity(starting_opportunity_5, add_opportunity2)
    var f_opportunity6 = calculate_final_opportunity(starting_opportunity_6, add_opportunity2)
    var f_opportunity7 = calculate_final_opportunity(starting_opportunity_7, add_opportunity2)
    var f_opportunity8 = calculate_final_opportunity(starting_opportunity_8, add_opportunity2)
    var f_opportunity9 = calculate_final_opportunity(starting_opportunity_9, add_opportunity2)
    var f_opportunity10 = calculate_final_opportunity(starting_opportunity_10, add_opportunity2)
    var f_opportunity11 = calculate_final_opportunity(starting_opportunity_11, add_opportunity2)
    var f_opportunity12 = calculate_final_opportunity(starting_opportunity_12, add_opportunity2)
    var f_opportunity13 = calculate_final_opportunity(starting_opportunity_13, add_opportunity2)
    var f_opportunity14 = calculate_final_opportunity(starting_opportunity_14, add_opportunity2)
    var f_opportunity15 = calculate_final_opportunity(starting_opportunity_15, add_opportunity2)
    var f_opportunity16 = calculate_final_opportunity(starting_opportunity_16, add_opportunity2)
    var f_opportunity17 = calculate_final_opportunity(starting_opportunity_17, add_opportunity2)
    var f_opportunity18 = calculate_final_opportunity(starting_opportunity_18, add_opportunity2)
    var f_opportunity19 = calculate_final_opportunity(starting_opportunity_19, add_opportunity2)
    var f_opportunity20 = calculate_final_opportunity(starting_opportunity_20, add_opportunity2)
    var f_opportunity21 = calculate_final_opportunity(starting_opportunity_21, add_opportunity2)

    var final1 = calculate_final_score(final_opportunity1)
    var final2 = calculate_final_score(final_opportunity2)
    var final3 = calculate_final_score(final_opportunity3)
    var final4 = calculate_final_score(final_opportunity4)
    var final5 = calculate_final_score(final_opportunity5)
    var final6 = calculate_final_score(final_opportunity6)
    var final7 = calculate_final_score(final_opportunity7)
    var final8 = calculate_final_score(final_opportunity8)
    var final9 = calculate_final_score(final_opportunity9)
    var final10 = calculate_final_score(final_opportunity10)
    var final11 = calculate_final_score(final_opportunity11)
    var final12 = calculate_final_score(final_opportunity12)
    var final13 = calculate_final_score(final_opportunity13)
    var final14 = calculate_final_score(final_opportunity14)
    var final15 = calculate_final_score(final_opportunity15)
    var final16 = calculate_final_score(final_opportunity16)
    var final17 = calculate_final_score(final_opportunity17)
    var final18 = calculate_final_score(final_opportunity18)
    var final19 = calculate_final_score(final_opportunity19)
    var final20 = calculate_final_score(final_opportunity20)
    var final21 = calculate_final_score(final_opportunity21)

    var f1 = calculate_final_score(f_opportunity1)
    var f2 = calculate_final_score(f_opportunity2)
    var f3 = calculate_final_score(f_opportunity3)
    var f4 = calculate_final_score(f_opportunity4)
    var f5 = calculate_final_score(f_opportunity5)
    var f6 = calculate_final_score(f_opportunity6)
    var f7 = calculate_final_score(f_opportunity7)
    var f8 = calculate_final_score(f_opportunity8)
    var f9 = calculate_final_score(f_opportunity9)
    var f10 = calculate_final_score(f_opportunity10)
    var f11 = calculate_final_score(f_opportunity11)
    var f12 = calculate_final_score(f_opportunity12)
    var f13 = calculate_final_score(f_opportunity13)
    var f14 = calculate_final_score(f_opportunity14)
    var f15 = calculate_final_score(f_opportunity15)
    var f16 = calculate_final_score(f_opportunity16)
    var f17 = calculate_final_score(f_opportunity17)
    var f18 = calculate_final_score(f_opportunity18)
    var f19 = calculate_final_score(f_opportunity19)
    var f20 = calculate_final_score(f_opportunity20)
    var f21 = calculate_final_score(f_opportunity21)


    OUTPUT1 = document.getElementById('scenario-one-output');
    var competencies = ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
                        'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset']

    var trace1 = {
        type: 'scatter',
        x: competencies,
        y: [original_1[0], original_1[1], original_1[2], original_1[3], original_1[4], original_1[5], original_1[6],
            original_1[7], original_1[8], original_1[9], original_1[10], original_1[11]],
        mode: 'markers',
        name: 'original score',
        marker: {
        color: 'rgba(0,0,0, 1)',
        line: {
            color: 'rgba(0,0,0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
        };
        

        var trace2 = {
            type: 'scatter',
            x: competencies,
            y: [original_2[0], original_2[1], original_2[2], original_2[3], original_2[4], original_2[5], original_2[6],
                original_2[7], original_2[8], original_2[9], original_2[10], original_2[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };
        var trace3 = {
            type: 'scatter',
            x: competencies,
            y: [original_3[0], original_3[1], original_3[2], original_3[3], original_3[4], original_3[5], original_3[6],
                original_3[7], original_3[8], original_3[9], original_3[10], original_3[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };
        var trace4 = {
            type: 'scatter',
            x: competencies,
            y: [original_4[0], original_4[1], original_4[2], original_4[3], original_4[4], original_4[5], original_4[6],
                original_4[7], original_4[8], original_4[9], original_4[10], original_4[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };
        var trace5 = {
            type: 'scatter',
            x: competencies,
            y: [original_5[0], original_5[1], original_5[2], original_5[3], original_5[4], original_5[5], original_5[6],
                original_5[7], original_5[8], original_5[9], original_5[10], original_5[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };
        var trace6 = {
            type: 'scatter',
            x: competencies,
            y: [original_6[0], original_6[1], original_6[2], original_6[3], original_6[4], original_6[5], original_6[6],
                original_6[7], original_6[8], original_6[9], original_6[10], original_6[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace7 = {
            type: 'scatter',
            x: competencies,
            y: [original_7[0], original_7[1], original_7[2], original_7[3], original_7[4], original_7[5], original_7[6],
                original_7[7], original_7[8], original_7[9], original_7[10], original_7[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace8 = {
            type: 'scatter',
            x: competencies,
            y: [original_8[0], original_8[1], original_8[2], original_8[3], original_8[4], original_8[5], original_8[6],
                original_8[7], original_8[8], original_8[9], original_8[10], original_8[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace9 = {
            type: 'scatter',
            x: competencies,
            y: [original_9[0], original_9[1], original_9[2], original_9[3], original_9[4], original_9[5], original_9[6],
                original_9[7], original_9[8], original_9[9], original_9[10], original_9[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace10 = {
            type: 'scatter',
            x: competencies,
            y: [original_10[0], original_10[1], original_10[2], original_10[3], original_10[4], original_10[5], original_10[6],
                original_10[7], original_10[8], original_10[9], original_10[10], original_10[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace11 = {
            type: 'scatter',
            x: competencies,
            y: [original_11[0], original_11[1], original_11[2], original_11[3], original_11[4], original_11[5], original_11[6],
                original_11[7], original_11[8], original_11[9], original_11[10], original_11[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace12 = {
            type: 'scatter',
            x: competencies,
            y: [original_12[0], original_12[1], original_12[2], original_12[3], original_12[4], original_12[5], original_12[6],
                original_12[7], original_12[8], original_12[9], original_12[10], original_12[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace13 = {
            type: 'scatter',
            x: competencies,
            y: [original_13[0], original_13[1], original_13[2], original_13[3], original_13[4], original_13[5], original_13[6],
                original_13[7], original_13[8], original_13[9], original_13[10], original_13[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace14 = {
            type: 'scatter',
            x: competencies,
            y: [original_14[0], original_14[1], original_14[2], original_14[3], original_14[4], original_14[5], original_14[6],
                original_14[7], original_14[8], original_14[9], original_14[10], original_14[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace15 = {
            type: 'scatter',
            x: competencies,
            y: [original_15[0], original_15[1], original_15[2], original_15[3], original_15[4], original_15[5], original_15[6],
                original_15[7], original_15[8], original_15[9], original_15[10], original_15[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace16 = {
            type: 'scatter',
            x: competencies,
            y: [original_16[0], original_16[1], original_16[2], original_16[3], original_16[4], original_16[5], original_16[6],
                original_16[7], original_16[8], original_16[9], original_16[10], original_16[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace17 = {
            type: 'scatter',
            x: competencies,
            y: [original_17[0], original_17[1], original_17[2], original_17[3], original_17[4], original_17[5], original_17[6],
                original_17[7], original_17[8], original_17[9], original_17[10], original_17[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace18 = {
            type: 'scatter',
            x: competencies,
            y: [original_18[0], original_18[1], original_18[2], original_18[3], original_18[4], original_18[5], original_18[6],
                original_18[7], original_18[8], original_18[9], original_18[10], original_18[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace19 = {
            type: 'scatter',
            x: competencies,
            y: [original_19[0], original_19[1], original_19[2], original_19[3], original_19[4], original_19[5], original_19[6],
                original_19[7], original_19[8], original_19[9], original_19[10], original_19[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace20 = {
            type: 'scatter',
            x: competencies,
            y: [original_20[0], original_20[1], original_20[2], original_20[3], original_20[4], original_20[5], original_20[6],
                original_20[7], original_20[8], original_20[9], original_20[10], original_20[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace21 = {
            type: 'scatter',
            x: competencies,
            y: [original_21[0], original_21[1], original_21[2], original_21[3], original_21[4], original_21[5], original_21[6],
                original_21[7], original_21[8], original_21[9], original_21[10], original_21[11]],
            mode: 'markers',
            name: 'original score',
            marker: {
            color: 'rgba(0,0,0, 1)',
            line: {
                color: 'rgba(0,0,0, 1)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_1 = {
            type: 'scatter',
            x: competencies,
            y: [final1[0], final1[1], final1[2], final1[3], final1[4], final1[5], final1[6],
            final1[7], final1[8], final1[9], final1[10], final1[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
            };
        var trace2_2 = {
                type: 'scatter',
                x: competencies,
                y: [final2[0], final2[1], final2[2], final2[3], final2[4], final2[5], final2[6],
                final2[7], final2[8], final2[9], final2[10], final2[11]],
                mode: 'markers',
                name: 'scenario one',
                marker: {
                color: 'rgba(255, 0, 0, 0.6)',
                line: {
                    color: 'rgba(255, 0, 0, 0.6)',
                    width: 1,
                },
                    symbol: 'circle',
                    size: 4
                    }
        };

        var trace2_3 = {
            type: 'scatter',
            x: competencies,
            y: [final3[0], final3[1], final3[2], final3[3], final3[4], final3[5], final3[6],
            final3[7], final3[8], final3[9], final3[10], final3[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_4 = {
            type: 'scatter',
            x: competencies,
            y: [final4[0], final4[1], final4[2], final4[3], final4[4], final4[5], final4[6],
            final4[7], final4[8], final4[9], final4[10], final4[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_5 = {
            type: 'scatter',
            x: competencies,
            y: [final5[0], final5[1], final5[2], final5[3], final5[4], final5[5], final5[6],
            final5[7], final5[8], final5[9], final5[10], final5[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_6 = {
            type: 'scatter',
            x: competencies,
            y: [final6[0], final6[1], final6[2], final6[3], final6[4], final6[5], final6[6],
            final6[7], final6[8], final6[9], final6[10], final6[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_7 = {
            type: 'scatter',
            x: competencies,
            y: [final7[0], final7[1], final7[2], final7[3], final7[4], final7[5], final7[6],
            final7[7], final7[8], final7[9], final7[10], final7[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_8 = {
            type: 'scatter',
            x: competencies,
            y: [final8[0], final8[1], final8[2], final8[3], final8[4], final8[5], final8[6],
            final8[7], final8[8], final8[9], final8[10], final8[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_9 = {
            type: 'scatter',
            x: competencies,
            y: [final9[0], final9[1], final9[2], final9[3], final9[4], final9[5], final9[6],
            final9[7], final9[8], final9[9], final9[10], final9[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_10 = {
            type: 'scatter',
            x: competencies,
            y: [final10[0], final10[1], final10[2], final10[3], final10[4], final10[5], final10[6],
            final10[7], final10[8], final10[9], final10[10], final10[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_11 = {
            type: 'scatter',
            x: competencies,
            y: [final11[0], final11[1], final11[2], final11[3], final11[4], final11[5], final11[6],
            final11[7], final11[8], final11[9], final11[10], final11[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_12 = {
            type: 'scatter',
            x: competencies,
            y: [final12[0], final12[1], final12[2], final12[3], final12[4], final12[5], final12[6],
            final12[7], final12[8], final12[9], final12[10], final12[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_13 = {
            type: 'scatter',
            x: competencies,
            y: [final13[0], final13[1], final13[2], final13[3], final13[4], final13[5], final13[6],
            final13[7], final13[8], final13[9], final13[10], final13[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_14 = {
            type: 'scatter',
            x: competencies,
            y: [final14[0], final14[1], final14[2], final14[3], final14[4], final14[5], final14[6],
            final14[7], final14[8], final14[9], final14[10], final14[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_15 = {
            type: 'scatter',
            x: competencies,
            y: [final15[0], final15[1], final15[2], final15[3], final15[4], final15[5], final15[6],
            final15[7], final15[8], final15[9], final15[10], final15[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_16 = {
            type: 'scatter',
            x: competencies,
            y: [final16[0], final16[1], final16[2], final16[3], final16[4], final16[5], final16[6],
            final16[7], final16[8], final16[9], final16[10], final16[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_17 = {
            type: 'scatter',
            x: competencies,
            y: [final17[0], final17[1], final17[2], final17[3], final17[4], final17[5], final17[6],
            final17[7], final17[8], final17[9], final17[10], final17[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_18 = {
            type: 'scatter',
            x: competencies,
            y: [final18[0], final18[1], final18[2], final18[3], final18[4], final18[5], final18[6],
            final18[7], final18[8], final18[9], final18[10], final18[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_19 = {
            type: 'scatter',
            x: competencies,
            y: [final19[0], final19[1], final19[2], final19[3], final19[4], final19[5], final19[6],
            final19[7], final19[8], final19[9], final19[10], final19[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_20 = {
            type: 'scatter',
            x: competencies,
            y: [final20[0], final20[1], final20[2], final20[3], final20[4], final20[5], final20[6],
            final20[7], final20[8], final20[9], final20[10], final20[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };

        var trace2_21 = {
            type: 'scatter',
            x: competencies,
            y: [final21[0], final21[1], final21[2], final21[3], final21[4], final21[5], final21[6],
            final21[7], final21[8], final21[9], final21[10], final21[11]],
            mode: 'markers',
            name: 'scenario one',
            marker: {
            color: 'rgba(255, 0, 0, 0.6)',
            line: {
                color: 'rgba(255, 0, 0, 0.6)',
                width: 1,
            },
                symbol: 'circle',
                size: 4
                }
        };


    var trace3_1 = {
        type: 'scatter',
        x: competencies,
        y: [f1[0], f1[1], f1[2], f1[3], f1[4], f1[5], f1[6],
        f1[7], f1[8], f1[9], f1[10], f1[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_2 = {
        type: 'scatter',
        x: competencies,
        y: [f2[0], f2[1], f2[2], f2[3], f2[4], f2[5], f2[6],
        f2[7], f2[8], f2[9], f2[10], f2[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_3 = {
        type: 'scatter',
        x: competencies,
        y: [f3[0], f3[1], f3[2], f3[3], f3[4], f3[5], f3[6],
        f3[7], f3[8], f3[9], f3[10], f3[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_4 = {
        type: 'scatter',
        x: competencies,
        y: [f4[0], f4[1], f4[2], f4[3], f4[4], f4[5], f4[6],
        f4[7], f4[8], f4[9], f4[10], f4[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_5 = {
        type: 'scatter',
        x: competencies,
        y: [f5[0], f5[1], f5[2], f5[3], f5[4], f5[5], f5[6],
        f5[7], f5[8], f5[9], f5[10], f5[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_6 = {
        type: 'scatter',
        x: competencies,
        y: [f6[0], f6[1], f6[2], f6[3], f6[4], f6[5], f6[6],
        f6[7], f6[8], f6[9], f6[10], f6[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_7 = {
        type: 'scatter',
        x: competencies,
        y: [f7[0], f7[1], f7[2], f7[3], f7[4], f7[5], f7[6],
        f7[7], f7[8], f7[9], f7[10], f7[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_8 = {
        type: 'scatter',
        x: competencies,
        y: [f8[0], f8[1], f8[2], f8[3], f8[4], f8[5], f8[6],
        f8[7], f8[8], f8[9], f8[10], f8[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_9 = {
        type: 'scatter',
        x: competencies,
        y: [f9[0], f9[1], f9[2], f9[3], f9[4], f9[5], f9[6],
        f9[7], f9[8], f9[9], f9[10], f9[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_10 = {
        type: 'scatter',
        x: competencies,
        y: [f10[0], f10[1], f10[2], f10[3], f10[4], f10[5], f10[6],
        f10[7], f10[8], f10[9], f10[10], f10[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_11 = {
        type: 'scatter',
        x: competencies,
        y: [f11[0], f11[1], f11[2], f11[3], f11[4], f11[5], f11[6],
        f11[7], f11[8], f11[9], f11[10], f11[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_12 = {
        type: 'scatter',
        x: competencies,
        y: [f12[0], f12[1], f12[2], f12[3], f12[4], f12[5], f12[6],
        f12[7], f12[8], f12[9], f12[10], f12[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_13 = {
        type: 'scatter',
        x: competencies,
        y: [f13[0], f13[1], f13[2], f13[3], f13[4], f13[5], f13[6],
        f13[7], f13[8], f13[9], f13[10], f13[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_14 = {
        type: 'scatter',
        x: competencies,
        y: [f14[0], f14[1], f14[2], f14[3], f14[4], f14[5], f14[6],
        f14[7], f14[8], f14[9], f14[10], f14[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_15 = {
        type: 'scatter',
        x: competencies,
        y: [f15[0], f15[1], f15[2], f15[3], f15[4], f15[5], f15[6],
        f15[7], f15[8], f15[9], f15[10], f15[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_16 = {
        type: 'scatter',
        x: competencies,
        y: [f16[0], f16[1], f16[2], f16[3], f16[4], f16[5], f16[6],
        f16[7], f16[8], f16[9], f16[10], f16[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_17 = {
        type: 'scatter',
        x: competencies,
        y: [f17[0], f17[1], f17[2], f17[3], f17[4], f17[5], f17[6],
        f17[7], f17[8], f17[9], f17[10], f17[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_18 = {
        type: 'scatter',
        x: competencies,
        y: [f18[0], f18[1], f18[2], f18[3], f18[4], f18[5], f18[6],
        f18[7], f18[8], f18[9], f18[10], f18[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_19 = {
        type: 'scatter',
        x: competencies,
        y: [f19[0], f19[1], f19[2], f19[3], f19[4], f19[5], f19[6],
        f19[7], f19[8], f19[9], f19[10], f19[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_20 = {
        type: 'scatter',
        x: competencies,
        y: [f20[0], f20[1], f20[2], f20[3], f20[4], f20[5], f20[6],
        f20[7], f20[8], f20[9], f20[10], f20[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

    var trace3_21 = {
        type: 'scatter',
        x: competencies,
        y: [f21[0], f21[1], f21[2], f21[3], f21[4], f21[5], f21[6],
        f21[7], f21[8], f21[9], f21[10], f21[11]],
        mode: 'markers',
        name: 'scenario two',
        marker: {
        color: 'rgba(0, 255, 0, 1)',
        line: {
            color: 'rgba(0, 255, 0, 1)',
            width: 1,
        },
            symbol: 'circle',
            size: 4
            }
    };

        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12,
                    trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21, 
                    trace2_1, trace2_2, trace2_3, trace2_4, trace2_5, trace2_6, trace2_7, trace2_8, trace2_9, trace2_10,
                    trace2_11, trace2_12, trace2_13, trace2_14, trace2_15, trace2_16, trace2_17, trace2_18, trace2_19, trace2_20, trace2_21,
                    trace3_1, trace3_2, trace3_3, trace3_4, trace3_5, trace3_6, trace3_7, trace3_8, trace3_9, trace3_10,trace3_11,
                    trace3_12, trace3_13, trace3_14, trace3_15, trace3_16, trace3_17, trace3_18, trace3_19, trace3_20, trace3_21 ];

        var layout = {
          title: 'Competencies Prediction',
          xaxis: {
            showgrid: false,
            // showline: true,
            linecolor: 'rgb(102, 102, 102)',
            titlefont: {
              font: {
                color: 'rgb(204, 204, 204)'
              }
            },
            // tickfont: {
            //   font: {
            //     color: 'rgb(102, 102, 102)'
            //   }
            // },
            // autotick: false,
            // dtick: 10,
            // ticks: 'outside',
            // tickcolor: 'rgb(102, 102, 102)'
          },
          margin: {
            l: 20,
            r: 50,
            b: 50,
            t: 80
          },
          legend: {
            font: {
              size: 7,
            },
            yanchor: 'middle',
            xanchor: 'right'
          },
          width: 1400,
          height: 600,
          paper_bgcolor: 'rgb(254, 247, 234)',
          plot_bgcolor: 'rgb(254, 247, 234)',
          hovermode: 'closest'
        };

      
    Plotly.newPlot(OUTPUT1, data, layout);
    
}

