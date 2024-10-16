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
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>

      {/* variables */}
      <VariablesAndConstants />

      {/* types */}
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
      <FindIndex />
      <FilterFunction />

      {/* JSON */}
      <JsonStringify />
      <House />
      <TodoList />

      {/* spreading */}
      <Spreading />

      {/* destructing */}
      <Destructing />
      <FunctionDestructing />

      {/* exporting & importing */}
      <DestructingImports />

      {/* dynamic styling */}
      <Classes />
      <Styles />

      {/* parameterized component */}
      <Add a={3} b={4} />

      {/* child component */}
      <Square>4</Square>
      <Highlight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.</Highlight>

      {/* route parameter */}
      <PathParameters />
    </div>
  );
}
