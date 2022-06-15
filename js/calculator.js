function calculate_output_score() {
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

    let character = document.getElementById("characters").value
    console.log(character)
    let school_type = document.getElementById("school-type").value
    console.log(school_type)
    let parental_involvement = document.getElementById("parental-type").value
    console.log(parental_involvement)
    let theory_of_mind = document.getElementById("theory-of-mind").value
    console.log(theory_of_mind)
    let other_factor = document.getElementById("other-factor").value
    console.log(other_factor)

    const starting_score = [creativity, critical_thinking, communication, collaboration, mindfulness, curiousity, courage,
                            resilience, ethics, leadership, metacognition, growth_mindset]
    console.log(starting_score)

    const character_none = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const character_extraversion = [0, 0, 7.4, 7.4, -7.4, 0, 0, 0, 0, 7.4, 0, 0]
    const character_openness = [7.4, 7.4, 7.4, 0, -7.4, 0, 0, 0, 0, 0, 0, 0]
    const character_conscientiousness = [-7.4, 0, 0, 0, 7.4, 0, 0, 0, 0, -7.4, 7.4, 7.4]
    const character_neuroticism = [0, 0, 0, 0, -7.4, 0, 0, -7.4, 0, 0, -7.4, -7.4]
    const character_agreeableness = [-7.4, -7.4, 0, 7.4, 0, 0, 0, 0, 7.4, 0, 0, 0]

    const school_neutral = [15.5, 19.63, 18.8, 18.8, 18.5, 17.83, 18.13, 18.35, 17.45, 19.25, 19.7, 17.6]
    const school_low = [10.33, 13.08, 12.53, 12.53, 12.33, 11.88, 12.08, 12.23, 11.63, 12.83, 13.13, 11.73]
    const school_high = [31, 39.25, 37.6, 37.6, 37, 35.65, 36.25, 36.7, 34.9, 38.5, 39.4, 35.2]

    const parent_neutral =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const parent_low =[-9.6, -9.6, -9.6, -9.6, -9.6, -9.6, -9.6, 4.8, 0, -9.6, -9.6, -9.6]
    const parent_high =[7.4, 7.4, 7.4, 7.4, 7.4, 7.4, 7.4, -7.4, 7.4, 7.4, 19.2, 19.2]

    const resillience_none =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const resillience_low = [-3.7, -3.7, -3.7, -3.7, -3.7, -3.7, -3.7, -14.8, -3.7, -3.7, -7.4, -7.4]
    const resillience_high = [3.7, 7.4, 3.7, 3.7, 7.4, 3.7, 3.7, 3.7, 3.7, 3.7, 14.8, 3.7]

    const other_none = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const bullyed = [-3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3]
    const switch_school = [-2.4, -2.4, -2.4, -2.4, -2.4, -2.4, -13.2, -13.2, -2.4, -2.4, -2.4, -13.2]
    
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


    if(theory_of_mind === "none") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + resillience_none[idx]
        });
    } else if (theory_of_mind === "high-resillience") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + resillience_high[idx]
        });
    } else if (theory_of_mind === "low-resillience") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + resillience_low[idx]
        });
    }
    console.log("add opportunity after resillience")
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

    if (character === "none") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + character_none[idx]
        });
    } else if (character === "openness") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + character_openness[idx]
        });
    } else if (character === "extraversion") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + character_extraversion[idx]
        });
    } else if (character === "conscientiousness") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + character_conscientiousness[idx]
        });
    } else if (character === "agreeableness") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + character_agreeableness[idx]
        });
    } else if (character === "neuroticism") {
        add_opportunity = add_opportunity.map(function (num, idx) {
            return num + character_neuroticism[idx]
        });
    }
    console.log("add opportunity after character")
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

    // console.log(final_opportunity)

    const final_score = final_opportunity.map(convert_opportunity_to_score)
    function convert_opportunity_to_score(value) {
        return (Math.sqrt(76 * value + 5)) * 0.117688-0.263158
    }

    console.log(final_score)
    document.getElementById("output_creativity").value = final_score[0].toFixed(2)
    document.getElementById("output-critical-thinking").value = final_score[1].toFixed(2)
    document.getElementById("output-communication").value = final_score[2].toFixed(2)
    document.getElementById("output-collaboration").value = final_score[3].toFixed(2)
    document.getElementById("output-mindfulness").value = final_score[4].toFixed(2)
    document.getElementById("output-curiousity").value = final_score[5].toFixed(2)
    document.getElementById("output-courage").value = final_score[6].toFixed(2)
    document.getElementById("output-resilience").value = final_score[7].toFixed(2)
    document.getElementById("output-ethics").value = final_score[8].toFixed(2)
    document.getElementById("output-leadership").value = final_score[9].toFixed(2)
    document.getElementById("output-metacognition").value = final_score[10].toFixed(2)
    document.getElementById("output-growth-mindset").value = final_score[11].toFixed(2)   
    
}