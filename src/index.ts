export {EditorStateConfig, EditorState} from "./state"
export {StateCommand, Syntax, languageData, IndentContext} from "./extension"
export {Facet, StateField, Extension, precedence, Precedence, tagExtension} from "./facet"
export {EditorSelection, SelectionRange} from "./selection"
export {Transaction, TransactionSpec, StrictTransactionSpec,
        Annotation, AnnotationType, StateEffect, StateEffectType} from "./transaction"
export {Text} from "@codemirror/next/text"
export {combineConfig} from "./config"
export {ChangeSpec, ChangeSet, ChangeDesc, MapMode} from "./change"
export {CharCategory} from "./charcategory"
