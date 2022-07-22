
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

const meta_data = [3.6, 5.04, 2.52, 1.08, 12, 4.68, 2.16, 4.68, 5.04, 2.16, 12, 12]
const character_data = [1.08, 0.864, 2.376, 3.456, 1.944, 7.2, 7.2, 7.2, 7.2, 7.2, 3.24, 1.296]
const skill_data = [9, 9, 9, 9, 0, 2.16, 1.35, 1.35, 1.62, 7.02, 2.7, 0]

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
    
    return result;
}

function calculate_final_score(param) {
    var result=[]

    for(var i = 0; i < param.length; i++) {
        result[i] =  ((Math.sqrt(76 * param[i] + 5)) * 0.117688-0.263158)
    }
    
    return result;
}

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }  
    var avg = total / arr.length;
   arr.forEach(function(value){
       if(value > max)
         max = value;
       if(value < min)
         min = value;
       
   })
  return [min.toFixed(1), max.toFixed(1), avg.toFixed(1)];
  }


function calculate_output_score() {
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

    let school_type = document.getElementById("school-type").value
    console.log(school_type)
    var add_opportunity1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if (school_type === "neutral") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + school_neutral[idx]
        });   
    } else if (school_type === "good-school") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + school_high[idx]
        });
    } else if (school_type === "bad-school") {
        add_opportunity1 = add_opportunity1.map(function (num, idx) {
            return num + school_low[idx]
        });
    }

    console.log("add_opportunity1 is:")
    console.log(add_opportunity1)

    var add_opportunity2 = add_opportunity1
    let intervention2 = document.getElementById("intervention2").value
    console.log('intervention2 is:', intervention2)


    if (intervention2 === "meta") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + meta_data[idx]
        });   
    } else if (intervention2 === "character") {
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + character_data[idx]
        });
    } else if (intervention2 === "skill") {
        console.log('come to add skill opportunity')
        add_opportunity2 = add_opportunity2.map(function (num, idx) {
            return num + skill_data[idx]
           
        });
    }

    console.log("add_opportunity2 is:")
    console.log(add_opportunity2)

    
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

    var final_creativity1 = [final_opportunity1[0], final_opportunity2[0], final_opportunity3[0], final_opportunity4[0],
    final_opportunity5[0], final_opportunity6[0], final_opportunity7[0], final_opportunity8[0], final_opportunity9[0],
    final_opportunity10[0], final_opportunity11[0], final_opportunity12[0], final_opportunity13[0], final_opportunity14[0],
    final_opportunity15[0], final_opportunity16[0], final_opportunity17[0], final_opportunity18[0], final_opportunity19[0],
    final_opportunity20[0], final_opportunity21[0]]

    min_max_avg_creativity1 = maxMinAvg(final_creativity1)
    console.log('min_max_avg_creativity1 is:.......', min_max_avg_creativity1)

    var final_critical_thinking1 = [final_opportunity1[1], final_opportunity2[1], final_opportunity3[1], final_opportunity4[1],
    final_opportunity5[1], final_opportunity6[1], final_opportunity7[1], final_opportunity8[1], final_opportunity9[1],
    final_opportunity10[1], final_opportunity11[1], final_opportunity12[1], final_opportunity13[1], final_opportunity14[1],
    final_opportunity15[1], final_opportunity16[1], final_opportunity17[1], final_opportunity18[1], final_opportunity19[1],
    final_opportunity20[1], final_opportunity21[1]]

    min_max_avg_critical_thinking1 = maxMinAvg(final_critical_thinking1)

    var final_communication1 = [final_opportunity1[2], final_opportunity2[2], final_opportunity3[2], final_opportunity4[2],
    final_opportunity5[2], final_opportunity6[2], final_opportunity7[2], final_opportunity8[2], final_opportunity9[2],
    final_opportunity10[2], final_opportunity11[2], final_opportunity12[2], final_opportunity13[2], final_opportunity14[2],
    final_opportunity15[2], final_opportunity16[2], final_opportunity17[2], final_opportunity18[2], final_opportunity19[2],
    final_opportunity20[2], final_opportunity21[2]]

    min_max_avg_communication1 = maxMinAvg(final_communication1)

    var final_collaboration1 = [final_opportunity1[3], final_opportunity2[3], final_opportunity3[3], final_opportunity4[3],
    final_opportunity5[3], final_opportunity6[3], final_opportunity7[3], final_opportunity8[3], final_opportunity9[3],
    final_opportunity10[3], final_opportunity11[3], final_opportunity12[3], final_opportunity13[3], final_opportunity14[3],
    final_opportunity15[3], final_opportunity16[3], final_opportunity17[3], final_opportunity18[3], final_opportunity19[3],
    final_opportunity20[3], final_opportunity21[3]]

    min_max_avg_collaboration1 = maxMinAvg(final_collaboration1)

    var final_mindfulness1 = [final_opportunity1[4], final_opportunity2[4], final_opportunity3[4], final_opportunity4[4],
    final_opportunity5[4], final_opportunity6[4], final_opportunity7[4], final_opportunity8[4], final_opportunity9[4],
    final_opportunity10[4], final_opportunity11[4], final_opportunity12[4], final_opportunity13[4], final_opportunity14[4],
    final_opportunity15[4], final_opportunity16[4], final_opportunity17[4], final_opportunity18[4], final_opportunity19[4],
    final_opportunity20[4], final_opportunity21[4]]

    min_max_avg_mindfulness1 = maxMinAvg(final_mindfulness1)

    var final_curiousity1 = [final_opportunity1[5], final_opportunity2[5], final_opportunity3[5], final_opportunity4[5],
    final_opportunity5[5], final_opportunity6[5], final_opportunity7[5], final_opportunity8[5], final_opportunity9[5],
    final_opportunity10[5], final_opportunity11[5], final_opportunity12[5], final_opportunity13[5], final_opportunity14[5],
    final_opportunity15[5], final_opportunity16[5], final_opportunity17[5], final_opportunity18[5], final_opportunity19[5],
    final_opportunity20[5], final_opportunity21[5]]

    min_max_avg_curiousity1 = maxMinAvg(final_curiousity1)

    var final_courage1 = [final_opportunity1[6], final_opportunity2[6], final_opportunity3[6], final_opportunity4[6],
    final_opportunity5[6], final_opportunity6[6], final_opportunity7[6], final_opportunity8[6], final_opportunity9[6],
    final_opportunity10[6], final_opportunity11[6], final_opportunity12[6], final_opportunity13[6], final_opportunity14[6],
    final_opportunity15[6], final_opportunity16[6], final_opportunity17[6], final_opportunity18[6], final_opportunity19[6],
    final_opportunity20[6], final_opportunity21[6]]

    min_max_avg_courage1= maxMinAvg(final_courage1)
    console.log('min_max_avg_courage1 is:.......', min_max_avg_courage1)

    var final_resilience1 = [final_opportunity1[7], final_opportunity2[7], final_opportunity3[7], final_opportunity4[7],
    final_opportunity5[7], final_opportunity6[7], final_opportunity7[7], final_opportunity8[7], final_opportunity9[7],
    final_opportunity10[7], final_opportunity11[7], final_opportunity12[7], final_opportunity13[7], final_opportunity14[7],
    final_opportunity15[7], final_opportunity16[7], final_opportunity17[7], final_opportunity18[7], final_opportunity19[7],
    final_opportunity20[7], final_opportunity21[7]]

    min_max_avg_resilience1= maxMinAvg(final_resilience1)
  
    var final_ethics1 = [final_opportunity1[8], final_opportunity2[8], final_opportunity3[8], final_opportunity4[8],
    final_opportunity5[8], final_opportunity6[8], final_opportunity7[8], final_opportunity8[8], final_opportunity9[8],
    final_opportunity10[8], final_opportunity11[8], final_opportunity12[8], final_opportunity13[8], final_opportunity14[8],
    final_opportunity15[8], final_opportunity16[8], final_opportunity17[8], final_opportunity18[8], final_opportunity19[8],
    final_opportunity20[8], final_opportunity21[8]]

    min_max_avg_ethics1 = maxMinAvg(final_ethics1)

    var final_leadership1 = [final_opportunity1[9], final_opportunity2[9], final_opportunity3[9], final_opportunity4[9],
    final_opportunity5[9], final_opportunity6[9], final_opportunity7[9], final_opportunity8[9], final_opportunity9[9],
    final_opportunity10[9], final_opportunity11[9], final_opportunity12[9], final_opportunity13[9], final_opportunity14[9],
    final_opportunity15[9], final_opportunity16[9], final_opportunity17[9], final_opportunity18[9], final_opportunity19[9],
    final_opportunity20[9], final_opportunity21[9]]

    min_max_avg_leadership1 = maxMinAvg(final_leadership1)

    var final_metacognition1 = [final_opportunity1[10], final_opportunity2[10], final_opportunity3[10], final_opportunity4[10],
    final_opportunity5[10], final_opportunity6[10], final_opportunity7[10], final_opportunity8[10], final_opportunity9[10],
    final_opportunity10[10], final_opportunity11[10], final_opportunity12[10], final_opportunity13[10], final_opportunity14[10],
    final_opportunity15[10], final_opportunity16[10], final_opportunity17[10], final_opportunity18[10], final_opportunity19[10],
    final_opportunity20[10], final_opportunity21[10]]

    min_max_avg_metacognition1 = maxMinAvg(final_metacognition1)

    var final_growth_mindset1 = [final_opportunity1[11], final_opportunity2[11], final_opportunity3[11], final_opportunity4[11],
    final_opportunity5[11], final_opportunity6[11], final_opportunity7[11], final_opportunity8[11], final_opportunity9[11],
    final_opportunity10[11], final_opportunity11[11], final_opportunity12[11], final_opportunity13[11], final_opportunity14[11],
    final_opportunity15[11], final_opportunity16[11], final_opportunity17[11], final_opportunity18[11], final_opportunity19[11],
    final_opportunity20[11], final_opportunity21[11]]

    min_max_avg_growth_mindset1 = maxMinAvg(final_growth_mindset1)

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

    var final_creativity2 = [f_opportunity1[0], f_opportunity2[0], f_opportunity3[0], f_opportunity4[0],
    f_opportunity5[0], f_opportunity6[0], f_opportunity7[0], f_opportunity8[0], f_opportunity9[0],
    f_opportunity10[0], f_opportunity11[0], f_opportunity12[0], f_opportunity13[0], f_opportunity14[0],
    f_opportunity15[0], f_opportunity16[0], f_opportunity17[0], f_opportunity18[0], f_opportunity19[0],
    f_opportunity20[0], f_opportunity21[0]]

    min_max_avg_creativity2 = maxMinAvg(final_creativity2)

    var final_critical_thinking2 = [f_opportunity1[1], f_opportunity2[1], f_opportunity3[1], f_opportunity4[1],
    f_opportunity5[1], f_opportunity6[1], f_opportunity7[1], f_opportunity8[1], f_opportunity9[1],
    f_opportunity10[1], f_opportunity11[1], f_opportunity12[1], f_opportunity13[1], f_opportunity14[1],
    f_opportunity15[1], f_opportunity16[1], f_opportunity17[1], f_opportunity18[1], f_opportunity19[1],
    f_opportunity20[1], f_opportunity21[1]]

    min_max_avg_critical_thinking2 = maxMinAvg(final_critical_thinking2)

    var final_communication2 = [f_opportunity1[2], f_opportunity2[2], f_opportunity3[2], f_opportunity4[2],
    f_opportunity5[2], f_opportunity6[2], f_opportunity7[2], f_opportunity8[2], f_opportunity9[2],
    f_opportunity10[2], f_opportunity11[2], f_opportunity12[2], f_opportunity13[2], f_opportunity14[2],
    f_opportunity15[2], f_opportunity16[2], f_opportunity17[2], f_opportunity18[2], f_opportunity19[2],
    f_opportunity20[2], f_opportunity21[2]]

    min_max_avg_communication2 = maxMinAvg(final_communication2)

    var final_collaboration2 = [f_opportunity1[3], f_opportunity2[3], f_opportunity3[3], f_opportunity4[3],
    f_opportunity5[3], f_opportunity6[3], f_opportunity7[3], f_opportunity8[3], f_opportunity9[3],
    f_opportunity10[3], f_opportunity11[3], f_opportunity12[3], f_opportunity13[3], f_opportunity14[3],
    f_opportunity15[3], f_opportunity16[3], f_opportunity17[3], f_opportunity18[3], f_opportunity19[3],
    f_opportunity20[3], f_opportunity21[3]]

    min_max_avg_collaboration2 = maxMinAvg(final_collaboration2)

    var final_mindfulness2 = [f_opportunity1[4], f_opportunity2[4], f_opportunity3[4], f_opportunity4[4],
    f_opportunity5[4], f_opportunity6[4], f_opportunity7[4], f_opportunity8[4], f_opportunity9[4],
    f_opportunity10[4], f_opportunity11[4], f_opportunity12[4], f_opportunity13[4], f_opportunity14[4],
    f_opportunity15[4], f_opportunity16[4], f_opportunity17[4], f_opportunity18[4], f_opportunity19[4],
    f_opportunity20[4], f_opportunity21[4]]

    min_max_avg_mindfulness2 = maxMinAvg(final_mindfulness2)

    var final_curiousity2 = [f_opportunity1[5], f_opportunity2[5], f_opportunity3[5], f_opportunity4[5],
    f_opportunity5[5], f_opportunity6[5], f_opportunity7[5], f_opportunity8[5], f_opportunity9[5],
    f_opportunity10[5], f_opportunity11[5], f_opportunity12[5], f_opportunity13[5], f_opportunity14[5],
    f_opportunity15[5], f_opportunity16[5], f_opportunity17[5], f_opportunity18[5], f_opportunity19[5],
    f_opportunity20[5], f_opportunity21[5]]

    min_max_avg_curiousity2 = maxMinAvg(final_curiousity2)

    var final_courage2 = [f_opportunity1[6], f_opportunity2[6], f_opportunity3[6], f_opportunity4[6],
    f_opportunity5[6], f_opportunity6[6], f_opportunity7[6], f_opportunity8[6], f_opportunity9[6],
    f_opportunity10[6], f_opportunity11[6], f_opportunity12[6], f_opportunity13[6], f_opportunity14[6],
    f_opportunity15[6], f_opportunity16[6], f_opportunity17[6], f_opportunity18[6], f_opportunity19[6],
    f_opportunity20[6], f_opportunity21[6]]

    min_max_avg_courage2 = maxMinAvg(final_courage2)

    var final_resilience2 = [f_opportunity1[7], f_opportunity2[7], f_opportunity3[7], f_opportunity4[7],
    f_opportunity5[7], f_opportunity6[7], f_opportunity7[7], f_opportunity8[7], f_opportunity9[7],
    f_opportunity10[7], f_opportunity11[7], f_opportunity12[7], f_opportunity13[7], f_opportunity14[7],
    f_opportunity15[7], f_opportunity16[7], f_opportunity17[7], f_opportunity18[7], f_opportunity19[7],
    f_opportunity20[7], f_opportunity21[7]]

    min_max_avg_resilience2= maxMinAvg(final_resilience2)

    var final_ethics2 = [f_opportunity1[8], f_opportunity2[8], f_opportunity3[8], f_opportunity4[8],
    f_opportunity5[8], f_opportunity6[8], f_opportunity7[8], f_opportunity8[8], f_opportunity9[8],
    f_opportunity10[8], f_opportunity11[8], f_opportunity12[8], f_opportunity13[8], f_opportunity14[8],
    f_opportunity15[8], f_opportunity16[8], f_opportunity17[8], f_opportunity18[8], f_opportunity19[8],
    f_opportunity20[8], f_opportunity21[8]]

    min_max_avg_ethics2 = maxMinAvg(final_ethics2)

    var final_leadership2 = [f_opportunity1[9], f_opportunity2[9], f_opportunity3[9], f_opportunity4[9],
    f_opportunity5[9], f_opportunity6[9], f_opportunity7[9], f_opportunity8[9], f_opportunity9[9],
    f_opportunity10[9], f_opportunity11[9], f_opportunity12[9], f_opportunity13[9], f_opportunity14[9],
    f_opportunity15[9], f_opportunity16[9], f_opportunity17[9], f_opportunity18[9], f_opportunity19[9],
    f_opportunity20[9], f_opportunity21[9]]

    min_max_avg_leadership2 = maxMinAvg(final_leadership2)

    var final_metacognition2 = [f_opportunity1[10], f_opportunity2[10], f_opportunity3[10], f_opportunity4[10],
    f_opportunity5[10], f_opportunity6[10], f_opportunity7[10], f_opportunity8[10], f_opportunity9[10],
    f_opportunity10[10], f_opportunity11[10], f_opportunity12[10], f_opportunity13[10], f_opportunity14[10],
    f_opportunity15[10], f_opportunity16[10], f_opportunity17[10], f_opportunity18[10], f_opportunity19[10],
    f_opportunity20[10], f_opportunity21[10]]

    min_max_avg_metacognition2 = maxMinAvg(final_metacognition2)

    var final_growth_mindset2 = [f_opportunity1[11], f_opportunity2[11], f_opportunity3[11], f_opportunity4[11],
    f_opportunity5[11], f_opportunity6[11], f_opportunity7[11], f_opportunity8[11], f_opportunity9[11],
    f_opportunity10[11], f_opportunity11[11], f_opportunity12[11], f_opportunity13[11], f_opportunity14[11],
    f_opportunity15[11], f_opportunity16[11], f_opportunity17[11], f_opportunity18[11], f_opportunity19[11],
    f_opportunity20[11], f_opportunity21[11]]

    min_max_avg_growth_mindset2 = maxMinAvg(final_growth_mindset2)


    OUTPUT1 = document.getElementById('scenario-one-output1');
    OUTPUT2 = document.getElementById('scenario-one-output2');
    OUTPUT3 = document.getElementById('scenario-one-output3');

    var creativity_diff1 = (min_max_avg_creativity1[1] - min_max_avg_creativity1[0] - min_max_avg_creativity1[2])/2
    var creativity_diff2 = (min_max_avg_creativity2[1] - min_max_avg_creativity2[0] - min_max_avg_creativity2[2])/2

    var critical_thinking_diff1 = (min_max_avg_critical_thinking1[1] - min_max_avg_critical_thinking1[0] - min_max_avg_critical_thinking1[2])/2
    var critical_thinking_diff2 = (min_max_avg_critical_thinking2[1] - min_max_avg_critical_thinking2[0] - min_max_avg_critical_thinking2[2])/2

    var communication_diff1 = (min_max_avg_communication1[1] - min_max_avg_communication1[0] - min_max_avg_communication1[2])/2
    var communication_diff2 = (min_max_avg_communication2[1] - min_max_avg_communication2[0] - min_max_avg_communication2[2])/2

    var collaboration_diff1 = (min_max_avg_collaboration1[1] - min_max_avg_collaboration1[0] - min_max_avg_collaboration1[2])/2
    var collaboration_diff2 = (min_max_avg_collaboration2[1] - min_max_avg_collaboration2[0] - min_max_avg_collaboration2[2])/2


      var trace1 = {
        x: ['Creativity', 'Critical-thinking', 'Communication', 'Collaboration'],
        y: [min_max_avg_creativity1[2],min_max_avg_critical_thinking1[2], min_max_avg_communication1[2], min_max_avg_collaboration1[2]],
        name: 'Without Intervention',
        error_y: {
          type: 'data',
          array: [creativity_diff1, critical_thinking_diff1, communication_diff1, collaboration_diff1],
          visible: true
        },
        type: 'bar',
        marker: {
          color: 'rgb(191,191,191)'
        }
      };

      var trace2 = {
        x: ['Creativity', 'Critical-thinking', 'Communication', 'Collaboration'],
        y: [min_max_avg_creativity2[2],min_max_avg_critical_thinking2[2], min_max_avg_communication2[2], min_max_avg_collaboration2[2]],
        name: 'With Intervention',
        error_y: {
          type: 'data',
          array: [creativity_diff2, critical_thinking_diff2, communication_diff2, collaboration_diff2],
          visible: true
        },
        type: 'bar',
        marker: {
          color: 'rgb(46,204,113)'
        }
      };

      var layout = {
        title:'Skill Prediction',
        barmode: 'group',
        paper_bgcolor: 'rgb(254, 247, 234)',
        yaxis: {
          title: 'Opportunity score',
          range: [0, 80],
        },
        xaxis:{
          title: 'Competencies',
        }
      };
      var data0 = [trace1, trace2];
      Plotly.newPlot(OUTPUT1, data0, layout);

      
    var mindfullness_diff1 = (min_max_avg_mindfulness1[1] - min_max_avg_mindfulness1[0] - min_max_avg_mindfulness1[2])/2
    var mindfullness_diff2 = (min_max_avg_mindfulness2[1] - min_max_avg_mindfulness2[0] - min_max_avg_mindfulness2[2])/2

    var curiousity_diff1 = (min_max_avg_curiousity1[1] - min_max_avg_curiousity1[0] - min_max_avg_curiousity1[2])/2
    var curiousity_diff2 = (min_max_avg_curiousity2[1] - min_max_avg_curiousity2[0] - min_max_avg_curiousity2[2])/2

    var courage_diff1 = (min_max_avg_courage1[1] - min_max_avg_courage1[0] - min_max_avg_courage1[2])/2
    var courage_diff2 = (min_max_avg_courage2[1] - min_max_avg_courage2[0] - min_max_avg_courage2[2])/2

    var resilience_diff1 = (min_max_avg_resilience1[1] - min_max_avg_resilience1[0] - min_max_avg_resilience1[2])/2
    var resilience_diff2 = (min_max_avg_resilience2[1] - min_max_avg_resilience2[0] - min_max_avg_resilience2[2])/2

    var ethics_diff1 = (min_max_avg_ethics1[1] - min_max_avg_ethics1[0] - min_max_avg_ethics1[2])/2
    var ethics_diff2 = (min_max_avg_ethics2[1] - min_max_avg_ethics2[0] - min_max_avg_ethics2[2])/2

    var leadership_diff1 = (min_max_avg_leadership1[1] - min_max_avg_leadership1[0] - min_max_avg_leadership1[2])/2
    var leadership_diff2 = (min_max_avg_leadership2[1] - min_max_avg_leadership2[0] - min_max_avg_leadership2[2])/2

      var trace3 = {
        x: ['Mindfullness', 'Curiousity', 'Courage', 'Resilience', 'Ethics', 'Leadership'],
        y: [min_max_avg_mindfulness1[2], min_max_avg_curiousity1[2], min_max_avg_courage1[2], min_max_avg_resilience1[2],
        min_max_avg_ethics1[2], min_max_avg_leadership1[2]],
        name: 'Without Intervention',
        error_y: {
          type: 'data',
          array: [mindfullness_diff1, curiousity_diff1, courage_diff1, resilience_diff1, ethics_diff1, leadership_diff1],
          visible: true
        },
        type: 'bar',
        marker: {
          color: 'rgb(191,191,191)'
        }
      };

      var trace4 = {
        x: ['Mindfullness', 'Curiousity', 'Courage', 'Resilience', 'Ethics', 'Leadership'],
        y: [min_max_avg_mindfulness2[2], min_max_avg_curiousity2[2], min_max_avg_courage2[2], min_max_avg_resilience2[2],
        min_max_avg_ethics2[2], min_max_avg_leadership2[2]],
        name: 'With Intervention',
        error_y: {
          type: 'data',
          array: [mindfullness_diff2, curiousity_diff2, courage_diff2, resilience_diff2, ethics_diff2, leadership_diff2],
          visible: true
        },
        type: 'bar',
        marker: {
          color: 'rgb(46,204,113)'
        }
      };

      var layout = {
        title:'Character Prediction',
        barmode: 'group',
        paper_bgcolor: 'rgb(254, 247, 234)',
        yaxis: {
          title: 'Opportunity score',
          range: [0, 80],
        },
        xaxis:{
          title: 'Competencies',
        }
      };
      var data1 = [trace3, trace4];
      Plotly.newPlot(OUTPUT2, data1, layout);

    var metacognition_diff1 = (min_max_avg_metacognition1[1] - min_max_avg_metacognition1[0] - min_max_avg_metacognition1[2])/2
    var metacognition_diff2 = (min_max_avg_metacognition2[1] - min_max_avg_metacognition2[0] - min_max_avg_metacognition2[2])/2

    var growth_mindset_diff1 = (min_max_avg_growth_mindset1[1] - min_max_avg_growth_mindset1[0] - min_max_avg_growth_mindset1[2])/2
    var growth_mindset_diff2 = (min_max_avg_growth_mindset2[1] - min_max_avg_growth_mindset2[0] - min_max_avg_growth_mindset2[2])/2


      var trace5 = {
        x: [ 'Metacognition', 'Growth-mindset'],
        y: [min_max_avg_metacognition1[2], min_max_avg_growth_mindset1[2]],
        name: 'Without Intervention',
        error_y: {
          type: 'data',
          array: [metacognition_diff1, growth_mindset_diff1],
          visible: true
        },
        type: 'bar',
        marker: {
          color: 'rgb(191,191,191)'
        }
      };

      var trace6 = {
        x: ['Metacognition', 'Growth-mindset'],
        y: [min_max_avg_metacognition2[2], min_max_avg_growth_mindset2[2]],
        name: 'With Intervention',
        error_y: {
          type: 'data',
          array: [metacognition_diff2, growth_mindset_diff2],
          visible: true
        },
        type: 'bar',
        marker: {
          color: 'rgb(46,204,113)'
        }
      };

      var layout = {
        title:'Meta-Learning Prediction',
        barmode: 'group',
        paper_bgcolor: 'rgb(254, 247, 234)',
        yaxis: {
          title: 'Opportunity score',
          range: [0, 80],
        },
        xaxis:{
          title: 'Competencies',
        }
      };
      var data2 = [trace5, trace6];
      Plotly.newPlot(OUTPUT3, data2, layout);
    
}

