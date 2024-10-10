import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import TernaryOperator from "./TernaryOperator";
import IfElse from "./IfElse";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>

      {/* variables & types */}
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />

      {/* conditions */}
      <TernaryOperator />
      <IfElse />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />

      {/* functions */}
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />

      {/* strings */}
      <TemplateLiterals />

      {/* arrays */}
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FilterFunction />
    </div>
  );
}
