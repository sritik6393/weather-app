function printHello(event)
{
    console.log("hello");
    console.log(event);
}
function Touched()
{
    console.log("Touched");
}
function Double()
{
    console.log("hello");
}
function OnclickEvent()
{
    return <div>
        <button onClick={printHello}>Click me!</button>
        <p onMouseOver={Touched}>lorem ji how are 'you' are you going to join armed forces</p>
        <button onDoubleClick={Double}>Click me 2 times!</button>
    </div>
}
export default OnclickEvent