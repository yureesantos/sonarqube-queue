"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arguments_order_1 = require("./arguments-order");
const arguments_usage_1 = require("./arguments-usage");
const arrow_function_convention_1 = require("./arrow-function-convention");
const bitwise_operators_1 = require("./bitwise-operators");
const bool_param_default_1 = require("./bool-param-default");
const call_argument_line_1 = require("./call-argument-line");
const class_name_1 = require("./class-name");
const code_eval_1 = require("./code-eval");
const comma_or_logical_or_case_1 = require("./comma-or-logical-or-case");
const comment_regex_1 = require("./comment-regex");
const conditional_indentation_1 = require("./conditional-indentation");
const constructor_for_side_effects_1 = require("./constructor-for-side-effects");
const cookies_1 = require("./cookies");
const cors_1 = require("./cors");
const cyclomatic_complexity_1 = require("./cyclomatic-complexity");
const deprecation_1 = require("./deprecation");
const destructuring_assignment_syntax_1 = require("./destructuring-assignment-syntax");
const elseif_without_else_1 = require("./elseif-without-else");
const encryption_1 = require("./encryption");
const expression_complexity_1 = require("./expression-complexity");
const file_header_1 = require("./file-header");
const file_name_differ_from_class_1 = require("./file-name-differ-from-class");
const fixme_tag_1 = require("./fixme-tag");
const function_name_1 = require("./function-name");
const function_inside_loop_1 = require("./function-inside-loop");
const future_reserved_words_1 = require("./future-reserved-words");
const hashing_1 = require("./hashing");
const inconsistent_function_call_1 = require("./inconsistent-function-call");
const index_of_compare_to_positive_number_1 = require("./index-of-compare-to-positive-number");
const label_position_1 = require("./label-position");
const max_union_size_1 = require("./max-union-size");
const misplaced_loop_counter_1 = require("./misplaced-loop-counter");
const nested_control_flow_1 = require("./nested-control-flow");
const no_accessor_field_mismatch_1 = require("./no-accessor-field-mismatch");
const no_alphabetical_sort_1 = require("./no-alphabetical-sort");
const no_array_delete_1 = require("./no-array-delete");
const no_case_label_in_switch_1 = require("./no-case-label-in-switch");
const no_commented_code_1 = require("./no-commented-code");
const no_dead_store_1 = require("./no-dead-store");
const no_duplicate_in_composite_1 = require("./no-duplicate-in-composite");
const no_empty_collection_1 = require("./no-empty-collection");
const no_equals_in_for_termination_1 = require("./no-equals-in-for-termination");
const no_function_declaration_in_block_1 = require("./no-function-declaration-in-block");
const no_globals_shadowing_1 = require("./no-globals-shadowing");
const no_gratuitous_expressions_1 = require("./no-gratuitous-expressions");
const no_hardcoded_credentials_1 = require("./no-hardcoded-credentials");
const no_ignored_return_1 = require("./no-ignored-return");
const no_implicit_dependencies_1 = require("./no-implicit-dependencies");
const no_in_misuse_1 = require("./no-in-misuse");
const no_inconsistent_returns_1 = require("./no-inconsistent-returns");
const no_invalid_await_1 = require("./no-invalid-await");
const no_invariant_returns_1 = require("./no-invariant-returns");
const no_labels_1 = require("./no-labels");
const no_misleading_array_reverse_1 = require("./no-misleading-array-reverse");
const no_nested_assignment_1 = require("./no-nested-assignment");
const no_nested_incdec_1 = require("./no-nested-incdec");
const no_nested_switch_1 = require("./no-nested-switch");
const no_nested_template_literals_1 = require("./no-nested-template-literals");
const no_parameter_reassignment_1 = require("./no-parameter-reassignment");
const no_primitive_wrappers_1 = require("./no-primitive-wrappers");
const no_redundant_optional_1 = require("./no-redundant-optional");
const no_redundant_parentheses_1 = require("./no-redundant-parentheses");
const no_return_type_any_1 = require("./no-return-type-any");
const no_tab_1 = require("./no-tab");
const no_try_promise_1 = require("./no-try-promise");
const no_undefined_argument_1 = require("./no-undefined-argument");
const no_unenclosed_multiline_block_1 = require("./no-unenclosed-multiline-block");
const no_unthrown_error_1 = require("./no-unthrown-error");
const no_unused_function_argument_1 = require("./no-unused-function-argument");
const no_useless_increment_1 = require("./no-useless-increment");
const no_useless_intersection_1 = require("./no-useless-intersection");
const no_variable_usage_before_declaration_1 = require("./no-variable-usage-before-declaration");
const no_wildcard_import_1 = require("./no-wildcard-import");
const non_existent_operator_1 = require("./non-existent-operator");
const os_command_1 = require("./os-command");
const prefer_default_last_1 = require("./prefer-default-last");
const prefer_promise_shorthand_1 = require("./prefer-promise-shorthand");
const prefer_type_guard_1 = require("./prefer-type-guard");
const process_argv_1 = require("./process-argv");
const pseudo_random_1 = require("./pseudo-random");
const regular_expr_1 = require("./regular-expr");
const shorthand_property_grouping_1 = require("./shorthand-property-grouping");
const sonar_no_fallthrough_1 = require("./sonar-no-fallthrough");
const sonar_block_scoped_var_1 = require("./sonar-block-scoped-var");
const sonar_no_unused_vars_1 = require("./sonar-no-unused-vars");
const sockets_1 = require("./sockets");
const sonar_max_lines_per_function_1 = require("./sonar-max-lines-per-function");
const sql_queries_1 = require("./sql-queries");
const standard_input_1 = require("./standard-input");
const todo_tag_1 = require("./todo-tag");
const unused_import_1 = require("./unused-import");
const updated_loop_counter_1 = require("./updated-loop-counter");
const use_type_alias_1 = require("./use-type-alias");
const variable_name_1 = require("./variable-name");
const xpath_1 = require("./xpath");
const ruleModules = {};
exports.rules = ruleModules;
ruleModules['arguments-order'] = arguments_order_1.rule;
ruleModules['arguments-usage'] = arguments_usage_1.rule;
ruleModules['arrow-function-convention'] = arrow_function_convention_1.rule;
ruleModules['bitwise-operators'] = bitwise_operators_1.rule;
ruleModules['bool-param-default'] = bool_param_default_1.rule;
ruleModules['call-argument-line'] = call_argument_line_1.rule;
ruleModules['class-name'] = class_name_1.rule;
ruleModules['code-eval'] = code_eval_1.rule;
ruleModules['comma-or-logical-or-case'] = comma_or_logical_or_case_1.rule;
ruleModules['comment-regex'] = comment_regex_1.rule;
ruleModules['conditional-indentation'] = conditional_indentation_1.rule;
ruleModules['constructor-for-side-effects'] = constructor_for_side_effects_1.rule;
ruleModules['cookies'] = cookies_1.rule;
ruleModules['cors'] = cors_1.rule;
ruleModules['cyclomatic-complexity'] = cyclomatic_complexity_1.rule;
ruleModules['deprecation'] = deprecation_1.rule;
ruleModules['destructuring-assignment-syntax'] = destructuring_assignment_syntax_1.rule;
ruleModules['elseif-without-else'] = elseif_without_else_1.rule;
ruleModules['encryption'] = encryption_1.rule;
ruleModules['expression-complexity'] = expression_complexity_1.rule;
ruleModules['file-header'] = file_header_1.rule;
ruleModules['file-name-differ-from-class'] = file_name_differ_from_class_1.rule;
ruleModules['fixme-tag'] = fixme_tag_1.rule;
ruleModules['function-name'] = function_name_1.rule;
ruleModules['function-inside-loop'] = function_inside_loop_1.rule;
ruleModules['future-reserved-words'] = future_reserved_words_1.rule;
ruleModules['hashing'] = hashing_1.rule;
ruleModules['inconsistent-function-call'] = inconsistent_function_call_1.rule;
ruleModules['index-of-compare-to-positive-number'] = index_of_compare_to_positive_number_1.rule;
ruleModules['label-position'] = label_position_1.rule;
ruleModules['max-union-size'] = max_union_size_1.rule;
ruleModules['nested-control-flow'] = nested_control_flow_1.rule;
ruleModules['no-accessor-field-mismatch'] = no_accessor_field_mismatch_1.rule;
ruleModules['no-alphabetical-sort'] = no_alphabetical_sort_1.rule;
ruleModules['no-array-delete'] = no_array_delete_1.rule;
ruleModules['no-case-label-in-switch'] = no_case_label_in_switch_1.rule;
ruleModules['no-commented-code'] = no_commented_code_1.rule;
ruleModules['no-dead-store'] = no_dead_store_1.rule;
ruleModules['misplaced-loop-counter'] = misplaced_loop_counter_1.rule;
ruleModules['no-duplicate-in-composite'] = no_duplicate_in_composite_1.rule;
ruleModules['no-empty-collection'] = no_empty_collection_1.rule;
ruleModules['no-equals-in-for-termination'] = no_equals_in_for_termination_1.rule;
ruleModules['no-function-declaration-in-block'] = no_function_declaration_in_block_1.rule;
ruleModules['no-globals-shadowing'] = no_globals_shadowing_1.rule;
ruleModules['no-gratuitous-expressions'] = no_gratuitous_expressions_1.rule;
ruleModules['no-hardcoded-credentials'] = no_hardcoded_credentials_1.rule;
ruleModules['no-ignored-return'] = no_ignored_return_1.rule;
ruleModules['no-implicit-dependencies'] = no_implicit_dependencies_1.rule;
ruleModules['no-in-misuse'] = no_in_misuse_1.rule;
ruleModules['no-inconsistent-returns'] = no_inconsistent_returns_1.rule;
ruleModules['no-invalid-await'] = no_invalid_await_1.rule;
ruleModules['no-invariant-returns'] = no_invariant_returns_1.rule;
ruleModules['no-labels'] = no_labels_1.rule;
ruleModules['no-misleading-array-reverse'] = no_misleading_array_reverse_1.rule;
ruleModules['no-nested-assignment'] = no_nested_assignment_1.rule;
ruleModules['no-nested-incdec'] = no_nested_incdec_1.rule;
ruleModules['no-nested-switch'] = no_nested_switch_1.rule;
ruleModules['no-nested-template-literals'] = no_nested_template_literals_1.rule;
ruleModules['no-parameter-reassignment'] = no_parameter_reassignment_1.rule;
ruleModules['no-primitive-wrappers'] = no_primitive_wrappers_1.rule;
ruleModules['no-redundant-optional'] = no_redundant_optional_1.rule;
ruleModules['no-redundant-parentheses'] = no_redundant_parentheses_1.rule;
ruleModules['no-return-type-any'] = no_return_type_any_1.rule;
ruleModules['no-tab'] = no_tab_1.rule;
ruleModules['no-try-promise'] = no_try_promise_1.rule;
ruleModules['no-undefined-argument'] = no_undefined_argument_1.rule;
ruleModules['no-unenclosed-multiline-block'] = no_unenclosed_multiline_block_1.rule;
ruleModules['no-unthrown-error'] = no_unthrown_error_1.rule;
ruleModules['no-unused-function-argument'] = no_unused_function_argument_1.rule;
ruleModules['no-useless-increment'] = no_useless_increment_1.rule;
ruleModules['no-useless-intersection'] = no_useless_intersection_1.rule;
ruleModules['no-variable-usage-before-declaration'] = no_variable_usage_before_declaration_1.rule;
ruleModules['no-wildcard-import'] = no_wildcard_import_1.rule;
ruleModules['non-existent-operator'] = non_existent_operator_1.rule;
ruleModules['os-command'] = os_command_1.rule;
ruleModules['prefer-default-last'] = prefer_default_last_1.rule;
ruleModules['prefer-promise-shorthand'] = prefer_promise_shorthand_1.rule;
ruleModules['prefer-type-guard'] = prefer_type_guard_1.rule;
ruleModules['process-argv'] = process_argv_1.rule;
ruleModules['pseudo-random'] = pseudo_random_1.rule;
ruleModules['regular-expr'] = regular_expr_1.rule;
ruleModules['shorthand-property-grouping'] = shorthand_property_grouping_1.rule;
ruleModules['sonar-no-fallthrough'] = sonar_no_fallthrough_1.rule;
ruleModules['sonar-block-scoped-var'] = sonar_block_scoped_var_1.rule;
ruleModules['sonar-no-unused-vars'] = sonar_no_unused_vars_1.rule;
ruleModules['sockets'] = sockets_1.rule;
ruleModules['sonar-max-lines-per-function'] = sonar_max_lines_per_function_1.rule;
ruleModules['sql-queries'] = sql_queries_1.rule;
ruleModules['standard-input'] = standard_input_1.rule;
ruleModules['todo-tag'] = todo_tag_1.rule;
ruleModules['unused-import'] = unused_import_1.rule;
ruleModules['updated-loop-counter'] = updated_loop_counter_1.rule;
ruleModules['use-type-alias'] = use_type_alias_1.rule;
ruleModules['variable-name'] = variable_name_1.rule;
ruleModules['xpath'] = xpath_1.rule;
//# sourceMappingURL=main.js.map