<script>
    import Icon from '@iconify/svelte'
    import TyperResult from './TyperResult.svelte';
    import ToolTip from './ToolTip.svelte';
    import { onMount } from 'svelte';
    import { timeToString,calculateWpm,createLetters } from '../../utils';

    export let data;
    // textarea ref
    let textareaRef;
    
    const textSizes =['sm','md','lg','xl','2xl']
    let textSize = textSizes[3];
    
    let givenText ="Loading...";
    let givenLetters = createLetters(givenText);
    let paraData = {}
    let typedText = "";
    let wpm = 0;
    let wpms = [];
    let maxWpm = 0;
    let accuracy = "00.00";
    let time = 120;
    let timeElapsed = 0;
    let inputDisabled = true;
    let isCompleted = false;
    let isPaused = false;
    let isStarted = false;
    let showParaInfo = false;
    
    
    // handle the input event
    function handleOnchange (event) {
        const { value } = event.target;
        typedText = value;
        checkLetter(typedText);
        // console.log(typedText);
    }
    // check the correctness of the letters 
    function checkLetter (typedText) {
        const letters = typedText.split("");
        let idx = 0;
        
        // for checking the correctness of the letters
        letters.forEach((letter,index) => {
            idx = index;
            if (letter == givenLetters[index].letter) {
                // console.log(true,letter,givenLetters[index].letter);
                givenLetters[index].isCorrect = true;
            } else {
                givenLetters[index].isCorrect = false;
                // console.log(false,letter,givenLetters[index].letter);
            }
        });

        // for reseting the isCorrect property of the givenLetters
        for (let i = idx+1; i < givenLetters.length; i++) {
            givenLetters[i].isCorrect = undefined;
        }
        // handle the case when the user deletes the text
        if(letters.length === 0){
            givenLetters[0].isCorrect = undefined;
        }
        
        // check for completion of the text
        if (givenLetters.length === letters.length || time === 0) {
            isCompleted = true;
            inputDisabled = true;
            console.log("completed");
        }
        
        // calculate accuracy
        let correctLetters = 0;
        givenLetters.forEach(letter => {
            if (letter.isCorrect === true) {
                correctLetters++;
            }
        });
        const calc = ((correctLetters/typedText.length)*100).toFixed(2);
        accuracy = calc === "NaN" ? "00.00" : calc;
        // calculate wpm
    }

    // handle on click event of the resume button
    function handleBtnClick () {
        if (!isStarted && !isPaused) {
            isStarted = true;
            inputDisabled = false;
            focusTextarea();
            return;
        }
        isPaused = !isPaused;
        inputDisabled = !inputDisabled;
        focusTextarea();
    }
    
    // time interval for the timer
    const interval = setInterval(
        () => {
            if (time === 0 || isCompleted) {
                clearInterval(interval);
                inputDisabled = true;
                isCompleted = true;
                return;
            }
            if (!isPaused && isStarted) {
                time--;
                timeElapsed++;
                wpm = calculateWpm(typedText,timeElapsed);
                wpms.push(wpm);
                if (wpm > maxWpm) {
                    maxWpm = wpm;
                }
            }
        },1000)
        
    // function to reset the editor
    function resetEditor () {
        typedText = "";
        wpm = 0;
        wpms = [];
        maxWpm = 0;
        accuracy = "00.00";
        timeElapsed = 0;
        inputDisabled = true;
        isCompleted = false;
        isPaused = false;
        isStarted = false;
        
        const para = data.paras[Math.floor(Math.random()*data.paras.length)];
        paraData = para;
        time = para.time;
        givenText = para.text;
        givenLetters = createLetters(givenText);
    }
    
    // handle para info btn click
    function handleParaInfoBtnClick () {
        showParaInfo = !showParaInfo;
    }
    
    // on reset btn click
    function handleResetBtnClick () {
        resetEditor();
    }
    
    // change text size
    function changeTextSize (event) {
        const { value } = event.target;
        textSize = value;
    }
    
    // focus the textarea
    function focusTextarea () {
        setTimeout(() => {
            textareaRef.focus();
        },100);
    }
    
    onMount(() => {
        resetEditor();
        console.log(textareaRef)
    });

</script>

<div class="p-4 bg-[#EEF5FF] rounded-md shadow-md w-[90vw] sm:w-[80vw] md:w-[60vw]">
    <div class="mb-2">
        <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold text-center mb-2">Given Text</h3>
            <div class="flex items-center gap-3">
                <div class="">
                    <label for="" class="text-sm font-medium">Text Size : </label>
                    <select on:input={changeTextSize} name="" id="" class="rounded text-sm outline outline-2 outline-[#83A2FF] bg-[#ccdff8]">
                        {#each textSizes as size}
                            {#if size === 'xl'}
                                <option value={size} selected on:change={() => textSize = size} >{size}</option>
                            {:else}
                                <option value={size} on:change={() => textSize = size} >{size}</option>
                            {/if}
                        {/each}
                    </select>
                </div>
                <ToolTip label="Reset Paragraph" >
                    <button on:click={handleResetBtnClick} class="hover:bg-slate-300 p-1 rounded hover:shadow transition-shadow ">
                        <Icon icon="iconamoon:restart" class="w-6 h-6  text-slate-600 " />
                    </button>
                </ToolTip>
            </div>
        </div>
        <p class={`text-${textSize}`}>
            {#each givenLetters as letter}
                {#if letter.isCorrect === true}
                    <span class="letter text-green-500 ">{letter.letter}</span>
                {:else if letter.isCorrect === false}
                    <span class="letter text-red-500">{letter.letter}</span>
                {:else}
                    <span class="lette">{letter.letter}</span>
                {/if}
            {/each}
        </p>
        <button on:click={handleParaInfoBtnClick} class="bg-[#83A2FF] text-white px-1 py-[2px] text-sm rounded-md shadow-md flex items-center justify-center gap-1 mt-1">
            <Icon icon="material-symbols:info-outline" class="w-4 h-4" />
            <span class="">
                Para Info
            </span>
        </button>
        {#if showParaInfo}
            <div class="flex flex-col gap-1 mt-2">
                <h4 class="font-medium">Title: {paraData.title}</h4>
                <h4 class="font-medium">Author: {paraData.author}</h4>
                <h4 class="font-medium">Source: <a href={paraData.resource} target="_blank" class="hover:underline text-blue-800">{paraData.resource}</a></h4>
            </div>
            <p class="text-sm mt-2">{paraData.description}</p>
        {/if}
    </div>
    <div class="">
        <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold mb-3">Write Here</h3>
            <h3 class="text-2xl font-medium mb-3">Time: {timeToString(time)}</h3>
        </div>
        <textarea disabled={inputDisabled} on:input={handleOnchange} value={typedText} class={`w-full rounded border-[#83A2FF]  outline outline-[#83A2FF] p-1 text-${textSize} `} name="" id="" cols="40" rows="6" bind:this={textareaRef} ></textarea>

        <div class="w-full flex justify-between items-center">
            <h4 class="font-medium">Accuracy : {accuracy} %</h4>
            <h4 class="font-medium">WPM : {wpm} </h4>
        </div>

        {#if isCompleted}
            <h1 class="text-3xl text-center">Completed!!</h1>
            <TyperResult data={{wpm,wpms,accuracy,maxWpm,timeElapsed,time}} />
            <button on:click={handleResetBtnClick} class="bg-[#83A2FF] text-white px-4 py-1 text-xl rounded-md shadow-md flex items-center justify-center gap-1 mx-auto" >
                <Icon icon="solar:restart-bold" class="w-6 h-6" />
                <span>Restart</span>
            </button>
        {:else}
            <div class="flex items-center justify-center mt-4 mb-2">
                <button on:click={handleBtnClick} class="bg-[#83A2FF] text-white px-4 py-1 text-xl rounded-md shadow-md flex items-center justify-center gap-1" >
                    {#if !isStarted}
                        <Icon icon="ph:play-fill" class="w-6 h-6" />
                        <span>Start</span>
                    {:else if isPaused}
                        <Icon icon="ph:play-fill" class="w-6 h-6" />
                        <span>Resume</span>
                    {:else}
                        <Icon icon="ic:round-pause" class="w-7 h-7" />
                        <span>Pause</span>                        
                    {/if}
                </button>
            </div>
        {/if}
    </div>
</div>