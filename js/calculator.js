
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
    // console.log("the final opportunities are: ")
    // console.log(result)
    
    return result;
}

function calculate_final_score(param) {
    var result=[]

    for(var i = 0; i < param.length; i++) {
        result[i] =  ((Math.sqrt(76 * param[i] + 5)) * 0.117688-0.263158)
    }
    // console.log("the final scores are: ")
    // console.log(result)

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
  return [min, max, avg];
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
    console.log('final1 is:', final1)
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
    console.log('f1 is:', f1)
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

    var creativity0 = [original_1[0], original_2[0], original_3[0],original_4[0],original_5[0],original_6[0],original_7[0],original_8[0],original_9[0],original_10[0],original_11[0],original_12[0]]
    var min_max_avg_creativity0 = maxMinAvg(creativity0)
    var critical_thinking0 = [original_1[1], original_2[1], original_3[1],original_4[1],original_5[1],original_6[1],original_7[1],original_8[1],original_9[1],original_10[1],original_11[1],original_12[1]]
    var min_max_avg_critical_thinking0 = maxMinAvg(critical_thinking0)
    var communication0 = [original_1[2], original_2[2], original_3[2],original_4[2],original_5[2],original_6[2],original_7[2],original_8[2],original_9[2],original_10[2],original_11[2],original_12[2]]
    var min_max_avg_communication0 = maxMinAvg(communication0)
    var collaboration0 = [original_1[3], original_2[3], original_3[3],original_4[3],original_5[3],original_6[3],original_7[3],original_8[3],original_9[3],original_10[3],original_11[3],original_12[3]]
    var min_max_avg_collaboration0 = maxMinAvg(collaboration0)
    var mindfulness0 = [original_1[4], original_2[4], original_3[4],original_4[4],original_5[4],original_6[4],original_7[4],original_8[4],original_9[4],original_10[4],original_11[4],original_12[4]]
    var min_max_avg_mindfulness0 = maxMinAvg(mindfulness0)
    var curiousity0 = [original_1[5], original_2[5], original_3[5],original_4[5],original_5[5],original_6[5],original_7[5],original_8[5],original_9[5],original_10[5],original_11[5],original_12[5]]
    var min_max_avg_curiousity0 = maxMinAvg(curiousity0)
    var courage0 = [original_1[6], original_2[6], original_3[6],original_4[6],original_5[6],original_6[6],original_7[6],original_8[6],original_9[6],original_10[6],original_11[6],original_12[6]]
    var min_max_avg_courage0 = maxMinAvg(courage0)
    var resilience0 = [original_1[7], original_2[7], original_3[7],original_4[7],original_5[7],original_6[7],original_7[7],original_8[7],original_9[7],original_10[7],original_11[7],original_12[7]]
    var min_max_avg_resilience0 = maxMinAvg(resilience0)
    var ethics0 = [original_1[8], original_2[8], original_3[8],original_4[8],original_5[8],original_6[8],original_7[8],original_8[8],original_9[8],original_10[8],original_11[8],original_12[8]]
    var min_max_avg_ethics0 = maxMinAvg(ethics0)
    var leadership0 = [original_1[9], original_2[9], original_3[9],original_4[9],original_5[9],original_6[9],original_7[9],original_8[9],original_9[9],original_10[9],original_11[9],original_12[9]]
    var min_max_avg_leadership0 = maxMinAvg(leadership0)
    var metacognition0 = [original_1[10], original_2[10], original_3[10],original_4[10],original_5[10],original_6[10],original_7[10],original_8[10],original_9[10],original_10[10],original_11[10],original_12[10]]
    var min_max_avg_metacognition0 = maxMinAvg(metacognition0)
    var growth_mindset0 = [original_1[11], original_2[11], original_3[11],original_4[11],original_5[11],original_6[11],original_7[11],original_8[11],original_9[11],original_10[11],original_11[11],original_12[11]]
    var min_max_avg_growth_mindset0 = maxMinAvg(growth_mindset0)

    var creativity1 = [final1[0],final2[0], final3[0],final4[0],final5[0],final6[0],final7[0],final8[0],final9[0],final10[0],final11[0],final12[0]]
    var min_max_avg_creativity1 = maxMinAvg(creativity1)
    var critical_thinking1 = [final1[1],final2[1], final3[1],final4[1],final5[1],final6[1],final7[1],final8[1],final9[1],final10[1],final11[1],final12[1]]
    var min_max_avg_critical_thinking1 = maxMinAvg(critical_thinking1)
    var communication1 = [final1[2],final2[2], final3[2],final4[2],final5[2],final6[2],final7[2],final8[2],final9[2],final10[2],final11[2],final12[2]]
    var min_max_avg_communication1 = maxMinAvg(communication1)
    

    var collaboration1 = [final1[3],final2[3], final3[3],final4[3],final5[3],final6[3],final7[3],final8[3],final9[3],final10[3],final11[3],final12[3]]
    var min_max_avg_collaboration1 = maxMinAvg(collaboration1)
    var mindfulness1 = [final1[4],final2[4], final3[4],final4[4],final5[4],final6[4],final7[4],final8[4],final9[4],final10[4],final11[4],final12[4]]
    var min_max_avg_mindfulness1 = maxMinAvg(mindfulness1)
    var curiousity1 = [final1[5],final2[5], final3[5],final4[5],final5[5],final6[5],final7[5],final8[5],final9[5],final10[5],final11[5],final12[5]]
    var min_max_avg_curiousity1 = maxMinAvg(curiousity1)
    var courage1 = [final1[6],final2[6], final3[6],final4[6],final5[6],final6[6],final7[6],final8[6],final9[6],final10[6],final11[6],final12[6]]
    var min_max_avg_courage1 = maxMinAvg(courage1)
    var resilience1 = [final1[7],final2[7], final3[7],final4[7],final5[7],final6[7],final7[7],final8[7],final9[7],final10[7],final11[7],final12[7]]
    var min_max_avg_resilience1 = maxMinAvg(resilience1)
    var ethics1 = [final1[8],final2[8], final3[8],final4[8],final5[8],final6[8],final7[8],final8[8],final9[8],final10[8],final11[8],final12[8]]
    var min_max_avg_ethics1 = maxMinAvg(ethics1)
    var leadership1 = [final1[9],final2[9], final3[9],final4[9],final5[9],final6[9],final7[9],final8[9],final9[9],final10[9],final11[9],final12[9]]
    var min_max_avg_leadership1 = maxMinAvg(leadership1)
    var metacognition1 = [final1[10],final2[10], final3[10],final4[10],final5[10],final6[10],final7[10],final8[10],final9[10],final10[10],final11[10],final12[10]]
    var min_max_avg_metacognition1 = maxMinAvg(metacognition1)
    var growth_mindset1 = [final1[11],final2[11], final3[11],final4[11],final5[11],final6[11],final7[11],final8[11],final9[11],final10[11],final11[11],final12[11]]
    var min_max_avg_growth_mindset1 = maxMinAvg(growth_mindset1)

    var creativity2 = [f1[0],f2[0], f3[0],f4[0],f5[0],f6[0],f7[0],f8[0],f9[0],f10[0],f11[0],f12[0]]
    var min_max_avg_creativity2 = maxMinAvg(creativity2)
    var critical_thinking2 = [f1[1],f2[1], f3[1],f4[1],f5[1],f6[1],f7[1],f8[1],f9[1],f10[1],f11[1],f12[1]]
    var min_max_avg_critical_thinking2 = maxMinAvg(critical_thinking2)
    var communication2 = [f1[2],f2[2], f3[2],f4[2],f5[2],f6[2],f7[2],f8[2],f9[2],f10[2],f11[2],f12[2]]
    var min_max_avg_communication2 = maxMinAvg(communication2)
    var collaboration2 = [f1[3],f2[3], f3[3],f4[3],f5[3],f6[3],f7[3],f8[3],f9[3],f10[3],f11[3],f12[3]]
    var min_max_avg_collaboration2 = maxMinAvg(collaboration2)
    var mindfulness2 = [f1[4],f2[4], f3[4],f4[4],f5[4],f6[4],f7[4],f8[4],f9[4],f10[4],f11[4],f12[4]]
    var min_max_avg_mindfulness2 = maxMinAvg(mindfulness2)
    var curiousity2 = [f1[5],f2[5], f3[5],f4[5],f5[5],f6[5],f7[5],f8[5],f9[5],f10[5],f11[5],f12[5]]
    var min_max_avg_curiousity2 = maxMinAvg(curiousity2)
    var courage2 = [f1[6],f2[6], f3[6],f4[6],f5[6],f6[6],f7[6],f8[6],f9[6],f10[6],f11[6],f12[6]]
    var min_max_avg_courage2 = maxMinAvg(courage2)
    var resilience2 = [f1[7],f2[7], f3[7],f4[7],f5[7],f6[7],f7[7],f8[7],f9[7],f10[7],f11[7],f12[7]]
    var min_max_avg_resilience2 = maxMinAvg(resilience2)
    var ethics2 = [f1[8],f2[8], f3[8],f4[8],f5[8],f6[8],f7[8],f8[8],f9[8],f10[8],f11[8],f12[8]]
    var min_max_avg_ethics2 = maxMinAvg(ethics2)
    var leadership2 = [f1[9],f2[9], f3[9],f4[9],f5[9],f6[9],f7[9],f8[9],f9[9],f10[9],f11[9],f12[9]]
    var min_max_avg_leadership2 = maxMinAvg(leadership2)
    var metacognition2 = [f1[10],f2[10], f3[10],f4[10],f5[10],f6[10],f7[10],f8[10],f9[10],f10[10],f11[10],f12[10]]
    var min_max_avg_metacognition2 = maxMinAvg(metacognition2)
    var growth_mindset2 = [f1[11],f2[11], f3[11],f4[11],f5[11],f6[11],f7[11],f8[11],f9[11],f10[11],f11[11],f12[11]]
    var min_max_avg_growth_mindset2 = maxMinAvg(growth_mindset2)


    OUTPUT1 = document.getElementById('scenario-one-output1');
    OUTPUT2 = document.getElementById('scenario-one-output2');
    OUTPUT3 = document.getElementById('scenario-one-output3');

    var trace1 = {
        x: ['Creativity', 'Critical-thinking', 'Communication', 'Collaboration'],
        y: [min_max_avg_creativity0[2], min_max_avg_critical_thinking0[2], min_max_avg_communication0[2], min_max_avg_collaboration0[2]],
        name: 'Original',
        error_y: {
          type: 'data',
          array: [0.5, 0.5, 0.5, 0.5],
          visible: true
        },
        type: 'bar'
      };
      var trace2 = {
        x: ['Creativity', 'Critical-thinking', 'Communication', 'Collaboration'],
        y: [min_max_avg_creativity1[2],min_max_avg_critical_thinking1[2], min_max_avg_communication1[2], min_max_avg_collaboration1[2]],
        name: 'Without Intervention',
        error_y: {
          type: 'data',
          array: [0.5, 1, 2, 0.5],
          visible: true
        },
        type: 'bar'
      };

      var trace3 = {
        x: ['Creativity', 'Critical-thinking', 'Communication', 'Collaboration'],
        y: [min_max_avg_creativity2[2],min_max_avg_critical_thinking2[2], min_max_avg_communication2[2], min_max_avg_collaboration2[2]],
        name: 'With Intervention',
        error_y: {
          type: 'data',
          array: [0.5, 1, 2, 1],
          visible: true
        },
        type: 'bar'
      };

      var layout = {
        title:'Skill Prediction',
        barmode: 'group'
      };
      var data0 = [trace1, trace2, trace3];
      Plotly.newPlot(OUTPUT1, data0, layout);



      var trace4 = {
        x: ['Curiousity', 'Courage', 'Resilience', 'Ethics', 'Leadership'],
        y: [ min_max_avg_curiousity0[2], min_max_avg_courage0[2], min_max_avg_resilience0[2],
            min_max_avg_ethics0[2], min_max_avg_leadership0[2]],
        name: 'Original',
        error_y: {
          type: 'data',
          array: [1, 0.5, 0.5, 0.5, 0.5],
          visible: true
        },
        type: 'bar'
      };
      var trace5 = {
        x: ['Curiousity', 'Courage', 'Resilience', 'Ethics', 'Leadership'],
        y: [ min_max_avg_curiousity1[2], min_max_avg_courage1[2], min_max_avg_resilience1[2],
        min_max_avg_ethics1[2], min_max_avg_leadership1[2]],
        name: 'Without Intervention',
        error_y: {
          type: 'data',
          array: [1, 2, 0.5, 1, 1],
          visible: true
        },
        type: 'bar'
      };

      var trace6 = {
        x: ['Curiousity', 'Courage', 'Resilience', 'Ethics', 'Leadership'],
        y: [ min_max_avg_curiousity2[2], min_max_avg_courage2[2], min_max_avg_resilience2[2],
        min_max_avg_ethics2[2], min_max_avg_leadership2[2]],
        name: 'With Intervention',
        error_y: {
          type: 'data',
          array: [1, 2, 1, 1, 1.5],
          visible: true
        },
        type: 'bar'
      };

      var layout = {
        title:'Character Prediction',
        barmode: 'group'
      };
      var data1 = [trace4, trace5, trace6];
      Plotly.newPlot(OUTPUT2, data1, layout);


      var trace7 = {
        x: ['Mindfulness', 'Metacognition', 'Growth-mindset'],
        y: [min_max_avg_mindfulness0[2], min_max_avg_metacognition0[2],min_max_avg_growth_mindset0[2]],
        name: 'Original',
        error_y: {
          type: 'data',
          array: [0.5, 1, 0.5],
          visible: true
        },
        type: 'bar'
      };
      var trace8 = {
        x: ['Mindfulness', 'Metacognition', 'Growth-mindset'],
        y: [min_max_avg_mindfulness1[2], min_max_avg_metacognition1[2], min_max_avg_growth_mindset1[2]],
        name: 'Without Intervention',
        error_y: {
          type: 'data',
          array: [ min_max_avg_mindfulness1[1] - min_max_avg_mindfulness1[0],
                   min_max_avg_metacognition1[1] - min_max_avg_metacognition1[0],
                   min_max_avg_growth_mindset1[1] - min_max_avg_growth_mindset1[0]],
          visible: true
        },
        type: 'bar'
      };

      var trace9 = {
        x: ['Mindfulness', 'Metacognition', 'Growth-mindset'],
        y: [min_max_avg_mindfulness2[2], min_max_avg_metacognition2[2], min_max_avg_growth_mindset2[2]],
        name: 'With Intervention',
        error_y: {
          type: 'data',
          array: [ min_max_avg_mindfulness2[1] - min_max_avg_mindfulness2[0],
                   min_max_avg_metacognition2[1] - min_max_avg_metacognition2[0],
                   min_max_avg_growth_mindset2[1] - min_max_avg_growth_mindset2[0]],
          visible: true
        },
        type: 'bar'
      };

      var layout = {
        title:'Meta-Learning Prediction',
        barmode: 'group'
      };
      var data2 = [trace7, trace8, trace9];
      Plotly.newPlot(OUTPUT3, data2, layout);
    
}

