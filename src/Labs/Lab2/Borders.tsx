export default function Borders() {
  return (
    <div id="wd-css-borders">

      <h2 style={{
        backgroundColor: "yellow"
      }}>
        Block vs. inline elements
      </h2>
      <p style={{
        backgroundColor: "blue",
        color: "white"
      }}>
        Headings and paragraphs are
        block elements. Width is parent's
        width</p>
      Normal text renders inline
      <br /><br />
      <span style={{
        backgroundColor: "red", color: "white"
      }}>Span elements</span>
      <span style={{
        backgroundColor: "red", color: "white"
      }}>render inline</span>&nbsp;
      with the rest of the content
      <span style={{
        backgroundColor: "red",
        color: "white",
        borderStyle: "solid",
        borderWidth: "10px",
        borderColor: "green"
      }}>
        Span elements</span>
      <span style={{
        backgroundColor: "red",
        color: "white",
        border: "solid 10px green"
      }}>
        render inline</span>

      <h2>Borders</h2>
      <p className="border-fat border-red border-solid">Solid fat red border</p>
      <p className="border-thin border-blue border-dashed">Dashed thin blue border </p>
    </div>
  );
}
