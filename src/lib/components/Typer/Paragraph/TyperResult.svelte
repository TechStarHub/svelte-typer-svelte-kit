<script>
    // props from the parent component
    export let data = {
        wpm: 0,
        wpms: [],
        accuracy: "00.00",
        maxWpm: 0,
        timeElapsed: 0,
        time: 0,
    }
    // destructuring the props
    const { wpm, wpms, accuracy, maxWpm, timeElapsed, time } = data;

    const averageWpm = () => {
        let sum = 0;
        wpms.forEach(wpm => {
            sum += wpm;
        });
        return Math.floor(sum/wpms.length);
    }
    console.log(data)

</script>


<div class="flex flex-col justify-center items-center my-3">
    <h1 class="text-center font-bold text-3xl w-[75%]">Max WPM : {maxWpm}</h1>
    <div class="flex justify-center gap-2 items-center">
        <div class="flex flex-col gap-1 text-lg">
            <p class="">Accuracy:</p>
            <p class="">Overall WPM: </p>
            <p class="">Average WPM: </p>
            <p class="">Time Elapsed: </p>
        </div>
        <div class="flex flex-col gap-1 text-lg">
            <p class=""> {accuracy}%</p>
            <p class=""> {wpm}</p>
            <p class=""> {averageWpm()}</p>
            <p class="">{timeElapsed}s</p>
        </div>
    </div>
</div>