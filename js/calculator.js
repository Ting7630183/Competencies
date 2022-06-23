// const character_none = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const character_extraversion = [0, 0, 7.4, 7.4, -7.4, 0, 0, 0, 0, 7.4, 0, 0]
// const character_openness = [7.4, 7.4, 7.4, 0, -7.4, 0, 0, 0, 0, 0, 0, 0]
// const character_conscientiousness = [-7.4, 0, 0, 0, 7.4, 0, 0, 0, 0, -7.4, 7.4, 7.4]
// const character_neuroticism = [0, 0, 0, 0, -7.4, 0, 0, -7.4, 0, 0, -7.4, -7.4]
// const character_agreeableness = [-7.4, -7.4, 0, 7.4, 0, 0, 0, 0, 7.4, 0, 0, 0]

// const resillience_none =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const resillience_low = [-3.7, -3.7, -3.7, -3.7, -3.7, -3.7, -3.7, -14.8, -3.7, -3.7, -7.4, -7.4]
// const resillience_high = [3.7, 7.4, 3.7, 3.7, 7.4, 3.7, 3.7, 3.7, 3.7, 3.7, 14.8, 3.7]


const school_neutral = [15.5, 19.63, 18.8, 18.8, 18.5, 17.83, 18.13, 18.35, 17.45, 19.25, 19.7, 17.6]
const school_low = [10.33, 13.08, 12.53, 12.53, 12.33, 11.88, 12.08, 12.23, 11.63, 12.83, 13.13, 11.73]
const school_high = [31, 39.25, 37.6, 37.6, 37, 35.65, 36.25, 36.7, 34.9, 38.5, 39.4, 35.2]

const parent_neutral =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const parent_low =[-9.6, -9.6, -9.6, -9.6, -9.6, -9.6, -9.6, 4.8, 0, -9.6, -9.6, -9.6]
const parent_high =[7.4, 7.4, 7.4, 7.4, 7.4, 7.4, 7.4, -7.4, 7.4, 7.4, 19.2, 19.2]

const other_none = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const bullyed = [-3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3]
const switch_school = [-2.4, -2.4, -2.4, -2.4, -2.4, -2.4, -13.2, -13.2, -2.4, -2.4, -2.4, -13.2]

// function get_persona() {

// }


function calculate_output_score1() {
    let creativity = document.getElementById("Creativity").value
    let critical_thinking = document.getElementById("Critical-thinking").value
    let communication = document.getElementById("Communication").value
    let collaboration = document.getElementById("Collaboration").value
    let mindfulness = document.getElementById("Mindfulness").value
    let curiousity = document.getElementById("Curiousity").value
    let courage = document.getElementById("Courage").value
    let resilience = document.getElementById("Resilience").value
    let ethics = document.getElementById("Ethics").value
    let leadership = document.getElementById("Leadership").value
    let metacognition = document.getElementById("Metacognition").value
    let growth_mindset = document.getElementById("Growth-Mindset").value

    let persona = document.getElementById("persona").value

    // let character = document.getElementById("characters").value
    // console.log(character)
    let school_type = document.getElementById("school-type1").value
    console.log(school_type)
    let parental_involvement = document.getElementById("parental-type1").value
    console.log(parental_involvement)
    // let theory_of_mind = document.getElementById("theory-of-mind").value
    // console.log(theory_of_mind)
    let other_factor = document.getElementById("other-factor1").value
    console.log(other_factor)

    var starting_score = []
    if(persona === 'Anouchig') {
        starting_score = [1, 4, 4, 3, 2, 4, 2, 2, 2, 3, 2, 2]
    } else if (persona === 'LingLing') {
        starting_score = [2, 1, 3, 2, 2, 4, 3, 2, 2, 4, 3, 1]
    } else if (persona === 'Bof') {
        starting_score = [4, 5, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4]
    } else if (persona === 'Mignon') {
        starting_score = [1, 4, 1, 2, 3, 2, 1, 2, 4, 2, 4, 2]
    } else if (persona === 'Ramez') {
        starting_score = [0, 0, 1, 1, 0, 1, 2, 2, 2, 2, 1, 1]
    }

    console.log(starting_score)

    const starting_opportunity = starting_score.map(convert_score_to_opportunity)
    function convert_score_to_opportunity(value){
        return 0.95* Math.pow(value, 2) + 0.5 * value
    }
    console.log(starting_opportunity)

    var add_opportunity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if(other_factor === "none") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + other_none[idx]
        });
    } else if (other_factor === "bullying") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + bullyed[idx]
        });
    } else if (other_factor === "switch-school") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + switch_school[idx]
        });
    }
    console.log("add opportunity after other factors")
    console.log(add_opportunity)


    // if(theory_of_mind === "none") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + resillience_none[idx]
    //     });
    // } else if (theory_of_mind === "high-resillience") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + resillience_high[idx]
    //     });
    // } else if (theory_of_mind === "low-resillience") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + resillience_low[idx]
    //     });
    // }
    // console.log("add opportunity after resillience")
    // console.log(add_opportunity)

    if (parental_involvement === "parent-neutral") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + parent_neutral[idx]
        });
    } else if (parental_involvement === "parent-high") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + parent_high[idx]
        });
    } else if (parental_involvement === "parent-negative") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + parent_low[idx]
        });
    }
    console.log("add opportunity after parental involvement")
    console.log(add_opportunity)

    // if (character === "none") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + character_none[idx]
    //     });
    // } else if (character === "openness") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + character_openness[idx]
    //     });
    // } else if (character === "extraversion") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + character_extraversion[idx]
    //     });
    // } else if (character === "conscientiousness") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + character_conscientiousness[idx]
    //     });
    // } else if (character === "agreeableness") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + character_agreeableness[idx]
    //     });
    // } else if (character === "neuroticism") {
    //     add_opportunity = add_opportunity.map(function (num, idx) {
    //         return num + character_neuroticism[idx]
    //     });
    // }
    // console.log("add opportunity after character")
    // console.log(add_opportunity)

    if (school_type === "neutral") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + school_neutral[idx]
        });   
    } else if (school_type === "good-school") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + school_high[idx]
        });
    } else if (school_type === "bad-school") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + school_low[idx]
        });
    }

    console.log("add opportunity after school type")
    console.log(add_opportunity)
    
    
    const final_opportunity = starting_opportunity.map(function (num, idx) {
        return num + add_opportunity[idx]
    });

    // console.log(final_opportunity)

    const final_score = final_opportunity.map(convert_opportunity_to_score)
    function convert_opportunity_to_score(value) {
        return (Math.sqrt(76 * value + 5)) * 0.117688-0.263158
    }

    OUTPUT1 = document.getElementById('scenario-one-output');
    var original = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [starting_score[0], starting_score[1], starting_score[2], starting_score[3], starting_score[4], starting_score[5],
        starting_score[6], starting_score[7], starting_score[8], starting_score[9], starting_score[10], starting_score[11]],
        type: 'scatter',
        name: 'original'
      };
      
      var final = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [final_score[0].toFixed(1), final_score[1].toFixed(1), final_score[2].toFixed(1), final_score[3].toFixed(1), final_score[4].toFixed(1), final_score[5].toFixed(1),
        final_score[6].toFixed(1), final_score[7].toFixed(1), final_score[8].toFixed(1), final_score[9].toFixed(1), final_score[10].toFixed(1), final_score[11].toFixed(1)],
        type: 'scatter',
        name: 'final'
      };
      
      var data = [original, final];
      
      Plotly.newPlot(OUTPUT1, data);


    //   OUTPUT2 = document.getElementById('scenario-two-output');
    // var original = {
    //     x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
    //         'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
    //     y: [starting_score[0], starting_score[1], starting_score[2], starting_score[3], starting_score[4], starting_score[5],
    //     starting_score[6], starting_score[7], starting_score[8], starting_score[9], starting_score[10], starting_score[11]],
    //     type: 'scatter',
    //     name: 'original'
    //   };
      
    //   var final = {
    //     x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
    //         'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
    //     y: [final_score[0], final_score[1], final_score[2], final_score[3], final_score[4], final_score[5],
    //     final_score[6], final_score[7], final_score[8], final_score[9], final_score[10], final_score[11]],
    //     type: 'scatter',
    //     name: 'final'
    //   };
      
    //   var data = [original, final];
      
    //   Plotly.newPlot(OUTPUT2, data);   
}

function calculate_output_score3() {
    let school_type1 = document.getElementById("school-type1").value
    console.log(school_type1)
    let parental_involvement1 = document.getElementById("parental-type1").value
    console.log(parental_involvement1)
    // let theory_of_mind = document.getElementById("theory-of-mind").value
    // console.log(theory_of_mind)
    let other_factor1 = document.getElementById("other-factor1").value
    console.log(other_factor1)

    let persona = document.getElementById("persona").value
    let school_type2 = document.getElementById("school-type2").value
    console.log(school_type2)
    let parental_involvement2 = document.getElementById("parental-type2").value
    console.log(parental_involvement2)
    let other_factor2 = document.getElementById("other-factor2").value
    console.log(other_factor2)

    var starting_score = []
    if(persona === 'Anouchig') {
        starting_score = [1, 4, 4, 3, 2, 4, 2, 2, 2, 3, 2, 2]
    } else if (persona === 'LingLing') {
        starting_score = [2, 1, 3, 2, 2, 4, 3, 2, 2, 4, 3, 1]
    } else if (persona === 'Bof') {
        starting_score = [4, 5, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4]
    } else if (persona === 'Mignon') {
        starting_score = [1, 4, 1, 2, 3, 2, 1, 2, 4, 2, 4, 2]
    } else if (persona === 'Ramez') {
        starting_score = [0, 0, 1, 1, 0, 1, 2, 2, 2, 2, 1, 1]
    }

    console.log(starting_score)

    const starting_opportunity = starting_score.map(convert_score_to_opportunity)
    function convert_score_to_opportunity(value){
        return 0.95* Math.pow(value, 2) + 0.5 * value
    }
    console.log(starting_opportunity)

    var add_opportunity2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if(other_factor2 === "none") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + other_none[idx]
        });
    } else if (other_factor2 === "bullying") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + bullyed[idx]
        });
    } else if (other_factor2 === "switch-school") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + switch_school[idx]
        });
    }
    console.log("add opportunity after other factors")
    console.log(add_opportunity2)

    if (parental_involvement2 === "parent-neutral") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + parent_neutral[idx]
        });
    } else if (parental_involvement2 === "parent-high") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + parent_high[idx]
        });
    } else if (parental_involvement2 === "parent-negative") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + parent_low[idx]
        });
    }
    console.log("add opportunity after parental involvement")
    console.log(add_opportunity2)


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

    console.log("add opportunity after school type")
    console.log(add_opportunity2)
    
    
    const final_opportunity2 = starting_opportunity.map(function (num, idx) {
        return num + add_opportunity2[idx]
    });

    const final_score2 = final_opportunity2.map(convert_opportunity_to_score)
    function convert_opportunity_to_score(value) {
        return (Math.sqrt(76 * value + 5)) * 0.117688-0.263158
    }


    var add_opportunity1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if(other_factor1 === "none") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + other_none[idx]
        });
    } else if (other_factor1 === "bullying") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + bullyed[idx]
        });
    } else if (other_factor1 === "switch-school") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + switch_school[idx]
        });
    }
    console.log("add opportunity after other factors")
    console.log(add_opportunity1)

    if (parental_involvement1 === "parent-neutral") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + parent_neutral[idx]
        });
    } else if (parental_involvement1 === "parent-high") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + parent_high[idx]
        });
    } else if (parental_involvement1 === "parent-negative") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + parent_low[idx]
        });
    }
    console.log("add opportunity after parental involvement")
    console.log(add_opportunity1)

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
    
    
    const final_opportunity1 = starting_opportunity.map(function (num, idx) {
        return num + add_opportunity1[idx]
    });

    // console.log(final_opportunity)

    const final_score1 = final_opportunity1.map(convert_opportunity_to_score)
    function convert_opportunity_to_score(value) {
        return (Math.sqrt(76 * value + 5)) * 0.117688-0.263158
    }


    OUTPUT3 = document.getElementById('scenario-three-output');
    var original = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [starting_score[0], starting_score[1], starting_score[2], starting_score[3], starting_score[4], starting_score[5],
        starting_score[6], starting_score[7], starting_score[8], starting_score[9], starting_score[10], starting_score[11]],
        type: 'scatter',
        name: 'original'
      };

      var scenario_one = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [final_score1[0].toFixed(1), final_score1[1].toFixed(1), final_score1[2].toFixed(1), final_score1[3].toFixed(1), final_score1[4].toFixed(1), final_score1[5].toFixed(1),
        final_score1[6].toFixed(1), final_score1[7].toFixed(1), final_score1[8].toFixed(1), final_score1[9].toFixed(1), final_score1[10].toFixed(1), final_score1[11].toFixed(1)],
        type: 'scatter',
        name: 'scenario one'
      };
      
      var scenarion_two = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [final_score2[0].toFixed(1), final_score2[1].toFixed(1), final_score2[2].toFixed(1), final_score2[3].toFixed(1), final_score2[4].toFixed(1), final_score2[5].toFixed(1),
        final_score2[6].toFixed(1), final_score2[7].toFixed(1), final_score2[8].toFixed(1), final_score2[9].toFixed(1), final_score2[10].toFixed(1), final_score2[11].toFixed(1)],
        type: 'scatter',
        name: 'scenario two'
      };
      
      var data = [original, scenario_one, scenarion_two];
      
      Plotly.newPlot(OUTPUT3, data);
              
    
}

function calculate_output_score2() {

    
    let persona = document.getElementById("persona").value
    let school_type = document.getElementById("school-type2").value
    console.log(school_type)
    let parental_involvement = document.getElementById("parental-type2").value
    console.log(parental_involvement)
    let other_factor = document.getElementById("other-factor2").value
    console.log(other_factor)

    var starting_score = []
    if(persona === 'Anouchig') {
        starting_score = [1, 4, 4, 3, 2, 4, 2, 2, 2, 3, 2, 2]
    } else if (persona === 'LingLing') {
        starting_score = [2, 1, 3, 2, 2, 4, 3, 2, 2, 4, 3, 1]
    } else if (persona === 'Bof') {
        starting_score = [4, 5, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4]
    } else if (persona === 'Mignon') {
        starting_score = [1, 4, 1, 2, 3, 2, 1, 2, 4, 2, 4, 2]
    } else if (persona === 'Ramez') {
        starting_score = [0, 0, 1, 1, 0, 1, 2, 2, 2, 2, 1, 1]
    }

    console.log(starting_score)

    const starting_opportunity = starting_score.map(convert_score_to_opportunity)
    function convert_score_to_opportunity(value){
        return 0.95* Math.pow(value, 2) + 0.5 * value
    }
    console.log(starting_opportunity)

    var add_opportunity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if(other_factor === "none") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + other_none[idx]
        });
    } else if (other_factor === "bullying") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + bullyed[idx]
        });
    } else if (other_factor === "switch-school") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + switch_school[idx]
        });
    }
    console.log("add opportunity after other factors")
    console.log(add_opportunity)

    if (parental_involvement === "parent-neutral") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + parent_neutral[idx]
        });
    } else if (parental_involvement === "parent-high") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + parent_high[idx]
        });
    } else if (parental_involvement === "parent-negative") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + parent_low[idx]
        });
    }
    console.log("add opportunity after parental involvement")
    console.log(add_opportunity)


    if (school_type === "neutral") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + school_neutral[idx]
        });   
    } else if (school_type === "good-school") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + school_high[idx]
        });
    } else if (school_type === "bad-school") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + school_low[idx]
        });
    }

    console.log("add opportunity after school type")
    console.log(add_opportunity)
    
    
    const final_opportunity = starting_opportunity.map(function (num, idx) {
        return num + add_opportunity[idx]
    });

    const final_score = final_opportunity.map(convert_opportunity_to_score)
    function convert_opportunity_to_score(value) {
        return (Math.sqrt(76 * value + 5)) * 0.117688-0.263158
    }

    OUTPUT2 = document.getElementById('scenario-two-output');
    var original = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [starting_score[0], starting_score[1], starting_score[2], starting_score[3], starting_score[4], starting_score[5],
        starting_score[6], starting_score[7], starting_score[8], starting_score[9], starting_score[10], starting_score[11]],
        type: 'scatter',
        name: 'original'
        // y.update_yaxes(fixedrange=10)
      };
     
      
      var final = {
        x: ['creativity', 'critical-thinking', 'communication', 'collaboration', 'mindfulness', 'curiousity',
            'courage', 'resilience', 'ethics', 'leadership', 'metacognition', 'growth-mindset'],
        y: [final_score[0].toFixed(1), final_score[1].toFixed(1), final_score[2].toFixed(1), final_score[3].toFixed(1), final_score[4].toFixed(1), final_score[5].toFixed(1),
        final_score[6].toFixed(1), final_score[7].toFixed(1), final_score[8].toFixed(1), final_score[9].toFixed(1), final_score[10].toFixed(1), final_score[11].toFixed(1)],
        type: 'scatter',
        name: 'final'
      };
      
      var data = [original, final];
      
      Plotly.newPlot(OUTPUT2, data);
              
    
}