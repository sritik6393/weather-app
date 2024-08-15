function ResultOfSubmit(event)
{
    event.preventDefault();
  console.log("Submitted successfully");
}
function EventObject()
{
    return <>
<form onSubmit={ResultOfSubmit} >
    <input placeholder="Enter name"></input>
    <button >Submit</button>
</form>
    </>
}
export default EventObject