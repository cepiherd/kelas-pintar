<script>
    export let url
    export let title = ""
    export let classColor = ""
    export let classTextColor = ""
</script>

<button
href= {url}
class={`${classColor} ${classTextColor} px-8 p-3 rounded-full border-0 font-bold mb-5`}
>
{title}
</button>