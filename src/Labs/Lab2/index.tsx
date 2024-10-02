import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      {/* style attribute */}
      <h2>Styling with the STYLE attribute</h2>
      <p style={{
        backgroundColor: "blue",
        color: "white"
      }}>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute.
      </p>

      {/* external file */}
      {/* element selector */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente consequatur quisquam facere quo, esse nihil autem perferendis, laborum enim rem reiciendis tempore quibusdam! Dolorem autem consectetur incidunt cupiditate ullam!
      </p>

      {/* id selector */}
      <div id="wd-css-id-selectors">
        <h2>ID selectors</h2>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel
        </p>
      </div>

      {/* class selector */}
      <div id="wd-css-class-selectors">
        <h2>Class selectors</h2>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      {/* descendant & child selector */}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h2>Document structure selectors</h2>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>

      {/* color & background */}
      <ForegroundColors />
      <BackgroundColors />

      {/* box model */}
      <Borders />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />

      {/* positioning & stacking */}
      <Positions />
      <Zindex />

      {/* layout */}
      <Float />
      <GridLayout />
      <Flex />

      {/* icon */}
      <ReactIconsSampler />

      {/* bootstrap */}
      <BootstrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForms />
      <BootstrapNavigation />

    </div>
  );
}
